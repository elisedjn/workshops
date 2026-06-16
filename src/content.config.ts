import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["en", "fr", "pt"]),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const workshops = defineCollection({
  loader: glob({ base: "./src/content/workshops", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "fr", "pt"]),
    location: z.enum(["ericeira", "santa-cruz", "at-home"]),
    slug: z.string(),
    date: z.string().default("Date to be announced"),
    time: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    priceDetails: z.string().optional(),
    place: z.string().optional(),
    address: z.string().optional(),
    bookingUrl: z.string().optional(),
    bookingMessage: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, workshops };
