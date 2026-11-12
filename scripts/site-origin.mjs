/** Production canonical host — used for sitemap, robots, and Astro `site`. */
export const CANONICAL_SITE_ORIGIN = 'https://bf6cheats.org';

/** Canonical origin for sitemap, robots, and astro `site` (no trailing slash). */
export function getSiteOrigin() {
  const fromEnv = (process.env.SITE || process.env.PUBLIC_SITE_ORIGIN || '').trim().replace(/\/$/, '');

  if (fromEnv && !fromEnv.includes('workers.dev') && fromEnv === CANONICAL_SITE_ORIGIN) {
    return fromEnv;
  }

  if (fromEnv && fromEnv.includes('workers.dev')) {
    console.warn(
      `[site-origin] Ignoring workers.dev SITE (${fromEnv}); using ${CANONICAL_SITE_ORIGIN}.`,
    );
  }

  return CANONICAL_SITE_ORIGIN;
}
