import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://bf6cheats.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/battlefield-6-cheats/',
    '/cheats/lite/': '/products/battlefield-6-cheats/',
    '/cheats/pro/': '/products/battlefield-6-cheats/',
    '/cheats/elite/': '/products/battlefield-6-cheats/bf6/',
    '/cheats/compare/': '/blog/bf6-aimbot-settings-guide/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
