import type { Metadata } from "next";
import { PricingClient } from "@/components/pages/PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NEWZONIX — 7-Day Offer, Monthly, Quarterly, 6-Month, and Yearly plans.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
