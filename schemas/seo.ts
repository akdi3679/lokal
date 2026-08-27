import { z } from "zod";

/**
 * Bloc SEO réutilisable — mêmes noms de champs que le futur Sanity `seo` object (§75).
 * Migration Sanity = copier-coller de cette structure dans `sanity/schemas/objects/seo.ts`.
 */
export const SeoSchema = z.object({
  title: z.string().trim().max(60).optional(),
  description: z.string().trim().max(160).optional(),
  ogImage: z.string().url().optional(),
  noindex: z.boolean().default(false),
  canonical: z.string().url().optional(),
});

export type Seo = z.infer<typeof SeoSchema>;