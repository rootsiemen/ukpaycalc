import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/take-home-pay-calculator",
    "/ir35-calculator",
    "/umbrella-vs-limited",
    "/about",
    "/privacy",
    "/blog",
  ];
  const staticUrls = pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticUrls, ...blogUrls];
}
