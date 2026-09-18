// Authenticity check: looks up every router model in the Open Icecat product catalogue
// (manufacturer-supplied data) and records whether the brand + model actually exists.
// Read-only. Writes scripts/.model-verification.json and prints a summary.
// Usage: node scripts/verify-models.mjs [--limit N] [--brand slug]
import fs from 'node:fs';
import path from 'node:path';
import { transformSync } from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'scripts/.model-verification.json');
const UA = 'routerapp-data-audit/1.0';
const args = process.argv.slice(2);
const LIMIT = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const BRAND = args.includes('--brand') ? args[args.indexOf('--brand') + 1] : null;

function loadModels() {
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/router-models-data.ts'), 'utf8');
  const js = transformSync(src, { loader: 'ts', format: 'cjs' }).code
    .replace(/^import .*$/gm, '')
    .replace(/^module\.exports\s*=.*$/gm, '')
    .replace(/^\s*0 && \(module\.exports.*$/gm, '')
    .replace(/\bexport const /g, 'const ');
  return new Function('exports', 'module', 'require', `${js}\nreturn ROUTER_MODELS;`)({}, { exports: {} }, () => ({}));
}

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Brand names as Icecat knows them
const BRAND_ALIASES = {
  'AVM (FRITZ!Box)': 'AVM', 'Amazon (eero)': 'eero', 'Amazon Eero': 'eero', 'Google (Nest WiFi)': 'Google',
  'GL.iNet': 'GL.iNet', 'ARRIS SURFboard': 'ARRIS', 'Fortinet (FortiGate)': 'Fortinet', 'DZS (Zhone)': 'DZS',
  'Ruijie (Reyee)': 'Ruijie', 'Netgate (pfSense)': 'Netgate', 'NEC (Aterm)': 'NEC', 'Aruba (HPE)': 'HPE',
  'Ruckus (CommScope)': 'CommScope', 'Xfinity (Comcast)': 'Comcast', 'Spectrum (Charter)': 'Charter',
};

// Part-code candidates for a model name, longest first
function codes(model) {
  const name = String(model.model || '');
  const out = [name.replace(/\(.*?\)/g, '').trim()];
  for (const m of name.match(/\(([^)]+)\)/g) || []) out.push(m.slice(1, -1).trim());
  const brand = String(model.brand || '').replace(/\(.*?\)/g, '').trim();
  if (brand) out.push(out[0].replace(new RegExp(`^${brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i'), '').trim());
  for (const word of out[0].split(/\s+/)) {
    if (/\d/.test(word) && /[a-z]/i.test(word) && word.length >= 4) out.push(word);
  }
  return [...new Set(out.filter(c => c && c.length >= 3))].slice(0, 5);
}

async function icecat(brand, code) {
  const url = `https://live.icecat.biz/api/?UserName=openIcecat-live&Language=en&Brand=${encodeURIComponent(brand)}&ProductCode=${encodeURIComponent(code)}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) return null;
  const body = await res.json();
  return body?.data?.GeneralInfo?.Title ? body.data : null;
}

const models = loadModels().filter(m => !BRAND || m.brandSlug === BRAND).slice(0, LIMIT);
const previous = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const results = { ...previous };

console.log(`Verifying ${models.length} models against Open Icecat…`);
let done = 0, verified = 0, unknown = 0, errors = 0;

const queue = models.filter(m => !results[m.slug]);
async function worker() {
  for (let m; (m = queue.shift()); ) {
    const brand = BRAND_ALIASES[m.brand] || String(m.brand).replace(/\(.*?\)/g, '').trim();
    let hit = null;
    try {
      for (const code of codes(m)) {
        const data = await icecat(brand, code);
        if (!data) continue;
        const title = data.GeneralInfo.Title || '';
        // The catalogue must mention the model tokens, not just the brand
        const tokens = codes(m)[0].split(/\s+/).filter(w => /\d/.test(w) || w.length > 3).map(norm);
        const ok = tokens.length ? tokens.every(t => norm(title).includes(t)) : norm(title).includes(norm(code));
        if (ok) { hit = { code, title, icecatId: data.GeneralInfo.IcecatId }; break; }
      }
      results[m.slug] = hit
        ? { status: 'verified', brand: m.brand, model: m.model, ...hit }
        : { status: 'not-found', brand: m.brand, model: m.model };
      hit ? verified++ : unknown++;
    } catch (err) {
      results[m.slug] = { status: 'error', brand: m.brand, model: m.model, error: String(err.message).slice(0, 80) };
      errors++;
    }
    if (++done % 25 === 0) {
      fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
      console.log(`  ${done}/${models.length} — ${verified} verified, ${unknown} not found, ${errors} errors`);
    }
    await sleep(250);
  }
}

await Promise.all([worker(), worker(), worker()]);
fs.writeFileSync(OUT, JSON.stringify(results, null, 2));

const all = Object.values(results);
const byBrand = {};
for (const r of all) {
  const b = r.brand || '?';
  byBrand[b] ??= { verified: 0, notFound: 0 };
  if (r.status === 'verified') byBrand[b].verified++;
  else if (r.status === 'not-found') byBrand[b].notFound++;
}
const worst = Object.entries(byBrand)
  .filter(([, v]) => v.verified + v.notFound >= 3 && v.verified === 0)
  .map(([b, v]) => `${b} (0/${v.notFound})`);

console.log(`\nDone. ${all.filter(r => r.status === 'verified').length} verified, ${all.filter(r => r.status === 'not-found').length} not found, ${all.filter(r => r.status === 'error').length} errors.`);
console.log(`Brands where nothing could be verified (${worst.length}):`);
console.log(worst.slice(0, 40).join(', '));
console.log(`\nFull results: ${path.relative(ROOT, OUT)}`);
