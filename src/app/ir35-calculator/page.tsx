import type { Metadata } from "next";
import Ir35Form from "./calculator";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_PATH = "/ir35-calculator";
const PAGE_TITLE = "IR35 Calculator 2026/27 — Inside vs Outside Take-Home";
const PAGE_DESC =
  "Free IR35 calculator for 2026/27. Enter your day rate and compare inside vs outside IR35 take-home pay, with every deduction shown line by line.";

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
      name: "What is the difference between inside and outside IR35?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inside IR35, HMRC treats you as a disguised employee: the fee payer deducts employer National Insurance from your rate, then PAYE income tax and employee NI from what's left. Outside IR35 you are genuinely self-employed and typically work through your limited company on a salary-plus-dividends basis, keeping more of the contract value.",
      },
    },
    {
      "@type": "Question",
      name: "Who decides my IR35 status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since the April 2021 off-payroll reforms, medium and large private-sector clients (and all public-sector clients) decide your status and must give you a Status Determination Statement. For small private-sector clients, your own limited company remains responsible.",
      },
    },
    {
      "@type": "Question",
      name: "How much does being inside IR35 cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 6–11% of the contract value versus outside IR35, mainly because employer National Insurance (15% above £5,000) comes out of your assignment rate before you are paid.",
      },
    },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UKPayCalc IR35 Calculator 2026/27",
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
      name: "IR35 Calculator",
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
      <Ir35Form />
    </>
  );
}
