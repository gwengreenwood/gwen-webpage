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
    description: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { poems, categories };
