import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ExposeNav from "@/components/expose/ExposeNav";
import ScrollSpine from "@/components/expose/ScrollSpine";
import ActHook from "@/components/expose/ActHook";
import ActFounder from "@/components/expose/ActFounder";
import ActManifesto from "@/components/expose/ActManifesto";
import ActEcosystem from "@/components/expose/ActEcosystem";
import ActMoney from "@/components/expose/ActMoney";
import Kicker from "@/components/expose/Kicker";
import SourceDrawer from "@/components/expose/SourceDrawer";

const title = "Expose";
const description = "A documented investigation. Every claim sourced. Tags visible.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/expose",
  },
  openGraph: {
    title: `${title} · Anti-Cockroach Janta Party`,
    description,
    url: "/expose",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} · Anti-Cockroach Janta Party`,
    description,
  },
};

export default function ExposePage() {
  return (
    <main className="relative pt-12 sm:pt-14">
      <JsonLd type="WebPage" path="/expose" title={`${title} · Anti-Cockroach Janta Party`} description={description} />
      <ExposeNav />
      <ScrollSpine />
      <ActHook />
      <ActFounder />
      <ActManifesto />
      <ActEcosystem />
      <ActMoney />
      <Kicker />
      <SourceDrawer />
    </main>
  );
}
