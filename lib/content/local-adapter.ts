import type {
  ContentAdapter,
  CreationFilter,
  ScheduleDay,
  Announcement,
  Media,
  GiftEntry,
} from "./types";
import type { Category } from "@/schemas/category";
import type { Event } from "@/schemas/event";

import { CREATORS } from "@/data/creators";
import { CREATIONS } from "@/data/creations";
import { CATEGORIES } from "@/data/categories";
import { SCHEDULE } from "@/data/schedule";
import { EVENTS } from "@/data/events";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { UNIVERS } from "@/data/univers";
import { MEDIA } from "@/data/media";
import { GIFTS } from "@/data/gifts";

export const localAdapter: ContentAdapter = {
  async getCreators() {
    return CREATORS.filter((c) => c.active);
  },
  async getCreator(slug) {
    return CREATORS.find((c) => c.slug === slug && c.active) ?? null;
  },
  async getFeaturedCreator() {
    return CREATORS.find((c) => c.featured && c.active) ?? CREATORS[0] ?? null;
  },
  async getCreations(filter: CreationFilter = {}) {
    return CREATIONS.filter((c) => {
      if (filter.category && filter.category !== "all" && c.category !== filter.category) return false;
      if (filter.creatorId && c.creatorId !== filter.creatorId) return false;
      if (filter.unique && !c.unique) return false;
      if (filter.giftTag && !c.tags.includes(filter.giftTag)) return false;
      return true;
    });
  },
  async getCategories(): Promise<Category[]> {
    return CATEGORIES;
  },
  async getSchedule(): Promise<ScheduleDay[]> {
    return SCHEDULE;
  },
  async getEvents(): Promise<Event[]> {
    return EVENTS;
  },
  async getAnnouncements(): Promise<Announcement[]> {
    return ANNOUNCEMENTS;
  },
  async getUnivers() {
    return UNIVERS;
  },
  async getMedia(): Promise<Media> {
    return MEDIA;
  },
  async getGifts(): Promise<GiftEntry[]> {
    return GIFTS;
  },
};