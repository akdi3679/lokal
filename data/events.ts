import { EventSchema, type Event } from "@/schemas/event";

/**
 * Vide par défaut = état vide honnête (§64).
 * Les événements à venir seront ajoutés par LOKAL via Sanity.
 */
const raw: Event[] = [];

export const EVENTS: Event[] = raw.map((e) => EventSchema.parse(e));