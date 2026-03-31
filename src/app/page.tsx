import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="pt-28">
      <Hero />

      <Reveal>
        <Features />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>

      <Footer />
    </main>
  );
}
