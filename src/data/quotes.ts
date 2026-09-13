// Every quote on the site, in one place. Verbatim from the record (tiny
// spelling/grammar tidies only), always role-anonymised - never a name.
// Sources: layer-1-context/personal-brand.md (testimonial bank) and the Fleet
// Image record (Kris + Glenn's Feb 2026 leadership reflections, the Nov 2025
// discovery, the Apr 2026 team-day feedback forms, Aug 2026 Teams + email).
// Lisa's call 2026-09-13: anonymise and weave through the site.
export const quotes = {
  // Directors of a family-owned, multi-site business (Fleet Image - Kris / Glenn)
  dirExplain:   { text: 'The way you explain stuff without over-complicating it.', who: 'Director · family-owned, multi-site business' },
  dirAccount:   { text: 'Holding us to account, but also guiding us around what we don’t know.', who: 'Director · family-owned, multi-site business' },
  dirRisk:      { text: 'What’s the risk to the business if we don’t have you around?', who: 'Director · family-owned, multi-site business' },
  dirPurpose:   { text: 'Now I have a purpose and a goal, which I think was lacking.', who: 'Director · family-owned, multi-site business' },
  dirBuyIn:     { text: 'We can do our jobs blindfolded… but we can’t get the buy-in.', who: 'Director · before the work began' },
  dirBiggest:   { text: 'The biggest single change in our business over the past 10 to 20 years. We need to get the people on the journey with us.', who: 'Director · family-owned, multi-site business' },
  // Their team (team-day feedback forms, Apr 2026; kickoff emails, Nov 2025)
  teamNeverTaught: { text: 'Many of the leaders have never been taught these things, as we have been promoted through the ranks through knowing our roles and trade well.', who: 'Branch leader · after a team day' },
  teamSameGoal:    { text: 'I have never seen such a group of people believing in the same goal like this before.', who: 'Branch manager · after a team day' },
  teamLoved:       { text: 'Felt loved, and it is one of the best days in my life.', who: 'Team member · after a team day' },
  teamLighter:     { text: 'We both felt so much lighter.', who: 'Support office leader · after the first working session' },
  // Wider testimonial bank (personal-brand.md)
  gmPeople:     { text: 'She truly understands people - how to make them comfortable, and how to dig in to understand their hidden potential.', who: 'General Manager' },
  chairChange:  { text: 'A powerhouse for change… better financial transparency and visibility, cashflow management, and numerous efficiencies, all of which will be essential for us to scale up.', who: 'Board Chair' },
  ceoStructure: { text: 'In 2024, we undertook a thorough review of our organisational structure, guided by the invaluable support of Lisa Shaw.', who: 'CEO' },
  sltBestPD:    { text: 'The SLT said it was without a doubt the best PD they had done in years.', who: 'Annual planning workshop participant · education' },
  observer:     { text: 'Such a pleasure to watch the master in action. You facilitated growth in everyone you engaged in coaching with.', who: 'Programme observer · leadership programme' },
  agriPrepared: { text: 'You were so well prepared, which made for a valuable and informative session.', who: 'Consultancy team member · strengths session' },
} as const;

export type QuoteKey = keyof typeof quotes;
