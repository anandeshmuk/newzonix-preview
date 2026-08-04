import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.newzonix.com";
  const routes = [
    "",
    "/about",
    "/platform",
    "/solutions",
    "/pricing",
    "/resources",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
