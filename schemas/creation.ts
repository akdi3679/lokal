import { z } from "zod";

export const CreationSchema = z.object({
  id: z.string(),
  creatorId: z.string().nullable(),
  name: z.string().min(1).max(120),
  slug: z.string().min(1).max(140),
  category: z.enum(["bijoux", "maison", "mode", "cadeaux"]),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  images: z
    .array(z.object({ url: z.string().url(), alt: z.string().min(1) }))
    .default([]),
  materials: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  gift: z.boolean().default(false),
  unique: z.boolean().default(false),
  smallSeries: z.boolean().default(false),
  availability: z.enum(["in-store", "limited", "sold-out", "on-request"]).default("on-request"),
  /** true = placeholder image à remplacer */
  placeholder: z.boolean().default(true),
  tags: z.array(z.string()).default([]),
});

export type Creation = z.infer<typeof CreationSchema>;