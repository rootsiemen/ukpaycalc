import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/take-home-pay-calculator",
    "/ir35-calculator",
    "/umbrella-vs-limited",
    "/about",
    "/privacy",
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
