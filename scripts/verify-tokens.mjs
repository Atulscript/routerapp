/**
 * Asserts every colour token resolves to its declared value, in both themes.
 *
 * This exists because the obvious test does not work: screenshot hashing is
 * non-deterministic on these pages (ad iframes and load timing differ between
 * runs), so two captures of the same build disagree. Computed custom-property
 * values are deterministic and test the thing that actually matters.
 *
 * Must be served over HTTP, not file://: the stylesheet is referenced by an
 * absolute path (/routerapp/_astro/...), which file:// cannot resolve, so the
 * page loads with no CSS at all and every token reads as empty.
 *
 * Usage: npx astro preview --port 4343 &  then  node scripts/verify-tokens.mjs
 */
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SOURCE = 'dist/brands/index.html';
const PROBE_DIR = 'dist/__tokencheck';

const LIGHT = {
  '--surface': '#ffffff', '--surface-sunken': '#eef2f7', '--surface-muted': '#e6ecf4',
  '--surface-raised': '#dae2ec', '--ink': '#0f172a', '--ink-muted': '#475569',
  '--ink-subtle': '#64748b', '--line': '#cbd5e1', '--line-subtle': '#e2e8f0',
  '--accent': '#1d4ed8', '--accent-hover': '#1e40af', '--accent-soft': '#e0eaff',
  '--accent-ink': '#1e3a8a', '--ok': '#047857', '--ok-soft': '#d1fae5',
};
const DARK = {
  '--surface': '#151f30', '--surface-sunken': '#0b1220', '--surface-muted': '#1d2a3f',
  '--surface-raised': '#27364e', '--ink': '#e8eef8', '--ink-muted': '#94a3b8',
  '--ink-subtle': '#64748b', '--line': '#27364e', '--line-subtle': '#1d2a3f',
  '--accent': '#38bdf8', '--accent-hover': '#7dd3fc', '--accent-soft': '#0e2f4a',
  '--accent-ink': '#bae6fd', '--ok': '#34d399',
};

if (!fs.existsSync(SOURCE)) {
  console.error(`${SOURCE} not found — run npm run build first.`);
  process.exit(1);
}

const probe = `
<script>
window.addEventListener('load',function(){setTimeout(function(){
  var L = ${JSON.stringify(LIGHT)}, D = ${JSON.stringify(DARK)};
  var bad = [];
  function check(mode, expect){
    var cs = getComputedStyle(document.documentElement);
    for (var k in expect){
      var got = cs.getPropertyValue(k).trim().toLowerCase();
      if (got !== expect[k]) bad.push(mode + ' ' + k + ': expected ' + expect[k] + ' got "' + got + '"');
    }
  }
  var root = document.documentElement;
  root.classList.remove('dark'); check('light', L);
  root.classList.add('dark');    check('dark', D);
  var i = document.createElement('i'); i.id = 'R';
  i.textContent = bad.length ? 'FAIL || ' + bad.join(' || ') : 'OK';
  document.body.appendChild(i);
},900);});
</script>`;

fs.mkdirSync(PROBE_DIR, { recursive: true });
fs.writeFileSync(
  path.join(PROBE_DIR, 'index.html'),
  fs.readFileSync(SOURCE, 'utf8').replace('</body>', probe + '</body>')
);

const BASE = process.env.PREVIEW_URL || 'http://localhost:4343/routerapp';

let dom;
try {
  dom = execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--dump-dom', '--virtual-time-budget=7000',
    `${BASE}/__tokencheck/`,
  ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
} catch {
  fs.rmSync(PROBE_DIR, { recursive: true, force: true });
  console.error(`Could not load ${BASE}/__tokencheck/ — is the preview server running?`);
  process.exit(1);
}

fs.rmSync(PROBE_DIR, { recursive: true, force: true });

const m = dom.match(/<i id="R">([\s\S]*?)<\/i>/);
if (!m) {
  console.error('probe did not run');
  process.exit(1);
}
if (m[1].startsWith('FAIL')) {
  console.error('Token mismatch:');
  for (const line of m[1].split(' || ').slice(1)) console.error('  - ' + line);
  process.exit(1);
}
console.log(`PASS: all ${Object.keys(LIGHT).length + Object.keys(DARK).length} token values resolve as expected in both themes.`);
