import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import FanarPanel from "@/components/layout/FanarPanel";
import { ToastProvider } from "@/components/feedback";
import { JsonLd } from "@/components/seo/JsonLd";
import { storeJsonLd, webSiteJsonLd } from "@/lib/seo/jsonld";
import InitialLoader from "@/components/layout/InitialLoader";
import HashScroll from "@/components/layout/HashScroll";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });
const jost = Jost({ subsets: ["latin"], display: "swap", variable: "--font-jost" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "LOKAL — Boutique de créateurs à Saint-Grégoire (Rennes)",
    template: "%s · LOKAL",
  },
  description:
    "LOKAL, boutique éphémère d'artisans-créateurs du 35 à la galerie Grand Quartier de Saint-Grégoire. Bijoux, céramique, bois, vitrail, upcycling… 18 créateurs d'Ille-et-Vilaine, pièces uniques et petites séries.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LOKAL",
    title: "LOKAL — La création locale, à découvrir autrement.",
    description:
      "Boutique éphémère d'artisans-créateurs du 35 · Galerie Grand Quartier, Saint-Grégoire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <JsonLd data={storeJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <a href="#main" className="skip-link">
          Aller au contenu principal
        </a>
<HashScroll />
        <InitialLoader />

        <ToastProvider>
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyCTA />
          <FanarPanel />
        </ToastProvider>
      </body>
    </html>
  );
}