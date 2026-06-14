import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Primary domain settled (Lisa, 2026-06-14): radicalhr.nz is the canonical
  // home; radicalhr.co 301-redirects to it (set the .co domain as a redirect to
  // .nz in the Vercel project's Domains panel). Sitemap/canonical/OG all point
  // at .nz to match the real deploy domain.
  site: 'https://radicalhr.nz',
  // Static output by default - any static host (Netlify / Cloudflare Pages /
  // Vercel) serves dist/ straight off a CDN. No adapter needed.
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
