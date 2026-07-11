import { defineCollection, z } from 'astro:content';

// Blog posts migrated verbatim from the old WordPress site (radicalhr.co).
// Slugs match the old /blog/<slug>/ paths so every old URL keeps resolving
// after the DNS cutover. `order` = position in the old blog listing (1 = newest).
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pillar: z.string().optional(),
    order: z.number(),
    date: z.coerce.date().optional(),
    incomplete: z.boolean().optional(),
    imagesNote: z.boolean().optional(),
  }),
});

export const collections = { blog };
