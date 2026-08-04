import type { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "NEWZONIX builds the AI business platform for legible, governed automation — founded in 2021 to give small teams the operating infrastructure of an enterprise.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
