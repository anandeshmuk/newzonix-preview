import type { Metadata } from "next";
import { BlogListClient } from "@/components/pages/BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the NEWZONIX team on governed automation, launching faster, and building AI-operated businesses.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogListClient />;
}
