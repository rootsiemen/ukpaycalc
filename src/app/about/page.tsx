import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UKPayCalc",
  description: "About UKPayCalc — free UK contractor take-home pay tools.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
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
