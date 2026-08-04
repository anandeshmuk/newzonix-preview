import type { Metadata } from "next";
import { ResourcesClient } from "@/components/pages/ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documentation, integration guides, the NEWZONIX trust center, and playbooks for teams building on the AI business platform.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
