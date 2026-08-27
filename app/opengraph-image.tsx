import { ImageResponse } from "next/og";
import { OgCanvas } from "@/lib/seo/OgCanvas";

export const alt = "LOKAL — Boutique éphémère d'artisans-créateurs du 35";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

/** Weight = union littérale dans next/og → on type explicitement. */
type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style: "normal" | "italic";
};

export default async function Image() {
  let fonts: OgFont[] = [];
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/google/fonts/main/ofl/jost/Jost%5Bwght%5D.ttf",
    );
    if (res.ok) {
      fonts = [{ name: "Jost", data: await res.arrayBuffer(), weight: 600, style: "normal" }];
    }
  } catch {
    fonts = [];
  }

  return new ImageResponse(<OgCanvas withText={fonts.length > 0} />, { ...size, fonts });
}