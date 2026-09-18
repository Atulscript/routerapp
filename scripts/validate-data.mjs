import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

async function validateData() {
  console.log('\n======================================================');
  console.log('📡 ROUTERGUIDE AUTOMATED DATA VALIDATION SUITE');
  console.log('======================================================\n');

  const server = await createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { GATEWAY_IPS, BRANDS, ISPS, ROUTER_MODELS } = await server.ssrLoadModule('./src/lib/data-loader.ts');

  const brandLogosPath = path.resolve(process.cwd(), './src/lib/brand-logos.json');
  const modelImagesPath = path.resolve(process.cwd(), './src/lib/model-images.json');
  
  const brandLogos = fs.existsSync(brandLogosPath) ? JSON.parse(fs.readFileSync(brandLogosPath, 'utf-8')) : {};
  const modelImages = fs.existsSync(modelImagesPath) ? JSON.parse(fs.readFileSync(modelImagesPath, 'utf-8')) : {};

  const staticRoutes = [
    'about', 'brands', 'contact', 'default-passwords', 'disclaimer',
    'dns-servers', 'index', 'ip-addresses', 'isps', 'password-generator',
    'port-forwarding', 'privacy-policy', 'routers', 'speed-test',
    'subnet-calculator', 'terms-of-service', 'tools', 'what-is-my-ip',
    'wifi-qr-generator', '192-168-1-1'
  ];

  let errors = [];
  let warnings = [];

  const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // 1. Validate Gateway IPs
  const seenGatewayIps = new Set();
  const seenGatewaySlugs = new Set();
  GATEWAY_IPS.forEach((g, idx) => {
    if (!ipv4Regex.test(g.ip)) {
      errors.push(`[GATEWAY_IP] Invalid IPv4 format: "${g.ip}" at index ${idx}`);
    }
    if (seenGatewayIps.has(g.ip)) {
      errors.push(`[GATEWAY_IP] Duplicate IP address: "${g.ip}"`);
    }
    seenGatewayIps.add(g.ip);

    if (seenGatewaySlugs.has(g.slug)) {
      errors.push(`[GATEWAY_IP] Duplicate slug: "${g.slug}"`);
    }
    seenGatewaySlugs.add(g.slug);

    if (!g.title || !g.description || !g.defaultUser || !g.defaultPass) {
      warnings.push(`[GATEWAY_IP] Incomplete metadata for IP "${g.ip}"`);
    }
  });

  // 2. Validate Brands
  const seenBrandSlugs = new Set();
  const brandSlugMap = new Map();
  BRANDS.forEach((b, idx) => {
    if (seenBrandSlugs.has(b.slug)) {
      errors.push(`[BRAND] Duplicate brand slug: "${b.slug}" at index ${idx}`);
    }
    seenBrandSlugs.add(b.slug);
    brandSlugMap.set(b.slug, b);

    if (!b.name || !b.slug || !b.defaultIp) {
      errors.push(`[BRAND] Missing required fields in brand index ${idx}: "${b.name || 'Unnamed'}"`);
    }
  });

  // 3. Validate ISPs
  const seenIspSlugs = new Set();
  const ispSlugMap = new Map();
  ISPS.forEach((i, idx) => {
    if (seenIspSlugs.has(i.slug)) {
      errors.push(`[ISP] Duplicate ISP slug: "${i.slug}" at index ${idx}`);
    }
    seenIspSlugs.add(i.slug);
    ispSlugMap.set(i.slug, i);

    if (!i.name || !i.slug || !i.defaultRouterIp && !i.defaultIp) {
      errors.push(`[ISP] Missing required fields in ISP index ${idx}: "${i.name || 'Unnamed'}"`);
    }
  });

  // 4. Validate Router Models
  const seenModelSlugs = new Set();
  const brandModelCounts = new Map();
  BRANDS.forEach(b => brandModelCounts.set(b.slug, 0));
  const ispModelCounts = new Map();
  ISPS.forEach(i => ispModelCounts.set(i.slug, 0));

  ROUTER_MODELS.forEach((m, idx) => {
    if (seenModelSlugs.has(m.slug)) {
      errors.push(`[MODEL] Duplicate model slug: "${m.slug}" at index ${idx}`);
    }
    seenModelSlugs.add(m.slug);

    if (!ipv4Regex.test(m.ip)) {
      errors.push(`[MODEL] Invalid IP format in model "${m.model}": "${m.ip}"`);
    }

    // Foreign key check: brandSlug must exist in BRANDS or ISPS
    const brandExists = brandSlugMap.has(m.brandSlug);
    const ispExists = ispSlugMap.has(m.brandSlug);
    if (!brandExists && !ispExists) {
      errors.push(`[MODEL] Orphan brandSlug "${m.brandSlug}" in model "${m.model}" (brand: "${m.brand}")`);
    }

    if (brandModelCounts.has(m.brandSlug)) {
      brandModelCounts.set(m.brandSlug, brandModelCounts.get(m.brandSlug) + 1);
    }
    if (ispModelCounts.has(m.brandSlug)) {
      ispModelCounts.set(m.brandSlug, ispModelCounts.get(m.brandSlug) + 1);
    }
  });

  // Verify no brand has 0 models
  brandModelCounts.forEach((count, slug) => {
    if (count === 0) {
      errors.push(`[BRAND_COVERAGE] Brand "${slug}" has 0 models registered.`);
    }
  });

  // Verify no ISP has 0 models
  ispModelCounts.forEach((count, slug) => {
    if (count === 0) {
      errors.push(`[ISP_COVERAGE] ISP "${slug}" has 0 models registered.`);
    }
  });

  // 5. Cross-Collection & Flat Root Route Collision Check
  const registry = new Map();
  function checkCollision(slug, type, label) {
    if (registry.has(slug)) {
      const prev = registry.get(slug);
      // Special allowance: 192-168-1-1 is filtered out of getAllSlugs() in favor of 192-168-1-1.astro
      if (slug === '192-168-1-1' && (prev.type === 'STATIC_ROUTE' || type === 'STATIC_ROUTE')) {
        return;
      }
      errors.push(`[SLUG_COLLISION] Slug "${slug}" collides between ${prev.type} ("${prev.label}") and ${type} ("${label}")`);
    } else {
      registry.set(slug, { type, label });
    }
  }

  staticRoutes.forEach(r => checkCollision(r, 'STATIC_ROUTE', r));
  GATEWAY_IPS.forEach(g => {
    if (g.slug !== '192-168-1-1') {
      checkCollision(g.slug, 'GATEWAY_IP', g.ip);
    }
  });
  BRANDS.forEach(b => checkCollision(b.slug, 'BRAND', b.name));
  ISPS.forEach(i => checkCollision(i.slug, 'ISP', i.name));
  ROUTER_MODELS.forEach(m => checkCollision(m.slug, 'MODEL', `${m.brand} ${m.model}`));

  // Asset Coverage Analysis
  let brandLogoCount = 0;
  BRANDS.forEach(b => {
    if (brandLogos[b.slug]) brandLogoCount++;
  });
  let modelImageCount = 0;
  ROUTER_MODELS.forEach(m => {
    if (modelImages[m.slug]) modelImageCount++;
  });

  await server.close();

  // Print Report
  console.log('📊 DATASET METRICS:');
  console.log(`  • Gateway IPs:        ${GATEWAY_IPS.length} verified`);
  console.log(`  • Router Brands:      ${BRANDS.length} verified (${brandLogoCount}/${BRANDS.length} with logos, 100% with hardware models)`);
  console.log(`  • Internet Providers: ${ISPS.length} verified (100% with hardware models)`);
  console.log(`  • Hardware Models:    ${ROUTER_MODELS.length} verified (${modelImageCount}/${ROUTER_MODELS.length} with photos)`);
  console.log(`  • Total Unique Slugs: ${registry.size} registered across root namespace\n`);

  if (warnings.length > 0) {
    console.log(`⚠️  WARNINGS (${warnings.length}):`);
    warnings.slice(0, 5).forEach(w => console.log(`   ${w}`));
    if (warnings.length > 5) console.log(`   ...and ${warnings.length - 5} more`);
    console.log('');
  }

  if (errors.length > 0) {
    console.error(`❌ VALIDATION FAILED WITH ${errors.length} ERROR(S):`);
    errors.forEach(err => console.error(`   ${err}`));
    console.log('\nPlease fix the errors above before building for production.\n');
    process.exit(1);
  } else {
    console.log('✅ ALL DATA INTEGRITY CHECKS PASSED (0 errors)!\n');
    process.exit(0);
  }
}

validateData().catch(err => {
  console.error('Fatal error in validation suite:', err);
  process.exit(1);
});

