// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';

import vercel from '@astrojs/vercel';

const humanReadableRedirects = {
  "/AustinDay": "/news/hurray-for-austin-day",
}

const lowercaseRedirects = Object.fromEntries(
  Object.entries(humanReadableRedirects).map(([key, value]) => [key.toLowerCase(), value])
);

// DESNOTE(2025-10-16, pjrt): Redirects only work if you use npm run dev. npm run preview does NOT support redirects.
const redirects = { ...humanReadableRedirects, ...lowercaseRedirects };

// https://astro.build/config
export default defineConfig({
  site: 'https://asaferaustinstreet.com/',
  redirects: redirects,
  integrations: [sitemap(), embeds(), mdx()],
  adapter: vercel(),
});
