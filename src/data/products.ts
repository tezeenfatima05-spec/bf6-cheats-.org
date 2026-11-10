import { t } from '../i18n';
import { checkoutPath, PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, PRODUCT_SLUG } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  bf6: [
    'bf6-aimbot-settings-guide',
    'bf6-player-esp-wallhack-setup',
    'bf6-cloud-dma-requirements',
    'bf6-config-system-tips',
  ],
};

const gameplay = '/images/gameplay';

const slideDefs: ProductSlide[] = [
  {
    src: `${gameplay}/screenshot-3.webp`,
    alt: 'Battlefield 6 ESP overlay in a concrete stronghold firefight',
    caption: 'Player ESP',
    captionDesc: 'Boxes, skeleton, health bars and distance readouts stay readable in close quarters.',
  },
  {
    src: `${gameplay}/screenshot-visuals.webp`,
    alt: 'BF6 cheat menu visual settings panel',
    caption: 'Visual settings',
    captionDesc: 'Tune ESP distance, snaplines and team colors from one organized menu.',
  },
  {
    src: `${gameplay}/screenshot-1.webp`,
    alt: 'Tactical scope view down an industrial corridor in Battlefield 6',
    caption: 'Aimbot FOV',
    captionDesc: 'Custom FOV ring, smoothness and bone selection for controlled tracking.',
  },
  {
    src: `${gameplay}/screenshot-5.webp`,
    alt: 'BF6 misc options including crosshair and config system',
    caption: 'Misc & configs',
    captionDesc: 'Crosshair styles, FPS limit, menu binds, and save or share profiles.',
  },
  {
    src: `${gameplay}/screenshot-4.webp`,
    alt: 'Long-range sightline through a dusty alley in Battlefield 6',
    caption: 'Max distance',
    captionDesc: 'Scale ESP and aim distance so long lanes do not clutter the overlay.',
  },
  {
    src: `${gameplay}/screenshot-2.webp`,
    alt: 'Urban objective capture firefight in Battlefield 6',
    caption: 'Bot ESP',
    captionDesc: 'Filter bots and live players so attack targets match your playlist.',
  },
];

export const fullFeatureList: string[] = [
  'Toggle aimbot',
  'Aim always mode',
  'Bone selection (head, neck, body, pelvis)',
  'Customizable aim bind',
  'Customizable smoothness',
  'Customizable FOV',
  'Customizable distance',
  'Target bots',
  'Target teams',
  'Visible check',
  'Draw FOV border',
  'Draw FOV background',
  'Player ESP',
  'Bot ESP',
  'Max distance control',
  'Health bar ESP',
  'Skeleton ESP',
  'Snapline ESP',
  'Box ESP',
  'Name ESP',
  'Distance ESP',
  'Crosshair enable',
  'Crosshair style, size and thickness',
  'Config save, load, share and delete',
  'Menu language (English, Chinese)',
  'FPS limit',
  'Menu bind',
  'Unload bind',
  'Cloud DMA support',
];

const bf6SystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A PC that meets Battlefield 6 published hardware requirements.' },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on bf6cheats.org before checkout—especially after a Battlefield 6 update.',
  },
  {
    num: '02',
    title: 'Complete secure checkout',
    desc: 'Use the Buy now flow to reach checkout, then confirm your order email and Windows version.',
  },
  {
    num: '03',
    title: 'Download from the portal',
    desc: 'Open the operator portal, pull the latest loader, and import a conservative preset.',
  },
  {
    num: '04',
    title: 'Verify in a custom match',
    desc: 'Test aimbot FOV, ESP distance and crosshair settings before jumping into multiplayer.',
  },
];

const bf6Product: ProductPage = {
  slug: PRODUCT_SLUG,
  kind: 'tier',
  badge: 'Available',
  tier: 'Premium',
  name: 'BF6',
  title: 'Battlefield 6 Cheats',
  subtitle: 'Customizable aimbot, player ESP, bot ESP, and Cloud DMA support for PC.',
  desc: 'Battlefield 6 cheats for PC with aimbot tuning, wallhack-style ESP, bot tracking, skeleton overlays, crosshair tools, and Cloud DMA support.',
  features: [
    'Customizable aimbot',
    'Player & bot ESP',
    'Skeleton & health bar',
    'Config save and share',
    'Cloud DMA support',
    'Crosshair customization',
  ],
  more: fullFeatureList.length - 6,
  variant: 'popular',
  buyUrl: checkoutPath('bf6'),
  images: slideDefs,
  overview: {
    title: 'Built around Battlefield 6 aim and vision control',
    paragraphs: [
      'This build combines a full aimbot layer with player ESP, bot ESP, and misc tools in one loader. FOV, smoothness, bone selection, and visible checks stay in dedicated tabs so you can tune ranked-style sessions without digging through scattered toggles.',
      'Cloud DMA support is available for setups that meet the hardware requirements listed in our guides. Check the status banner on bf6cheats.org before every session and after Battlefield 6 patches.',
    ],
  },
  acquisition: {
    title: 'How to get Battlefield 6 Cheats',
    steps: defaultAcquisitionSteps,
  },
  goodToKnow:
    'Battlefield 6 receives frequent updates. Confirm module availability on the live status panel before you purchase or launch. Overlay behavior may differ in menus, spectator mode, and training playlists after patches.',
  limitations:
    'Third-party software in online shooters can violate publisher terms and lead to account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.',
  fullFeatures: fullFeatureList,
  systemRequirements: bf6SystemRequirements,
  about: [
    { type: 'h2', text: 'Aimbot tuned for large maps' },
    {
      type: 'p',
      text: 'Smoothness, distance caps, team filters, and FOV drawing keep tracking readable on open lanes and in tight corridors. Bind aim to a comfortable key and start with visible check enabled.',
    },
    { type: 'h2', text: 'ESP for players and bots' },
    {
      type: 'p',
      text: 'Box, skeleton, snapline, name, distance, and health bar layers share one max-distance slider so you are not flooded with markers during 64-player fights.',
    },
  ],
  body: [
    { type: 'h2', text: 'Configuration workflow' },
    {
      type: 'p',
      text: 'Save ranked and casual profiles separately, share configs with teammates when you agree on the same risk level, and use unload binds when you need a clean restart between rounds.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs.bf6 ?? [],
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => ({
    ...bf6Product,
    badge: cheat.badge,
    tier: cheat.tier,
    name: cheat.name,
    title: cheat.title,
    subtitle: cheat.desc,
    desc: cheat.desc,
    features: cheat.features,
    more: cheat.more,
    variant: cheat.variant,
    buyUrl: checkoutPath('bf6'),
    slug: PRODUCT_SLUG,
  }));
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== PRODUCT_BASE)
    .map((product) => {
      const slug = product.href.replace(PRODUCT_BASE, '').replace(/\/$/, '');
      return {
        ...bf6Product,
        slug,
        kind: 'utility' as const,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutPath('bf6'),
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug) ?? (slug === PRODUCT_SLUG ? bf6Product : undefined);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug) ?? getProductPage(slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides: ProductSlide[] = [
  {
    src: `${gameplay}/hero-poster.webp`,
    alt: 'Battlefield 6 firefight with tactical HUD overlays',
    caption: 'Battlefield 6',
    captionDesc: 'Premium aimbot and ESP tools for PC multiplayer.',
  },
  slideDefs[0],
  slideDefs[1],
  slideDefs[2],
  slideDefs[3],
  slideDefs[4],
  slideDefs[5],
];

export const productHub = {
  path: PRODUCT_BASE,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Battlefield 6 cheats for PC: customizable aimbot, player ESP, bot ESP, skeleton overlays, and Cloud DMA support.',
  buyUrl: PRIMARY_CHECKOUT_PATH,
};
