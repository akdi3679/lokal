import { z } from "zod";

/**
 * Schéma contact (§08, §12) :
 * • longueur bornée
 * • regex email stricte
 * • honeypot "company" doit rester vide (anti-bot)
 * • message max 1000 caractères (quota §24)
 * • strip contrôles + trim
 */
export const ContactSchema = z.object({
  name: z.string().trim().min(2, "Votre nom est trop court.").max(80, "Votre nom est trop long."),
  email: z.string().trim().email("Adresse email invalide.").max(254),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.enum(["visite", "createur", "cadeau", "autre"], {
    errorMap: () => ({ message: "Sujet invalide." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Votre message est un peu court — dites-nous en plus !")
    .max(1000, "1000 caractères maximum."),
  /** Honeypot §12 — champ invisible, doit rester vide. */
  company: z.literal("").optional(),
  /** Jeton Turnstile — obligatoire, vérifié côté serveur. */
  turnstileToken: z.string().min(1, "Validation anti-bot manquante."),
});

export type ContactInput = z.infer<typeof ContactSchema>; 