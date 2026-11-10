/** Canonical origin for sitemap, robots, and astro `site` (no trailing slash). */
export function getSiteOrigin() {
  const fromEnv = process.env.SITE || process.env.PUBLIC_SITE_ORIGIN;
  if (fromEnv?.trim()) return fromEnv.trim().replace(/\/$/, '');
  return 'https://bf6cheats.org';
}
