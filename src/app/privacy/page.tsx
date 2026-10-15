import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_TITLE = "Privacy Policy";
const PAGE_DESC =
  "UKPayCalc privacy policy — no data collection. All calculations run locally in your browser.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE_URL}/privacy`,
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

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-zinc-600">
        UKPayCalc does not collect, store or transmit any personal data. All
        calculations happen locally in your browser — the numbers you enter
        never leave your device.
      </p>
      <p className="mt-4 text-zinc-600">
        We do not use accounts, tracking cookies or analytics that identify
        you. If this policy changes, the updated version will be posted here.
      </p>
      <p className="mt-4 text-sm text-zinc-500">Last updated: October 2026.</p>
    </div>
  );
}
