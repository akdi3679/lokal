import { ImageResponse } from "next/og";
import { OgCanvas } from "@/lib/seo/OgCanvas";

export const alt = "LOKAL — Boutique éphémère d'artisans-créateurs du 35";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

/** Aucune police, aucun fetch réseau → prerender garanti. */
export default function Image() {
  return new ImageResponse(<OgCanvas />, { ...size });
}import { ImageResponse } from "next/og";
import { OgCanvas } from "@/lib/seo/OgCanvas";

export const alt = "LOKAL — Boutique éphémère d'artisans-créateurs du 35";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

/** Aucune police, aucun fetch réseau → prerender garanti. */
export default function Image() {
  return new ImageResponse(<OgCanvas />, { ...size });
}