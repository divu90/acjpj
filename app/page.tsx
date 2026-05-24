import Nav from "@/components/home/Nav";
import Ticker from "@/components/home/Ticker";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import About from "@/components/home/About";
import Pledge from "@/components/home/Pledge";
import RoachHunt from "@/components/home/RoachHunt";
import Footer from "@/components/home/Footer";
import ScrollReveal from "@/components/home/ScrollReveal";

export default function HomePage() {
  return (
    <>
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
