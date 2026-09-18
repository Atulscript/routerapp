import { buildSearchIndex } from '../lib/search-index';

// Static at build time: dist/search-index.json
export function GET() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return new Response(JSON.stringify(buildSearchIndex(base)), {
    headers: { 'Content-Type': 'application/json' },
  });
}
