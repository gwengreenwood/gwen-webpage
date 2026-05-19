import { defineCollection, z } from "astro:content";

const poems = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    category: z.string(),
    image: z.string(),
    music: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const categories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    order: z.number().nullable().optional(),
    draft: z.boolean().optional(),
  }),
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    homeImage: z.string().optional(),
  }),
});

export const collections = { poems, categories, settings };
