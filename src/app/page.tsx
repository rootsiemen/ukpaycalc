import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_TITLE = "UKPayCalc — Contractor Take-Home Pay, IR35 & Umbrella Tools";
const PAGE_DESC =
  "Free UK contractor calculators for 2026/27: take-home pay, IR35 inside vs outside, and umbrella vs limited company guide. Instant results, no signup.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: SITE_URL,
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

const tools = [
  {
    href: "/take-home-pay-calculator",
    title: "Take-Home Pay Calculator",
    desc: "Salary or hourly rate in, net pay out. Income tax + employee NI for 2026/27, England or Scotland.",
    tag: "2026/27 rates",
  },
  {
    href: "/ir35-calculator",
    title: "IR35 Calculator",
    desc: "Day rate in — see inside vs outside IR35 take-home side by side, with every deduction shown.",
    tag: "Inside / Outside",
  },
  {
    href: "/umbrella-vs-limited",
    title: "Umbrella vs Limited Guide",
    desc: "How umbrella deductions really work, limited company basics, and which suits your contract.",
    tag: "Plain-English guide",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight">
          UK Contractor <span className="text-blue-800">Take-Home Pay</span> Tools
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Free calculators for UK contractors and freelancers — take-home pay,
          IR35 inside vs outside, umbrella vs limited. Updated for the 2026/27
          tax year. No signup, instant results.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tools.map((t) => (
          <a
            key={t.href}
            href={t.href}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            <span className="inline-block text-xs font-semibold text-blue-800 bg-blue-50 rounded-full px-3 py-1">
              {t.tag}
            </span>
            <h2 className="mt-3 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{t.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-800">
              Open tool →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-white border border-zinc-200 p-6">
        <h2 className="text-xl font-bold">Why UKPayCalc?</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>2026/27 HMRC rates: personal allowance £12,570, basic 20%, higher 40%, additional 45%; employee NI 8% then 2%.</li>
          <li>Every deduction shown line by line — including the employer NI that comes out of your rate inside IR35.</li>
          <li>Scotland&apos;s six-band system supported, not just England.</li>
          <li>Runs entirely in your browser. Estimates only — not financial advice.</li>
        </ul>
      </div>
    </div>
  );
}
