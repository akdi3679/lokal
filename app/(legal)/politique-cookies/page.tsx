import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL } from "@/data/legal";

export const metadata: Metadata = { title: "Politique de cookies" };
export default function Page() {
  return <LegalPage doc={LEGAL.cookies} />;
}