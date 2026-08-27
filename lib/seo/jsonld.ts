import { BRAND } from "@/data/brand";

const BASE = () => process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
/** Store / LocalBusiness — local SEO (§42, brief §37). Données réelles ✔. */
export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "LOKAL — Boutique de créateurs",
    description: BRAND.tagline,
    url: BASE(),
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.line1,
      postalCode: "35760",
      addressLocality: "Saint-Grégoire",
      addressCountry: "FR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "20:00",
    },
    sameAs: [BRAND.instagram, BRAND.facebook],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LOKAL",
    url: BASE(),
    inLanguage: "fr-FR",
    publisher: { "@type": "Store", name: "LOKAL", url: BASE() },
  };
}

/** BreadcrumbList — une seule fonction réutilisable. */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE()}${item.path}`,
    })),
  };
}

/** ItemList pour /createurs (§42). */
export function creatorsItemListJsonLd(creators: Array<{ brand: string; slug: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Les créateurs LOKAL",
    numberOfItems: creators.length,
    itemListElement: creators.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.brand,
      url: `${BASE()}/createurs/${c.slug}`,
    })),
  };
}