import { z } from "zod";

/**
 * Schéma Créateur — contrat unique (app + Sanity futur).
 * slug généré depuis brand ; story = portableText en Sanity, string ici.
 */
export const CreatorSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(80),
  slug: z.string().min(1).max(96),
  brand: z.string().min(1).max(100),
  category: z.string(),
  craft: z.string().min(1).max(160),
  shortDescription: z.string().max(200).optional(),
  story: z.string(),
  location: z.string().optional(),
  portrait: z
    .object({ url: z.string().url(), alt: z.string().min(1) })
    .optional(),
  gallery: z
    .array(z.object({ url: z.string().url(), alt: z.string().min(1) }))
    .default([]),
  links: z
    .object({
      site: z.string().url().optional(),
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
    })
    .default({}),
  featured: z.boolean().default(false),
  active: z.boolean().default(true),
  /** true = données réelles vérifiées · false = placeholder à compléter */
  verified: z.boolean().default(false),
});

export type Creator = z.infer<typeof CreatorSchema>;