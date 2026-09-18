// Removes duplicate router models (same brand + model name), keeping the richer record.
// Usage: node scripts/dedupe-models.mjs [--apply]
import fs from 'node:fs';
import path from 'node:path';
import { transformSync } from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const FILE = path.join(ROOT, 'src/lib/router-models-data.ts');
const APPLY = process.argv.includes('--apply');

const source = fs.readFileSync(FILE, 'utf8');
const js = transformSync(source, { loader: 'ts', format: 'cjs' }).code
  .replace(/^import .*$/gm, '')
  .replace(/^module\.exports\s*=.*$/gm, '')
  .replace(/^\s*0 && \(module\.exports.*$/gm, '')
  .replace(/\bexport const /g, 'const ');
const { ROUTER_MODELS } = new Function('exports', 'module', 'require', `${js}\nreturn { ROUTER_MODELS };`)({}, { exports: {} }, () => ({}));

const photos = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/model-images.json'), 'utf8'));
const score = (m) => Object.values(m).filter(v => v !== undefined && v !== null && String(v).trim() !== '').length
  + (Array.isArray(m.features) ? m.features.length : 0)
  + (photos[m.slug] ? 10 : 0); // keep the one that already has a product photo

const groups = new Map();
for (const m of ROUTER_MODELS) {
  const key = `${(m.brand || '').toLowerCase()}|${(m.model || '').toLowerCase()}`;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(m);
}

const drop = [];
for (const [key, list] of groups) {
  if (list.length < 2) continue;
  const sorted = [...list].sort((a, b) => score(b) - score(a));
  const keep = sorted[0];
  for (const m of sorted.slice(1)) drop.push({ slug: m.slug, key, keptSlug: keep.slug, keptScore: score(keep), dropScore: score(m) });
}

console.log(`${drop.length} duplicate model(s) to remove:`);
for (const d of drop) console.log(`  drop ${d.slug} (${d.dropScore} fields) — keeping ${d.keptSlug} (${d.keptScore})`);

if (!APPLY) {
  console.log('\nDry run. Re-run with --apply to rewrite the file.');
  process.exit(0);
}

// Remove each object block by matching braces around its "slug" line.
let text = source;
let removed = 0;
for (const { slug } of drop) {
  const marker = `"slug": "${slug}"`;
  const at = text.indexOf(marker);
  if (at === -1) { console.warn(`  ! could not find ${slug}`); continue; }
  let start = text.lastIndexOf('{', at);
  let depth = 0, end = -1;
  for (let i = start; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end === -1) { console.warn(`  ! unbalanced braces near ${slug}`); continue; }
  let from = start, to = end;
  while (from > 0 && /[ \t]/.test(text[from - 1])) from--;          // leading indent
  if (text[to] === ',') to++;                                       // trailing comma
  while (to < text.length && /[ \t\r]/.test(text[to])) to++;
  if (text[to] === '\n') to++;
  if (from > 0 && text[from - 1] === '\n' && text[to - 1] !== '\n') from--;
  text = text.slice(0, from) + text.slice(to);
  removed++;
}

fs.writeFileSync(FILE, text);
console.log(`\nRemoved ${removed} duplicate blocks.`);
