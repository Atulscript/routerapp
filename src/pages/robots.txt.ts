import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const siteUrl = site ? new URL(base, site).href : (import.meta.env.SITE || 'https://atulscript.github.io/routerapp');
  const isGitHubPages = siteUrl.includes('github.io');
  const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

  if (isGitHubPages && !allowIndexing) {
    // Staging on GitHub Pages: Disallow all search engines
    const content = [
      '# Staging / Preview on GitHub Pages',
      '# Indexing is disabled to prevent duplicate content before production domain launch.',
      'User-agent: *',
      'Disallow: /',
      ''
    ].join('\n');

    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    });
  }

  // Live Production Custom Domain: Allow crawling & reference sitemap
  const sitemapUrl = new URL(`${base ? base + '/' : ''}sitemap-index.xml`, site || siteUrl).href;
  const content = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
    ''
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
