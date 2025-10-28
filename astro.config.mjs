// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';

import vercel from '@astrojs/vercel';

// DESNOTE(2025-10-16, pjrt): Redirects only work if you use npm run dev. npm run preview does NOT support redirects.
// Also, in npm run dev, `AustinDay` works but `austinday` does NOT. But in production (vercel), both work (case insensitive).
const redirects = {
  "/AustinDay": "/news/hurray-for-austin-day",
  "/Austin-Day": "/news/hurray-for-austin-day",
  "/TrickOrStreets2025": "/",
}

// https://astro.build/config
export default defineConfig({
  site: 'https://asaferaustinstreet.com/',
  redirects: redirects,
  integrations: [sitemap(), embeds(), mdx()],
  adapter: vercel(),
});
