import type { ContentAdapter } from "./types";

/**
 * Stub Sanity — à activer quand le studio Sanity sera en ligne.
 * Les noms de champs de ce stub correspondent 1:1 aux schémas Zod
 * (et donc aux futurs `defineType` Sanity §75).
 */
export const sanityAdapter: ContentAdapter = {
  async getCreators() {
    throw new Error("[Sanity] Adapter non activé — configurez SANITY_PROJECT_ID et SANITY_DATASET.");
  },
  async getCreator() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getFeaturedCreator() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getCreations() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getCategories() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getSchedule() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getEvents() {
    throw new Error("[Sanity] Adapter non activé.");
  },
  async getAnnouncements() {
    throw new Error("[Sanity] Adapter non activé.");
  },
};