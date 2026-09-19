/**
 * Asserts every colour token resolves to the exact value it replaced, in both themes.
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
  '--surface': '#ffffff', '--surface-sunken': '#f8fafd', '--surface-muted': '#f1f3f4',
  '--surface-raised': '#e8eaed', '--ink': '#202124', '--ink-muted': '#5f6368',
  '--ink-subtle': '#80868b', '--line': '#dadce0', '--line-subtle': '#e8eaed',
  '--accent': '#1a73e8', '--accent-hover': '#1557b0', '--accent-soft': '#e8f0fe',
  '--accent-ink': '#174ea6', '--ok': '#137333', '--ok-soft': '#e6f4ea',
};
const DARK = {
  '--surface': '#292a2d', '--surface-sunken': '#202124', '--surface-muted': '#303134',
  '--surface-raised': '#3c4043', '--ink': '#e8eaed', '--ink-muted': '#9aa0a6',
  '--ink-subtle': '#80868b', '--line': '#3c4043', '--line-subtle': '#3c4043',
  '--accent': '#8ab4f8', '--accent-hover': '#aecbfa', '--accent-soft': '#1a3a60',
  '--accent-ink': '#d2e3fc', '--ok': '#81c995',
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
