import type { Creator } from "@/schemas/creator";
import type { Creation } from "@/schemas/creation";
import type { Category } from "@/schemas/category";
import type { Event } from "@/schemas/event";

export interface CreationFilter {
  category?: "bijoux" | "maison" | "mode" | "cadeaux" | "all";
  creatorId?: string;
  unique?: boolean;
  giftTag?: string;
}

export interface ScheduleDay {
  day: string;
  who: Array<{ name: string; brand: string }>;
}

export interface Announcement {
  date: string;
  title: string;
  text: string;
}

/**
 * Contrat unique pour toute source de contenu.
 * Swapper local-adapter ↔ sanity-adapter = 1 ligne dans lib/content/index.ts.
 */
export interface ContentAdapter {
  getCreators(): Promise<Creator[]>;
  getCreator(slug: string): Promise<Creator | null>;
  getFeaturedCreator(): Promise<Creator | null>;
  getCreations(filter?: CreationFilter): Promise<Creation[]>;
  getCategories(): Promise<Category[]>;
  getSchedule(): Promise<ScheduleDay[]>;
  getEvents(): Promise<Event[]>;
  getAnnouncements(): Promise<Announcement[]>;
}