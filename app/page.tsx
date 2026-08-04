import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { LogoCloud } from "@/components/home/LogoCloud";
import { Features } from "@/components/home/Features";
import { Timeline } from "@/components/home/Timeline";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      {/* Solution: what NEWZONIX does, immediately */}
      <Hero />
      {/* Trust, early and quiet */}
      <LogoCloud />
      {/* Problem: the pain of the status quo */}
      <Problem />
      {/* Solution, deep dive: platform capabilities */}
      <Features />
      {/* Platform: how it actually works */}
      <Timeline />
      {/* Benefits: quantified impact */}
      <Stats />
      {/* Trust: proof from real customers */}
      <Testimonials />
      {/* Pricing */}
      <Pricing />
      <FAQ />
      <BlogPreview />
      {/* Call to action */}
      <CTA />
    </>
  );
}

