# Radical HR website

Static marketing site for Radical HR. Astro + design tokens, same stack as the
MPower site. Replaces the current WordPress + Elementor site at `radicalhr.co`.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built dist/
```

## Stack

- **Astro 4** - static output, no adapter. Deploys to any static host
  (Netlify / Cloudflare Pages / Vercel) straight from `dist/`.
- **Design tokens** in `src/styles/tokens.css` - the single source of truth.
  Never hard-code a hex; pull from the vars.
- **Light theme** (white page, mist bands, deep-indigo type, purple accent) -
  deliberately distinct from MPower's dark look.

## Brand

Palette + identity: `layer-4-brains/radical-hr/context/brand.md` (Visual
identity). Confirmed by Lisa 2026-06-13.

| Role | Hex |
|---|---|
| Primary purple | `#6528EA` |
| Deep indigo | `#1E146D` / `#20166D` |
| Lilac accent | `#B094EF` |
| Lavender grey | `#8A86B2` |
| Mist (band) | `#F0F1F4` |

### Open items before launch

- **Fonts** - currently a STAND-IN pairing (Poppins + Inter). Swap to the real
  Radical HR typefaces in `tokens.css` + the `@import` in `global.css` once
  confirmed off the Canva kit.
- **Logo** - text wordmark stand-in (`Wordmark.astro`). Drop the real mark into
  `/public/images/` and swap. Live master:
  `radicalhr.co/wp-content/uploads/2024/05/Radical-HR-standard-transparent-no-padding@5x.png`
- **Domain** - `site` in `astro.config.mjs` is set to `radicalhr.co` (current
  live). Decide `.co` vs `.nz` before DNS cutover and flip the one line.
- **Newsletter form** - Radical HR uses **Campaign Monitor** (not Klaviyo - that's
  MPower). Embed the real form on `/newsletter` and the homepage when ready.
- **Pages still to build** - blog, newsletter, book-nook, values, partner,
  privacy, terms, and full versions of the pillar + about + contact pages
  (currently `PageStub`).
- **og-default.png** - social share image, not yet added.

## Build vs deploy

Built in the workspace for review. **Nothing is deployed** - `radicalhr.co`
still serves the WordPress site until Lisa gives an explicit go and DNS is cut
over. Same discipline as the MPower build.
