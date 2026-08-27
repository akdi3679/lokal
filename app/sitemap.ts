import type { MetadataRoute } from "next";
import { content } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const creators = await content.getCreators();
  const now = new Date();

  const staticRoutes: string[] = [
    "/",
    "/createurs",
    "/creations",
    "/actualites",
    "/la-boutique",
    "/mentions-legales",
    "/politique-confidentialite",
    "/politique-cookies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
    })),
    ...creators.map((c) => ({
      url: `${BASE}/createurs/${c.slug}`,
      lastModified: now,
    })),
  ];
}