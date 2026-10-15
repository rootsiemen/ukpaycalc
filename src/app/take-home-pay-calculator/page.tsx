import type { Metadata } from "next";
import TakeHomeForm from "./calculator";

export const metadata: Metadata = {
  title: "Take-Home Pay Calculator UK 2026/27 — Salary & Hourly",
  description:
    "Free UK take-home pay calculator for 2026/27. Enter salary or hourly rate, get income tax, National Insurance and net monthly pay. England & Scotland.",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <TakeHomeForm />
    </>
  );
}
