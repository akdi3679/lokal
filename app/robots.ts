import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
/**
 * robots.txt = guidance crawlers, PAS une frontière de sécurité (§12).
 * Bloc AI-crawlers pour protéger les contenus des créateurs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // AI crawlers — contenu artisanal protégé
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}