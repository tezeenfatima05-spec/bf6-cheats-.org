export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

export const forumPosts: ForumPost[] = [
  guideDiscussion({
    slug: 'bf6-aimbot-fov-too-wide',
    title: 'Aimbot FOV feels too wide on Golmud Railway—normal?',
    excerpt: 'Wide lanes pull extra targets into the FOV ring unless distance and smoothness are capped.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'BF6 aimbot settings guide',
    sourcePath: '/blog/bf6-aimbot-settings-guide/',
    upvotes: 61,
    answer:
      'Open maps exaggerate FOV radius. Lower FOV, tighten distance, and raise smoothness until only targets inside your actual gun range highlight.',
    detail: 'The aimbot settings guide walks through bone selection and visible check defaults for Conquest.',
    tip: 'Save a long-range preset after tuning so you are not rebuilding sliders every patch day.',
  }),
  guideDiscussion({
    slug: 'bf6-esp-distance-conquest',
    title: 'What max distance do you use for ESP in 64-player Conquest?',
    excerpt: 'Too much ESP at max range clutters the screen during vehicle fights.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Player ESP setup guide',
    sourcePath: '/blog/bf6-player-esp-wallhack-setup/',
    upvotes: 48,
    answer:
      'Start with medium max distance, box + health bar only, then add skeleton if FPS stays stable.',
    detail: 'Snaplines help on multi-level sectors; disable them on flat desert maps.',
    tip: 'Match ESP filters with aimbot team targets so colors stay consistent.',
  }),
  guideDiscussion({
    slug: 'bf6-bot-esp-mixed-modes',
    title: 'Should bot ESP stay on in mixed playlists?',
    excerpt: 'Bot markers can crowd the overlay when AI backfills slots.',
    category: 'Features',
    categoryTone: 'green',
    sourceTitle: 'BF6 bot ESP guide',
    sourcePath: '/blog/bf6-bot-esp-tracking/',
    upvotes: 37,
    answer:
      'Enable Bot ESP when you need to tell AI apart quickly; disable bot targeting in aimbot if you only care about players.',
    detail: 'The bot ESP article explains how target bots interacts with each playlist type.',
    tip: 'Use separate configs for PvP-heavy nights vs bot-backfill lobbies.',
  }),
  guideDiscussion({
    slug: 'bf6-cloud-dma-eligible',
    title: 'How do I know if my rig qualifies for Cloud DMA?',
    excerpt: 'DMA is optional—standard loader paths still include ESP and aimbot.',
    category: 'Setup',
    categoryTone: 'purple',
    sourceTitle: 'Cloud DMA requirements',
    sourcePath: '/blog/bf6-cloud-dma-requirements/',
    upvotes: 52,
    answer: 'Walk through the hardware checklist in the Cloud DMA guide before enabling DMA mode.',
    detail: 'If any firmware or second-PC step fails, stay on the external loader until support confirms.',
    tip: 'Never enable DMA and standard injection experiments on the same day—pick one path.',
  }),
  guideDiscussion({
    slug: 'bf6-config-share-safety',
    title: 'Is it safe to share config strings with squadmates?',
    excerpt: 'Shared presets copy aim binds, ESP distance, and crosshair values.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Config system tips',
    sourcePath: '/blog/bf6-config-system-tips/',
    upvotes: 29,
    answer: 'Share only with trusted friends who use the same risk profile. Rotate binds if a string leaks.',
    detail: 'The config guide covers save, load, delete, and unload bind hygiene.',
    tip: 'Label presets by map type—infantry, vehicle, or low-ESP streaming.',
  }),
  guideDiscussion({
    slug: 'bf6-patch-day-process',
    title: 'What is the patch day routine after a BF6 update?',
    excerpt: 'Status banner, loader download, and custom match test.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'BF6 patch day checklist',
    sourcePath: '/blog/bf6-patch-day-checklist/',
    upvotes: 71,
    answer: 'Read bf6cheats.org status, update the loader, import configs, then run a custom match before Conquest.',
    detail: 'The patch checklist covers ESP verification and aimbot smoke tests.',
    tip: 'If status shows offline, do not queue with stale modules.',
  }),
  guideDiscussion({
    slug: 'bf6-crosshair-hdr',
    title: 'Crosshair too faint on HDR monitors?',
    excerpt: 'Thickness and style sliders fix low-contrast reticles.',
    category: 'Features',
    categoryTone: 'green',
    sourceTitle: 'BF6 crosshair settings',
    sourcePath: '/blog/bf6-crosshair-settings/',
    upvotes: 33,
    answer: 'Raise thickness one step and pick a high-contrast style before disabling the overlay entirely.',
    detail: 'Crosshair settings are independent from ESP—save them in the same preset for convenience.',
    tip: 'Test crosshair changes in firing range before multiplayer.',
  }),
  guideDiscussion({
    slug: 'bf6-checkout-first-steps',
    title: 'First steps after checkout?',
    excerpt: 'Portal email, loader download, and conservative preset import.',
    category: 'Setup',
    categoryTone: 'purple',
    sourceTitle: 'How to buy BF6 cheats',
    sourcePath: '/blog/how-to-buy-bf6-cheats/',
    upvotes: 44,
    answer: 'Follow the purchase guide: confirm email, download loader, load the conservative preset, test ESP in a custom match.',
    detail: 'Checkout runs through /go/bf6/—hover shows the internal path only.',
    tip: 'Keep order email handy for support tickets.',
  }),
  guideDiscussion({
    slug: 'bf6-visible-check-aim',
    title: 'When should visible check stay enabled?',
    excerpt: 'Visible check reduces tracking through solid cover but adds reaction time.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'BF6 aimbot settings guide',
    sourcePath: '/blog/bf6-aimbot-settings-guide/',
    upvotes: 40,
    answer: 'Leave visible check on for public playlists until you understand each map sightline.',
    detail: 'Disable only in controlled tests—not recommended for your first week.',
    tip: 'Log which maps you disabled it on so you can revert quickly.',
  }),
  guideDiscussion({
    slug: 'bf6-menu-language-toggle',
    title: 'Switching menu language to Chinese—does it affect binds?',
    excerpt: 'Language toggle changes labels, not saved keybinds.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Config system tips',
    sourcePath: '/blog/bf6-config-system-tips/',
    upvotes: 22,
    answer: 'Menu language only updates UI text. Binds and saved configs stay the same.',
    detail: 'Use unload bind before language experiments if your overlay glitches after toggling.',
    tip: 'Export config before major menu changes.',
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function categoryKey(name: string) {
  return name.toLowerCase().replaceAll(' ', '-');
}
