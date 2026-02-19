import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ImageGrid } from "./components/image-grid";
import { Testimonials } from "./components/testimonials";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased">
      <Navbar />
      <HeroSection />
      <ImageGrid />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}
