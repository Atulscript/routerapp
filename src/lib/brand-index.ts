import { BRANDS, ROUTER_MODELS, brandKey } from './data-loader';
import type { Brand } from './types';

/**
 * Helpers for the two-tier /brands page: a handful of brands get a full card,
 * the rest get a compact A-Z link so all 800+ brand pages stay linked from one URL.
 */

// One pass over ROUTER_MODELS instead of a filter per brand, which at 836 brands
// x 2585 models was the slowest part of building the page.
const MODEL_COUNTS = new Map<string, number>();
for (const model of ROUTER_MODELS) {
  MODEL_COUNTS.set(model.brandSlug, (MODEL_COUNTS.get(model.brandSlug) ?? 0) + 1);
}

/** Model count for a brand, falling back to its own inline list when the database has none. */
export function getModelCount(brand: Brand): number {
  return MODEL_COUNTS.get(brand.slug) || brand.models.length;
}

/** The A-Z bucket a brand sorts into. Digit-led names (3Com, 2Wire) share one bucket. */
export function getIndexLetter(name: string): string {
  const first = name.trim().charAt(0).toUpperCase();
  return first >= '0' && first <= '9' ? '0-9' : first;
}

function byName(a: Brand, b: Brand): number {
  return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
}

/**
 * Brands that earn a full card, most models first. Deduplicated by brandKey so the
 * handful of brands listed twice (GL.iNet, AVM, eero) take one slot, not two.
 */
export function getFeaturedBrands(limit = 60): Brand[] {
  const seen = new Set<string>();
  return [...BRANDS]
    .sort((a, b) => getModelCount(b) - getModelCount(a) || byName(a, b))
    .filter(brand => !seen.has(brandKey(brand.name)) && seen.add(brandKey(brand.name)))
    .slice(0, limit);
}

/**
 * Every brand grouped by letter. Nothing is dropped, including the duplicate-name
 * brands: each one has its own slug and page, so each keeps its link here.
 */
export function getBrandGroups(): { letter: string; brands: Brand[] }[] {
  const groups = new Map<string, Brand[]>();

  for (const brand of [...BRANDS].sort(byName)) {
    const letter = getIndexLetter(brand.name);
    const bucket = groups.get(letter);
    if (bucket) bucket.push(brand);
    else groups.set(letter, [brand]);
  }

  // '0-9' leads, then the letters that actually have brands behind them.
  return [...groups.entries()]
    .sort(([a], [b]) => (a === '0-9' ? -1 : b === '0-9' ? 1 : a.localeCompare(b)))
    .map(([letter, brands]) => ({ letter, brands }));
}
