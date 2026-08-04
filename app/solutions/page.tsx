import type { Metadata } from "next";
import { SolutionsClient } from "@/components/pages/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "NEWZONIX for startups, mid-market operations, regulated enterprises, and revenue teams — automation shaped around how your business runs.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
