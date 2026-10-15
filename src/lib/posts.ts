export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  toolHref: string;
  toolLabel: string;
  content: string;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export const posts: Post[] = [
  {
    slug: "contractor-take-home-pay-2026-27",
    title: "UK Contractor Take-Home Pay 2026/27: Limited Company vs Umbrella",
    date: "2026-10-15",
    excerpt:
      "How much of a £100k contract do you actually keep in 2026/27? A line-by-line comparison of limited company and umbrella take-home, with every deduction shown.",
    description:
      "UK contractor take-home pay 2026/27 compared: limited company vs umbrella on a £100k contract. Income tax, NI, employer NI and dividends explained line by line.",
    toolHref: "/take-home-pay-calculator",
    toolLabel: "Take-Home Pay Calculator",
    content: `
<p>The single most common question UK contractors ask is also the simplest: <strong>how much of my contract value do I actually keep?</strong> The answer for the 2026/27 tax year (6 April 2026 – 5 April 2027) depends almost entirely on one choice — whether you work through your own limited company or through an umbrella company.</p>

<p>On a £100,000 annual contract value, the difference is roughly <strong>£7,000–£10,000 a year</strong> in take-home pay. This guide walks through both routes line by line, using the actual 2026/27 HMRC figures, so you can see exactly where every pound goes.</p>

<h2>The 2026/27 tax figures you need</h2>

<p>Both routes start from the same HMRC rates for England, Wales and Northern Ireland:</p>

<ul>
<li><strong>Personal allowance:</strong> £12,570 — the first £12,570 of income is tax-free. It tapers by £1 for every £2 earned over £100,000, disappearing at £125,140.</li>
<li><strong>Income tax:</strong> 20% basic rate to £50,270 · 40% higher rate to £125,140 · 45% additional rate above.</li>
<li><strong>Employee National Insurance:</strong> 8% on earnings between £12,570 and £50,270, then 2% above.</li>
<li><strong>Employer National Insurance:</strong> 15% on everything above £5,000 a year.</li>
</ul>

<p>Scotland runs its own six-band system (starter 19%, basic 20%, intermediate 21%, higher 42%, advanced 45%, top 48% above £125,140) on the same £12,570 allowance — the worked examples below use England figures, but the principles are identical.</p>

<h2>Route 1: Limited company (outside IR35)</h2>

<p>Through your own personal service company, the client pays your company <strong>gross</strong> — the full £100,000. You then extract it tax-efficiently, typically as a small director's salary plus dividends:</p>

<ol>
<li><strong>Director's salary</strong> — set around the NI threshold (roughly £12,570). This is a deductible expense for the company, and at this level you pay virtually no income tax or employee NI on it.</li>
<li><strong>Corporation tax</strong> — the company pays 19% on profits up to £50,000, 25% above £250,000, with marginal relief between. On £100k of profit after salary, that is roughly £19,000–£20,000.</li>
<li><strong>Dividends</strong> — you distribute the remaining profit to yourself. The first £500 of dividends is tax-free (dividend allowance); above that, dividend tax is 10.75% (basic), 35.75% (higher) or 39.35% (additional) for 2026/27.</li>
<li><strong>Expenses</strong> — legitimate business costs (travel, equipment, accountancy at £100–£150/month, training) reduce taxable profit before corporation tax.</li>
</ol>

<p><strong>Typical outcome on £100k: roughly £65,000–£68,000 in your pocket</strong> — about 65–68% retention. You also control timing: profits can be retained in the company for a leaner year.</p>

<h2>Route 2: Umbrella company</h2>

<p>An umbrella employs you. The agency pays the umbrella an <strong>assignment rate</strong> — and that rate must cover the cost of employing you, not just your wage. The deductions come off in this order:</p>

<ol>
<li><strong>Umbrella margin</strong> — the umbrella's fee, typically £15–£30 per week. This is the only fee the umbrella keeps.</li>
<li><strong>Employer National Insurance</strong> — 15% on everything above £5,000. This is met <em>out of the assignment rate</em> before your gross pay is set.</li>
<li><strong>Apprenticeship / Growth &amp; Skills Levy</strong> — 0.5% where the umbrella's pay bill exceeds £3m; most large umbrellas pass it on.</li>
<li><strong>Your gross pay</strong> — whatever remains. From this the umbrella deducts PAYE income tax (20/40/45%), employee NI (8%/2%), pension and any student loan.</li>
</ol>

<p><strong>Typical outcome on a £100k assignment rate: roughly £56,000–£59,000 take-home</strong> — about 56–59% retention. The gap versus the limited route is almost entirely the employer NI that comes out of the rate, plus the margin.</p>

<h2>Side-by-side on £100,000</h2>

<table>
<thead><tr><th></th><th>Limited company</th><th>Umbrella</th></tr></thead>
<tbody>
<tr><td>Contract value</td><td>£100,000</td><td>£100,000</td></tr>
<tr><td>Employer NI + levy</td><td>—</td><td>~£14,500</td></tr>
<tr><td>Umbrella margin</td><td>—</td><td>~£1,000</td></tr>
<tr><td>Income tax + employee NI</td><td>~£17,000*</td><td>~£27,000</td></tr>
<tr><td><strong>Take-home</strong></td><td><strong>~£65–68k</strong></td><td><strong>~£56–59k</strong></td></tr>
</tbody>
</table>
<p><small>* Limited route tax is split between corporation tax and dividend tax rather than PAYE; the figure is the combined effective burden.</small></p>

<h2>When does umbrella win?</h2>

<p>The limited route is not always the right answer:</p>

<ul>
<li><strong>Inside IR35 contracts</strong> — there is no tax advantage to a limited company inside IR35 anyway; the deemed payment rules wipe it out.</li>
<li><strong>Short assignments</strong> — for a 4–8 week contract, the admin of running a company (or paying an accountant £100–£150/month) can eat the saving.</li>
<li><strong>First-time contractors</strong> — umbrella means zero admin: no bookkeeping, no VAT, no filings.</li>
<li><strong>Employment rights</strong> — umbrella employees get holiday pay (usually 12.07% accrued), minimum wage protection and auto-enrolment pension.</li>
</ul>

<h2>The bottom line</h2>

<p>Outside IR35 on a decent day rate, a limited company keeps meaningfully more of every contract — typically £7k–£10k a year on £100k. Inside IR35, or for short stints, umbrella is usually the pragmatic choice. Either way, the key discipline is the same: <strong>always know whether a quoted rate is the assignment rate or the rate after deductions</strong>, and get every deduction shown in writing.</p>

<p>Want your exact numbers? Run them through our free <a href="/take-home-pay-calculator">take-home pay calculator</a> — salary or day rate in, every deduction shown line by line, England and Scotland supported.</p>
`,
  },
  {
    slug: "ir35-explained-2026",
    title: "IR35 Explained 2026: Inside vs Outside Rules for Contractors",
    date: "2026-10-15",
    excerpt:
      "What IR35 actually means in 2026, who decides your status since the off-payroll reforms, and what inside vs outside costs you — in plain English.",
    description:
      "IR35 explained for UK contractors in 2026: inside vs outside rules, who decides your status, Status Determination Statements, and the real cost difference.",
    toolHref: "/ir35-calculator",
    toolLabel: "IR35 Calculator",
    content: `
<p>IR35 is the piece of tax law UK contractors love to hate — and the one most misunderstand. In 2026 the rules themselves have not changed since the off-payroll reforms of April 2021, but confusion persists. Here is what IR35 actually is, how inside and outside determinations work in practice, and what each one costs you.</p>

<h2>What IR35 is</h2>

<p>IR35 (the "intermediaries legislation") targets <strong>disguised employment</strong>: someone working like an employee — same desk, same hours, same boss — but billing through a limited company to pay less tax. If HMRC decides you would have been an employee had you been engaged directly, the contract is <strong>inside IR35</strong>, and you are taxed broadly like an employee. If you are genuinely in business on your own account — multiple clients, financial risk, right of substitution — the contract is <strong>outside IR35</strong>, and the limited-company tax advantages apply.</p>

<p>The test is about <strong>working practices, not job titles</strong>. Three factors dominate: control (who decides what, when and how the work is done), substitution (can you send someone else?), and mutuality of obligation (is the client obliged to offer work and are you obliged to accept it?).</p>

<h2>Who decides your status in 2026</h2>

<p>Since the April 2021 off-payroll reforms, the client usually decides — not you:</p>

<ul>
<li><strong>Medium and large private-sector clients</strong> (and <strong>all public-sector</strong> clients) must assess every contract and issue you a <strong>Status Determination Statement (SDS)</strong> explaining the decision and their reasoning.</li>
<li><strong>Small private-sector clients</strong> are exempt: your own limited company remains responsible for the determination, as under the original year-2000 rules.</li>
<li>Many clients use HMRC's <strong>CEST tool</strong> (Check Employment Status for Tax) as part of their assessment — it is indicative, not legally binding, and its answers depend heavily on how the questions are framed.</li>
</ul>

<p>If you disagree with an SDS, you can make representations to the client, who must respond within 45 days. In practice, many contractors also get an independent contract review (typically £100–£250) from a specialist — cheap insurance next to the sums involved.</p>

<h2>Inside IR35: what it costs</h2>

<p>Inside IR35, the fee payer deducts tax before you are paid. The chain looks like this:</p>

<ol>
<li><strong>Employer National Insurance — 15% above £5,000</strong> — comes out of your assignment rate first. On a £500/day contract (~£130k a year), that is roughly £18,750 a year that never reaches you.</li>
<li><strong>PAYE income tax</strong> — 20% to £50,270, 40% to £125,140, 45% above — on the reduced amount.</li>
<li><strong>Employee NI</strong> — 8% between £12,570 and £50,270, then 2%.</li>
</ol>

<p><strong>The typical cost of being inside IR35 versus outside is 6–11% of the contract value</strong> — driven almost entirely by the employer NI that lands on the rate. You also lose the ability to take dividends or retain profits; the "deemed payment" is taxed like salary in the year it is earned.</p>

<h2>Outside IR35: what it unlocks</h2>

<p>Outside IR35, you are treated as genuinely self-employed. The client pays your company gross, and you extract it as salary plus dividends — paying corporation tax (19% up to £50,000 profit, 25% above £250,000) and dividend tax (£500 allowance, then 10.75%/35.75%/39.35% for 2026/27) instead of PAYE. On a £100k contract that typically means <strong>£65k–£68k take-home versus £56k–£59k inside</strong>.</p>

<p>But outside status has to be <em>defended</em>: keep evidence of your working practices, maintain a substitution clause you could genuinely exercise, avoid employee-like benefits (staff parties, appraisals, line management), and keep contracts and reality aligned.</p>

<h2>Five practical steps for every contractor</h2>

<ol>
<li><strong>Get every SDS in writing</strong> and check the reasoning actually matches how you work — not the contract wording alone.</li>
<li><strong>Challenge a wrong determination</strong> — clients must consider your representations within 45 days.</li>
<li><strong>Get an independent review</strong> for high-value contracts; a few hundred pounds now beats a six-figure HMRC bill later.</li>
<li><strong>Document substitution and control</strong> — emails showing you chose your hours, declined work, or proposed a substitute are gold.</li>
<li><strong>Reassess on renewal</strong> — a contract that was outside IR35 can drift inside if the working practices change.</li>
</ol>

<h2>The bottom line</h2>

<p>IR35 is not going away, and in 2026 the practical battleground is the client's status determination. Know which side of the line your contract falls on, keep evidence, and price the 6–11% gap into every rate negotiation.</p>

<p>See the gap for your own day rate with our free <a href="/ir35-calculator">IR35 calculator</a> — inside vs outside take-home compared side by side, every deduction shown.</p>
`,
  },
  {
    slug: "umbrella-company-costs-uk-2026",
    title: "Umbrella Company Costs UK 2026: Fees, Deductions and Take-Home",
    date: "2026-10-15",
    excerpt:
      "Every umbrella deduction explained: the margin, employer NI, the 0.5% levy, and PAYE — plus a worked £400/day example and the red flags to avoid.",
    description:
      "Umbrella company costs in the UK for 2026: margin fees, employer NI at 15%, the 0.5% levy, and a worked example of take-home on £400/day.",
    toolHref: "/umbrella-vs-limited",
    toolLabel: "Umbrella vs Limited Guide",
    content: `
<p>Umbrella companies are the default route for contractors on inside-IR35 or short contracts — but the deductions confuse almost everyone. Where does the money go between the rate the agency quotes and the pay that lands in your bank? This guide breaks down every umbrella cost for 2026, with a worked example on £400/day.</p>

<h2>The one question that matters: assignment rate or pay rate?</h2>

<p>Agencies quote umbrella contractors an <strong>assignment rate</strong> — the total amount paid to the umbrella for your work. That rate has to cover the cost of employing you, not just your wage. Always ask: <em>"Is that the assignment rate or my rate after deductions?"</em> If an agency quotes £400/day as the assignment rate, your gross pay will be meaningfully lower. Get the answer in writing.</p>

<h2>The deduction chain, in order</h2>

<p>From the assignment rate, deductions come off in this sequence:</p>

<ol>
<li><strong>Umbrella margin — £15–£30 per week.</strong> The umbrella's fee for running payroll. This is the <em>only</em> fee the umbrella keeps. Anything much above £30/week deserves a question; anything disguised as something else deserves a challenge.</li>
<li><strong>Employer National Insurance — 15% above £5,000 a year.</strong> This is the big one, and the most misunderstood: it is met <em>out of the assignment rate</em>, before your gross pay is calculated. It must never appear as a deduction from your gross pay on the payslip — if it does, challenge it immediately.</li>
<li><strong>Apprenticeship / Growth &amp; Skills Levy — 0.5%</strong> where the umbrella's total pay bill exceeds £3m a year. Most large umbrellas pass this on; smaller ones may not incur it.</li>
<li><strong>Your gross pay</strong> — whatever is left after 1–3. From this the umbrella deducts:
  <ul>
    <li>Income tax via PAYE — 20% to £50,270, 40% to £125,140, 45% above (after the £12,570 personal allowance)</li>
    <li>Employee National Insurance — 8% between £12,570 and £50,270, then 2%</li>
    <li>Pension — auto-enrolment minimums unless you opt out</li>
    <li>Student loan, if applicable</li>
  </ul>
</li>
</ol>

<h2>Worked example: £400/day</h2>

<p>Assume 5 days a week, 46 working weeks a year (allowing for holidays):</p>

<ul>
<li><strong>Assignment income:</strong> £400 × 5 × 46 = £92,000</li>
<li><strong>Less umbrella margin</strong> (~£25/week × 46): −£1,150</li>
<li><strong>Less employer NI</strong> (15% of ~£87,000 above the £5,000 threshold): −£13,050</li>
<li><strong>Less levy</strong> (0.5% where passed on): −£460</li>
<li><strong>Gross pay:</strong> roughly £77,300</li>
<li><strong>Less PAYE + employee NI:</strong> −£21,500 approx.</li>
<li><strong>Take-home:</strong> roughly <strong>£55,800</strong> — about 61% of the assignment rate</li>
</ul>

<p>Rule of thumb: on a £400/day assignment, roughly £2,000 of weekly assignment income becomes about £1,700 of gross pay <em>before</em> your own tax. The employer NI is doing most of the damage — which is why comparing "rates" without knowing which rate is being quoted is meaningless.</p>

<h2>What you get for the deductions</h2>

<p>It is not all one-way. As an umbrella employee you have employment rights a limited-company director does not:</p>

<ul>
<li><strong>Holiday pay</strong> — usually accrued at 12.07% of gross, or rolled up into your pay. Check which your umbrella uses.</li>
<li><strong>Auto-enrolment pension</strong> — the umbrella must enrol you and contribute; you can opt out, but the employer contribution is free money if you stay in.</li>
<li><strong>Minimum wage protection, sick pay and statutory rights</strong> — you are an employee in law.</li>
<li><strong>Zero admin</strong> — no bookkeeping, no VAT returns, no company filings, no accountant's bill.</li>
</ul>

<h2>Red flags: schemes to avoid</h2>

<ul>
<li><strong>"90% retention" promises.</strong> Any umbrella or "loan scheme" promising unusually high take-home is almost certainly a disguised tax-avoidance scheme. HMRC is actively pursuing these, and the liability lands on you.</li>
<li><strong>Mini-umbrella companies.</strong> Fraudulent micro-companies used to exploit the employment allowance and VAT flat rate — if your "employer" keeps changing names, walk away.</li>
<li><strong>Offshore or non-UK payroll.</strong> Legitimate umbrellas operate UK payroll with full PAYE.</li>
<li><strong>Employer NI shown as a deduction from gross pay.</strong> It must come out of the assignment rate, never your gross. A payslip showing otherwise is wrong — or worse.</li>
</ul>

<h2>Choosing an umbrella: a checklist</h2>

<ol>
<li><strong>Accreditation</strong> — look for FCSA or Professional Passport accreditation.</li>
<li><strong>Written reconciliation</strong> — assignment rate → gross pay → net pay, before you start. Every deduction named.</li>
<li><strong>Margin in plain figures</strong> — £/week, not buried in percentages.</li>
<li><strong>Same-day or next-day payments</strong> and a UK-based support team.</li>
<li><strong>Clear holiday-pay policy</strong> — accrued or rolled-up, stated upfront.</li>
</ol>

<h2>The bottom line</h2>

<p>Umbrella costs are not mysterious once you see the chain: margin, employer NI, levy, then your own tax. The total cost of the route on typical rates is £15–£30/week in margin plus roughly 15% of the rate in employment costs — which is exactly why it suits short, inside-IR35 contracts and not long outside-IR35 ones.</p>

<p>Still deciding between routes? Read our <a href="/umbrella-vs-limited">umbrella vs limited company guide</a> for the full side-by-side comparison.</p>
`,
  },
];
