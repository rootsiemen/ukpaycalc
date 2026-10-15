"use client";

import { useMemo, useState } from "react";
import {
  incomeTax,
  employeeNI,
  personalAllowance,
  gbp,
  TAX_YEAR,
  type Region,
} from "@/lib/tax";

const num = (s: string) => parseFloat(s.replace(/,/g, "")) || 0;

export default function TakeHomeForm() {
  const [mode, setMode] = useState<"salary" | "hourly">("salary");
  const [salary, setSalary] = useState("50000");
  const [hourly, setHourly] = useState("35");
  const [hours, setHours] = useState("37.5");
  const [region, setRegion] = useState<Region>("ruk");

  const gross = useMemo(() => {
    if (mode === "salary") return num(salary);
    return num(hourly) * num(hours) * 52;
  }, [mode, salary, hourly, hours]);

  const r = useMemo(() => {
    const tax = incomeTax(gross, region);
    const ni = employeeNI(gross);
    const net = gross - tax - ni;
    return {
      pa: personalAllowance(gross),
      tax,
      ni,
      net,
      monthly: net / 12,
      weekly: net / 52,
      eff: gross > 0 ? ((tax + ni) / gross) * 100 : 0,
    };
  }, [gross, region]);

  const inputCls =
    "mt-1 w-full rounded-xl border border-zinc-300 px-4 py-2.5 font-semibold focus:border-blue-700 focus:outline-none";
  const seg = (active: boolean) =>
    `flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-blue-800 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Take-Home Pay Calculator {TAX_YEAR}
      </h1>
      <p className="mt-3 text-zinc-600">
        Enter your gross pay to see income tax, employee National Insurance and
        your net take-home pay for the {TAX_YEAR} tax year.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex gap-2">
          <button className={seg(mode === "salary")} onClick={() => setMode("salary")}>
            Annual salary
          </button>
          <button className={seg(mode === "hourly")} onClick={() => setMode("hourly")}>
            Hourly rate
          </button>
        </div>

        {mode === "salary" ? (
          <div className="mt-4">
            <label className="block text-sm font-semibold text-zinc-700">Gross annual salary (£)</label>
            <input value={salary} onChange={(e) => setSalary(e.target.value)} inputMode="numeric" className={inputCls} />
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-zinc-700">Hourly rate (£)</label>
              <input value={hourly} onChange={(e) => setHourly(e.target.value)} inputMode="decimal" className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700">Hours per week</label>
              <input value={hours} onChange={(e) => setHours(e.target.value)} inputMode="decimal" className={inputCls} />
            </div>
          </div>
        )}

        <div className="mt-4">
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Tax region</label>
          <div className="flex gap-2">
            <button className={seg(region === "ruk")} onClick={() => setRegion("ruk")}>
              England / Wales / NI
            </button>
            <button className={seg(region === "scotland")} onClick={() => setRegion("scotland")}>
              Scotland
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-900">Take-home pay</p>
          <p className="text-3xl font-extrabold text-blue-950">{gbp(r.net)} <span className="text-base font-semibold">/ year</span></p>
          <p className="mt-1 text-sm text-blue-900">
            {gbp(r.monthly)} / month · {gbp(r.weekly)} / week
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Gross pay", gbp(gross)],
                ["Personal allowance", gbp(r.pa)],
                ["Income tax", "− " + gbp(r.tax)],
                ["Employee National Insurance", "− " + gbp(r.ni)],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-zinc-100">
                  <td className="py-2 text-zinc-600">{k}</td>
                  <td className="py-2 text-right font-semibold">{v}</td>
                </tr>
              ))}
              <tr className="font-extrabold">
                <td className="py-2">Net take-home</td>
                <td className="py-2 text-right">{gbp(r.net)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Effective deduction rate: {r.eff.toFixed(1)}%. Assumes a standard 1257L
          tax code, no pension contributions, no student loan, under State Pension age.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-bold">How the maths works ({TAX_YEAR})</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>Income tax is progressive — each rate applies only to the slice of income in that band.</li>
          <li>Personal allowance £12,570 tapers by £1 for every £2 over £100,000 (gone at £125,140).</li>
          <li>Employee NI: 8% between £12,570 and £50,270, then 2% above.</li>
          <li>Scotland uses six bands (19%–48%) on the same £12,570 allowance.</li>
        </ul>
      </div>
    </div>
  );
}
