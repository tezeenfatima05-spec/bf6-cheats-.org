/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Battlefield 6 Cheats — Aimbot, ESP & Wallhack | BF6 Cheats',
    description:
      'Explore Battlefield 6 cheats for PC featuring customizable aimbot, player ESP, bot ESP, skeleton ESP, health bars, snaplines, crosshair settings, and Cloud DMA support at BF6 Cheats.',
  },
  '/products/battlefield-6-cheats/': {
    title: 'Battlefield 6 Cheats for PC | Aimbot & ESP',
    description:
      'Battlefield 6 cheat software with aimbot, wallhack-style ESP, bot tracking, and Cloud DMA support — product details and checkout at bf6cheats.org.',
  },
  '/products/battlefield-6-cheats/bf6/': {
    title: 'BF6 Cheats | Aimbot, Player ESP & Bot ESP',
    description:
      'Full feature list for Battlefield 6 cheats: bone selection aimbot, skeleton ESP, config sharing, crosshair tools, and Cloud DMA support.',
  },
  '/blog/': {
    title: 'Battlefield 6 Cheats Guides & Setup Notes',
    description:
      'Aimbot tuning, ESP setup, Cloud DMA requirements, and config tips for BF6 cheats on PC.',
  },
  '/forum/': {
    title: 'Battlefield 6 Community Forum | BF6 Cheats',
    description: 'Discuss aimbot settings, ESP layouts, Cloud DMA setup, and troubleshooting for Battlefield 6.',
  },
  '/faq/': {
    title: 'FAQ | Battlefield 6 Cheats & Setup',
    description:
      'Answers on BF6 aimbot, ESP, Cloud DMA, checkout, and supported platforms at bf6cheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | BF6 Cheats',
    description: 'Purchase terms, license use, and refund policy for BF6 Cheats products sold through bf6cheats.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | BF6 Cheats',
    description: 'How bf6cheats.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About BF6 Cheats',
    description: 'What BF6 Cheats publishes: Battlefield 6 cheat guides, feature notes, and status updates at bf6cheats.org.',
  },
  '/support/': {
    title: 'Support | BF6 Cheats',
    description: 'Get help with loader setup, Cloud DMA, and checkout for Battlefield 6 cheats on PC.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
