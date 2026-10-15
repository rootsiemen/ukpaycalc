import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";

const PAGE_TITLE = "UK Contractor Guides — UKPayCalc Blog";
const PAGE_DESC =
  "Plain-English guides for UK contractors: take-home pay 2026/27, IR35 inside vs outside rules, and umbrella company costs. Updated for the 2026/27 tax year.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "UKPayCalc — UK Contractor Take-Home Pay & IR35 Tools 2026/27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Contractor Guides
      </h1>
      <p className="mt-3 text-zinc-600">
        Plain-English explainers on UK contractor pay, tax and IR35 — written
        against the actual 2026/27 HMRC figures.
      </p>
      <div className="mt-8 grid gap-6">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            <p className="text-xs font-semibold text-blue-800">
              {new Date(p.date + "T00:00:00").toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-800">
              Read guide →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
