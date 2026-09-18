// Finds a product photo for each router model and saves a 600x450 WebP to public/images/models/<slug>.webp,
// recording the source in src/lib/model-images.json. Models without a confident match keep the drawn
// RouterIllustration.
//
// Sources, in order (every result must name the model, and the image must look like a studio shot):
//   1. Open Icecat product catalogue (manufacturer-supplied images), looked up by brand + part code
//   2. Amazon search results, skipping accessories
//   3. Web search (DuckDuckGo HTML / Bing) -> manufacturer or retailer product page -> its og:image
//
// Usage: node scripts/fetch-model-images.mjs [--force] [--retry-misses] [--limit N] [--only slug1,slug2]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'public/images/models');
const MANIFEST = path.join(ROOT, 'src/lib/model-images.json');
const MISSES = path.join(ROOT, 'scripts/.model-image-misses.json');
// Images removed after manual review (wrong device, packaging, bundles); never picked again.
const REJECTS_FILE = path.join(ROOT, 'scripts/model-image-rejects.json');
const REJECTED = new Set(Object.values(fs.existsSync(REJECTS_FILE) ? JSON.parse(fs.readFileSync(REJECTS_FILE, 'utf8')) : {}).flat());
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const LIMIT = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const ONLY = args.includes('--only') ? new Set(args[args.indexOf('--only') + 1].split(',')) : null;
const RETRY_MISSES = args.includes('--retry-misses');
const DEBUG = args.includes('--debug');
const debug = (...a) => DEBUG && console.log('    ', ...a);

// Only pages from these sites are used as image sources.
const RETAILERS = /(^|\.)(amazon\.[a-z.]+|bestbuy\.com|bhphotovideo\.com|newegg\.com|microcenter\.com|walmart\.com|staples\.com|currys\.co\.uk|argos\.co\.uk|scan\.co\.uk|ebuyer\.com|box\.co\.uk|ldlc\.com|mediamarkt\.[a-z.]+|flipkart\.com|reliancedigital\.in|croma\.com|vijaysales\.com|mdcomputers\.in|jbhifi\.com\.au|harveynorman\.com\.au|officeworks\.com\.au|mwave\.com\.au|pbtech\.co\.nz|canadacomputers\.com|memoryexpress\.com|cdw\.com|insight\.com|router-switch\.com|wifi-stock\.com|nfc-direct\.co\.uk|senetic\.[a-z.]+|lazada\.[a-z.]+|shopee\.[a-z.]+|rtings\.com|smallnetbuilder\.com|netgear\.com|dlink\.com|asus\.com|linksys\.com)$/i;
const BLOCKED = /manualslib|manuals\.plus|manualzz|usermanual|routerctrl|router-network|youtube|pinterest|facebook|reddit|wikipedia|fccid|fcc\.io|fcc\.report|ebay|aliexpress|alibaba|indiamart/i;

// slug -> manufacturer domain(s) that count as official.
const BRAND_DOMAINS = {
  'tp-link': 'tp-link.com', netgear: 'netgear.com', asus: 'asus.com', 'd-link': 'dlink.com', linksys: 'linksys.com',
  ubiquiti: 'ui.com|ubnt.com', mikrotik: 'mikrotik.com', synology: 'synology.com', zyxel: 'zyxel.com', huawei: 'huawei.com',
  zte: 'zte.com.cn|ztedevices.com', tenda: 'tendacn.com|tenda.com.cn', mercusys: 'mercusys.com', 'gl-inet': 'gl-inet.com',
  glinet: 'gl-inet.com', eero: 'eero.com', 'amazon-eero': 'eero.com|amazon.com', cudy: 'cudy.com', teltonika: 'teltonika-networks.com',
  peplink: 'peplink.com', draytek: 'draytek.com|draytek.co.uk', fortinet: 'fortinet.com', cisco: 'cisco.com|meraki.com',
  juniper: 'juniper.net', aruba: 'arubanetworks.com|hpe.com', sophos: 'sophos.com', sonicwall: 'sonicwall.com',
  watchguard: 'watchguard.com', avm: 'avm.de|fritz.com', 'avm-fritzbox': 'avm.de|fritz.com', sagemcom: 'sagemcom.com',
  nokia: 'nokia.com', arris: 'surfboard.com|commscope.com', 'arris-surfboard': 'surfboard.com|commscope.com',
  motorola: 'motorolanetwork.com|motorola.com', xiaomi: 'mi.com|xiaomi.com', keenetic: 'keenetic.com',
  grandstream: 'grandstream.com', ruijie: 'ruijienetworks.com|reyee.ruijie.com', 'ruijie-reyee': 'ruijienetworks.com|reyee.ruijie.com',
  totolink: 'totolink.net', wavlink: 'wavlink.com', trendnet: 'trendnet.com', buffalo: 'buffalotech.com|buffalo-technology.com|buffalo.jp',
  edimax: 'edimax.com', netis: 'netis-systems.com', digisol: 'digisol.com', syrotech: 'syrotech.com', hitron: 'hitrontech.com',
  technicolor: 'vantiva.com|technicolor.com', vantiva: 'vantiva.com', google: 'store.google.com|google.com', 'google-nest': 'store.google.com|google.com',
  apple: 'apple.com', belkin: 'belkin.com', 'check-point': 'checkpoint.com', barracuda: 'barracuda.com', ruckus: 'ruckusnetworks.com|commscope.com',
  engenius: 'engeniustech.com', cradlepoint: 'cradlepoint.com|ericsson.com', inseego: 'inseego.com', 'sierra-wireless': 'sierrawireless.com|semtech.com',
  'digi-international': 'digi.com', 'allied-telesis': 'alliedtelesis.com', 'extreme-networks': 'extremenetworks.com', qnap: 'qnap.com',
  samsung: 'samsung.com', starlink: 'starlink.com', netgate: 'netgate.com', 'palo-alto': 'paloaltonetworks.com', calix: 'calix.com',
  adtran: 'adtran.com', actiontec: 'actiontec.com', askey: 'askey.com.tw', comtrend: 'comtrend.com', genexis: 'genexis.eu',
  fiberhome: 'fiberhome.com', 'io-data': 'iodata.jp', yamaha: 'yamaha.com', 'nec-aterm': 'aterm.jp|nec.com', netcomm: 'netcomm.com',
  usrobotics: 'usr.com', 'western-digital': 'westerndigital.com', edgewater: 'edgewaternetworks.com', vsol: 'vsolcn.com',
  alphion: 'alphion.in', arcadyan: 'arcadyan.com', sercomm: 'sercomm.com', humax: 'humaxdigital.com', 'amped-wireless': 'ampedwireless.com',
};

function loadModels() {
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/router-models-data.ts'), 'utf8')
    .replace(/^import .*$/m, '')
    .replace(/export const ROUTER_MODELS\s*:\s*RouterModel\[\]\s*=/, 'return');
  return new Function(src)();
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return ''; } };

// Token sets; a page/image matches the model when every token of one set appears in it.
function matchKeys(model) {
  const variants = [model.model.replace(/\(.*?\)/g, ' '), ...(model.model.match(/\(([^)]+)\)/g) || []).map(v => v.slice(1, -1))];
  return variants.map(v => {
    const words = v.split(/[\s/,+]+/).filter(Boolean);
    const withDigits = words.filter(w => /\d/.test(w) && norm(w).length >= 2).map(norm);
    return withDigits.length ? withDigits : words.map(norm).filter(w => w.length >= 3);
  }).filter(k => k.length);
}
const matches = (keys, text) => { const t = norm(text); return keys.some(k => k.every(tok => t.includes(tok))); };

async function get(url, opts = {}, timeout = 15000) {
  const res = await fetch(url, {
    ...opts,
    redirect: 'follow',
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9', Accept: 'text/html,application/xhtml+xml,image/*,*/*;q=0.8', ...(opts.headers || {}) },
    signal: AbortSignal.timeout(timeout),
  });
  if (!res.ok) throw new Error(`${res.status} ${url.slice(0, 80)}`);
  return res;
}

const decodeHtml = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x2F;/g, '/').replace(/&#39;/g, "'");

const ENGINES = {
  async ddg(q) {
    const html = await (await get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`)).text();
    if (!html.includes('result__a')) throw new Error('ddg: no results page (rate limited?)');
    return [...html.matchAll(/class="result__a"[^>]*href="[^"]*uddg=([^&"]+)/g)].map(m => decodeURIComponent(m[1]));
  },
  async bing(q) {
    const html = await (await get(`https://www.bing.com/search?q=${encodeURIComponent(q)}&setmkt=en-US&setlang=en`)).text();
    if (!html.includes('b_algo')) throw new Error('bing: no results page (rate limited?)');
    return [...html.matchAll(/<h2[^>]*><a[^>]+href="([^"]+)"/g)].map(m => {
      const href = decodeHtml(m[1]);
      const enc = (href.match(/[?&]u=a1([^&]+)/) || [])[1];
      return enc ? Buffer.from(enc.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8') : href;
    }).filter(u => u.startsWith('http'));
  },
};
const engineState = { ddg: 0, bing: 0 }; // timestamp until which the engine is paused
let turn = 0;

async function webSearch(q) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const names = Object.keys(ENGINES).filter(n => engineState[n] < Date.now());
    if (!names.length) throw new Error('all search engines paused');
    const name = names[turn++ % names.length];
    try {
      return await ENGINES[name](q);
    } catch (e) {
      engineState[name] = Date.now() + 120000 * (attempt + 1);
      console.warn(`  ~ ${e.message}; pausing ${name}`);
    }
  }
  throw new Error('all search engines unavailable');
}

// Product image URLs a page declares for itself, best first.
function pageImages(html, pageUrl) {
  const found = [];
  const add = (u) => { if (!u) return; try { found.push(new URL(decodeHtml(u.trim()), pageUrl).href); } catch {} };
  for (const m of html.matchAll(/data-old-hires="([^"]+)"/g)) add(m[1]);
  for (const m of html.matchAll(/"hiRes":"(https:[^"]+)"/g)) add(m[1]);
  for (const m of html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image(?::secure_url)?|twitter:image)["'][^>]*content=["']([^"']+)["']/gi)) add(m[1]);
  for (const m of html.matchAll(/<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["'](?:og:image|twitter:image)["']/gi)) add(m[1]);
  for (const m of html.matchAll(/"image"\s*:\s*\[?\s*"(https?:[^"]+)"/g)) add(m[1].replace(/\\\//g, '/'));
  return [...new Set(found)].filter(u => !/logo|favicon|sprite|placeholder|default[-_]?(og|share|image)|og[-_]default|social[-_]share|banner/i.test(u));
}

// bg: share of edge pixels that are near-white or transparent (high for studio product shots).
// ink: share of all pixels that are not background (very low for line drawings and mostly-empty images).
async function backgroundScore(img) {
  const { data, info } = await img.clone().resize(64, 64, { fit: 'fill' }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let clean = 0, edge = 0, ink = 0;
  for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) {
    const o = (y * 64 + x) * info.channels;
    const blank = data[o + 3] < 30 || (data[o] > 225 && data[o + 1] > 225 && data[o + 2] > 225);
    if (!blank) ink++;
    if (x > 3 && x < 60 && y > 3 && y < 60) continue;
    edge++;
    if (blank) clean++;
  }
  return { bg: clean / edge, ink: ink / (64 * 64) };
}

// Downloads an image and checks it is big enough and looks like a studio shot (mostly white edges).
async function loadProductImage(url, referer, minBg = 0.5) {
  if (REJECTED.has(url)) return null;
  try {
    const buf = Buffer.from(await (await get(url, { headers: referer ? { Referer: referer } : {} }, 15000)).arrayBuffer());
    const img = sharp(buf, { failOn: 'none' });
    const meta = await img.metadata();
    if (!meta.width || Math.min(meta.width, meta.height) < 250 || meta.width / meta.height > 2.6) return null;
    const { bg, ink } = await backgroundScore(img);
    debug('bg', bg.toFixed(2), 'ink', ink.toFixed(2), meta.width, meta.height, url.slice(0, 90));
    // Low bg: lifestyle shots, banners, screenshots. Low ink: line drawings, tiny product on empty canvas.
    return bg >= minBg && ink >= 0.06 ? { buf, bg } : null;
  } catch (e) {
    debug('image error', url.slice(0, 90), e.message);
    return null;
  }
}

// Candidate manufacturer part codes for a model name, e.g. "hAP ax3 (C53UiG+5HPaxD2HPaxD)".
function productCodes(model) {
  const brand = model.brand.replace(/\(.*?\)/g, '').trim();
  const codes = [model.model.replace(/\(.*?\)/g, '').trim(), ...(model.model.match(/\(([^)]+)\)/g) || []).map(v => v.slice(1, -1).trim())];
  for (const c of [...codes]) {
    codes.push(c.replace(new RegExp(`^${brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i'), ''));
    for (const w of c.split(/\s+/)) if (/\d/.test(w) && /[a-z]/i.test(w) && w.length >= 4) codes.push(w);
  }
  return [...new Set(codes.filter(c => c.length >= 3))].slice(0, 4);
}

const ICECAT_BRANDS = { 'avm-fritzbox': 'AVM', avm: 'AVM', 'amazon-eero': 'eero', eero: 'eero', 'google-nest': 'Google', 'gl-inet': 'GL.iNet', glinet: 'GL.iNet', 'arris-surfboard': 'ARRIS' };

async function fromIcecat(model, keys) {
  const brand = ICECAT_BRANDS[model.brandSlug] || model.brand.replace(/\(.*?\)/g, '').trim();
  for (const code of productCodes(model)) {
    try {
      const res = await fetch(`https://live.icecat.biz/api/?UserName=openIcecat-live&Language=en&Brand=${encodeURIComponent(brand)}&ProductCode=${encodeURIComponent(code)}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(15000) });
      if (!res.ok) continue;
      const data = (await res.json()).data;
      const title = data?.GeneralInfo?.Title || '';
      const imgUrl = data?.Image?.HighPic || data?.Image?.Pic500x500;
      debug('icecat', code, '->', title.slice(0, 70));
      if (!imgUrl || !matches(keys, title)) continue;
      const img = await loadProductImage(imgUrl, null, 0.4);
      if (img) return { ...img, image: imgUrl, page: `https://icecat.biz/p/${data.GeneralInfo.IcecatId}` };
    } catch (e) { debug('icecat error', e.message); }
  }
  return null;
}

const ACCESSORY = /\b(bundle|kit|combo|with access point|sim card|retail box|mount|holder|bracket|case|cover|shelf|stand|cable|adapter|power (supply|cord)|charger|antennas?|replacement|compatible|protector|sticker|skin|hanger|organizer|renewed|refurbished)\b/i;
const SPEED_CLASS = /^(ax|ac|be|n|ad|axe)\d+$/;
let amazonPausedUntil = 0;

async function fromAmazon(model, keys) {
  if (amazonPausedUntil > Date.now()) return null;
  const brand = model.brand.replace(/\(.*?\)/g, '').trim();
  const brandKey = norm(brand).slice(0, 5);
  const query = `${brand} ${model.model.replace(/[()]/g, ' ')}`.replace(/\s+/g, ' ');
  let html;
  try {
    html = await (await get(`https://www.amazon.com/s?k=${encodeURIComponent(query)}`)).text();
  } catch (e) {
    debug('amazon error', e.message);
    amazonPausedUntil = Date.now() + 10 * 60000;
    return null;
  }
  if (/captcha|Type the characters you see/i.test(html) && !html.includes('s-search-result')) {
    console.warn('  ~ amazon: captcha; pausing 10 min');
    amazonPausedUntil = Date.now() + 10 * 60000;
    return null;
  }
  const results = html.split('data-component-type="s-search-result"').slice(1, 9).map(block => ({
    asin: (block.match(/data-asin="([A-Z0-9]{10})"/) || html.match(/data-asin="([A-Z0-9]{10})"/) || [])[1],
    title: decodeHtml((block.match(/<h2[^>]*aria-label="([^"]*)"/) || block.match(/<h2[^>]*>\s*<span[^>]*>([^<]*)/) || [])[1] || ''),
    image: (block.match(/class="s-image"[^>]*src="([^"]+)"/) || block.match(/src="([^"]+)"[^>]*class="s-image"/) || [])[1],
    sponsored: /Sponsored/.test(block.slice(0, 4000)),
  }));
  for (const r of results) {
    debug('amazon', r.sponsored ? '[ad]' : '', r.title.slice(0, 80));
    if (!r.image || !r.title || ACCESSORY.test(r.title) || !matches(keys, r.title)) continue;
    // A model token alone can be ambiguous; require the brand unless the token is a long part code.
    // Speed classes such as "ax3000" or "ac1200" are shared by every brand, so they never count.
    const strongCode = keys.some(k => k.some(t => t.length >= 6 && /\d/.test(t) && !SPEED_CLASS.test(t) && norm(r.title).includes(t)));
    if (!norm(r.title).includes(brandKey) && !strongCode) continue;
    const full = r.image.replace(/\._[^/]*_\.(jpg|png|webp)$/i, '.$1');
    const img = await loadProductImage(full, 'https://www.amazon.com/', 0.5);
    if (img) return { ...img, image: full, page: r.asin ? `https://www.amazon.com/dp/${r.asin}` : 'https://www.amazon.com/' };
  }
  return null;
}

async function fromWebSearch(model, keys) {
  const brand = model.brand.replace(/\(.*?\)/g, '').trim();
  const official = BRAND_DOMAINS[model.brandSlug] ? new RegExp(`(^|\\.)(${BRAND_DOMAINS[model.brandSlug].replace(/\./g, '\\.')})$`, 'i') : null;
  const modelName = model.model.replace(/\(.*?\)/g, '').trim();
  // Quoted so search engines don't read the hyphen in names like "D-Link" as an exclusion.
  const queries = [`"${brand}" "${modelName}"`];
  if (BRAND_DOMAINS[model.brandSlug]) queries.push(`"${modelName}" site:${BRAND_DOMAINS[model.brandSlug].split('|')[0]}`);

  for (const query of queries) {
    let urls;
    try { urls = await webSearch(query); } catch (e) { debug(e.message); return null; }
    const pages = urls
      .filter(u => !BLOCKED.test(u) && !/\.pdf(\?|$)/i.test(u) && !/amazon\.[a-z.]+\/(clp|s|stores)\//i.test(u))
      .map((u, i) => {
        const host = hostOf(u);
        const isOfficial = official?.test(host);
        if (!isOfficial && !RETAILERS.test(host)) return null;
        const pathname = new URL(u).pathname;
        if (/\/(faq|manual|compare|search|community|forum|blog|news|press)\b/i.test(pathname)) return null;
        const supportPenalty = /\/(support|download)/i.test(pathname) || /^(support|kb|downloads?)\./.test(host) ? 15 : 0;
        return { url: u, host, score: (isOfficial ? 30 : 10) + (matches(keys, u) ? 20 : 0) - supportPenalty - i };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    debug('search:', query, '->', urls.slice(0, 8).join(' '));
    debug('pages:', pages.map(p => p.url).join(' '));

    let best = null;
    for (const page of pages) {
      try {
        const html = await (await get(page.url)).text();
        const title = (html.match(/<title[^>]*>([^<]*)/i) || [])[1] || '';
        if (!matches(keys, `${page.url} ${title}`)) { debug('title mismatch', page.url, title.slice(0, 60)); continue; }
        for (const imgUrl of pageImages(html, page.url).slice(0, 3)) {
          const img = await loadProductImage(imgUrl, page.url);
          if (!img) continue;
          const total = page.score + img.bg * 40;
          if (!best || total > best.total) best = { ...img, image: imgUrl, page: page.url, total };
          break;
        }
        if (best && best.total > 60) break;
      } catch (e) { debug('page error', page.url, e.message); }
      await sleep(500);
    }
    if (best) return best;
  }
  return null;
}

async function findPhoto(model) {
  const keys = matchKeys(model);
  for (const source of [fromIcecat, fromAmazon, fromWebSearch]) {
    const pick = await source(model, keys);
    if (pick) return { ...pick, via: source.name.replace(/^from/, '').toLowerCase() };
  }
  return null;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  const misses = fs.existsSync(MISSES) && !RETRY_MISSES ? JSON.parse(fs.readFileSync(MISSES, 'utf8')) : {};
  const models = loadModels();
  const queue = models
    .filter(m => !ONLY || ONLY.has(m.slug))
    .filter(m => ONLY || FORCE || (!manifest[m.slug] && !misses[m.slug]))
    .slice(0, LIMIT);
  console.log(`${queue.length} models to process (${Object.keys(manifest).length} already have photos)`);

  const save = () => {
    fs.writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b))), null, 2) + '\n');
    fs.writeFileSync(MISSES, JSON.stringify(misses, null, 2) + '\n');
  };

  let done = 0, found = 0;
  for (const m of queue) {
    try {
      const pick = await findPhoto(m);
      if (pick) {
        await sharp(pick.buf, { failOn: 'none' })
          .flatten({ background: '#ffffff' })
          .trim({ threshold: 12 })
          .resize(540, 400, { fit: 'contain', background: '#ffffff' })
          .extend({ top: 25, bottom: 25, left: 30, right: 30, background: '#ffffff' })
          .webp({ quality: 78 })
          .toFile(path.join(OUT_DIR, `${m.slug}.webp`));
        manifest[m.slug] = { file: `images/models/${m.slug}.webp`, image: pick.image, page: pick.page };
        delete misses[m.slug];
        found++;
        console.log(`  ✓ ${m.slug.padEnd(48)} ${pick.via.padEnd(10)} ${hostOf(pick.page)}`);
      } else {
        misses[m.slug] = 'no-match';
      }
    } catch (e) {
      console.warn(`  ! ${m.slug}: ${e.message}`);
    }
    if (++done % 10 === 0) { save(); console.log(`  -- ${done}/${queue.length} processed, ${found} found`); }
    await sleep(2000 + Math.random() * 1500);
  }
  save();
  console.log(`\nDone: ${found} new photos. Total with photos: ${Object.keys(manifest).length}/${models.length}. Misses: ${Object.keys(misses).length}`);
}

main();
