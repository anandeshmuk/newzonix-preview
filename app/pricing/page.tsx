import type { Metadata } from "next";
import { PricingClient } from "@/components/pages/PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NEWZONIX — Launch, Scale, and Enterprise plans, each with a 14-day free trial.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
