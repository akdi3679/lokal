import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Intro from "@/components/sections/Intro";
import Categories from "@/components/sections/Categories";
import Planning from "@/components/sections/Planning";
import Spotlight from "@/components/sections/Spotlight";
import CreatorsGrid from "@/components/sections/CreatorsGrid";
import WorksGrid from "@/components/sections/WorksGrid";
import Gifts from "@/components/sections/Gifts";
import UniqueBand from "@/components/sections/UniqueBand";
import BoutiqueInfo from "@/components/sections/BoutiqueInfo";
import News from "@/components/sections/News";
import InstaGallery from "@/components/sections/InstaGallery";
import FinalCTA from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { creatorsItemListJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "La création locale, à découvrir autrement.",
  description:
    "LOKAL, boutique éphémère d'artisans-créateurs du 35 à la galerie Grand Quartier de Saint-Grégoire. 18 créateurs d'Ille-et-Vilaine.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Categories />
      <Planning />
      <Spotlight />
      <CreatorsGrid />
      <WorksGrid />
      <Gifts />
      <UniqueBand />
      <BoutiqueInfo />
      <News />
      <InstaGallery />
      <FinalCTA />
    </>
  );
}