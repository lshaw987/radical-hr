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

See **GO-LIVE.md** for the full launch runbook. Short version:

- **Newsletter form** - Klaviyo (umbrella account `SKABCW`, same as MPower;
  Campaign Monitor retired). The list **"Radical HR - Newsletter"** exists
  (id `V6h7rJ`, single opt-in). Create an embedded sign-up form in the Klaviyo
  UI pointing at that list, then paste its form id into
  `src/pages/newsletter.astro` (`KLAVIYO_FORM_ID`). Until then the page
  degrades to a clean email signup - not a launch blocker.
- **Fonts** - still a STAND-IN pairing (Poppins + Inter). Swap to the real
  Radical HR typefaces in `tokens.css` + the `@import` in `global.css` once
  confirmed off the Canva kit. (Launching on the stand-ins is fine.)
- **Legal pages** - Privacy + Terms are real plain-language NZ policies. Worth a
  lawyer's glance before or shortly after launch.

### Done (2026-07-11)

- **Full voice + safety pass** across every page (testimonials role-anonymised,
  banned phrasings out, solo-honest copy, pronoun consistency).
- **Two new pages:** `/strengths` (CliftonStrengths coaching) and
  `/recruitment-agency` (SEO page holding the WordPress-era search traffic -
  the old 301 to /attract was removed from vercel.json).
- **Privacy policy** updated to name Klaviyo (was Campaign Monitor).
- **GO-LIVE.md** added - the step-by-step launch runbook.

### Done (2026-06-14)

- **Domain settled** - `site` = `https://radicalhr.nz` (Lisa's call). `.co`
  301-redirects to `.nz` (set as a redirect domain in the Vercel project).
- **Logo** - real mark in `/public/images/logo.png` (nav) + `icon-mark.png` (favicon).
- **All pages built** - home, about, the 3 pillar pages, values, contact, learn,
  blog, newsletter, book-nook, partner, privacy, terms. No more `PageStub`.
- **og-default.png** - branded 1200x630 social card added.

## Build vs deploy

Repo: `github.com/lshaw987/radical-hr`. `vercel.json` is configured (Astro,
WordPress-path redirects, security headers). **`main` = production; any other
branch = a Vercel preview.** The site is currently on the **`preview`** branch
for review. Going live still needs: (1) promote `preview` -> `main`, (2)
`radicalhr.nz` added as the domain in Vercel (`.co` as a redirect), (3) DNS cut
over at 1st Domains. Until DNS is changed, `radicalhr.nz`/`.co` keep serving the
old WordPress site.
