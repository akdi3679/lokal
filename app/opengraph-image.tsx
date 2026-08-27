import { ImageResponse } from "next/og";
import { OgCanvas } from "@/lib/seo/OgCanvas";

export const alt = "LOKAL — Boutique éphémère d'artisans-créateurs du 35";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

export default async function Image() {
  let fonts: Array<{ name: string; data: ArrayBuffer; weight: number; style: "normal" }> = [];
  try {
    // Police optionnelle : si le build est offline → OG "mark seul" (graceful §28)
    const res = await fetch(
      "https://raw.githubusercontent.com/google/fonts/main/ofl/jost/Jost%5Bwght%5D.ttf",
    );
    if (res.ok) {
fonts = [{ name: "Jost", data: await res.arrayBuffer(), weight: 600 as const, style: "normal" as const }];
    }
  } catch {
    fonts = [];
  }

  return new ImageResponse(<OgCanvas withText={fonts.length > 0} />, {
    ...size,
    fonts,
  });
}