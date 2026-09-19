/**
 * One-off migration from hardcoded light/dark colour pairs to semantic tokens.
 *
 * It matches pairs rather than lone hexes on purpose: a single hex is ambiguous
 * (#202124 is body text in light mode and the page background in dark), while
 * the pair says which role the colour is playing.
 *
 * Kept in the repo after the fact so the mapping it applied is auditable.
 */
import fs from 'fs';
import path from 'path';

// Ordered: longest and most specific first, so a general rule cannot
// swallow a more specific one.
const RULES = [
  [/text-\[#202124\] dark:text-white/g, 'text-ink'],
  [/text-\[#202124\] dark:text-\[#e8eaed\]/g, 'text-ink'],
  [/text-\[#5f6368\] dark:text-\[#9aa0a6\]/g, 'text-ink-muted'],
  [/text-\[#5f6368\] dark:text-\[#bdc1c6\]/g, 'text-ink-muted'],
  [/text-\[#3c4043\] dark:text-\[#bdc1c6\]/g, 'text-ink-muted'],
  [/text-\[#1a73e8\] dark:text-\[#8ab4f8\]/g, 'text-accent'],
  [/bg-white dark:bg-\[#292a2d\]/g, 'bg-surface'],
  [/bg-\[#f8fafd\] dark:bg-\[#202124\]/g, 'bg-surface-sunken'],
  [/bg-\[#f1f3f4\] dark:bg-\[#303134\]/g, 'bg-surface-muted'],
  [/bg-\[#f8fafd\] dark:bg-\[#303134\]/g, 'bg-surface-muted'],
  [/bg-\[#e8f0fe\] dark:bg-\[#1a3a60\]/g, 'bg-accent-soft'],
  [/border-\[#dadce0\] dark:border-\[#3c4043\]/g, 'border-line'],
  [/border-\[#dadce0\] dark:border-\[#5f6368\]/g, 'border-line'],
  [/border-\[#e8eaed\] dark:border-\[#3c4043\]/g, 'border-line-subtle'],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

const dryRun = process.argv.includes('--dry-run');
let files = 0;
let edits = 0;

for (const file of walk('src')) {
  // tokens.css defines the values; it must not be rewritten in terms of itself.
  if (file.endsWith('tokens.css')) continue;

  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [re, to] of RULES) {
    after = after.replace(re, () => { edits++; return to; });
  }
  if (after !== before) {
    if (!dryRun) fs.writeFileSync(file, after);
    files++;
  }
}

console.log(`${dryRun ? '[dry run] ' : ''}${edits} replacements across ${files} files`);
