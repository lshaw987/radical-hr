import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Current live site is radicalhr.co. Open decision (OPEN-ITEMS): make
  // radicalhr.nz the primary site domain and 301 the .co, or keep .co.
  // Whatever ships must match the real deploy domain, or sitemap/canonical/OG
  // URLs point at a dead host. Flip this one line when the domain is settled.
  site: 'https://radicalhr.co',
  // Static output by default - any static host (Netlify / Cloudflare Pages /
  // Vercel) serves dist/ straight off a CDN. No adapter needed.
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
