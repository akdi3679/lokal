import { describe, expect, it } from "vitest";
import { ContactSchema } from "@/lib/validation/contact.schema";
import { CREATORS } from "@/data/creators";
import { CREATIONS } from "@/data/creations";

const valid = {
  name: "Marie Dupont",
  email: "marie@example.fr",
  subject: "visite",
  message: "Bonjour, je souhaite visiter la boutique cette semaine.",
  turnstileToken: "token",
} as const;

describe("ContactSchema (§08)", () => {
  it("accepte un payload valide", () => expect(ContactSchema.safeParse(valid).success).toBe(true));
  it("refuse un nom trop court", () => expect(ContactSchema.safeParse({ ...valid, name: "M" }).success).toBe(false));
  it("refuse un email invalide", () => expect(ContactSchema.safeParse({ ...valid, email: "pas-un-email" }).success).toBe(false));
  it("refuse un message < 10 caractères", () => expect(ContactSchema.safeParse({ ...valid, message: "coucou" }).success).toBe(false));
  it("refuse un honeypot rempli (§12)", () => expect(ContactSchema.safeParse({ ...valid, company: "bot" }).success).toBe(false));
  it("refuse sans jeton Turnstile", () => expect(ContactSchema.safeParse({ ...valid, turnstileToken: "" }).success).toBe(false));
});

describe("Intégrité des données (ADR-0003)", () => {
  it("18 créateurs", () => expect(CREATORS).toHaveLength(18));
  it("slugs uniques", () => {
    const slugs = CREATORS.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
  it("créations rattachées à un créateur existant ou null", () => {
    const ids = new Set(CREATORS.map((c) => c.id));
    for (const w of CREATIONS) expect(w.creatorId === null || ids.has(w.creatorId)).toBe(true);
  });
  it("aucun prix inventé (placeholder = pas de price)", () => {
    for (const w of CREATIONS.filter((x) => x.placeholder)) expect(w.price).toBeUndefined();
  });
});