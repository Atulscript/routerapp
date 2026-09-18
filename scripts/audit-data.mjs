// Data quality audit for the router database.
// Checks structure, duplicates, slug/route collisions, IP sanity and cross-references
// between models, brands and gateway IPs. Read-only: prints a report, changes nothing.
// Usage: node scripts/audit-data.mjs [--json]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const JSON_OUT = process.argv.includes('--json');

import { transformSync } from 'esbuild';

// The data files are TypeScript; strip the types and evaluate them directly.
function loadTs(relPath, exportNames, deps = {}) {
  const source = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  const js = transformSync(source, { loader: 'ts', format: 'cjs' }).code
    .replace(/^import .*$/gm, '')
    .replace(/^export \{[^}]*\} from .*$/gm, '')
    .replace(/\bexport const /g, 'const ')
    .replace(/\bexport function /g, 'function ')
    .replace(/^module\.exports\s*=.*$/gm, '')
    .replace(/^\s*0 && \(module\.exports.*$/gm, '');
  const sandbox = { exports: {}, module: { exports: {} }, require: (id) => deps[id.replace(/^\.\//, '').replace(/\.ts$/, '')] || {}, __toCommonJS: (v) => v, __export: () => {}, __defProp: Object.defineProperty, __getOwnPropNames: Object.getOwnPropertyNames, __hasOwnProp: Object.prototype.hasOwnProperty };
  return new Function('exports', 'module', 'require', `${js}\nreturn { ${exportNames.join(', ')} };`)(sandbox.exports, sandbox.module, sandbox.require);
}

const CATEGORIES = new Set(['Home Wi-Fi', 'Mesh', 'Gaming', 'Travel', 'Prosumer Gateway', 'SMB Router', 'Enterprise Core', 'SD-WAN', '4G/5G Cellular', 'FTTH ONT', 'Modem Gateway']);
const WIFI = new Set(['Wi-Fi 7 (802.11be)', 'Wi-Fi 6E (802.11ax)', 'Wi-Fi 6 (802.11ax)', 'Wi-Fi 5 (802.11ac)', 'Wi-Fi 4 (802.11n)', 'Wi-Fi 3 (802.11g)', 'WiGig (802.11ad)', 'N/A (Wired Gateway)', 'N/A (Standalone Cable Modem)', 'N/A (Point-to-Point Wireless)']);
// Reserved by real pages in src/pages: a model slug here would never render.
const RESERVED = new Set(['about', 'brands', 'contact', 'default-passwords', 'disclaimer', 'dns-servers', 'index', 'ip-addresses', 'isps', 'password-generator', 'port-forwarding', 'privacy-policy', 'routers', 'search-index.json', 'models.json', 'speed-test', 'subnet-calculator', 'terms-of-service', 'tools', 'what-is-my-ip', 'wifi-qr-generator', '404']);

const isIpv4 = (v) => /^\d{1,3}(\.\d{1,3}){3}$/.test(v) && v.split('.').every(n => +n >= 0 && +n <= 255);
const isPrivate = (v) => {
  if (!isIpv4(v)) return false;
  const [a, b] = v.split('.').map(Number);
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254);
};

const { ROUTER_MODELS: models } = loadTs('src/lib/router-models-data.ts', ['ROUTER_MODELS']);
// data-loader fills in brand/ISP model lists from the models file at import time
const { GATEWAY_IPS, BRANDS, ISPS } = loadTs('src/lib/data-loader.ts', ['GATEWAY_IPS', 'BRANDS', 'ISPS'], { 'router-models-data': { ROUTER_MODELS: models } });
const brandSlugs = new Set([...BRANDS.map(b => b.slug), ...ISPS.map(i => i.slug)]);
const logos = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/brand-logos.json'), 'utf8'));
const gatewayIps = new Set(GATEWAY_IPS.map(g => g.ip));

const issues = [];
const add = (severity, kind, detail, where) => issues.push({ severity, kind, detail, where });

// ---------- models ----------
const bySlug = new Map();
const byBrandModel = new Map();
const REQUIRED = ['brand', 'brandSlug', 'model', 'slug', 'category', 'ip', 'username', 'password', 'ports', 'useCase'];

for (const [i, m] of models.entries()) {
  const where = `model #${i} ${m.brand || '?'} ${m.model || '?'}`;

  for (const field of REQUIRED) {
    if (field === 'username' || field === 'password') {
      if (m[field] === undefined || m[field] === null) add('error', 'missing-field', `${field} is missing`, where);
    } else if (!m[field] || String(m[field]).trim() === '') {
      add('error', 'missing-field', `${field} is empty`, where);
    }
  }
  if (!m.slug) continue;

  if (bySlug.has(m.slug)) add('error', 'duplicate-slug', `slug "${m.slug}" also used by ${bySlug.get(m.slug)}`, where);
  else bySlug.set(m.slug, where);

  const key = `${(m.brand || '').toLowerCase()}|${(m.model || '').toLowerCase()}`;
  if (byBrandModel.has(key)) add('warning', 'duplicate-model', `same brand+model as ${byBrandModel.get(key)}`, where);
  else byBrandModel.set(key, where);

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.slug)) add('error', 'bad-slug', `slug "${m.slug}" is not lowercase kebab-case`, where);
  if (RESERVED.has(m.slug)) add('error', 'reserved-slug', `slug "${m.slug}" collides with a site page`, where);
  if (m.brandSlug && !m.slug.startsWith(m.brandSlug)) add('info', 'slug-prefix', `slug "${m.slug}" does not start with brandSlug "${m.brandSlug}"`, where);

  if (m.brandSlug && !brandSlugs.has(m.brandSlug)) add('error', 'unknown-brand', `brandSlug "${m.brandSlug}" has no brand or ISP page`, where);
  if (m.brandSlug && !logos[m.brandSlug]) add('warning', 'missing-logo', `no logo for brandSlug "${m.brandSlug}"`, where);

  if (m.ip && !isIpv4(m.ip)) add('error', 'bad-ip', `ip "${m.ip}" is not a valid IPv4 address`, where);
  else if (m.ip && !isPrivate(m.ip)) add('error', 'public-ip', `ip "${m.ip}" is outside the private ranges used by routers`, where);
  else if (m.ip && !gatewayIps.has(m.ip)) add('info', 'ip-not-indexed', `ip "${m.ip}" has no gateway page`, where);

  if (m.category && !CATEGORIES.has(m.category)) add('error', 'bad-category', `category "${m.category}" is not a known category`, where);
  if (m.wifiStandard && !WIFI.has(m.wifiStandard)) add('error', 'bad-wifi', `wifiStandard "${m.wifiStandard}" is not a known value`, where);

  if (m.loginUrl && !/^https?:\/\/[\w.-]+/.test(m.loginUrl)) add('warning', 'bad-login-url', `loginUrl "${m.loginUrl}" is not a URL`, where);
  if (m.features && (!Array.isArray(m.features) || m.features.some(f => typeof f !== 'string'))) add('warning', 'bad-features', 'features is not a list of strings', where);

  const modelName = String(m.model || '');
  if (m.brand && modelName.toLowerCase().startsWith(String(m.brand).toLowerCase() + ' ')) {
    add('info', 'brand-in-model', `model "${modelName}" repeats the brand name`, where);
  }
  if (/\b(lorem ipsum|dummy|placeholder|sample data|todo|tbd|xxxx)\b/i.test(`${modelName} ${m.useCase || ''}`)) {
    add('error', 'placeholder-text', `placeholder wording in "${modelName}"`, where);
  }
  if (m.username && /^(n\/a|none|-)$/i.test(String(m.username).trim())) add('info', 'odd-username', `username "${m.username}"`, where);
}

// ---------- brands ----------
const brandSlugSeen = new Map();
for (const b of BRANDS) {
  const where = `brand ${b.name}`;
  for (const field of ['name', 'slug', 'defaultIp', 'description']) {
    if (!b[field] || String(b[field]).trim() === '') add('error', 'missing-field', `${field} is empty`, where);
  }
  if (brandSlugSeen.has(b.slug)) add('error', 'duplicate-brand-slug', `slug "${b.slug}" also used by ${brandSlugSeen.get(b.slug)}`, where);
  else brandSlugSeen.set(b.slug, where);
  if (RESERVED.has(b.slug)) add('error', 'reserved-slug', `slug "${b.slug}" collides with a site page`, where);
  for (const ip of String(b.defaultIp || '').split('/').map(s => s.trim()).filter(Boolean)) {
    if (isIpv4(ip)) {
      if (!isPrivate(ip)) add('error', 'public-ip', `defaultIp "${ip}" is outside private ranges`, where);
    } else if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(ip)) {
      add('error', 'bad-ip', `defaultIp part "${ip}" is neither an IP nor a hostname`, where);
    }
  }
  if (!logos[b.slug]) add('warning', 'missing-logo', `brand "${b.name}" has no logo`, where);
  if (!Array.isArray(b.guide) || b.guide.length === 0) add('warning', 'no-guide', 'brand has no setup guide steps', where);
}

for (const isp of ISPS) {
  const where = `isp ${isp.name}`;
  if (brandSlugSeen.has(isp.slug)) add('warning', 'slug-shared-with-brand', `slug "${isp.slug}" also used by ${brandSlugSeen.get(isp.slug)}`, where);
  if (!logos[isp.slug]) add('warning', 'missing-logo', `ISP "${isp.name}" has no logo`, where);
  for (const ip of String(isp.defaultIp || '').split('/').map(s => s.trim()).filter(Boolean)) {
    if (isIpv4(ip) && !isPrivate(ip)) add('error', 'public-ip', `defaultIp "${ip}" is outside private ranges`, where);
  }
}

// ---------- gateway IPs ----------
const ipSeen = new Set();
for (const g of GATEWAY_IPS) {
  const where = `gateway ${g.ip}`;
  if (ipSeen.has(g.ip)) add('error', 'duplicate-gateway', `ip "${g.ip}" listed twice`, where);
  ipSeen.add(g.ip);
  if (!isIpv4(g.ip)) add('error', 'bad-ip', `"${g.ip}" is not a valid IPv4 address`, where);
  else if (!isPrivate(g.ip)) add('error', 'public-ip', `"${g.ip}" is outside private ranges`, where);
  if (g.slug !== g.ip.replace(/\./g, '-')) add('warning', 'slug-mismatch', `slug "${g.slug}" does not match ip`, where);
  if (!Array.isArray(g.faqs) || g.faqs.length === 0) add('info', 'no-faqs', 'gateway page has no FAQs', where);
}

// ---------- report ----------
const order = { error: 0, warning: 1, info: 2 };
issues.sort((a, b) => order[a.severity] - order[b.severity] || a.kind.localeCompare(b.kind));

if (JSON_OUT) {
  console.log(JSON.stringify({ counts: { models: models.length, brands: BRANDS.length, isps: ISPS.length, gateways: GATEWAY_IPS.length }, issues }, null, 2));
} else {
  console.log(`Audited ${models.length} models, ${BRANDS.length} brands, ${ISPS.length} ISPs, ${GATEWAY_IPS.length} gateway IPs\n`);
  const byKind = new Map();
  for (const i of issues) {
    const k = `${i.severity}:${i.kind}`;
    if (!byKind.has(k)) byKind.set(k, []);
    byKind.get(k).push(i);
  }
  for (const [kind, list] of byKind) {
    console.log(`${kind}  (${list.length})`);
    for (const i of list.slice(0, 6)) console.log(`    ${i.where} — ${i.detail}`);
    if (list.length > 6) console.log(`    …and ${list.length - 6} more`);
    console.log('');
  }
  const errors = issues.filter(i => i.severity === 'error').length;
  const warnings = issues.filter(i => i.severity === 'warning').length;
  console.log(`Totals: ${errors} errors, ${warnings} warnings, ${issues.length - errors - warnings} notes`);
}
