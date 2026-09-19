/**
 * Guards the things the overhaul must not break: every URL, every row and link,
 * every ad slot, one h1 per page, and a ceiling on how tall a page may get.
 *
 * Compares a fresh build against scripts/ui-baseline.json. Regenerate the
 * baseline deliberately with --save when a change to those numbers is intended,
 * and say why in the commit message.
 *
 * Two kinds of check, because they behave differently over the life of the work:
 *   - Regressions (URLs, links, rows, ad slots, h1) must pass on every run.
 *   - Depth is a goal, not a baseline. Pages start far above the target, so by
 *     default heights only have to be no worse than the baseline. Pass --strict
 *     to require the 7,200px target, once the work that shrinks them is done.
 *
 * Pages are measured over HTTP, never file://: the stylesheet is referenced by
 * an absolute path, so file:// renders with no CSS and every height is wrong.
 *
 * Usage: npx astro preview --port 4343 & then node scripts/verify-ui.mjs
 */
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const DIST = path.resolve('dist');
const BASELINE = path.resolve('scripts/ui-baseline.json');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.PREVIEW_URL || 'http://localhost:4343/routerapp';
const PROBE = path.join(DIST, '__uiprobe');

/** One phone screen. Pages taller than 8 of these are the problem being fixed. */
const MAX_HEIGHT = 7200;

const SAMPLES = {
  '(home)': '',
  brand: 'tp-link',
  ip: '192-168-0-1',
  'ip-main': '192-168-1-1',
  isp: 'jio',
  model: 'tp-link-archer-ax73',
};

function allPages(dir = DIST, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '__uiprobe') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) allPages(p, out);
    else if (e.name === 'index.html') out.push(path.relative(DIST, p));
  }
  return out.sort();
}

function read(slug) {
  const f = path.join(DIST, slug, 'index.html');
  return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null;
}

function measure(slug) {
  const html = read(slug);
  if (html === null) return null;
  fs.mkdirSync(PROBE, { recursive: true });
  fs.writeFileSync(path.join(PROBE, 'index.html'), html.replace('</body>', `<script>
    window.addEventListener('load',function(){setTimeout(function(){
      var c=document.querySelector('[class*="cookie"],#cookie-consent'); if(c) c.remove();
      var i=document.createElement('i'); i.id='H';
      i.textContent=document.documentElement.scrollHeight; document.body.appendChild(i);
    },900);});
  </script></body>`));

  let dom;
  try {
    dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--dump-dom',
      '--virtual-time-budget=7000', '--window-size=390,900', `${BASE}/__uiprobe/`],
      { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    throw new Error(`could not load ${BASE}/__uiprobe/ — is the preview server running?`);
  }
  const m = dom.match(/<i id="H">(\d+)<\/i>/);
  return m ? Number(m[1]) : null;
}

function collect() {
  const pages = allPages();
  const snap = { pageCount: pages.length, pages, samples: {} };
  for (const [name, slug] of Object.entries(SAMPLES)) {
    const html = read(slug);
    if (html === null) throw new Error(`sample page missing: /${slug}`);
    snap.samples[name] = {
      adSlots: (html.match(/class="[^"]*ad-slot/g) || []).length,
      h1: (html.match(/<h1[\s>]/g) || []).length,
      links: new Set(html.match(/href="\/routerapp\/[^"]*"/g) || []).size,
      tableRows: (html.match(/<tr[\s>]/g) || []).length,
      height: measure(slug),
    };
  }
  fs.rmSync(PROBE, { recursive: true, force: true });
  return snap;
}

function report(snap, base) {
  for (const [name, s] of Object.entries(snap.samples)) {
    const b = base && base.samples[name];
    const goal = s.height <= MAX_HEIGHT ? 'ok' : `${Math.ceil(s.height / 900)} screens`;
    const delta = b ? `${s.height - b.height >= 0 ? '+' : ''}${s.height - b.height}` : '';
    console.log(`  ${name.padEnd(9)} h=${String(s.height).padStart(6)}px ${String(delta).padStart(7)}  target:${goal.padEnd(10)} ads=${s.adSlots} h1=${s.h1} links=${s.links} rows=${s.tableRows}`);
  }
}

const snap = collect();

if (process.argv.includes('--save')) {
  fs.writeFileSync(BASELINE, JSON.stringify(snap, null, 2) + '\n');
  console.log(`baseline saved: ${snap.pageCount} pages`);
  report(snap, null);
  process.exit(0);
}

const base = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
const strict = process.argv.includes('--strict');
const fail = [];

if (snap.pageCount !== base.pageCount) {
  fail.push(`page count ${base.pageCount} -> ${snap.pageCount}`);
}
const missing = base.pages.filter(p => !snap.pages.includes(p));
if (missing.length) {
  fail.push(`${missing.length} URLs disappeared, e.g. ${missing.slice(0, 5).join(', ')}`);
}

for (const [name, b] of Object.entries(base.samples)) {
  const s = snap.samples[name];
  if (!s) { fail.push(`${name}: sample missing from this build`); continue; }
  if (s.adSlots !== b.adSlots) fail.push(`${name}: ad slots ${b.adSlots} -> ${s.adSlots}`);
  if (s.h1 !== 1) fail.push(`${name}: expected exactly 1 h1, found ${s.h1}`);
  if (s.links < b.links) fail.push(`${name}: links ${b.links} -> ${s.links} (content lost)`);
  if (s.tableRows < b.tableRows) fail.push(`${name}: table rows ${b.tableRows} -> ${s.tableRows} (content lost)`);
  // Heights drift a little between runs (ad iframes), so allow a small margin.
  if (s.height > b.height + 200) {
    fail.push(`${name}: grew from ${b.height}px to ${s.height}px`);
  }
  if (strict && s.height > MAX_HEIGHT) {
    fail.push(`${name}: ${s.height}px exceeds the ${MAX_HEIGHT}px depth target`);
  }
}

report(snap, base);

if (fail.length) {
  console.error('\nFAIL:');
  for (const f of fail) console.error('  - ' + f);
  process.exit(1);
}
const overTarget = Object.entries(snap.samples).filter(([, s]) => s.height > MAX_HEIGHT);
console.log(`\nPASS: no regressions in URLs, content or ad slots.`);
if (overTarget.length && !strict) {
  console.log(`      ${overTarget.length} page(s) still above the ${MAX_HEIGHT}px depth target: ${overTarget.map(([n]) => n).join(', ')}`);
}
