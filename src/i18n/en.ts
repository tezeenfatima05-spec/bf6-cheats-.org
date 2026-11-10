import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_INVITE_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'BF6 Cheats',
    domain: 'bf6cheats.org',
    title: 'Battlefield 6 Cheats — Aimbot, ESP & Wallhack | BF6 Cheats',
    description:
      'Explore Battlefield 6 cheats for PC featuring customizable aimbot, player ESP, bot ESP, skeleton ESP, health bars, snaplines, crosshair settings, and Cloud DMA support at BF6 Cheats.',
    discord: DISCORD_INVITE_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Battlefield 6 — build online',
    eyebrow: 'Premium BF6 software',
    titleLine1: 'BF6 Aimbot',
    titleLine2: 'ESP & Wallhack for PC',
    subtitle:
      'Battlefield 6 cheats with customizable aimbot, player ESP, bot ESP, and Cloud DMA support—built for large maps and 64-player fights at bf6cheats.org.',
    ctaPrimary: 'View product',
    ctaDiscord: 'Buy now',
    modesLabel: 'Playlists',
    modes: ['Conquest', 'Breakthrough', 'Rush', 'Custom'],
    metrics: [
      { label: 'Aimbot layers', strong: 'Full' },
      { label: 'ESP modes', strong: 'Player & bot' },
      { label: 'Cloud DMA', strong: 'Supported' },
      { label: 'Config sync', strong: 'Save & share' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Battlefield 6 cheats in one loader',
    subtitle: 'Aimbot, ESP, and misc tools grouped the way you tune them in match.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Smooth. Selective. Tunable.',
        desc: 'Bone selection, smoothness, FOV, and distance caps keep tracking controlled on open lanes and in CQB.',
        bullets: [
          'Toggle aimbot and aim-always modes',
          'Head, neck, body, and pelvis bones',
          'Custom aim bind with visible check',
          'FOV border and background drawing',
          'Target bots, teams, or both',
        ],
        tags: ['Battlefield 6 aimbot', 'BF6 aimbot', 'FOV aimbot'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Wallhack-style overlays.',
        desc: 'Boxes, skeletons, snaplines, and health bars stay readable during 64-player firefights.',
        bullets: [
          'Box, skeleton, and snapline ESP',
          'Health bar, name, and distance',
          'Max distance slider per profile',
          'Team color filters',
        ],
        tags: ['Battlefield 6 ESP', 'BF6 wallhack', 'player ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Bot ESP',
        subtitle: 'Know what is AI.',
        desc: 'Separate bot tracking so aim and visuals respect your playlist mix.',
        bullets: ['Dedicated bot ESP layer', 'Filter bots in aimbot', 'Shared max distance controls'],
        tags: ['BF6 bot ESP', 'bot tracking'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Crosshair',
        subtitle: 'Clear reference point.',
        desc: 'Style, size, and thickness sliders for precise off-ADS shots.',
        bullets: ['Enable or disable overlay crosshair', 'Multiple style presets', 'Size and thickness tuning'],
        tags: ['BF6 crosshair', 'custom crosshair'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Config system',
        subtitle: 'Profiles that travel.',
        desc: 'Save, load, share, and delete configs without rebuilding sliders every session.',
        bullets: ['Named presets for ranked and casual', 'Share strings with squadmates', 'Menu and unload binds'],
        tags: ['BF6 config', 'save load config'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Hardware path when supported.',
        desc: 'Cloud DMA support for qualified setups—see the requirements guide before enabling.',
        bullets: ['DMA-compatible workflow', 'Pairs with ESP and aimbot layers', 'Documented setup checklist'],
        tags: ['Battlefield 6 Cloud DMA', 'BF6 DMA cheats'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Menu & performance',
        subtitle: 'Stay in control.',
        desc: 'FPS limit, bilingual menu, and hotkeys that match your muscle memory.',
        bullets: ['English and Chinese menu', 'FPS limit slider', 'Dedicated menu and unload binds'],
        tags: ['BF6 cheat menu', 'FPS limit'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'BF6 tooling backed by patches—not promises',
    subtitle:
      'Most cheat shops ship stale loaders and copy-paste support. We built bf6cheats.org around patch-day delivery, tunable aimbot defaults, and live Discord operators.',
    usLabel: 'BF6 Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'anti-cheat-aware builds pushed within hours of Battlefield 6 updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized aim settings',
        desc: 'Smoothness, FOV caps, and visible check defaults keep tracking readable—not snap locks that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, ESP tuning, and config help—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader',
        desc: 'Organized overlay menu with grouped aimbot, ESP, and misc tabs—tune without digging through scattered toggles.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Conquest and Breakthrough profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Battlefield 6 or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC players running aimbot, ESP, and configs on bf6cheats.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Battlefield 6 on EA App PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import a conservative preset, and tune aimbot FOV plus ESP distance.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Battlefield 6',
        desc: 'Check the live status banner, launch EA App Battlefield 6, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Battlefield 6 after updates.',
    items: ['Windows 10 & 11', 'EA App', 'Battlefield 6 client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Product',
    title: 'Battlefield 6 cheats for PC',
    subtitle: 'One premium build with aimbot, ESP, crosshair tools, and Cloud DMA support.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Premium',
        name: 'BF6',
        title: 'Battlefield 6 Cheats',
        desc: 'Customizable aimbot, player ESP, bot ESP, skeleton overlays, config sharing, and Cloud DMA support.',
        features: [
          'Customizable aimbot',
          'Player & bot ESP',
          'Skeleton & health bar',
          'Config save and share',
          'Cloud DMA support',
          'Crosshair customization',
        ],
        more: 22,
        href: `${productBase}bf6/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Battlefield 6 cheats',
    subtitle: 'Premium BF6 aimbot and ESP software for PC multiplayer.',
    viewAll: 'View product',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Aimbot tuning, ESP setup, Cloud DMA notes, and patch-day checks for Battlefield 6.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Setup',
        title: 'BF6 aimbot settings: smoothness, FOV, and bone selection',
        slug: 'bf6-aimbot-settings-guide',
        image: '/images/gameplay/screenshot-1.webp',
        desc: 'Tune Battlefield 6 aimbot smoothness, FOV rings, bone priorities, and visible check before Conquest.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Battlefield 6 player ESP and wallhack setup',
        slug: 'bf6-player-esp-wallhack-setup',
        image: '/images/gameplay/screenshot-3.webp',
        desc: 'Box, skeleton, snapline, and health bar ESP for BF6—with max distance tips.',
        date: 'Aug 17, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'BF6 bot ESP and target bots in aimbot',
        slug: 'bf6-bot-esp-tracking',
        image: '/images/gameplay/screenshot-2.webp',
        desc: 'When to enable bot ESP and how target bots interacts with mixed playlists.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Battlefield 6 Cloud DMA requirements',
        slug: 'bf6-cloud-dma-requirements',
        image: '/images/gameplay/screenshot-5.webp',
        desc: 'Hardware expectations and when Cloud DMA beats standard loader paths.',
        date: 'Aug 15, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'BF6 config save, load, and share workflows',
        slug: 'bf6-config-system-tips',
        image: '/images/gameplay/screenshot-6.webp',
        desc: 'Name presets, share strings, and use menu or unload binds between rounds.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Custom crosshair settings in BF6 cheats',
        slug: 'bf6-crosshair-settings',
        image: '/images/gameplay/screenshot-4.webp',
        desc: 'Style, thickness, and size sliders for overlay crosshairs.',
        date: 'Aug 13, 2026',
        readTime: '4 min read',
      },
      {
        tag: 'Updates',
        title: 'BF6 patch day checklist for cheats',
        slug: 'bf6-patch-day-checklist',
        image: '/images/gameplay/hero-poster.webp',
        desc: 'Status banner, loader refresh, and test match routine after updates.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy Battlefield 6 cheats in 2026',
        slug: 'how-to-buy-bf6-cheats',
        image: '/images/gameplay/screenshot-visuals.webp',
        desc: 'Checkout flow, portal access, and first-launch checklist.',
        date: 'Aug 11, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tracking you can tune', desc: 'Smoothness, FOV, bones, and visible check in one tab.' },
      { num: '02', label: 'ESP', title: 'Player overlays', desc: 'Box, skeleton, snapline, health, name, and distance controls.' },
      { num: '03', label: 'Bots', title: 'Bot ESP layer', desc: 'Separate markers and aim filters for AI targets.' },
      { num: '04', label: 'Crosshair', title: 'On-screen reference', desc: 'Style, size, and thickness without editing game files.' },
      { num: '05', label: 'Configs', title: 'Save and share', desc: 'Named presets with menu and unload binds.' },
      { num: '06', label: 'DMA', title: 'Optional hardware path', desc: 'Cloud DMA workflow when your rig meets requirements.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Battlefield 6 profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the live banner on bf6cheats.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Complete checkout',
        desc: 'Use Buy now to reach secure checkout, then confirm your portal email.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save Conquest and Breakthrough presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Battlefield 6 plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Status updates hit Discord and the portal—check before you queue Conquest.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with wide smoothness, small FOV, and capped ESP distance—then tune up gradually.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or ESP tuning? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'BF6 Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@bf6cheats.org',
        href: 'mailto:support@bf6cheats.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Join Discord',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on bf6cheats.org or via our secure checkout.' },
      { title: 'Platform', desc: 'EA App on Windows 10 or 11—and your Battlefield 6 client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or EA App.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Battlefield 6 cheats are online?',
        a: 'The live status banner is on bf6cheats.org and in the Discord #status channel. Always check after a Battlefield 6 or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Battlefield 6.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party BF6 cheats?',
        a: 'Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Battlefield 6 via EA App on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Battlefield 6 cheats with full feature lists and secure checkout live at bf6cheats.org/products/battlefield-6-cheats/.',
      },
    ],
  },
  footer: {
    tagline: 'Battlefield 6 cheats — aimbot, ESP, and tools for PC. bf6cheats.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/battlefield-6-cheats/bf6/', label: 'BF6 feature breakdown', ariaLabel: 'BF6 product' },
      { href: '/products/battlefield-6-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About BF6 Cheats',
      description:
        'BF6 Cheats provides Battlefield 6 cheat tiers, utility tools and PC support resources at bf6cheats.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'BF6 Cheats is a PC-focused resource for Battlefield 6 players exploring aimbot, ESP, and Cloud DMA workflows. We publish setup guides and live status notes so you can evaluate BF6 cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers the premium Battlefield 6 cheat build with aimbot, ESP, and misc tools. Blog articles explain config tips, patch-day checks, and anti-cheat update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, EA App account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How BF6 Cheats handles analytics, cookies, and contact data when you use bf6cheats.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on bf6cheats.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for BF6 Cheats products and bf6cheats.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using bf6cheats.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Battlefield 6 cheat software delivered through an operator portal and loader for Windows, with aimbot, ESP, and configuration tools described on the product page.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Battlefield 6 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. bf6cheats.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Battlefield 6.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—EA App Battlefield 6 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Battlefield 6 build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Battlefield 6 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'BF6 Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at bf6cheats.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'BF6 Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join BF6 Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
