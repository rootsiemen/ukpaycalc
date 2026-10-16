import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_TITLE = "About UKPayCalc";
const PAGE_DESC =
  "About UKPayCalc — free UK contractor take-home pay tools, updated for the 2026/27 tax year.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE_URL}/about`,
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

export default function About() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGE_TITLE,
    url: `${SITE_URL}/about`,
    about: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <h1 className="text-3xl font-extrabold tracking-tight">About UKPayCalc</h1>
      <p className="mt-4 text-zinc-600">
        UKPayCalc is a free set of tools for UK contractors and freelancers:
        a take-home pay calculator, an IR35 inside-vs-outside comparison, and a
        plain-English umbrella vs limited company guide.
      </p>
      <p className="mt-4 text-zinc-600">
        All figures use HMRC rates for the 2026/27 tax year (6 April 2026 – 5
        April 2027), and every calculator shows its workings line by line — so
        you can see exactly where each pound goes.
      </p>
      <p className="mt-4 text-zinc-600">
        Everything runs in your browser: no signup, and nothing you enter
        leaves your device. Results are estimates for guidance, not financial
        or tax advice — confirm important decisions with HMRC or a qualified
        accountant.
      </p>
    </div>
  );
}
