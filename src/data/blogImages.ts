// Blog post images, keyed by slug. Added 2026-09-13 (Lisa: "blog page needs
// breaking up with pictures"). Five are Lisa's own photos (already on the
// site); the rest are Unsplash (free licence, no attribution required -
// photographer noted so credit can be added if she wants it). Files live in
// public/images/blog/<slug>.jpg. A post with no entry falls back to no image.
export type BlogImage = { alt: string; source: 'own' | 'unsplash'; credit?: string };

export const blogImages: Record<string, BlogImage> = {
  // Lisa's own
  '4-ways-to-attract-jobseekers-in-a-tight-labour-market': { alt: 'Sticky notes from a workshop on the office window.', source: 'own' },
  'curiosity-the-leadership-superpower-we-keep-forgetting-to-use': { alt: 'A Lego build from a Lego Serious Play workshop.', source: 'own' },
  'are-you-running-your-week-or-is-it-running-you': { alt: 'Notebook open at Capturing, sticky notes and pens.', source: 'own' },
  'role-definitions': { alt: 'Written on the field: Radical HR has a new home.', source: 'own' },
  'delevate': { alt: 'Lisa Shaw.', source: 'own' },
  // Unsplash
  'rethinking-retention-mobility-as-your-secret-weapon': { alt: 'A flock of sheep moving across a green paddock.', source: 'unsplash', credit: 'Unsplash' },
  'do-i-have-a-future-here': { alt: 'A lush green hillside with a fence in the foreground.', source: 'unsplash', credit: 'Unsplash' },
  'meaning-over-motion-why-busy-isnt-the-badge-of-honour-we-think-it-is': { alt: 'Mountain landscape, wide and still.', source: 'unsplash', credit: 'Unsplash' },
  'calendar-as-culture-audit': { alt: 'An open monthly planner on a wooden desk.', source: 'unsplash', credit: 'Unsplash' },
  'how-to-improve-your-productivity-with-these-time-blocking-tips': { alt: 'A desk with a planner, pens and a cup of coffee.', source: 'unsplash', credit: 'Unsplash' },
  'planning-isnt-a-luxury-its-a-leadership-discipline': { alt: 'A notebook with the word Plan on a yellow background.', source: 'unsplash', credit: 'Unsplash' },
  'build-your-self-care-menu-before-you-need-it': { alt: 'Someone writing a list in a notebook.', source: 'unsplash', credit: 'Unsplash' },
  'the-clarity-gap-why-its-costing-you-more-than-you-think': { alt: 'A wall covered in sticky notes.', source: 'unsplash', credit: 'Unsplash' },
  'alignment-isnt-just-a-buzzword-its-your-unfair-advantage': { alt: 'A group around a table working through papers.', source: 'unsplash', credit: 'Unsplash' },
  'stay-interviews-retentions-most-human-strategy': { alt: 'Two women talking in an office.', source: 'unsplash', credit: 'Unsplash' },
  'context-switching-the-silent-killer-of-productivity': { alt: 'A laptop beside a notebook.', source: 'unsplash', credit: 'Unsplash' },
  'leadership-audit': { alt: 'A person walking alone on a beach.', source: 'unsplash', credit: 'Unsplash' },
  '2-4-6-rule': { alt: 'A hand holding yellow sticky notes.', source: 'unsplash', credit: 'Unsplash' },
  'how-to-create-a-compelling-brand-people-want-to-work-for': { alt: 'Two colleagues talking outside a modern building.', source: 'unsplash', credit: 'Unsplash' },
  'dont-hesitate-accelerate-securing-top-talent-fast': { alt: 'Cattle on a green paddock.', source: 'unsplash', credit: 'Unsplash' },
  'the-future-of-work-starts-with-a-blank-piece-of-paper': { alt: 'A blank notepad and a pen.', source: 'unsplash', credit: 'Unsplash' },
  'the-future-starts-with-humans-first': { alt: 'A green field under a blue sky.', source: 'unsplash', credit: 'Unsplash' },
  'the-importance-of-an-employee-value-proposition': { alt: 'Two colleagues talking through an idea.', source: 'unsplash', credit: 'Unsplash' },
  'the-power-of-reflection': { alt: 'Still water with mountains behind.', source: 'unsplash', credit: 'Unsplash' },
  'the-radical-power-of-asking-what-if': { alt: 'Someone writing on a blank page.', source: 'unsplash', credit: 'Unsplash' },
  'the-risk-of-sameness': { alt: 'Two white sheep on a green field.', source: 'unsplash', credit: 'Unsplash' },
  'the-term-hr-needs-to-radically-change': { alt: 'Yellow sticky notes on a white wall.', source: 'unsplash', credit: 'Unsplash' },
  'think-youre-not-radical-heres-why-your-hr-team-should-be': { alt: 'A country road between wooden fences.', source: 'unsplash', credit: 'Unsplash' },
  'top-5-tips-for-reducing-bias-in-the-recruitment-process': { alt: 'Sticky notes in many colours.', source: 'unsplash', credit: 'Unsplash' },
  'trash-hr-policy-and-guide-people-to-do-great-work': { alt: 'Someone writing on paper.', source: 'unsplash', credit: 'Unsplash' },
  'when-kindness-brings-tears': { alt: 'A calm bay surrounded by mountains and trees.', source: 'unsplash', credit: 'Unsplash' },
  'wheres-your-focus-going': { alt: 'A pen resting on an open diary.', source: 'unsplash', credit: 'Unsplash' },
  'why-have-a-working-with-me-document': { alt: 'A hand writing with a ballpoint pen.', source: 'unsplash', credit: 'Unsplash' },
  'why-values-should-drive-the-recruitment-process': { alt: 'Two colleagues talking outdoors over a tablet.', source: 'unsplash', credit: 'Unsplash' },
};

export function blogImage(slug: string): (BlogImage & { src: string }) | null {
  const i = blogImages[slug];
  return i ? { ...i, src: `/images/blog/${slug}.jpg` } : null;
}
