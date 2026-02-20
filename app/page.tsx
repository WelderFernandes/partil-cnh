import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { Testimonials } from "./components/testimonials";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased">
      {/* Global Glow Orbs (Stitch) */}
      <div className="glow-orb bg-accent fixed top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full" />
      <div className="glow-orb bg-primary fixed right-[-10%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full" />

      <Navbar />
      <main>
        <HeroSection />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
