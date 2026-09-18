import { GATEWAY_IPS, BRANDS, ISPS, ROUTER_MODELS, formatModelTitle, getModelsForBrand } from './data-loader';

export interface SearchItem {
  /** Text matched against the query (not shown). */
  k: string;
  title: string;
  subtitle: string;
  category: 'Gateway IP' | 'Brand' | 'Model' | 'ISP' | 'Tool';
  url: string;
}

// Served once as /search-index.json and fetched lazily by the header and home-page search,
// instead of being inlined into all ~1000 pages.
export function buildSearchIndex(base: string): SearchItem[] {
  const tools: { slug: string; title: string; subtitle: string; k: string }[] = [
    { slug: 'speed-test', title: 'Internet Speed Test', subtitle: 'Ping, jitter, download and upload', k: 'speed test wifi ping jitter download upload bandwidth latency' },
    { slug: 'subnet-calculator', title: 'Subnet Calculator', subtitle: 'CIDR, host ranges, netmask and wildcard', k: 'subnet calculator cidr ip network host range netmask wildcard' },
    { slug: 'dns-servers', title: 'Public DNS Servers', subtitle: 'Fast and private resolvers like 1.1.1.1 and 8.8.8.8', k: 'dns servers cloudflare google quad9 resolver' },
    { slug: 'port-forwarding', title: 'Port Forwarding Guide', subtitle: 'Common ports and router NAT rules', k: 'port forwarding ports minecraft steam plex nat firewall' },
    { slug: 'what-is-my-ip', title: 'What Is My IP?', subtitle: 'Your public IP, ISP and gateway', k: 'what is my ip public ipv4 ipv6 address isp gateway finder' },
    { slug: 'wifi-qr-generator', title: 'Wi-Fi QR Code Generator', subtitle: 'Let guests join by scanning a code', k: 'wifi qr code generator scan connect password' },
    { slug: 'password-generator', title: 'Password Generator', subtitle: 'Strong Wi-Fi and admin passwords', k: 'password generator secure wpa3 admin key' },
    { slug: 'default-passwords', title: 'Default Router Passwords', subtitle: 'Factory logins for every brand', k: 'default router passwords list database' },
  ];

  return [
    ...GATEWAY_IPS.map(ip => ({
      k: `${ip.ip} ${ip.commonBrands.join(' ')} router login admin gateway`,
      title: `${ip.ip} login`,
      subtitle: `Default ${ip.defaultUser} / ${ip.defaultPass}`,
      category: 'Gateway IP' as const,
      url: ip.slug === '192-168-1-1' ? `${base}/` : `${base}/${ip.slug}`,
    })),
    ...BRANDS.map(b => ({
      k: `${b.name} router default password login`,
      title: `${b.name} routers`,
      subtitle: `${b.defaultIp} · ${getModelsForBrand(b.slug).length || b.models.length} models`,
      category: 'Brand' as const,
      url: `${base}/${b.slug}`,
    })),
    ...ROUTER_MODELS.map(m => ({
      k: `${m.brand} ${m.model} ${m.series || ''} ${m.wifiStandard || ''} ${m.category} ${m.ip}`,
      title: formatModelTitle(m.brand, m.model),
      subtitle: `${m.wifiStandard?.startsWith('Wi-Fi') ? m.wifiStandard.split(' (')[0] + ' · ' : ''}${m.ip} · ${m.category}`,
      category: 'Model' as const,
      url: `${base}/${m.slug}`,
    })),
    ...ISPS.map(isp => ({
      k: `${isp.name} isp broadband fiber router login`,
      title: `${isp.name} router login`,
      subtitle: `Gateway ${isp.defaultIp}`,
      category: 'ISP' as const,
      url: `${base}/${isp.slug}`,
    })),
    ...tools.map(t => ({ k: t.k, title: t.title, subtitle: t.subtitle, category: 'Tool' as const, url: `${base}/${t.slug}` })),
  ];
}
