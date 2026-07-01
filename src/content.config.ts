import { defineCollection, z } from "astro:content";

const poems = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().nullable().optional(),
    imageBrightness: z.number().nullable().optional(),
    textColor: z.string().nullable().optional(),
    music: z.string().nullable().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const categories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().nullable().optional(),
    imageBrightness: z.number().nullable().optional(),
    textColor: z.string().nullable().optional(),
    order: z.number().nullable().optional(),
  }),
});

export const collections = { poems, categories };
