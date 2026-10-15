import type { Metadata } from "next";
import TakeHomeForm from "./calculator";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_PATH = "/take-home-pay-calculator";
const PAGE_TITLE = "Take-Home Pay Calculator UK 2026/27 — Salary & Hourly";
const PAGE_DESC =
  "Free UK take-home pay calculator for 2026/27. Enter salary or hourly rate, get income tax, National Insurance and net monthly pay. England & Scotland.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE_URL}${PAGE_PATH}`,
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much tax do I pay on my salary in 2026/27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In England, Wales and Northern Ireland: 0% on the first £12,570 (personal allowance), 20% basic rate to £50,270, 40% higher rate to £125,140, and 45% above. Employee National Insurance is 8% between £12,570 and £50,270, then 2% above.",
      },
    },
    {
      "@type": "Question",
      name: "What is the personal allowance for 2026/27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "£12,570. It reduces by £1 for every £2 earned over £100,000, disappearing entirely at £125,140 — creating an effective 60% marginal rate in that band.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scotland have different tax bands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scotland has six bands in 2026/27: starter 19%, basic 20%, intermediate 21%, higher 42%, advanced 45% and top 48% above £125,140, on the same £12,570 personal allowance.",
      },
    },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UKPayCalc Take-Home Pay Calculator 2026/27",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}${PAGE_PATH}`,
  description: PAGE_DESC,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Take-Home Pay Calculator",
      item: `${SITE_URL}${PAGE_PATH}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <TakeHomeForm />
    </>
  );
}
