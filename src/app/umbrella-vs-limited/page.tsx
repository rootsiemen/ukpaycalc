import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbrella vs Limited Company — Which Is Right for You?",
  description:
    "Plain-English guide: how umbrella company deductions really work (margin, employer NI, levy), limited company basics, and which suits your contract.",
};

export default function UmbrellaVsLimited() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Umbrella Company vs Limited Company
      </h1>
      <p className="mt-3 text-zinc-600">
        The two main ways UK contractors get paid — explained without the jargon,
        including where every pound of an umbrella deduction actually goes.
      </p>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-bold">How an umbrella company works</h2>
        <p className="mt-3 text-sm text-zinc-600">
          An umbrella company employs you. Your agency pays the umbrella an{" "}
          <strong>assignment rate</strong> — and that rate has to cover the cost
          of employing you, not just your wage. Here is the deduction chain, in
          order:
        </p>
        <ol className="mt-4 space-y-3 text-sm text-zinc-600 list-decimal pl-5">
          <li>
            <strong className="text-zinc-900">Umbrella margin</strong> — the umbrella&apos;s
            fee, typically <strong>£15–£30 per week</strong> (£80–£150/month). This is
            the only fee the umbrella keeps.
          </li>
          <li>
            <strong className="text-zinc-900">Employer National Insurance</strong> — 15%
            on everything above £5,000 a year. This is <em>met out of the assignment
            rate</em> before your gross pay is set. It must never appear as a deduction
            from your gross pay on the payslip — if it does, challenge it.
          </li>
          <li>
            <strong className="text-zinc-900">Apprenticeship / Growth & Skills Levy</strong> — 0.5%
            where the umbrella&apos;s pay bill exceeds £3m. Most large umbrellas pass this on.
          </li>
          <li>
            <strong className="text-zinc-900">Your gross pay</strong> — whatever is left.
            From this the umbrella deducts income tax (PAYE), employee NI, your pension
            contribution and any student loan.
          </li>
          <li>
            <strong className="text-zinc-900">Take-home pay</strong> — what lands in your bank.
          </li>
        </ol>
        <p className="mt-4 text-sm text-zinc-600">
          Rule of thumb: on a £400/day assignment, roughly £2,000 of weekly assignment
          income becomes about £1,700 of gross pay <em>before</em> your own tax. Always
          ask whether a quoted rate is the assignment rate or the rate after deductions —
          and get a written reconciliation of assignment rate → gross pay.
        </p>
        <p className="mt-3 text-sm text-zinc-600">
          Umbrella employees do get employment rights: paid holiday (usually accrued at
          12.07% of gross or rolled up), minimum wage protection and auto-enrolment pension.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-bold">How a limited company works</h2>
        <p className="mt-3 text-sm text-zinc-600">
          You run your own company (usually a personal service company). The client pays
          your company gross. You then decide how to extract the money — the classic
          approach outside IR35 is a small director&apos;s salary (around the NI threshold)
          plus dividends from the remaining profit after corporation tax (19% on profits
          up to £50,000, 25% above £250,000, marginal relief between).
        </p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>Legitimate business expenses (travel, equipment, accountancy, training) reduce taxable profit.</li>
          <li>You control timing — profits can be retained in the company.</li>
          <li>You handle (or pay an accountant for) bookkeeping, VAT, payroll and annual filings — typically £100–£150/month for accountancy.</li>
          <li>Dividends have a £500 annual allowance, then dividend tax at 10.75% (basic), 35.75% (higher) or 39.35% (additional) for 2026/27.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-bold">Side-by-side comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-500 border-b">
                <th className="py-2 pr-4"></th>
                <th className="py-2 pr-4">Umbrella</th>
                <th className="py-2">Limited company</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Best for", "Short contracts, inside-IR35 roles, first-time contractors", "Longer contracts, outside-IR35 roles, higher day rates"],
                ["Admin", "Almost none — umbrella runs payroll", "Bookkeeping, filings, VAT — usually via accountant"],
                ["Take-home on £100k", "Roughly £56–59k equivalent (PAYE)", "Roughly £65–68k via salary + dividends"],
                ["Expenses", "Very limited", "Deductible against profit"],
                ["Employment rights", "Holiday pay, pension auto-enrolment", "None (you're the director)"],
                ["IR35 risk", "None — you're an employee", "You/your client must assess status"],
                ["Cost", "£15–30/week margin", "£100–150/month accountancy"],
              ].map(([k, a, b]) => (
                <tr key={k} className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-semibold">{k}</td>
                  <td className="py-2 pr-4 text-zinc-600">{a}</td>
                  <td className="py-2 text-zinc-600">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-bold">Who should pick which?</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li><strong className="text-zinc-900">Pick umbrella</strong> if your contract is inside IR35, the assignment is short, or you want zero admin. Inside IR35 there is no tax advantage to a limited company anyway.</li>
          <li><strong className="text-zinc-900">Pick limited</strong> if contracts are outside IR35, your day rate is high, and you&apos;re comfortable with (or paying for) the admin. The tax efficiency compounds over time.</li>
          <li><strong className="text-zinc-900">Red flags:</strong> any umbrella promising &quot;90% retention&quot; or unusually high take-home is likely a disguised tax avoidance scheme. Stick to established, accredited providers.</li>
        </ul>
        <p className="mt-4 text-xs text-zinc-500">
          General information only — not financial or tax advice. Figures are 2026/27
          estimates; confirm with a qualified accountant before deciding.
        </p>
      </section>
    </div>
  );
}
