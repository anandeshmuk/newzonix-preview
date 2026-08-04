import type { Metadata } from "next";
import { PlatformClient } from "@/components/pages/PlatformClient";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "A governed layer for AI-run operations — unified data, workflow automation, approval gates, and live forecasting in one platform.",
  alternates: {
    canonical: "/platform",
  },
};

export default function PlatformPage() {
  return <PlatformClient />;
}
