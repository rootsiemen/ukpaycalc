"use client";

import { useMemo, useState } from "react";
import {
  incomeTax,
  employeeNI,
  employerNI,
  LEVY_RATE,
  gbp,
  TAX_YEAR,
  type Region,
} from "@/lib/tax";

const num = (s: string) => parseFloat(s.replace(/,/g, "")) || 0;

export default function Ir35Form() {
  const [dayRate, setDayRate] = useState("500");
  const [daysWeek, setDaysWeek] = useState("5");
  const [weeks, setWeeks] = useState("46");
  const [region, setRegion] = useState<Region>("ruk");
  const [status, setStatus] = useState<"inside" | "outside">("inside");

  const r = useMemo(() => {
    const contract = num(dayRate) * num(daysWeek) * num(weeks);
    // Inside IR35 — deemed employment (Chapter 10 ITEPA / off-payroll rules)
    const erNI = employerNI(contract);
    const levy = Math.round(contract * LEVY_RATE); // may apply; labelled below
    const deemed = contract - erNI - levy;
    const tax = incomeTax(deemed, region);
    const ni = employeeNI(deemed);
    const takeHome = deemed - tax - ni;
    return {
      contract,
      erNI,
      levy,
      deemed,
      tax,
      ni,
      takeHome,
      retention: contract > 0 ? (takeHome / contract) * 100 : 0,
      effDay: num(daysWeek) * num(weeks) > 0 ? takeHome / (num(daysWeek) * num(weeks)) : 0,
    };
  }, [dayRate, daysWeek, weeks, region]);

  const inputCls =
    "mt-1 w-full rounded-xl border border-zinc-300 px-4 py-2.5 font-semibold focus:border-blue-700 focus:outline-none";
  const seg = (active: boolean) =>
    `flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-blue-800 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        IR35 Calculator {TAX_YEAR}
      </h1>
      <p className="mt-3 text-zinc-600">
        Enter your day rate to compare take-home pay inside vs outside IR35.
        Inside IR35, employer costs come out of your rate before you see a penny.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-semibold text-zinc-700">Day rate (£)</label>
            <input value={dayRate} onChange={(e) => setDayRate(e.target.value)} inputMode="decimal" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700">Days / week</label>
            <input value={daysWeek} onChange={(e) => setDaysWeek(e.target.value)} inputMode="decimal" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700">Weeks / year</label>
            <input value={weeks} onChange={(e) => setWeeks(e.target.value)} inputMode="decimal" className={inputCls} />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Your IR35 status</label>
            <div className="flex gap-2">
              <button className={seg(status === "inside")} onClick={() => setStatus("inside")}>Inside IR35</button>
              <button className={seg(status === "outside")} onClick={() => setStatus("outside")}>Outside IR35</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Tax region</label>
            <div className="flex gap-2">
              <button className={seg(region === "ruk")} onClick={() => setRegion("ruk")}>England / Wales / NI</button>
              <button className={seg(region === "scotland")} onClick={() => setRegion("scotland")}>Scotland</button>
            </div>
          </div>
        </div>

        {status === "inside" ? (
          <>
            <div className="mt-6 rounded-xl bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-900">Take-home (inside IR35)</p>
              <p className="text-3xl font-extrabold text-blue-950">{gbp(r.takeHome)} <span className="text-base font-semibold">/ year</span></p>
              <p className="mt-1 text-sm text-blue-900">
                {r.retention.toFixed(1)}% of contract value · effective {gbp(r.effDay)} / day
              </p>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Contract value (assignment rate)", gbp(r.contract)],
                    ["Employer NI — 15% above £5,000 (from your rate)", "− " + gbp(r.erNI)],
                    ["Apprenticeship / skills levy — 0.5% (often applies)", "− " + gbp(r.levy)],
                    ["Deemed salary (taxable)", gbp(r.deemed)],
                    ["Income tax (PAYE)", "− " + gbp(r.tax)],
                    ["Employee NI (PAYE)", "− " + gbp(r.ni)],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-zinc-100">
                      <td className="py-2 text-zinc-600">{k}</td>
                      <td className="py-2 text-right font-semibold">{v}</td>
                    </tr>
                  ))}
                  <tr className="font-extrabold">
                    <td className="py-2">Take-home pay</td>
                    <td className="py-2 text-right">{gbp(r.takeHome)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Deemed-employment model (off-payroll rules): the fee payer meets employer NI
              out of the assignment rate, then deducts PAYE tax and employee NI. You get no
              employment rights in return. Estimates only.
            </p>
          </>
        ) : (
          <>
            <div className="mt-6 rounded-xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-900">Contract value (outside IR35)</p>
              <p className="text-3xl font-extrabold text-emerald-950">{gbp(r.contract)} <span className="text-base font-semibold">/ year</span></p>
              <p className="mt-1 text-sm text-emerald-900">Paid gross to your limited company — no PAYE at source</p>
            </div>
            <div className="mt-4 text-sm text-zinc-600 space-y-2">
              <p>
                Outside IR35 the fee payer deducts nothing. Your limited company receives
                the full {gbp(r.contract)} and you decide how to take it — typically a
                small director&apos;s salary plus dividends after corporation tax, with
                legitimate business expenses deductible.
              </p>
              <p>
                As a rough illustration, industry calculators put take-home on a £100,000
                contract at around <strong>£65,000–£68,000 outside IR35</strong> versus
                roughly <strong>£56,000–£59,000 inside</strong> — the gap is mostly the
                employer NI that comes out of your rate inside IR35. Your exact figure
                depends on salary/dividend split, expenses and pension contributions.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-bold">Inside vs outside — the key difference</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-500 border-b">
                <th className="py-2 pr-4"></th>
                <th className="py-2 pr-4">Inside IR35</th>
                <th className="py-2">Outside IR35</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who deducts tax", "Fee payer (agency/client)", "Your own company"],
                ["Employer NI", "Comes out of YOUR rate", "Only on salary you pay yourself"],
                ["Expenses", "Very limited", "Deductible against profit"],
                ["Employment rights", "None", "None — but better tax efficiency"],
              ].map(([k, a, b]) => (
                <tr key={k} className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-semibold">{k}</td>
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
