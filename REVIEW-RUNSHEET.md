# Radical HR site - review sitting runsheet

Prepped 2026-08-09 (Sat evening). Lisa reviews **Sun 10 Aug**. Start the site with
`npm run dev -- --port 4361` in this folder → http://localhost:4361 (it binds to
IPv6 loopback; the browser handles it, `curl` needs `http://[::1]:4361`).

## State

- Local `main` = finalised build + the Ai-capitalisation fix (committed locally).
- **7+ commits ahead of `origin/preview`** - nothing pushed; blocked on the one-time
  GitHub browser login (Lisa types `! git push origin main:preview` in a session).
- Working tree clean. Build green. GO-LIVE.md is the launch runbook (ends at DNS - Lisa's).

## Done 2026-08-09

- AI → Ai across the services page (7 spots: "Ai, Done Humans First", "Ai Brain Builds",
  "Ai-Assisted Operations", "Future of Work & Ai Capability"). Two migrated blog posts
  still say "AI" - left as published archive; Lisa's call if the archive gets restyled.

## Lisa's review pass - 7 items, decisions teed up

1. **Ai-services wording** - read /services "Ai, Done Humans First". DECISION: add the
   **Ai Reality Session ($3,500 + GST)** as the named entry offer? Charli rec: yes -
   it's the ladder's entry gate (marketing C-4) and a real price makes the page sellable.
   Publishing the price is Lisa's call.
2. **Sister-companies blurbs** - /about: MPower, Umpire Room, Workshop Dashboard
   ("In pilot now" teaser, unlinked). Read clean to Charli; taste check.
3. **Speaking-page facts** - /speaking. ✅ Revved Drivers Book (confirmed 8 Aug),
   ✅ CNISPA keynote Jun 2025, ✅ Springboard since 2023. TWO CALLS:
   - **E Tipu 2025** tile is vague; canon = 4-min Innovation Showcase pitch, describe
     accurately. Proposed: "Pitched the future of work to the agri sector's big stage -
     the Innovation Showcase, ~400 in the room."
   - **NZRASLA vs RASLA** naming - Lisa's own notes expand RASLA (Rural Primary and
     Area School Leadership Association); one body or two still unconfirmed. Her pick.
4. **Redirect targets** - vercel.json, 26 mappings. Judgement ones: /shout-out, /rasla,
   /chocolate-wrapper → home · old pCode blog post → /productivity (IP wall) · four old
   recruitment URLs → /recruitment-agency.
5. **Photos** - the 5-photo wish-list in IMAGES.md (hero facilitation shot = #1). Lisa
   drops files into public/images/, Charli wires + compresses. Not a launch blocker.
6. **Social URLs** - footer: LinkedIn /company/radical-hr/ · Facebook /radicalHRx/ ·
   Instagram /radicalhrx/ · YouTube @RadicalHRx (+ personal LinkedIn on /contact).
   Lisa confirms which are the live accounts.
7. **Social-business copy** - /about giving-back paragraph (Te Uru Amokura, Evaluation
   Associates, youth development, pro bono mahi; no formal "social business" claim).
   Needs her sign-off incl. what the Evaluation Associates support actually is.

## Added 2026-09-12 (session 5)

- Items 1, 3 (both) and 7 done on Lisa's calls, restaged `3dd085d`. The GitHub credential was already present - no login step needed.
- **NEW - /about sister companies:** Lisa's 2026-09-12 call makes MPower a sub-brand inside Radical HR, not a sister company. The section's MPower card needs rewording (rec: keep the three cards, retitle the section "The Radical HR family" is OUT - Lisa dislikes family framing; use "Also built here" and give MPower the line "Part of Radical HR. A subscription community..."). Her wording call at the second read.

## Then

- **Go-live decision** - GO-LIVE.md steps 1-6 (Klaviyo form optional; verify Vercel
  project; promote `git push origin main:main`; domains; DNS at 1st Domains). First step
  either way: the `! git push origin main:preview` login so the backlog stages.
- **Backlog triage** - Charli rec: nothing blocks launch (lawyer Privacy/Terms, fonts,
  Search Console, blog pieces, RadicalHRx naming = all post-launch).
