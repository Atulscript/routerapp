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
  brand?: string;
  model: string;
  ip: string;
  protocol?: string;
  username: string;
  password: string;
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
