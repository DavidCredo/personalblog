import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        isDraft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        language: z.enum(['en', "de"]),
        tags: z.array(z.string()),
        publishDate: z.date()
    }),
});

export const collections = {
    'blog': blogCollection,
}