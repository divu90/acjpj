import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/home/Nav";
import Ticker from "@/components/home/Ticker";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import About from "@/components/home/About";
import Pledge from "@/components/home/Pledge";
import RoachHunt from "@/components/home/RoachHunt";
import Footer from "@/components/home/Footer";
import ScrollReveal from "@/components/home/ScrollReveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="WebPage" path="/" />
      <Nav />
      <Ticker />
      <Hero />
      <Manifesto />
      <About />
      <Pledge />
      <RoachHunt />
      <Footer />
      <ScrollReveal />
    </>
  );
}
