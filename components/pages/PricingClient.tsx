"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export function PricingClient() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with your operations"
        description="Choose the plan that fits how you work - upgrade or change plans anytime."
      />
      <div className="pt-0">
        <Pricing />
      </div>

      <FAQ />
      <CTA />
    </>
  );
}
