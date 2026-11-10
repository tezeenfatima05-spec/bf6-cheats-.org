import type { IconName } from '../components/icons/types';
import { CLOUD_DMA_CHECKOUT_PATH, HWID_SPOOFER_CHECKOUT_PATH } from '../config/checkout';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const product = link('Battlefield 6 Cheats', productPath('bf6'));
const productsHub = link('Battlefield 6 products', ROUTES.products);
const cloudDma = link('Cloud DMA checkout', CLOUD_DMA_CHECKOUT_PATH);
const hwid = link('HWID Spoofer', HWID_SPOOFER_CHECKOUT_PATH);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Battlefield 6 cheats are online?',
    a: a('The live status banner is on bf6cheats.org and in the Discord #status channel. Check after every Battlefield 6 patch.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide, and config library. Follow the guide before launching Battlefield 6 multiplayer.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using BF6 cheats?',
    a: a('Yes—third-party tools carry risk. Anti-cheat and report systems change over time. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Battlefield 6 on Windows 10/11 64-bit through the EA App. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Use the HWID reset in your portal or open a Discord support ticket with your order email.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where is the product page?',
    a: `${productsHub} lists ${product} with the full feature checklist and secure checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Battlefield 6 player ESP?',
    a: a('Player ESP draws boxes, skeletons, snaplines, health bars, names, and distance on enemies within your max distance setting.'),
    scopes: ['bf6'],
  },
  {
    id: 'aimbot-safe',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'How should I tune aimbot on day one?',
    a: a('Enable visible check, keep FOV small, and raise smoothness before your first Conquest match. Save presets after a custom lobby test.'),
    scopes: ['bf6'],
  },
  {
    id: 'cloud-dma',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Do I need Cloud DMA?',
    a: `Cloud DMA is optional. Read the requirements guide on the blog, then use ${cloudDma} only if your hardware qualifies.`,
  },
  {
    id: 'hwid-tool',
    topic: 'products',
    icon: 'faqBlogSlugHwid',
    q: 'When is the HWID Spoofer used?',
    a: `${hwid} is a separate utility for hardware recovery workflows—not part of the main BF6 cheat build.`,
  },
  {
    id: 'bot-esp',
    topic: 'esp',
    icon: 'comparePlayerEsp',
    q: 'Does bot ESP work in mixed playlists?',
    a: a('Yes. Bot ESP is independent from player ESP. Pair it with aimbot target-bot filters when AI backfills the server.'),
    scopes: ['bf6'],
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `See the ${faqPage} for all answers—or read ${blog} for setup walkthroughs.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter aimbot, ESP, setup, products, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'products', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = kind === 'tier' ? [...scoped, ...general] : [...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Setup: [
    {
      id: 'blog-setup-patch',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I play right after a BF6 patch?',
      a: a('No—check the status banner, update the loader, import your config, and test ESP in a custom match first.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-esp',
      topic: 'blog',
      icon: 'faqWhatIsEsp',
      q: 'Which ESP layers should I enable first?',
      a: a('Start with box and health bar. Add skeleton and snaplines only if FPS stays stable.'),
    },
  ],
};

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const defaultBlogFaqs = siteFaqs.filter((f) => f.topic === 'blog');
  return [...topicFaqs, ...defaultBlogFaqs].slice(0, 6);
}

export const compareRows = [
  { feature: 'Customizable aimbot', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Bot ESP', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Skeleton & health bar', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save & share', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: 'Crosshair overlay', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud DMA support', icon: 'comparePriorityPatch' as const, lite: true, pro: true, elite: true },
];
