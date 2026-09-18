# Usability Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the answer the first thing on every page, cut page depth by roughly 90%, and collapse four duplicated page layouts into one shared two-column shell, without changing a single URL or removing any content.

**Architecture:** A shared `PageShell` layout provides a two-column grid (main + sticky rail). Deep pages open with a `LoginCard` carrying the credentials. Long sections use a `Disclosure` wrapper that renders expanded in HTML and collapses on load via JS, so crawlers and no-JS visitors always see everything. `[slug].astro` keeps its four data branches but renders one shared component sequence.

**Tech Stack:** Astro 5, Tailwind 3, TypeScript, vanilla DOM scripts. Tests are node `--test` files driven by vite `ssrLoadModule`, following the existing `scripts/validate-data.mjs` pattern. Page-height and rendered-HTML checks use headless Chrome.

**Spec:** `docs/superpowers/specs/2026-09-19-usability-overhaul-design.md`

## Global Constraints

- **Every URL stays.** The built page count is 3,626 and the full URL set must be byte-identical before and after. Guarded by `npm run test:ui`.
- **No content removal.** Body copy, FAQs, model rows and links stay in the served HTML. Collapsing is a visibility change only; collapsed content must still be present in the page source.
- **Ad slots preserved.** Slot count, `format` values and `slotId` values unchanged per page type. Placement may move.
- **Type families unchanged.** No edits to the `fontFamily` block of `tailwind.config.mjs`.
- **Colour only ever moves through tokens.** After Task 0, no new hardcoded hex may be added in `src/`. Components use the semantic utilities (`bg-surface`, `text-ink`, `border-line`, `text-accent`). This is what keeps the RouterSync repaint a one-file change.
- **Progressive enhancement.** Content renders expanded in HTML; JS collapses it. Never ship content hidden by default in markup.
- **Accessibility floor.** Every disclosure control is a `<button>` with `aria-expanded`; focus-visible rings and `prefers-reduced-motion` handling already in `global.css` must keep working.
- **Depth target.** No page type over 8 phone screens (7,200px at 390px width).
- **Naming.** The brand is **RouterSync.com**, settled by commit `cbf73e15`. Do not reintroduce *19216811.page* strings.

---

## File Structure

**Create:**
- `src/styles/tokens.css` — the single source of colour
- `scripts/codemod-tokens.mjs` — one-off pair-to-token migration
- `scripts/verify-tokens.mjs` — asserts tokens resolve to their original values
- `scripts/test/credentials.test.mjs` — unit tests for credential classification
- `scripts/verify-ui.mjs` — build-output guard (URLs, content, ads, h1, heights)
- `scripts/ui-baseline.json` — generated baseline, committed
- `src/lib/credentials.ts` — credential classification and gateway splitting
- `src/components/LoginCard.astro` — the answer card
- `src/components/Disclosure.astro` — show-more wrapper
- `src/scripts/disclosure.ts` — collapse-on-load behaviour
- `src/components/FaqAccordion.astro` — data-driven FAQ
- `src/components/PageHero.astro` — breadcrumb, title, subtitle, media
- `src/components/OnThisPage.astro` — rail jump links
- `src/layouts/PageShell.astro` — two-column shell

**Modify:**
- `src/pages/[slug].astro` — all four branches onto the shell
- `src/pages/index.astro` — new homepage
- `src/components/Header.astro` — task-based nav
- `src/components/BottomNav.astro` — Home / Find / Browse / Tools
- `src/components/CookieConsent.astro` — compact bar
- `src/styles/global.css` — density utilities
- `package.json` — add `test:ui` script

---

### Task 0: Tokenise colour

Commit `cbf73e15` began moving the brand to RouterSync (cyan/slate) while 2,886
hardcoded Google-palette hexes remain across 46 files. Building twelve tasks of
new components on those hexes would deepen the split. This task makes colour
addressable first.

The token values in this task are **identical to today's colours**, so the change
is visually a no-op. That is the point: it can be proven safe by comparison, and
the RouterSync repaint then becomes a separate, reviewable change to about
fifteen values.

**Files:**
- Create: `src/styles/tokens.css`
- Create: `scripts/codemod-tokens.mjs`
- Create: `scripts/verify-tokens.mjs`
- Modify: `tailwind.config.mjs`, `src/styles/global.css`

**Interfaces:**
- Produces semantic utilities used by every later task: `bg-surface`,
  `bg-surface-sunken`, `bg-surface-muted`, `text-ink`, `text-ink-muted`,
  `border-line`, `border-line-subtle`, `text-accent`, `bg-accent-soft`.

- [ ] **Step 1: Note the current colour literals**

No "before" capture is needed. The tokens below take the exact values they
replace, so correctness is checked by asserting each token resolves to its
original hex (Step 6) rather than by comparing renders.

Do not try to verify this with screenshot hashes. It was tried and does not
work: two captures of the *same* build produce different hashes, because the
pages load ad iframes whose timing varies between runs.

- [ ] **Step 2: Write the tokens**

Create `src/styles/tokens.css`. Every value is copied from what the codebase
already uses, so nothing shifts:

```css
/*
 * The one place colour is defined. Components reference the semantic utilities
 * these back (bg-surface, text-ink, border-line), never a raw hex, so a rebrand
 * is a change to this file rather than to 46 others.
 */
:root {
  --surface: #ffffff;
  --surface-sunken: #f8fafd;
  --surface-muted: #f1f3f4;
  --surface-raised: #e8eaed;

  --ink: #202124;
  --ink-muted: #5f6368;
  --ink-subtle: #80868b;

  --line: #dadce0;
  --line-subtle: #e8eaed;

  --accent: #1a73e8;
  --accent-hover: #1557b0;
  --accent-soft: #e8f0fe;
  --accent-ink: #174ea6;

  --ok: #137333;
  --ok-soft: #e6f4ea;
}

html.dark {
  --surface: #292a2d;
  --surface-sunken: #202124;
  --surface-muted: #303134;
  --surface-raised: #3c4043;

  --ink: #e8eaed;
  --ink-muted: #9aa0a6;
  --ink-subtle: #80868b;

  --line: #3c4043;
  --line-subtle: #3c4043;

  --accent: #8ab4f8;
  --accent-hover: #aecbfa;
  --accent-soft: #1a3a60;
  --accent-ink: #d2e3fc;

  --ok: #81c995;
  --ok-soft: rgba(19, 115, 51, 0.2);
}
```

Import it at the very top of `src/styles/global.css`, before the `@tailwind`
directives: `@import './tokens.css';`

- [ ] **Step 3: Expose the tokens to Tailwind**

In `tailwind.config.mjs`, inside `theme.extend.colors`, **add** these alongside
the existing `google`, `brand` and `md` entries. Do not remove anything yet;
the old names must keep working while the migration runs.

```js
surface: 'var(--surface)',
'surface-sunken': 'var(--surface-sunken)',
'surface-muted': 'var(--surface-muted)',
'surface-raised': 'var(--surface-raised)',
ink: 'var(--ink)',
'ink-muted': 'var(--ink-muted)',
'ink-subtle': 'var(--ink-subtle)',
line: 'var(--line)',
'line-subtle': 'var(--line-subtle)',
accent: 'var(--accent)',
'accent-hover': 'var(--accent-hover)',
'accent-soft': 'var(--accent-soft)',
'accent-ink': 'var(--accent-ink)',
ok: 'var(--ok)',
'ok-soft': 'var(--ok-soft)',
```

- [ ] **Step 4: Write the codemod**

Create `scripts/codemod-tokens.mjs`. It replaces light/dark **pairs**, because a
lone hex is ambiguous (`#202124` is text in light mode and a background in dark)
while a pair is not:

```js
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

let files = 0, edits = 0;
for (const file of walk('src')) {
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [re, to] of RULES) {
    after = after.replace(re, () => { edits++; return to; });
  }
  if (after !== before) { fs.writeFileSync(file, after); files++; }
}
console.log(`${edits} replacements across ${files} files`);
```

- [ ] **Step 5: Run it**

Run: `node scripts/codemod-tokens.mjs`
Expected: 1,316 replacements across 47 files (measured on execution). If it reports under 500, the
patterns do not match the real formatting — inspect a file and fix the regexes
rather than proceeding.

- [ ] **Step 6: Prove every token resolves to the colour it replaced**

```bash
npm run build > /tmp/build.log 2>&1 && tail -2 /tmp/build.log
npx astro preview --port 4343 > /dev/null 2>&1 &
sleep 6
node scripts/verify-tokens.mjs
```

Expected: `PASS: all 29 token values resolve as expected in both themes.`

This loads a real page over HTTP and compares every custom property against the
literal it replaced, in light and in dark. It must be HTTP: the stylesheet is
referenced by an absolute path, so `file://` loads the page with no CSS and every
token reads as empty.

**Never pipe `npm run build` through `head` or `grep -m`.** Doing so SIGPIPEs the
build, which leaves an orphaned `astro build` process rewriting `dist/` underneath
later commands. That produced spurious `ENOENT` and `Cannot find module` failures
during this work. Redirect to a log and `tail` it instead.

- [ ] **Step 7: Check the remaining hexes are the genuinely one-off ones**

Run: `grep -rhoE '#[0-9a-f]{6}' src/ | sort | uniq -c | sort -rn | head -20`

What remains should be single-use decorative colours and the new RouterSync
gradient, not the greys. If `#5f6368` or `#202124` still appear hundreds of
times, add their patterns to `RULES` and rerun.

- [ ] **Step 8: Run the guard and commit**

Run: `npm run test:ui`
Expected: PASS.

```bash
git add src/styles/tokens.css tailwind.config.mjs src/styles/global.css scripts/codemod-tokens.mjs src/
git commit -m "refactor: move colour behind semantic tokens

Values are identical to the previous literals, so this is a visual no-op,
verified by identical screenshot hashes across four pages. It exists so the
RouterSync rebrand is a change to one file rather than 46, and so the twelve
tasks that follow are not built on the palette we are leaving."
```

---

### Task 1: Verification harness and baseline

Nothing else can start safely until the guard exists. This task changes no UI.

**Files:**
- Create: `scripts/verify-ui.mjs`
- Create: `scripts/ui-baseline.json` (generated by the script)
- Modify: `package.json`

**Interfaces:**
- Produces: `npm run test:ui` — exits non-zero on any regression. Every later task runs it.

- [ ] **Step 1: Write the verifier**

Create `scripts/verify-ui.mjs`:

```js
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const DIST = path.resolve('dist');
const BASELINE = path.resolve('scripts/ui-baseline.json');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SAMPLES = ['tp-link', '192-168-0-1', 'jio', 'tp-link-archer-ax73', ''];

function allPages(dir = DIST, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
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
  // Rendered height at phone width, cookie banner removed.
  const probe = path.join(DIST, '__probe', 'index.html');
  const html = read(slug);
  if (html === null) return null;
  fs.mkdirSync(path.dirname(probe), { recursive: true });
  fs.writeFileSync(probe, html.replace('</body>', `<script>
    window.addEventListener('load',function(){setTimeout(function(){
      var c=document.querySelector('[class*="cookie"],#cookie-consent'); if(c) c.remove();
      var i=document.createElement('i'); i.id='H';
      i.textContent=document.documentElement.scrollHeight; document.body.appendChild(i);
    },900);});
  </script></body>`));
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--dump-dom',
    '--virtual-time-budget=6000', '--window-size=390,900',
    'file://' + probe], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  fs.rmSync(path.dirname(probe), { recursive: true, force: true });
  const m = dom.match(/<i id="H">(\d+)<\/i>/);
  return m ? Number(m[1]) : null;
}

function collect() {
  const pages = allPages();
  const snap = { pageCount: pages.length, pages, samples: {} };
  for (const slug of SAMPLES) {
    const html = read(slug);
    if (html === null) throw new Error(`sample page missing: /${slug}`);
    snap.samples[slug || '(home)'] = {
      adSlots: (html.match(/class="[^"]*ad-slot/g) || []).length,
      h1: (html.match(/<h1[\s>]/g) || []).length,
      links: new Set(html.match(/href="\/routerapp\/[^"]*"/g) || []).size,
      tableRows: (html.match(/<tr[\s>]/g) || []).length,
      height: measure(slug),
    };
  }
  return snap;
}

const snap = collect();

if (process.argv.includes('--save')) {
  fs.writeFileSync(BASELINE, JSON.stringify(snap, null, 2) + '\n');
  console.log(`baseline saved: ${snap.pageCount} pages`);
  for (const [k, v] of Object.entries(snap.samples)) {
    console.log(`  ${k.padEnd(22)} h=${v.height}px ads=${v.adSlots} links=${v.links} rows=${v.tableRows}`);
  }
  process.exit(0);
}

const base = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
const fail = [];

if (snap.pageCount !== base.pageCount) {
  fail.push(`page count ${base.pageCount} -> ${snap.pageCount}`);
}
const missing = base.pages.filter(p => !snap.pages.includes(p));
if (missing.length) fail.push(`${missing.length} URLs disappeared, e.g. ${missing.slice(0, 5).join(', ')}`);

for (const [name, b] of Object.entries(base.samples)) {
  const s = snap.samples[name];
  if (s.adSlots !== b.adSlots) fail.push(`${name}: ad slots ${b.adSlots} -> ${s.adSlots}`);
  if (s.h1 !== 1) fail.push(`${name}: expected exactly 1 h1, found ${s.h1}`);
  if (s.links < b.links) fail.push(`${name}: links ${b.links} -> ${s.links} (content lost)`);
  if (s.tableRows < b.tableRows) fail.push(`${name}: table rows ${b.tableRows} -> ${s.tableRows} (content lost)`);
  if (s.height > 7200) fail.push(`${name}: ${s.height}px is over the 7200px depth target`);
}

for (const [name, s] of Object.entries(snap.samples)) {
  console.log(`  ${name.padEnd(22)} h=${String(s.height).padStart(6)}px ads=${s.adSlots} links=${s.links} rows=${s.tableRows}`);
}

if (fail.length) {
  console.error('\nFAIL:');
  for (const f of fail) console.error('  - ' + f);
  process.exit(1);
}
console.log('\nPASS: URLs, content, ads and depth all within bounds.');
```

- [ ] **Step 2: Add the script to package.json**

In `package.json` `"scripts"`, add:

```json
"test:ui": "node scripts/verify-ui.mjs",
"test:ui:save": "node scripts/verify-ui.mjs --save"
```

- [ ] **Step 3: Build and capture the baseline**

Run: `npm run build && npm run test:ui:save`

Expected output includes `baseline saved: 3626 pages` and per-sample heights roughly matching the spec: `tp-link` ~29,600px, `192-168-0-1` ~81,900px.

- [ ] **Step 4: Prove the guard fails when content is lost**

Temporarily delete a built page and confirm the guard catches it:

Run: `rm -rf dist/jio && npm run test:ui`
Expected: exits non-zero with `1 URLs disappeared`.

Then restore: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-ui.mjs scripts/ui-baseline.json package.json
git commit -m "test: add UI regression guard for URLs, content and page depth"
```

---

### Task 2: Credential classification

**Files:**
- Create: `src/lib/credentials.ts`
- Create: `scripts/test/credentials.test.mjs`

**Interfaces:**
- Produces:
  - `isLiteralCredential(value: string | null | undefined): boolean`
  - `splitGatewayValues(defaultIp: string): string[]`
  - `credentialNote(value: string): string` — display text for non-literal values

- [ ] **Step 1: Write the failing test**

Create `scripts/test/credentials.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

const server = await createServer({ root: process.cwd(), server: { middlewareMode: true }, appType: 'custom' });
const { isLiteralCredential, splitGatewayValues, credentialNote } =
  await server.ssrLoadModule('./src/lib/credentials.ts');

test('real credentials are copyable', () => {
  for (const v of ['admin', 'password', '3ware', 'Jiocentrum', 'smcadmin', 'admin1234']) {
    assert.equal(isLiteralCredential(v), true, `${v} should be literal`);
  }
});

test('instructions are not copyable', () => {
  for (const v of [
    'Printed Admin Password on Sticker',
    'Printed Serial Number / Password on Sticker',
    'Amazon Account / OTP',
    'Password on sticker',
    'Empty (set on first login)',
    'Empty (or set during init)',
    '(blank)',
    '',
  ]) {
    assert.equal(isLiteralCredential(v), false, `${v} should not be literal`);
  }
});

test('null and undefined are handled', () => {
  assert.equal(isLiteralCredential(null), false);
  assert.equal(isLiteralCredential(undefined), false);
});

test('gateway strings split into separate values', () => {
  assert.deepEqual(splitGatewayValues('192.168.1.1'), ['192.168.1.1']);
  assert.deepEqual(
    splitGatewayValues('192.168.0.1 / 192.168.1.1 / tplinkwifi.net'),
    ['192.168.0.1', '192.168.1.1', 'tplinkwifi.net']
  );
  assert.deepEqual(splitGatewayValues(''), []);
});

test('non-literal values get readable display text', () => {
  assert.equal(credentialNote('(blank)'), 'Leave blank');
  assert.equal(credentialNote('Password on sticker'), 'Password on sticker');
});

test.after(() => server.close());
```

- [ ] **Step 2: Run it to make sure it fails**

Run: `node --test scripts/test/credentials.test.mjs`
Expected: FAIL — cannot resolve `./src/lib/credentials.ts`.

- [ ] **Step 3: Implement**

Create `src/lib/credentials.ts`:

```ts
/**
 * Roughly a quarter of the password values in the data are instructions rather
 * than secrets ("Printed Admin Password on Sticker", "Amazon Account / OTP").
 * Attaching a copy button to those copies a sentence, so the UI has to tell the
 * two apart. This is the one place that decides.
 */

const INSTRUCTION = /\b(sticker|label|account|serial|otp|empty|printed|blank|set on|set during|see|check|first login)\b/i;

export function isLiteralCredential(value: string | null | undefined): boolean {
  if (!value) return false;
  const v = value.trim();
  if (v === '') return false;
  // Long values are prose, not credentials.
  if (v.length > 24) return false;
  return !INSTRUCTION.test(v);
}

/** "192.168.0.1 / 192.168.1.1 / tplinkwifi.net" -> three separate addresses. */
export function splitGatewayValues(defaultIp: string | null | undefined): string[] {
  if (!defaultIp) return [];
  return defaultIp.split(/\s*\/\s*/).map(v => v.trim()).filter(Boolean);
}

/** Display text for a value that cannot be copied. */
export function credentialNote(value: string): string {
  const v = (value || '').trim();
  if (v === '' || v === '(blank)') return 'Leave blank';
  return v;
}
```

- [ ] **Step 4: Run the tests and make sure they pass**

Run: `node --test scripts/test/credentials.test.mjs`
Expected: PASS, 5 tests.

- [ ] **Step 5: Check the classification against the real dataset**

Run:

```bash
node -e "
import('vite').then(async ({createServer}) => {
  const s = await createServer({root: process.cwd(), server:{middlewareMode:true}, appType:'custom'});
  const { ROUTER_MODELS, BRANDS } = await s.ssrLoadModule('./src/lib/data-loader.ts');
  const { isLiteralCredential } = await s.ssrLoadModule('./src/lib/credentials.ts');
  const pw = [...ROUTER_MODELS.map(m=>m.password), ...BRANDS.map(b=>b.defaultPass)].filter(Boolean);
  const nonLit = pw.filter(v => !isLiteralCredential(v));
  console.log('total', pw.length, 'non-literal', nonLit.length, (nonLit.length/pw.length*100).toFixed(1)+'%');
  await s.close();
});
"
```

Expected: non-literal share lands near 23%, matching the spec's measurement. If it is wildly off (under 15% or over 35%), the regex is wrong — inspect the misclassified values and fix before continuing.

- [ ] **Step 6: Add the test script and commit**

In `package.json` `"scripts"`, add: `"test:unit": "node --test scripts/test/"`

```bash
git add src/lib/credentials.ts scripts/test/credentials.test.mjs package.json
git commit -m "feat: classify which password values can be copied"
```

---

### Task 3: LoginCard

**Files:**
- Create: `src/components/LoginCard.astro`

**Interfaces:**
- Consumes: `isLiteralCredential`, `splitGatewayValues`, `credentialNote` from Task 2.
- Produces: `<LoginCard gateways={string[]} username={string} password={string} label={string} />` where `label` names the subject for accessible button text, e.g. `"TP-Link"`.

- [ ] **Step 1: Write the component**

Create `src/components/LoginCard.astro`:

```astro
---
import { isLiteralCredential, credentialNote } from '../lib/credentials';

interface Props {
  gateways: string[];
  username: string;
  password: string;
  /** Names the subject in copy-button labels, e.g. "TP-Link" */
  label: string;
}

const { gateways, username, password, label } = Astro.props;
const [primary, ...alternates] = gateways;
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const rows = [
  { key: 'Username', value: username },
  { key: 'Password', value: password },
];
---

<section class="lc" aria-label={`${label} default login details`}>
  {primary && (
    <div class="lc-row">
      <span class="lc-k">Go to</span>
      <code class="lc-v">{primary}</code>
      <a class="lc-open" href={`http://${primary}`} target="_blank" rel="noopener noreferrer">
        Open<span class="sr-only"> {primary} in a new tab</span>
      </a>
    </div>
  )}

  {rows.map(row => (
    <div class="lc-row">
      <span class="lc-k">{row.key}</span>
      {isLiteralCredential(row.value) ? (
        <>
          <code class="lc-v">{row.value}</code>
          <button type="button" class="lc-copy" data-c={row.value}
            aria-label={`Copy ${label} ${row.key.toLowerCase()}`}>Copy</button>
        </>
      ) : (
        <span class="lc-note">{credentialNote(row.value)}</span>
      )}
    </div>
  ))}

  {alternates.length > 0 && (
    <p class="lc-alt">
      Also works: {alternates.map((a, i) => (
        <>{i > 0 && ' · '}<code>{a}</code></>
      ))}
    </p>
  )}
</section>

<style is:global>
  .lc {
    border: 1px solid #dadce0; border-radius: 1rem; background: #fff; overflow: hidden;
  }
  .dark .lc { border-color: #3c4043; background: #292a2d; }
  .lc-row {
    display: flex; align-items: center; gap: 0.75rem;
    padding: 0.75rem 1rem; border-top: 1px solid #e8eaed;
  }
  .lc-row:first-child { border-top: 0; }
  .dark .lc-row { border-top-color: #3c4043; }
  .lc-k {
    flex: 0 0 5.5rem; font-size: 0.6875rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em; color: #5f6368;
  }
  .dark .lc-k { color: #9aa0a6; }
  .lc-v {
    flex: 1; min-width: 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.9375rem; font-weight: 700; color: #202124; overflow-wrap: anywhere;
  }
  .dark .lc-v { color: #fff; }
  .lc-note { flex: 1; font-size: 0.875rem; color: #5f6368; }
  .dark .lc-note { color: #9aa0a6; }
  .lc-copy, .lc-open {
    flex-shrink: 0; height: 2rem; padding: 0 0.875rem; border-radius: 9999px;
    font-size: 0.8125rem; font-weight: 600; cursor: pointer;
    display: inline-flex; align-items: center;
  }
  .lc-copy {
    border: 1px solid #dadce0; background: #fff; color: #1a73e8;
  }
  .dark .lc-copy { background: #303134; border-color: #5f6368; color: #8ab4f8; }
  .lc-copy:hover { background: #e8f0fe; }
  .dark .lc-copy:hover { background: #1a3a60; }
  .lc-copy.done { background: #e6f4ea; color: #137333; border-color: #ceead6; }
  .lc-open { background: #1a73e8; color: #fff; }
  .lc-open:hover { background: #1557b0; }
  .lc-alt {
    padding: 0.625rem 1rem; border-top: 1px solid #e8eaed;
    font-size: 0.8125rem; color: #5f6368;
  }
  .dark .lc-alt { border-top-color: #3c4043; color: #9aa0a6; }
  .lc-alt code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-weight: 600; }
</style>

<script>
  // One delegated listener for every LoginCard on the page.
  document.addEventListener('click', async event => {
    const btn = (event.target as HTMLElement).closest<HTMLElement>('.lc-copy');
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.c || '');
      const original = btn.textContent;
      btn.classList.add('done');
      btn.textContent = 'Copied';
      setTimeout(() => { btn.classList.remove('done'); btn.textContent = original; }, 1200);
    } catch {
      /* clipboard blocked; the value is on screen to copy by hand */
    }
  });
</script>
```

- [ ] **Step 2: Render it on one page to check it**

Temporarily add to `src/pages/brands.astro`, directly after the `<header>` block:

```astro
<LoginCard gateways={['192.168.1.1', '192.168.0.1']} username="admin" password="Printed Admin Password on Sticker" label="Test" />
```

with `import LoginCard from '../components/LoginCard.astro';` at the top.

- [ ] **Step 3: Build and confirm both rendering modes**

Run: `npm run build && grep -c 'lc-copy' dist/brands/index.html && grep -c 'lc-note' dist/brands/index.html`
Expected: `1` copy button (username only) and `1` note (the sticker password has no button). If the password rendered a copy button, Task 2's classifier is wrong.

- [ ] **Step 4: Remove the temporary usage**

Revert the two temporary edits to `src/pages/brands.astro`.

- [ ] **Step 5: Commit**

```bash
git add src/components/LoginCard.astro
git commit -m "feat: add LoginCard with per-value copy and no copy button on instructions"
```

---

### Task 4: Disclosure

**Files:**
- Create: `src/components/Disclosure.astro`
- Create: `src/scripts/disclosure.ts`

**Interfaces:**
- Produces: `<Disclosure label={string} collapsedHeight={number}><slot /></Disclosure>`. `label` is the button text, e.g. `"Show all 280 models"`. `collapsedHeight` is the clamp height in px, default 320.

- [ ] **Step 1: Write the behaviour**

Create `src/scripts/disclosure.ts`:

```ts
/**
 * Collapse-on-load, deliberately.
 *
 * The content ships expanded in the HTML and this script collapses it once the
 * page is interactive. That way crawlers and visitors without JS always get the
 * whole page, and nothing is ever hidden in the markup itself.
 */
export function initDisclosures(): void {
  for (const root of document.querySelectorAll<HTMLElement>('.dc')) {
    const region = root.querySelector<HTMLElement>('.dc-region');
    const button = root.querySelector<HTMLButtonElement>('.dc-btn');
    if (!region || !button) continue;

    const clamp = Number(root.dataset.h || '320');

    // Nothing to collapse: drop the control rather than show a useless button.
    if (region.scrollHeight <= clamp + 40) {
      button.remove();
      continue;
    }

    const expandedLabel = button.dataset.less || 'Show less';
    const collapsedLabel = button.textContent || 'Show more';

    function set(open: boolean): void {
      region!.style.maxHeight = open ? '' : `${clamp}px`;
      region!.classList.toggle('dc-clipped', !open);
      button!.setAttribute('aria-expanded', String(open));
      button!.textContent = open ? expandedLabel : collapsedLabel;
    }

    button.hidden = false;
    set(false);
    button.addEventListener('click', () => {
      set(button.getAttribute('aria-expanded') !== 'true');
    });
  }
}
```

- [ ] **Step 2: Write the component**

Create `src/components/Disclosure.astro`:

```astro
---
interface Props {
  /** Button text when collapsed, e.g. "Show all 280 models" */
  label: string;
  /** Button text when expanded */
  lessLabel?: string;
  /** Clamp height in px */
  collapsedHeight?: number;
}

const { label, lessLabel = 'Show less', collapsedHeight = 320 } = Astro.props;
---

<div class="dc" data-h={collapsedHeight}>
  <div class="dc-region"><slot /></div>
  <button type="button" class="dc-btn" hidden aria-expanded="true" data-less={lessLabel}>{label}</button>
</div>

<style is:global>
  .dc-region { position: relative; overflow: hidden; }
  /* Fade the cut so it reads as "there is more", not "the content ends here". */
  .dc-region.dc-clipped::after {
    content: ""; position: absolute; inset-inline: 0; bottom: 0; height: 4rem;
    background: linear-gradient(to bottom, transparent, #f8fafd);
    pointer-events: none;
  }
  .dark .dc-region.dc-clipped::after {
    background: linear-gradient(to bottom, transparent, #202124);
  }
  .dc-btn {
    display: block; margin: 0.75rem auto 0; padding: 0.5rem 1.25rem;
    border: 1px solid #dadce0; border-radius: 9999px; background: #fff;
    font-size: 0.8125rem; font-weight: 600; color: #1a73e8; cursor: pointer;
  }
  .dark .dc-btn { background: #292a2d; border-color: #5f6368; color: #8ab4f8; }
  .dc-btn:hover { background: #e8f0fe; }
  .dark .dc-btn:hover { background: #1a3a60; }
</style>

<script>
  import { initDisclosures } from '../scripts/disclosure';
  initDisclosures();
</script>
```

- [ ] **Step 3: Verify content ships expanded**

Add a temporary usage in `src/pages/brands.astro` wrapping the A–Z index, build, then run:

Run: `npm run build && grep -c 'brand-link' dist/brands/index.html`
Expected: still 836 — collapsing must not remove anything from the HTML.

Also confirm the button ships hidden: `grep -c 'dc-btn" hidden' dist/brands/index.html` returns 1.

- [ ] **Step 4: Remove the temporary usage and commit**

```bash
git add src/components/Disclosure.astro src/scripts/disclosure.ts
git commit -m "feat: add Disclosure that collapses on load rather than hiding in markup"
```

---

### Task 5: FaqAccordion

**Files:**
- Create: `src/components/FaqAccordion.astro`
- Modify: `src/pages/[slug].astro` (replace the four hardcoded FAQ blocks only)

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `<FaqAccordion title={string} faqs={{question: string, answer: string}[]} />`

- [ ] **Step 1: Write the component**

Create `src/components/FaqAccordion.astro`:

```astro
---
interface Props {
  title?: string;
  faqs: { question: string; answer: string }[];
}

const { title = 'Frequently asked questions', faqs } = Astro.props;
---

{faqs.length > 0 && (
  <section class="faq">
    <h2 class="faq-h">{title}</h2>
    {faqs.map(faq => (
      <details class="faq-i">
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>
    ))}
  </section>
)}

<style is:global>
  .faq-h { font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; }
  .faq-i { border-top: 1px solid #e8eaed; padding: 0.75rem 0; }
  .dark .faq-i { border-top-color: #3c4043; }
  .faq-i summary {
    cursor: pointer; font-size: 0.875rem; font-weight: 600;
    color: #202124; list-style: none; display: flex; justify-content: space-between; gap: 1rem;
  }
  .dark .faq-i summary { color: #fff; }
  .faq-i summary::-webkit-details-marker { display: none; }
  .faq-i summary::after { content: "+"; color: #5f6368; font-weight: 400; }
  .faq-i[open] summary::after { content: "−"; }
  .faq-i p {
    margin-top: 0.5rem; font-size: 0.875rem; line-height: 1.6; color: #5f6368;
  }
  .dark .faq-i p { color: #bdc1c6; }
</style>
```

- [ ] **Step 2: Replace the four hardcoded blocks in `[slug].astro`**

For each of the four type branches, replace the hand-written `<details>` markup with:

```astro
<FaqAccordion faqs={ipData.faqs} />
```

using the branch's own FAQ data (`ipData.faqs`, and the equivalent arrays in the brand, model and isp branches). Add `import FaqAccordion from '../components/FaqAccordion.astro';` at the top.

- [ ] **Step 3: Verify the visible FAQ matches the schema**

Run:

```bash
npm run build && node -e "
const fs=require('fs');
const h=fs.readFileSync('dist/192-168-0-1/index.html','utf8');
const ld=JSON.parse(h.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/)[1]);
const faq=(Array.isArray(ld)?ld:ld['@graph']||[]).find(x=>x['@type']==='FAQPage');
const inSchema=faq.mainEntity.length;
const onPage=(h.match(/class=\"faq-i\"/g)||[]).length;
console.log('schema',inSchema,'page',onPage);
if(inSchema!==onPage){console.error('MISMATCH');process.exit(1);}
"
```

Expected: the two counts match. This is the drift the old hardcoded blocks allowed.

- [ ] **Step 4: Run the guard**

Run: `npm run test:ui`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/FaqAccordion.astro src/pages/\[slug\].astro
git commit -m "refactor: render FAQs from data instead of four hardcoded blocks"
```

---

### Task 6: PageShell and OnThisPage

**Files:**
- Create: `src/layouts/PageShell.astro`
- Create: `src/components/OnThisPage.astro`

**Interfaces:**
- Produces: `PageShell` with two named slots, `main` (default) and `rail`. Consumers write `<div slot="rail">…</div>`.
- Produces: `<OnThisPage links={{id: string, label: string}[]} />`

- [ ] **Step 1: Write OnThisPage**

Create `src/components/OnThisPage.astro`:

```astro
---
interface Props {
  links: { id: string; label: string }[];
}
const { links } = Astro.props;
---

{links.length > 1 && (
  <nav class="otp" aria-label="On this page">
    <p class="otp-h">On this page</p>
    <ul>
      {links.map(l => <li><a href={`#${l.id}`}>{l.label}</a></li>)}
    </ul>
  </nav>
)}

<style is:global>
  .otp-h {
    font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; color: #5f6368; margin-bottom: 0.5rem;
  }
  .dark .otp-h { color: #9aa0a6; }
  .otp ul { display: flex; flex-direction: column; gap: 0.125rem; }
  .otp a {
    display: block; padding: 0.3125rem 0; font-size: 0.8125rem; color: #3c4043;
  }
  .dark .otp a { color: #bdc1c6; }
  .otp a:hover { color: #1a73e8; text-decoration: underline; }
  .dark .otp a:hover { color: #8ab4f8; }
</style>
```

- [ ] **Step 2: Write PageShell**

Create `src/layouts/PageShell.astro`:

```astro
---
/**
 * Two-column shell. The rail carries supplementary blocks and the ad, which is
 * what lets the main column lead with the answer without pushing the ad down.
 * On mobile the rail follows the main column, as those blocks do today.
 */
---

<div class="shell">
  <div class="shell-main"><slot /></div>
  <aside class="shell-rail"><slot name="rail" /></aside>
</div>

<style is:global>
  .shell {
    max-width: 72rem; margin: 0 auto; padding: 1.5rem 1rem;
    display: grid; grid-template-columns: 1fr; gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    .shell { grid-template-columns: minmax(0, 1fr) 20rem; gap: 2rem; padding: 1.5rem; }
    .shell-rail { position: sticky; top: 5rem; align-self: start; }
  }
  .shell-rail { display: flex; flex-direction: column; gap: 1rem; }
</style>
```

- [ ] **Step 3: Verify the grid at both widths**

Build, then screenshot `/brands` after temporarily wrapping its content in `PageShell`:

```bash
npm run build && npx astro preview --port 4340 &
sleep 5
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --screenshot=/tmp/shell-desktop.png --window-size=1280,800 --virtual-time-budget=6000 "http://localhost:4340/routerapp/brands"
"$CHROME" --headless=new --disable-gpu --screenshot=/tmp/shell-mobile.png --window-size=500,900 --virtual-time-budget=6000 "http://localhost:4340/routerapp/brands"
```

Expected: rail beside main at 1280px, below main at 500px. Read both screenshots before continuing.

- [ ] **Step 4: Remove the temporary usage and commit**

```bash
git add src/layouts/PageShell.astro src/components/OnThisPage.astro
git commit -m "feat: add two-column page shell with sticky rail"
```

---

### Task 7: Migrate IP pages

The worst page type (81,913px) goes first, so the approach is proven against the hardest case.

**Files:**
- Modify: `src/pages/[slug].astro` — the `type === 'ip'` branch only

**Interfaces:**
- Consumes: `PageShell`, `LoginCard`, `Disclosure`, `OnThisPage`, `FaqAccordion`.

- [ ] **Step 1: Restructure the branch**

Replace the `type === 'ip'` render block so it reads:

```astro
<PageShell>
  <nav class="crumbs">…existing breadcrumb…</nav>
  <h1>{ipData.title}</h1>
  <p class="lede">{ipData.description}</p>

  <LoginCard
    gateways={[ipData.ip]}
    username={ipData.defaultUser}
    password={ipData.defaultPass}
    label={ipData.ip}
  />

  <AdBanner format="leaderboard" class="lg:hidden" />

  <section id="steps">…existing steps…</section>

  <section id="brands">…existing "Brands that use" block…</section>

  <section id="models">
    <h2>Routers using {ipData.ip}</h2>
    <Disclosure label={`Show all ${models.length} models`} collapsedHeight={520}>
      …existing models table…
    </Disclosure>
  </section>

  <FaqAccordion faqs={ipData.faqs} />

  <section id="about">…existing SEO copy…</section>

  <div slot="rail">
    <AdBanner format="leaderboard" class="hidden lg:block" />
    <OnThisPage links={[
      { id: 'steps', label: 'How to log in' },
      { id: 'brands', label: 'Brands using this IP' },
      { id: 'models', label: 'Router models' },
      { id: 'about', label: 'About this address' },
    ]} />
    …existing "Other popular gateways" block…
    …existing RelatedLinksGrid…
  </div>
</PageShell>
```

Keep every existing inner markup block verbatim; this task moves and wraps them, it does not rewrite their contents.

- [ ] **Step 2: Build and check depth**

Run: `npm run build && npm run test:ui`
Expected: PASS, with `192-168-0-1` height dropping from ~81,900px to under 7,200px. Link and row counts must be unchanged — the guard fails if the table lost rows rather than collapsing.

- [ ] **Step 3: Confirm the ad appears exactly once per viewport**

Run:

```bash
node -e "
const h=require('fs').readFileSync('dist/192-168-0-1/index.html','utf8');
console.log('ad slots in HTML:', (h.match(/class=\"[^\"]*ad-slot/g)||[]).length);
"
```

Expected: 2 slots in the HTML — one `lg:hidden`, one `hidden lg:block` — and the guard's baseline comparison accounts for this. If the baseline had a different count, update `scripts/ui-baseline.json` deliberately with `npm run test:ui:save` and note it in the commit.

- [ ] **Step 4: Screenshot at both widths**

Use the Task 6 Step 3 commands against `/routerapp/192-168-0-1`. Read both. The LoginCard must be visible without scrolling at 500px width.

- [ ] **Step 5: Commit**

```bash
git add src/pages/\[slug\].astro scripts/ui-baseline.json
git commit -m "refactor: answer-first two-column layout for gateway IP pages"
```

---

### Task 8: Migrate brand pages

**Files:**
- Modify: `src/pages/[slug].astro` — the `type === 'brand'` branch only

- [ ] **Step 1: Restructure the branch**

Mirror Task 7 exactly, with brand data:

```astro
<PageShell>
  <nav class="crumbs">…existing breadcrumb…</nav>
  <PageHero … />
  <h1>{brandData.name} router login & default passwords</h1>

  <LoginCard
    gateways={splitGatewayValues(brandData.defaultIp)}
    username={brandData.defaultUser}
    password={brandData.defaultPass}
    label={brandData.name}
  />

  <AdBanner format="leaderboard" class="lg:hidden" />

  <section id="steps">…existing guide steps…</section>
  <section id="models">
    <h2>{brandData.name} models</h2>
    <Disclosure label={`Show all ${models.length} models`} collapsedHeight={520}>
      …existing models table…
    </Disclosure>
  </section>
  <FaqAccordion faqs={brandFaqs} />
  <section id="about">…existing SEO copy…</section>

  <div slot="rail">
    <AdBanner format="leaderboard" class="hidden lg:block" />
    <OnThisPage links={[
      { id: 'steps', label: 'How to log in' },
      { id: 'models', label: `${brandData.name} models` },
      { id: 'about', label: `About ${brandData.name}` },
    ]} />
    …existing related brands block…
    …existing RelatedLinksGrid…
  </div>
</PageShell>
```

Import `splitGatewayValues` from `../lib/credentials`. This is what fixes the `192.168.1.1 / 192.168.0.1 / tplinkwifi.net` single-copy-button problem: each address becomes its own row.

- [ ] **Step 2: Build and verify**

Run: `npm run build && npm run test:ui`
Expected: PASS, `tp-link` height from ~29,600px to under 7,200px.

- [ ] **Step 3: Confirm the gateway split rendered**

Run: `grep -o 'lc-v[^<]*<' dist/tp-link/index.html | head -5`
Expected: `192.168.1.1` as the primary row, with `192.168.0.1` and `tplinkwifi.net` in the `lc-alt` line — not three values crammed into one field.

- [ ] **Step 4: Screenshot at 500px and read it**

The password must be visible without scrolling.

- [ ] **Step 5: Commit**

```bash
git add src/pages/\[slug\].astro
git commit -m "refactor: answer-first two-column layout for brand pages"
```

---

### Task 9: Migrate model and ISP pages

**Files:**
- Modify: `src/pages/[slug].astro` — the `type === 'model'` and `type === 'isp'` branches

- [ ] **Step 1: Restructure both branches**

Apply the same sequence as Tasks 7 and 8. Model pages use `modelData.ip`, `modelData.username`, `modelData.password` and keep their specs table in the main column. ISP pages use `ispData.defaultIp` through `splitGatewayValues`, and keep their provider-router table wrapped in `Disclosure`.

- [ ] **Step 2: Delete the now-dead per-type layout code**

With all four branches on the shell, remove the leftover wrapper markup each branch used to carry (its own `max-w-*` container, its own card chrome). The file should now be roughly 400 lines.

Run: `wc -l src/pages/\[slug\].astro`
Expected: under 600. If it is still over 900, duplicated markup remains — find it and extract it.

- [ ] **Step 3: Build and verify**

Run: `npm run build && npm run test:ui && npm run test:unit`
Expected: both PASS, all four sample pages under 7,200px.

- [ ] **Step 4: Spot-check one page of each type**

Screenshot `/tp-link`, `/192-168-0-1`, `/jio` and `/tp-link-archer-ax73` at 500px. Read all four. They must look like the same site.

- [ ] **Step 5: Commit**

```bash
git add src/pages/\[slug\].astro
git commit -m "refactor: unify model and ISP pages onto the shared shell"
```

---

### Task 10: Task-based navigation

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/BottomNav.astro`

- [ ] **Step 1: Replace the header's link list**

Replace the six nav links with a persistent search field plus a Browse menu. The Browse menu is a `<details>` element so it works without JS:

```astro
<details class="browse">
  <summary>Browse</summary>
  <div class="browse-menu">
    <a href={`${base}/brands`}>Router brands</a>
    <a href={`${base}/routers`}>Router models</a>
    <a href={`${base}/ip-addresses`}>Gateway IPs</a>
    <a href={`${base}/isps`}>Internet providers</a>
    <a href={`${base}/default-passwords`}>Default passwords</a>
  </div>
</details>
<a href={`${base}/tools`}>Tools</a>
```

Every link that exists today must still exist here. Do not drop any.

- [ ] **Step 2: Verify no internal link was lost**

Run:

```bash
npm run build && node -e "
const h=require('fs').readFileSync('dist/index.html','utf8');
for (const p of ['brands','routers','ip-addresses','isps','default-passwords','tools']) {
  if (!h.includes('/routerapp/'+p)) { console.error('MISSING link to', p); process.exit(1); }
}
console.log('all six category links present');
"
```

- [ ] **Step 3: Update the mobile bottom nav**

Change the items to Home, Find, Browse, Tools. Find opens the existing search panel; Browse links to `/brands`.

- [ ] **Step 4: Run the guard and screenshot**

Run: `npm run test:ui`, then screenshot the header at 1280px and the bottom nav at 500px. Read both.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro src/components/BottomNav.astro
git commit -m "feat: task-based navigation with search first and a Browse menu"
```

---

### Task 11: New homepage

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Rebuild on the shell**

Structure per the spec: H1 and search, then a `LoginCard` for `192.168.1.1`, then popular gateways, top brands and the router checker as divided sections. Rail carries the ad, popular brands, top gateways and tools.

Remove the full-bleed gradient hero band. Replace the duplicated master lookup table (current section 4) with a link into `/routers`.

Leave the H1 wording alone for now — it depends on spec Open Question 1, which the owner has not yet answered. Keep the existing string until they do.

- [ ] **Step 2: Build and verify**

Run: `npm run build && npm run test:ui`
Expected: PASS, homepage under 7,200px.

- [ ] **Step 3: Confirm the duplicate lookup table is gone but /routers still linked**

Run: `grep -c 'router-lookup-container' dist/index.html && grep -c '/routerapp/routers' dist/index.html`
Expected: `0` lookup containers, at least `1` link to `/routers`.

- [ ] **Step 4: Screenshot at 500px and 1280px, read both**

The search field and the 192.168.1.1 credentials must both be above the fold at 500px.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rebuild the homepage answer-first on the two-column shell"
```

---

### Task 12: Density pass and cookie bar

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/CookieConsent.astro`
- Modify: `src/pages/brands.astro`, `ip-addresses.astro`, `isps.astro`, `routers.astro`, `default-passwords.astro`

- [ ] **Step 1: Add the section-divider pattern**

In `global.css` `@layer components`, add:

```css
/* One card with internal dividers, instead of a stack of separate cards.
   Each standalone card costs two borders, two paddings and a gap; this
   removes that overhead per section, which is the largest single
   contributor to the current page heights. */
.stack {
  @apply bg-white dark:bg-[#292a2d] rounded-2xl border border-[#dadce0] dark:border-[#3c4043];
}
.stack > * + * {
  @apply border-t border-[#e8eaed] dark:border-[#3c4043];
}
.stack > * {
  @apply p-4 sm:p-5;
}
```

- [ ] **Step 2: Apply it to the category landing pages**

On each of the five listed pages, replace the stack of sibling `rounded-2xl` section cards with one `.stack` wrapper containing the same sections. Do not change their contents.

- [ ] **Step 3: Drop emoji from section headings**

Search and remove the leading emoji from `<h2>` text across `src/pages/` and `src/components/`:

Run: `grep -rn '<h2[^>]*>[^<]*[🌐🏷️📶🛠️📡🔑❓]' src/ | head -20`

Remove the emoji character and any following whitespace from each match. Leave emoji in badges and chips alone; this step is headings only.

- [ ] **Step 4: Compact the cookie bar**

Rewrite `CookieConsent.astro` as a single-row bar fixed to the bottom: one line of text, two buttons, max height 4rem on mobile. Keep the existing consent-storage logic byte-for-byte; only the markup and styles change.

- [ ] **Step 5: Build, verify, screenshot**

Run: `npm run build && npm run test:ui && npm run test:unit`
Expected: both PASS.

Screenshot `/brands` and `/tp-link` at 500px. The cookie bar must not cover more than one line of content.

- [ ] **Step 6: Re-measure the full depth picture**

Run: `npm run test:ui`

Record the final heights against the spec's baseline table in the commit message.

- [ ] **Step 7: Commit**

```bash
git add src/styles/global.css src/components/CookieConsent.astro src/pages/
git commit -m "style: density pass, divided section stacks and a compact cookie bar"
```

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
| --- | --- |
| 1. Two-column shell | 6, applied in 7–9, 11 |
| 2. Navigation | 10 |
| 3. LoginCard | 2, 3, applied in 7–9, 11 |
| 4. Template unification | 5, 7, 8, 9 |
| 5. Ad placement | 7, 8, 9, 11 |
| 6. Information density | 12 |
| 7. Progressive disclosure | 4, applied in 7–9 |
| 8. Homepage | 11 |
| 9. Secondary fixes (cookie) | 12 |
| 9. Secondary fixes (naming) | Blocked on Open Question 2; Global Constraints forbid guessing |
| Testing | 1, run at the end of every task |

**Deferred deliberately:** the homepage H1 rewrite (Open Question 1) and the naming decision (Open Question 2) both need owner input. Task 11 Step 1 says to leave the H1 string alone until then. Neither blocks any other task.

**Type consistency:** `isLiteralCredential`, `splitGatewayValues` and `credentialNote` are defined in Task 2 and used with those exact names in Tasks 3, 8 and 9. `PageShell`'s rail slot is named `rail` in Task 6 and consumed as `slot="rail"` in Tasks 7–9 and 11. `Disclosure` props `label` / `lessLabel` / `collapsedHeight` are defined in Task 4 and used consistently thereafter.

**Ordering:** Task 1 must run first — it captures the pre-change baseline, and capturing it after any UI edit would bake a regression into the reference.
