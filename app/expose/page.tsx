import ExposeNav from "@/components/expose/ExposeNav";
import ScrollSpine from "@/components/expose/ScrollSpine";
import ActHook from "@/components/expose/ActHook";
import ActFounder from "@/components/expose/ActFounder";
import ActManifesto from "@/components/expose/ActManifesto";
import ActEcosystem from "@/components/expose/ActEcosystem";
import ActMoney from "@/components/expose/ActMoney";
import Kicker from "@/components/expose/Kicker";
import SourceDrawer from "@/components/expose/SourceDrawer";

export const metadata = {
  title: "Expose · Anti-Cockroach Janta Party",
  description: "A documented investigation. Every claim sourced. Tags visible.",
};

export default function ExposePage() {
  return (
    <main className="relative pt-12 sm:pt-14">
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
