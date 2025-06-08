import { BookADemo } from "@/components/pages/home/Book-a-demo";
import { Features } from "@/components/pages/home/feature-section";
import { Footer } from "@/components/pages/home/footer";
import Hero from "@/components/pages/home/hero-section";
import { HowItWorksSection } from "@/components/pages/home/how-it-works";
// import { PricingSection } from "@/components/pages/home/pricing";
import { TestimonialsSection } from "@/components/pages/home/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorksSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <BookADemo />
      {/* <TrustedTechSection /> */}
      <Footer />
    </div>
  );
}
