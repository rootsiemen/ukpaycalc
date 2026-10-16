import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UKPayCalc — UK Contractor Take-Home Pay Tools",
    template: "%s | UKPayCalc",
  },
  description:
    "Free UK contractor tools: take-home pay calculator, IR35 inside/outside comparison, umbrella vs limited guide. Updated for the 2026/27 tax year.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "UKPayCalc — UK Contractor Take-Home Pay Tools",
    description:
      "Take-home pay calculator, IR35 checker and umbrella vs limited guide for UK contractors. 2026/27 rates.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "UKPayCalc — UK Contractor Take-Home Pay & IR35 Tools 2026/27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKPayCalc — UK Contractor Take-Home Pay Tools",
    description:
      "Take-home pay calculator, IR35 checker and umbrella vs limited guide for UK contractors. 2026/27 rates.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Free UK contractor tools: take-home pay calculator, IR35 inside/outside comparison, umbrella vs limited company guide.",
};

/** Site brand entity for AI-search/GEO consistency. */
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Free UK contractor tools: take-home pay calculator, IR35 inside/outside comparison, umbrella vs limited company guide.",
};

function Header() {
  const links = [
    { href: "/take-home-pay-calculator", label: "Take-Home Pay" },
    { href: "/ir35-calculator", label: "IR35 Calculator" },
    { href: "/umbrella-vs-limited", label: "Umbrella vs Limited" },
    { href: "/blog", label: "Guides" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-blue-800">UK</span>
          <span className="text-zinc-900">PayCalc</span>
        </a>
        <nav className="flex gap-4 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue-800">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
        <p className="font-semibold text-zinc-700 mb-2">UKPayCalc</p>
        <p className="max-w-2xl">
          UKPayCalc provides estimates for guidance only — it is not financial
          or tax advice. Rates follow HMRC figures for 2026/27 but rules change;
          confirm important decisions with HMRC or a qualified accountant.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/take-home-pay-calculator" className="hover:text-blue-800">Take-Home Pay</a>
          <a href="/ir35-calculator" className="hover:text-blue-800">IR35 Calculator</a>
          <a href="/umbrella-vs-limited" className="hover:text-blue-800">Umbrella vs Limited</a>
          <a href="/blog" className="hover:text-blue-800">Guides</a>
          <a href="/about" className="hover:text-blue-800">About</a>
          <a href="/privacy" className="hover:text-blue-800">Privacy</a>
        </div>
        <p className="mt-4 text-xs">© 2026 UKPayCalc. Rates: 2026/27 tax year (6 Apr 2026 – 5 Apr 2027).</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* 100% privacy-first analytics */}
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
