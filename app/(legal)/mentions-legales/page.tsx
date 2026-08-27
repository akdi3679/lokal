import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL } from "@/data/legal";

export const metadata: Metadata = { title: "Mentions légales" };
export default function Page() {
  return <LegalPage doc={LEGAL.mentions} />;
}