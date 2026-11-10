/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Battlefield 6 Cheats — Aimbot, ESP & Wallhack | BF6',
    description:
      'Explore Battlefield 6 cheat software for PC with aimbot, player ESP, bot tracking, skeleton overlays, crosshair tools, and Cloud DMA at bf6cheats.org.',
  },
  '/products/battlefield-6-cheats/': {
    title: 'Esp Aimbot – Battlefield 6 Cheats for PC | BF6',
    description:
      'Esp aimbot for Battlefield 6: large-scale battles, vehicles, and team combat—feature list and secure checkout at bf6cheats.org.',
  },
  '/products/battlefield-6-cheats/bf6/': {
    title: 'Esp Aimbot – BF6 Feature List | BF6 Cheats',
    description:
      'Esp aimbot features for Battlefield 6: bone selection, skeleton overlays, config sharing, crosshair tools, and Cloud DMA support.',
  },
  '/blog/': {
    title: 'Setup – config tips for BF6 cheats on PC | BF6 Cheats',
    description:
      'Aimbot tuning, ESP setup, Cloud DMA requirements, and config tips for BF6 cheats on PC—guides and patch notes from BF6 Cheats.',
  },
  '/forum/': {
    title: 'Battlefield 6 community forum – aimbot & ESP',
    description:
      'Battlefield 6 community forum: Discuss aimbot settings, ESP layouts, Cloud DMA setup, and troubleshooting for Battlefield 6.',
  },
  '/faq/': {
    title: 'FAQ – BF6 aimbot, ESP & platforms | BF6 Cheats',
    description:
      'FAQ: Answers on BF6 aimbot, ESP, Cloud DMA, checkout, and supported platforms at bf6cheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | BF6 Cheats',
    description: 'Purchase terms, license use, and refund policy for BF6 Cheats products sold through bf6cheats.org.',
  },
  '/privacy/': {
    title: 'Privacy – analytics, cookies & support data | BF6 Cheats',
    description:
      'Privacy: How bf6cheats.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About BF6 Cheats – guides, features & status',
    description:
      'What BF6 Cheats publishes: Battlefield 6 cheat guides, feature notes, loader status, and site updates at bf6cheats.org.',
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
