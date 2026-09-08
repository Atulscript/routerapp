export interface GatewayIp {
  ip: string;
  slug: string;
  title: string;
  description: string;
  defaultUser: string;
  defaultPass: string;
  commonBrands: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export interface RouterModel {
  brand: string;
  brandSlug: string;
  model: string;
  slug: string;
  series?: string;
  category: 
    | 'Home Wi-Fi'
    | 'Mesh'
    | 'Gaming'
    | 'Travel'
    | 'Prosumer Gateway'
    | 'SMB Router'
    | 'Enterprise Core'
    | 'SD-WAN'
    | '4G/5G Cellular'
    | 'FTTH ONT'
    | 'Modem Gateway';
  wifiStandard?: 
    | 'Wi-Fi 7 (802.11be)'
    | 'Wi-Fi 6E (802.11ax)'
    | 'Wi-Fi 6 (802.11ax)'
    | 'Wi-Fi 5 (802.11ac)'
    | 'Wi-Fi 4 (802.11n)'
    | 'N/A (Wired Gateway)';
  speedRating?: string;
  ports: string;
  throughput?: string;
  os?: string;
  useCase: string;
  ip: string;
  protocol?: string;
  username: string;
  password: string;
  loginUrl?: string;
  features?: string[];
}

export interface Brand {
  name: string;
  slug: string;
  defaultIp: string;
  defaultUser: string;
  defaultPass: string;
  description: string;
  models: RouterModel[];
  guide: string[];
}

export interface Isp {
  name: string;
  slug: string;
  defaultIp: string;
  defaultUser: string;
  defaultPass: string;
  description: string;
  instructions: string[];
}
