import { ROUTER_MODELS } from '../lib/data-loader';

// Static at build time: dist/models.json. Loaded by RouterLookupTable when it scrolls into view.
export function GET() {
  const models = ROUTER_MODELS.map(m => ({
    brand: m.brand,
    brandSlug: m.brandSlug,
    model: m.model,
    slug: m.slug,
    protocol: m.protocol || 'HTTP',
    ip: m.ip,
    username: m.username,
    password: m.password,
  }));
  return new Response(JSON.stringify(models), { headers: { 'Content-Type': 'application/json' } });
}
