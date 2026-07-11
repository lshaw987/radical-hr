# Radical HR website - go-live plan

Updated 2026-07-11. The site is finalised and staged on `origin/preview`.
Everything below the line marked **LISA** is hers to do - the AI stops at the
DNS cutover per the safety rules (no deploy, no push to `origin/main`, no
DNS/Vercel changes).

## Where things stand

- **Code:** local `main` = `origin/preview` = the finalised build (rewrite +
  strengths + recruitment pages + Klaviyo notes). `origin/main` is stale -
  it must be fast-forwarded from the local `main`, not used as-is.
- **Build:** static Astro, 53 pages (site pages + 34 migrated blog posts),
  builds green. No server, no env vars needed to run. The old site's blog
  URLs and book-review PDFs all keep working after cutover - content
  migrated with matching slugs, PDFs rehosted under /reviews/.
- **Klaviyo:** list **"Radical HR - Newsletter"** exists (id `V6h7rJ`, single
  opt-in) in the umbrella account `SKABCW`. The embedded form is the one
  thing the API can't create - see step 1. Until the form id is pasted, the
  newsletter page shows a clean email fallback, so this does NOT block launch.
- **Domains:** `radicalhr.nz` = primary, `radicalhr.co` = 301 redirect.
  Both currently serve the old WordPress site until DNS is cut over.

---

## LISA - launch steps, in order

### 1. Klaviyo form (10 min, optional before launch)
1. Klaviyo (account `SKABCW`) → Sign-up forms → Create form → **Embedded**.
2. Submit to list **"Radical HR - Newsletter"** (`V6h7rJ`).
3. Set the from/sender for RHR to `lisashaw@radicalhr.nz` (account default
   sender is MPower - check before any send).
4. Publish, copy the form id (the bit after `klaviyo-form-`), paste it into
   `src/pages/newsletter.astro` (`KLAVIYO_FORM_ID = '...'`) - or hand the id
   to Charli to wire and restage.

### 2. Vercel project (5 min - verify, it was never confirmed)
1. vercel.com → check a project exists importing `github.com/lshaw987/radical-hr`.
   If not: Add New Project → import that repo → framework auto-detects Astro
   (vercel.json carries the config). No env vars needed.
2. Confirm production branch = `main`.

### 3. Promote preview → production (2 min)
In the website folder:
```bash
git push origin main:main
```
(The local `main` IS the finalised build; this fast-forwards the stale
`origin/main`.) Vercel builds production automatically.

### 4. Domains in Vercel (5 min)
1. Project → Settings → Domains → add `radicalhr.nz` and `www.radicalhr.nz`
   (pick one as primary; the other redirects - suggest apex primary).
2. Add `radicalhr.co` and set it to **redirect** to `radicalhr.nz` (301).

### 5. DNS cutover at 1st Domains (10 min + propagation)
For **radicalhr.nz**: A record `@` → `76.76.21.21`, CNAME `www` →
`cname.vercel-dns.com` (Vercel shows the exact values on the domain screen -
use those if they differ). Same for **radicalhr.co**. Remove the old
WordPress A records. This is the moment the old site retires.

### 6. Verify (5 min)
- `radicalhr.nz` serves the new site over HTTPS; `.co` and `www` redirect.
- Old WordPress paths land right: `/recruitment-agency` (real page),
  `/lead-retain` → `/lead`, `/about-us` → `/about`.
- Newsletter signup works (form or email fallback).

## Post-launch (not blockers)
- Lawyer glance over Privacy + Terms (both flagged since June).
- Swap stand-in fonts (Poppins + Inter) for the real RHR typefaces when
  confirmed off the Canva kit.
- Google Search Console: add the property, submit `sitemap-index.xml`.
- First blog pieces (the /blog page is an honest coming-soon until then).
- Decide on "RadicalHRx" naming for the four-pillar model (left off the site).
- Verify the four social URLs in the footer are the live accounts
  (LinkedIn `radical-hr`, Facebook/Instagram `radicalhrx`, YouTube `@RadicalHRx`).
