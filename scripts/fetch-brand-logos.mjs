// Downloads brand/ISP logos into public/images/brands/ and writes src/lib/brand-logos.json.
// Source order: Wikimedia Commons logo (from Wikidata P154) -> Simple Icons (CC0 SVG)
// -> site apple-touch-icon / icon link / header logo -> Google favicon service.
// Usage: node scripts/fetch-brand-logos.mjs [--force]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'public/images/brands');
const MANIFEST = path.join(ROOT, 'src/lib/brand-logos.json');
const FORCE = process.argv.includes('--force');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36 routerapp-logo-fetch';

// slug -> Simple Icons slug
const SIMPLE_ICONS = {
  apple: 'apple', asus: 'asus', 'avm-fritzbox': 'avm', avm: 'avm', cisco: 'cisco', fortinet: 'fortinet',
  'gl-inet': 'gldotinet', glinet: 'gldotinet', 'google-nest': 'google', google: 'google', huawei: 'huawei',
  keenetic: 'keenetic', linksys: 'linksys', mikrotik: 'mikrotik', motorola: 'motorola', netgear: 'netgear',
  nokia: 'nokia', sonicwall: 'sonicwall', synology: 'synology', 'tp-link': 'tplink', ubiquiti: 'ubiquiti',
  xiaomi: 'xiaomi', opnsense: 'opnsense', spectrum: 'spectrum', bt: 'bt', 'bt-broadband': 'bt',
  'virgin-media': 'virginmedia', vodafone: 'vodafone', 'vodafone-station': 'vodafone', qnap: 'qnap',
  samsung: 'samsung', 'nec-aterm': 'nec', jio: 'jio', airtel: 'airtel', 'deutsche-telekom': 'deutschetelekom',
  att: 'atandt', 'att-fiber': 'atandt', verizon: 'verizon', 'verizon-fios': 'verizon', openwrt: 'openwrt',
  pfsense: 'pfsense', juniper: 'junipernetworks', 'palo-alto': 'paloaltonetworks', 'sky-broadband': 'sky',
  'orange-livebox': 'orange',
};

// slug -> Wikimedia Commons file name (the brand's Wikidata "logo image" P154)
const COMMONS = {
  belkin: 'Belkin logo 2024.svg', sophos: 'Sophos logo2.svg', starlink: 'Starlink Logo 2024.svg',
  'cox-panoramic': 'Cox Communications Logo.svg', humax: 'Humax logo 1103.png', '2wire': '2wire logo.svg',
  '3com': '3com logo.svg',
};

// slug -> website domain used for icon lookup
const DOMAINS = {
  // Added after the bulk run: brands whose domain could not be guessed from the name
  mercusys: 'mercusys.com', aruba: 'arubanetworks.com', trendnet: 'trendnet.com', 'amped-wireless': 'ampedwireless.com',
  sercomm: 'sercomm.com', iptime: 'iptime.com', 'lancom-systems': 'lancom-systems.com', 'alfa-network': 'alfa.com.tw',
  'qihoo-360': '360.cn', xfinity: 'xfinity.com', 'spectrum-internet': 'spectrum.com', 'telus-canada': 'telus.com',
  'free-freebox': 'free.fr', freebox: 'free.fr', kpn: 'kpn.com', 'tim-telecom-italia': 'tim.it', 'tpg-telecom': 'tpg.com.au',
  'centurylink-quantum': 'centurylink.com', 'frontier-fiber': 'frontier.com', levelone: 'level1.com', phicomm: 'phicomm.com',
  'pldt-home-fibr': 'pldthome.com', 'globe-at-home': 'globe.com.ph', 'tm-unifi': 'unifi.com.my', 'telmex-infinitum': 'telmex.com',
  'vivo-fibra': 'vivo.com.br', 'etisalat-by-e': 'etisalat.ae', 'cisco-meraki': 'meraki.cisco.com', 'araknis-networks': 'araknisnetworks.com',
  'smc-networks': 'smc.com', 'casa-systems': 'casa-systems.com', 'aerohive-networks': 'extremenetworks.com', ipfire: 'ipfire.org',
  'bintec-elmeg': 'bintec-elmeg.com', allnet: 'allnet.de', 'lb-link': 'lb-link.com', raisecom: 'raisecom.com', netcore: 'netcoretec.com',
  iball: 'iball.co.in', 'rad-data-communications': 'rad.com', 'atlantis-land': 'atlantis-land.com', 'sfr-box-france': 'sfr.fr',
  'bouygues-telecom-france': 'bouyguestelecom.fr', 'fastweb-italy': 'fastweb.it', 'windtre-italy': 'windtre.it',
  'swisscom-switzerland': 'swisscom.ch', 'sunrise-switzerland': 'sunrise.ch', 'proximus-belgium': 'proximus.be',
  'telenet-belgium': 'telenet.be', 'ziggo-netherlands': 'ziggo.nl', 'a1-telekom-austria': 'a1.net', 'orange-polska': 'orange.pl',
  'play-poland': 'play.pl', 'telenor-nordics': 'telenor.com', 'elisa-finland': 'elisa.fi', 'meo-portugal': 'meo.pt',
  'nos-portugal': 'nos.pt', 'plusnet-uk': 'plus.net', siklu: 'siklu.com', 'zoom-telephonics': 'minim.com', 'black-box': 'blackbox.com',
  'dasan-networks': 'dasannetworks.com', 'tejas-networks': 'tejasnetworks.com', vvdn: 'vvdntech.com', aztech: 'aztech.com',
  'viettel-equipment': 'viettel.com.vn', poynting: 'poynting.tech', comfast: 'comfast.com.cn', 'banana-pi': 'banana-pi.org',
  'friendlyelec': 'friendlyelec.com', 'pc-engines': 'pcengines.ch', thuraya: 'thuraya.com', glocalme: 'glocalme.com',
  'dd-wrt': 'dd-wrt.com', 'tomato-firmware': 'freshtomato.org', 'china-mobile': 'chinamobileltd.com', 'china-unicom': 'chinaunicom.com',
  'turkcell-superonline': 'turkcell.com.tr', 'spark-new-zealand': 'spark.co.nz', 'chunghwa-telecom': 'cht.com.tw',
  'totalplay': 'totalplay.com.mx', yousee: 'yousee.dk', 'dell-networking': 'dell.com', 'proxim-wireless': 'proxim.com',
  strong: 'strong.tv', binatone: 'binatonetelecom.com', 'verizon-5g-home-internet': 'verizon.com',
  't-mobile-5g-home-internet': 't-mobile.com', 'community-fibre': 'communityfibre.co.uk', 'salt-fiber': 'salt.ch',
  'masmovil': 'masmovil.es', 'sk-broadband': 'skbroadband.com', 'kt-olleh-giga': 'kt.com', smartrg: 'adtran.com',
  actiontec: 'actiontec.com', adtran: 'adtran.com', 'alcatel-lucent': 'al-enterprise.com',
  eero: 'eero.com', 'amazon-eero': 'eero.com', arris: 'surfboard.com', 'arris-surfboard': 'surfboard.com',
  askey: 'askey.com.tw', billion: 'billion.com', buffalo: 'buffalotech.com',
  calix: 'calix.com', comtrend: 'comtrend.com', cudy: 'cudy.com', digisol: 'digisol.com', 'd-link': 'dlink.com',
  draytek: 'draytek.com', 'dzs-zhone': 'dzsi.com', grandstream: 'grandstream.com', hitron: 'hitrontech.com',
  mercusys: 'mercusys.com', mitrastar: 'mitrastar.com', netlink: 'netlink-india.com',
  optilink: 'optilinknetworks.com', 'ruijie-reyee': 'ruijienetworks.com', ruijie: 'ruijienetworks.com',
  sagemcom: 'sagemcom.com', syrotech: 'syrotech.com',
  technicolor: 'vantiva.com', vantiva: 'vantiva.com', teltonika: 'teltonika-networks.com', tenda: 'tendacn.com',
  totolink: 'totolink.net', watchguard: 'watchguard.com', wavlink: 'wavlink.com',
  zte: 'zte.com.cn', zyxel: 'zyxel.com', peplink: 'peplink.com', 
  centurylink: 'centurylink.com', xfinity: 'xfinity.com', bell: 'bell.ca', 'rogers-ignite': 'rogers.com',
  cradlepoint: 'cradlepoint.com', aruba: 'arubanetworks.com', 
  engenius: 'engeniustech.com', arcadyan: 'arcadyan.com', vsol: 'vsolcn.com', 'amped-wireless': 'ampedwireless.com',
  'check-point': 'checkpoint.com', inseego: 'inseego.com', 
  'sierra-wireless': 'sierrawireless.com', netis: 'netis-systems.com', westell: 'westell.com', edimax: 'edimax.com',
  'allied-telesis': 'alliedtelesis.com', barracuda: 'barracuda.com', 'extreme-networks': 'extremenetworks.com',
  usrobotics: 'usr.com', fiberhome: 'fiberhome.com', genexis: 'genexis.eu', 'western-digital': 'westerndigital.com',
  'gx-group': 'gxgroup.eu', 'gx-earth': 'gxgroup.eu', 'io-data': 'iodata.jp',
  yamaha: 'yamaha.com', bsnl: 'bsnl.co.in',
  'act-fibernet': 'actcorp.in', 'tata-play-fiber': 'tataplayfiber.com', 'telstra-australia': 'telstra.com.au',
  'optus-australia': 'optus.com.au', 'talktalk-broadband': 'talktalk.co.uk', 
  beetel: 'beetel.in', sterlite: 'stl.tech', alphion: 'alphion.in', greenwave: 'greenwavesystems.com',
};
// Brands without an entry keep the initials badge. Left out on purpose: defunct brands (3ware, Pace, DBC) and
// sites whose icons came back wrong or white-on-white (Freebox, Kaon, NetComm, Netgate, Sercomm, TRENDnet, Digi, Ruckus).

// Every brand/ISP entry, with its display name (needed to look brands up on Wikidata).
function collectBrands() {
  const named = new Map();
  const dl = fs.readFileSync(path.join(ROOT, 'src/lib/data-loader.ts'), 'utf8');
  for (const m of dl.matchAll(/name: '([^']+)',\s*\n\s*slug: '([^']+)'/g)) named.set(m[2], m[1]);
  for (const m of dl.matchAll(/"name": "([^"]+)",\s*\n\s*"slug": "([^"]+)"/g)) named.set(m[2], m[1]);
  const md = fs.readFileSync(path.join(ROOT, 'src/lib/router-models-data.ts'), 'utf8');
  for (const m of md.matchAll(/"brand": "([^"]+)",\s*\n\s*"brandSlug": "([^"]+)"/g)) {
    if (!named.has(m[2])) named.set(m[2], m[1]);
  }
  return [...named].map(([slug, name]) => ({ slug, name }));
}

// Wikidata: the brand's own logo (P154), else its official website (P856) to pull a site icon from.
async function fromWikidata(name) {
  const clean = name.replace(/\(.*?\)/g, '').replace(/\b(CPE|gateways?)\b/gi, '').trim();
  const searchUrl = `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&limit=3&search=${encodeURIComponent(clean)}`;
  const hits = (await (await get(searchUrl)).json()).search || [];
  for (const hit of hits.slice(0, 2)) {
    const entity = (await (await get(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims|descriptions&ids=${hit.id}`)).json()).entities?.[hit.id];
    const desc = entity?.descriptions?.en?.value || '';
    // Only trust companies/brands, not people or places with the same name
    if (!/company|manufacturer|brand|corporation|enterprise|business|telecom|provider|vendor|technology|electronics/i.test(desc)) continue;
    const logoFile = entity?.claims?.P154?.[0]?.mainsnak?.datavalue?.value;
    if (logoFile) return { commonsFile: logoFile };
    const site = entity?.claims?.P856?.[0]?.mainsnak?.datavalue?.value;
    if (site) {
      try { return { domain: new URL(site).hostname.replace(/^www\./, '') }; } catch {}
    }
  }
  return null;
}

// Last resort: guess a domain from the brand name (e.g. "Aerohive Networks" -> aerohive.com)
function guessDomains(name) {
  const base = name.toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/&/g, 'and')
    .replace(/\b(inc|ltd|llc|gmbh|corp|corporation|co|company|technologies|technology|networks|network|systems|system|electronics|communications|group|holdings|international|solutions|broadband|telecom|cpe)\b/g, ' ')
    .replace(/[^a-z0-9]+/g, '');
  if (base.length < 3) return [];
  return [`${base}.com`, `${base}.net`];
}

async function get(url, timeout = 15000) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(timeout) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

function imageInfo(buf, contentType = '') {
  if (buf.length < 100) return null;
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { ext: 'png', width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  const head = buf.subarray(0, 512).toString('utf8');
  if (/<svg[\s>]/i.test(head) || contentType.includes('svg')) return { ext: 'svg', width: 999, height: 999 };
  if (buf[0] === 0xff && buf[1] === 0xd8) return { ext: 'jpg', width: 999, height: 999 };
  if (head.startsWith('RIFF') && head.slice(8, 12) === 'WEBP') return { ext: 'webp', width: 999, height: 999 };
  if (buf.readUInt16LE(0) === 0 && buf.readUInt16LE(2) === 1) {
    let max = 0;
    for (let i = 0, n = buf.readUInt16LE(4); i < n && 6 + i * 16 < buf.length; i++) max = Math.max(max, buf[6 + i * 16] || 256);
    return { ext: 'ico', width: max, height: max };
  }
  return null;
}

function iconLinks(html, baseUrl) {
  const links = [];
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    const rel = (tag.match(/rel=["']([^"']+)["']/i) || [])[1]?.toLowerCase() || '';
    const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
    if (!href || !/icon/.test(rel) || /mask-icon/.test(rel)) continue;
    const size = parseInt((tag.match(/sizes=["'](\d+)/i) || [])[1] || '0', 10);
    const svg = /\.svg(\?|$)/i.test(href) || /image\/svg/i.test(tag);
    const score = (rel.includes('apple-touch') ? 1000 : 0) + (svg ? 900 : 0) + size;
    try { links.push({ url: new URL(href, baseUrl).href, score }); } catch {}
  }
  return links.sort((a, b) => b.score - a.score).map(l => l.url);
}

async function tryImage(url, minSize) {
  try {
    if (url.startsWith('data:') || PARKED.test(url)) return null;
    const res = await get(url);
    const buf = Buffer.from(await res.arrayBuffer());
    const info = imageInfo(buf, res.headers.get('content-type') || '');
    if (info && Math.min(info.width, info.height) >= minSize) return { buf, ...info };
  } catch {}
  return null;
}

async function fromCommons(fileName) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName.replace(/ /g, '_'))}`;
  const img = await tryImage(url, 32);
  return img ? { ...img, source: `commons:${fileName}` } : null;
}

async function fromSimpleIcons(siSlug) {
  const res = await get(`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${siSlug}.svg`);
  let svg = await res.text();
  const data = await siData();
  const hex = data.get(siSlug) || '000000';
  svg = svg.replace('<svg ', `<svg fill="#${hex}" `);
  return { buf: Buffer.from(svg), ext: 'svg', source: `simple-icons:${siSlug}` };
}

let _si;
async function siData() {
  if (!_si) {
    const json = await (await get('https://cdn.jsdelivr.net/npm/simple-icons@latest/data/simple-icons.json')).json();
    _si = new Map((Array.isArray(json) ? json : json.icons).map(i => [i.slug, i.hex]));
  }
  return _si;
}

// Header logo <img> tags whose src/alt/class mention "logo"; SVGs first.
function headerLogos(html, baseUrl) {
  const found = [];
  for (const tag of html.match(/<img\b[^>]*>/gi) || []) {
    if (!/logo/i.test(tag)) continue;
    const src = (tag.match(/\s(?:data-src|src)=["']([^"']+)["']/i) || [])[1];
    if (!src || /footer|partner|client|award|cert|white|light|inverse|logos\./i.test(src)) continue;
    try { found.push(new URL(src, baseUrl).href); } catch {}
  }
  return found.slice(0, 4).sort((a, b) => /\.svg/i.test(b) - /\.svg/i.test(a));
}

// Domain-parking pages and placeholder logos are never the brand's real mark.
const PARKED = /domainmarket|sedoparking|spaceship-cdn|superlander|domeinnaamnietactief|afternic|hugedomains|bodis|parkingcrew|namecheap|wsimg\.com|ly200-cdn|digimedia-logo|animalhero/i;

async function fromWebsite(domain) {
  let small = null;
  for (const origin of [`https://www.${domain}`, `https://${domain}`]) {
    try {
      const res = await get(origin);
      const html = await res.text();
      const icons = iconLinks(html, res.url);
      for (const url of icons) {
        const img = await tryImage(url, 64);
        if (img) return { ...img, source: url };
      }
      const touch = await tryImage(new URL('/apple-touch-icon.png', res.url).href, 64);
      if (touch) return { ...touch, source: 'apple-touch-icon' };
      for (const url of headerLogos(html, res.url)) {
        const img = await tryImage(url, 32);
        if (img) return { ...img, source: url };
      }
      for (const url of [...icons, new URL('/favicon.ico', res.url).href]) {
        small = await tryImage(url, 32);
        if (small) { small.source = url; break; }
      }
      break;
    } catch {}
  }
  if (small) return small;
  const g = await tryImage(`https://www.google.com/s2/favicons?domain=${domain}&sz=256`, 32);
  return g ? { ...g, source: `google-favicon:${domain}` } : null;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = fs.existsSync(MANIFEST) && !FORCE ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  const brands = collectBrands();
  const slugs = brands.map(b => b.slug);
  const missing = [];
  const queue = brands.filter(b => FORCE || !manifest[b.slug]);

  async function worker() {
    for (let entry; (entry = queue.shift()); ) {
      const { slug, name } = entry;
      let logo = null;
      try {
        if (COMMONS[slug]) logo = await fromCommons(COMMONS[slug]);
        else if (SIMPLE_ICONS[slug]) logo = await fromSimpleIcons(SIMPLE_ICONS[slug]);
        else if (DOMAINS[slug]) logo = await fromWebsite(DOMAINS[slug]);
        else {
          // Unmapped brand: ask Wikidata, then try a guessed domain
          const wd = await fromWikidata(name).catch(() => null);
          if (wd?.commonsFile) logo = await fromCommons(wd.commonsFile);
          if (!logo && wd?.domain) logo = await fromWebsite(wd.domain);
          for (const guess of (!logo ? guessDomains(name) : [])) {
            logo = await fromWebsite(guess);
            if (logo) break;
          }
        }
      } catch (e) { console.warn(`  ! ${slug}: ${e.message}`); }
      if (!logo) { missing.push(slug); continue; }
      const file = `${slug}.${logo.ext}`;
      fs.writeFileSync(path.join(OUT_DIR, file), logo.buf);
      manifest[slug] = { file: `images/brands/${file}`, source: logo.source };
      console.log(`  ✓ ${slug.padEnd(22)} ${logo.source}`);
    }
  }
  await Promise.all(Array.from({ length: 8 }, worker));

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`\n${Object.keys(sorted).length}/${slugs.length} logos saved. Missing (initials fallback): ${missing.sort().join(', ') || 'none'}`);
}

main();
