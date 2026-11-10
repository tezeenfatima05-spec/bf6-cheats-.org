/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/battlefield-6-cheats/'],
  ['/cheats/', '/products/battlefield-6-cheats/'],
  ['/cheats/lite', '/products/battlefield-6-cheats/'],
  ['/cheats/lite/', '/products/battlefield-6-cheats/'],
  ['/cheats/pro', '/products/battlefield-6-cheats/'],
  ['/cheats/pro/', '/products/battlefield-6-cheats/'],
  ['/cheats/elite', '/products/battlefield-6-cheats/bf6/'],
  ['/cheats/elite/', '/products/battlefield-6-cheats/bf6/'],
  ['/cheats/compare', '/blog/bf6-aimbot-settings-guide/'],
  ['/cheats/compare/', '/blog/bf6-aimbot-settings-guide/'],
  ['/products/battlefield-6-cheats', '/products/battlefield-6-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
