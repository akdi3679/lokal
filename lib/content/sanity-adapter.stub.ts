import type { ContentAdapter } from "./types";

/**
 * Stub Sanity — à activer quand le studio Sanity sera en ligne.
 * Doit implémenter TOUT le contrat ContentAdapter.
 */
export const sanityAdapter: ContentAdapter = {
  async getCreators() { throw new Error("[Sanity] Adapter non activé."); },
  async getCreator() { throw new Error("[Sanity] Adapter non activé."); },
  async getFeaturedCreator() { throw new Error("[Sanity] Adapter non activé."); },
  async getCreations() { throw new Error("[Sanity] Adapter non activé."); },
  async getCategories() { throw new Error("[Sanity] Adapter non activé."); },
  async getSchedule() { throw new Error("[Sanity] Adapter non activé."); },
  async getEvents() { throw new Error("[Sanity] Adapter non activé."); },
  async getAnnouncements() { throw new Error("[Sanity] Adapter non activé."); },
  async getUnivers() { throw new Error("[Sanity] Adapter non activé."); },
  async getMedia() { throw new Error("[Sanity] Adapter non activé."); },
  async getGifts() { throw new Error("[Sanity] Adapter non activé."); },
};