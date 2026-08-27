import { z } from "zod";

export const EventSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(140),
  creatorId: z.string().optional(),
  date: z.string(),
  time: z.string().optional(),
  description: z.string(),
  image: z.object({ url: z.string().url(), alt: z.string() }).optional(),
  ctaLabel: z.string().default("Voir le rendez-vous"),
});

export type Event = z.infer<typeof EventSchema>;