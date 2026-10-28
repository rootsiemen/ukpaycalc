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
  {
    slug: "uk-tax-code-explained-2026-27",
    title: "UK Tax Code Explained 2026/27: What Your Payslip Code Means and What It Does to Your Take-Home Pay",
    date: "2026-10-26",
    excerpt:
      "Your tax code decides how much tax-free pay you get before PAYE starts. Decode 1257L, BR, D0, K and emergency W1/M1 codes — with worked 2026/27 examples showing exactly what each one costs you.",
    description:
      "UK tax code explained 2026/27: what 1257L, BR, D0, K and emergency W1/M1 codes mean, and exactly what each one does to your take-home pay.",
    toolHref: "/take-home-pay-calculator",
    toolLabel: "Take-Home Pay Calculator",
    content: `
<p><strong>UK tax code explained 2026/27, in one sentence:</strong> your tax code tells your employer how much of your pay is tax-free before PAYE (Pay As You Earn) starts deducting income tax — and a wrong code quietly changes your take-home pay every single payday until someone spots it. This guide decodes every code you are likely to see on a payslip, using the actual 2026/27 figures for the tax year running from 6 April 2026 to 5 April 2027, and shows with worked examples exactly what each code does to your bank balance.</p>

<p>If you have one job, no company benefits and no second income, your code should almost certainly be <strong>1257L</strong>. Anything else is not automatically wrong — but it should always be explainable from your own circumstances. A code you cannot explain is a code worth checking.</p>

<h2>UK Tax Code Explained 2026/27: How to Read Your Code</h2>

<p>Most tax codes have two parts: a <strong>number</strong> and a <strong>letter</strong>.</p>

<ul>
<li><strong>The number × 10 = your tax-free pay for that job.</strong> Code 1257L means £12,570 of tax-free pay a year. Code 900L means £9,000. Code 1383M means £13,830.</li>
<li><strong>The letter says which rules apply.</strong> L is the standard Personal Allowance. M means you received Marriage Allowance from your partner; N means you gave it away. T means HMRC is reviewing your allowance. S and C prefixes mean Scottish and Welsh tax rates apply.</li>
<li><strong>Some codes have no number at all.</strong> BR, D0, D1, NT and 0T work differently — they do not depend on an allowance, and the table below explains each one.</li>
<li><strong>W1, M1 or X at the end</strong> means the code is applied on a non-cumulative, emergency basis: each payday is taxed on its own, ignoring what you earned earlier in the year.</li>
</ul>

<p>Your code appears on your payslip, your P45 when you leave a job, your P60 at the end of the tax year, and in your HMRC Personal Tax Account online or in the HMRC app. HMRC — not your employer — sets it; your employer only applies it.</p>

<h2>The 2026/27 Figures Behind Every Code</h2>

<p>Every code in this guide is built on the same GOV.UK figures for England, Wales and Northern Ireland in 2026/27:</p>

<table>
<thead><tr><th>Band</th><th>Taxable income</th><th>Rate</th></tr></thead>
<tbody>
<tr><td>Personal Allowance</td><td>Up to £12,570</td><td>0%</td></tr>
<tr><td>Basic rate</td><td>£12,571 to £50,270</td><td>20%</td></tr>
<tr><td>Higher rate</td><td>£50,271 to £125,140</td><td>40%</td></tr>
<tr><td>Additional rate</td><td>Over £125,140</td><td>45%</td></tr>
</tbody>
</table>

<p>The Personal Allowance has been frozen at £12,570 since 2021/22. Above £100,000 of adjusted net income it tapers away by £1 for every £2 over the limit, reaching zero at £125,140 — which is why a £110,000 earner has a smaller code (757L, as shown below) rather than no code at all.</p>

<p>National Insurance is separate from your tax code — your code never changes your NI. For 2026/27, most employees (category A) pay <strong>8% on earnings between £12,570 and £50,270, then 2% above</strong>. That is why the worked examples below always show tax and NI separately.</p>

<h2>Every Common Code, Decoded</h2>

<table>
<thead><tr><th>Code</th><th>What it means</th><th>When you see it</th></tr></thead>
<tbody>
<tr><td><strong>1257L</strong></td><td>£12,570 tax-free, standard rules</td><td>One job, no benefits, income under £100,000 — the default</td></tr>
<tr><td><strong>Any number + L</strong></td><td>That number × 10 tax-free</td><td>Allowance adjusted up or down (benefits, expenses, unpaid tax)</td></tr>
<tr><td><strong>1383M</strong></td><td>£13,830 tax-free</td><td>You received £1,260 of Marriage Allowance from your partner</td></tr>
<tr><td><strong>1131N</strong></td><td>£11,310 tax-free</td><td>You transferred £1,260 of allowance to your partner</td></tr>
<tr><td><strong>K475</strong></td><td>£4,750 ADDED to your taxable pay</td><td>Untaxed income or benefits exceed your allowance</td></tr>
<tr><td><strong>BR</strong></td><td>All pay taxed at 20%, no allowance</td><td>Second job or pension — allowance already used elsewhere</td></tr>
<tr><td><strong>D0</strong></td><td>All pay taxed at 40%, no allowance</td><td>Second income when you are already a higher-rate taxpayer</td></tr>
<tr><td><strong>D1</strong></td><td>All pay taxed at 45%, no allowance</td><td>Second income when you are already an additional-rate taxpayer</td></tr>
<tr><td><strong>0T</strong></td><td>No allowance; bands applied with no tax-free amount</td><td>New job without a P45, or allowance used up</td></tr>
<tr><td><strong>NT</strong></td><td>No tax deducted</td><td>HMRC has confirmed no tax is due on this income</td></tr>
<tr><td><strong>S1257L / C1257L</strong></td><td>Same allowance, Scottish / Welsh rates</td><td>You live in Scotland or Wales</td></tr>
<tr><td><strong>…W1 / …M1 / …X</strong></td><td>Emergency, non-cumulative basis</td><td>New job, no P45 yet — see below</td></tr>
</tbody>
</table>

<p>A K code deserves a second look because it works backwards: instead of giving you tax-free pay, it <em>adds</em> an amount to your taxable pay. K475 on a £40,000 salary means you are taxed as if you earned £44,750 — income tax of £8,950 instead of £5,486 on the standard code, a £3,464 difference for the year. K codes usually arise from a company car, private medical insurance, untaxed rental income or tax owed from a previous year being collected through your code.</p>

<h2>Emergency Codes: W1, M1 and X</h2>

<p>When you start a new job and HMRC does not yet have your details — usually because no P45 arrived — payroll puts you on an emergency code. The most common are <strong>1257L W1</strong> (weekly paid), <strong>1257L M1</strong> (monthly paid) and <strong>1257L X</strong> (irregular pay). You still get the £12,570 allowance, but only <strong>one pay period's worth at a time</strong> — £1,048 a month — with no credit for unused allowance from earlier in the year.</p>

<p>Worked example: you start a £35,000-a-year job in October, seven months into the tax year. On a normal cumulative 1257L code, by month seven you would have received 7 × £1,048 = £7,336 of tax-free pay. On 1257L M1 you get just £1,048 in that first month, so roughly £6,288 extra is taxed at 20% — about <strong>£1,258 too much tax in a single payslip</strong>. The good news: once HMRC issues your cumulative code, payroll recalculates the whole year and refunds the overpayment through your next payslips. If you have already left the job, HMRC refunds it after the tax year via a P800 calculation, or you can claim sooner with form P50.</p>

<p>Emergency codes are temporary, not a penalty. The fix is simple: give your new employer your P45 on day one, or complete the starter checklist accurately if you do not have one. HMRC says a corrected code can take up to 35 days after you start — if yours lasts longer, check your Personal Tax Account or call HMRC on 0300 200 3300.</p>

<h2>Worked Examples: What Your Code Does to Your Take-Home Pay</h2>

<p>All examples use 2026/27 England, Wales and Northern Ireland rates, one job, category A National Insurance, no pension and no student loan.</p>

<h3>£35,000 salary on 1257L — the standard case</h3>

<ul>
<li>Gross salary: £35,000</li>
<li>Taxable income: £35,000 − £12,570 = £22,430; income tax at 20% = £4,486</li>
<li>Employee NI at 8% of £22,430 = £1,794</li>
<li><strong>Take-home: £28,720 a year, about £2,393 a month</strong></li>
</ul>

<h3>£50,000 salary on 1257L — still basic rate</h3>

<ul>
<li>Taxable income: £50,000 − £12,570 = £37,430; income tax at 20% = £7,486</li>
<li>Employee NI at 8% of £37,430 = £2,994</li>
<li><strong>Take-home: £39,520 a year, about £3,293 a month</strong></li>
</ul>

<p>Note that £50,000 sits just below the £50,270 higher-rate threshold, so every pound is still taxed at 20%. Cross £50,270 and each extra pound costs 40p in tax plus 2p in NI — which is why a £50,000 to £60,000 pay rise keeps far less than the £10,000 headline suggests.</p>

<h3>The same £35,000 salary on BR — the second-job trap</h3>

<p>BR taxes every pound at 20% with no allowance: £35,000 × 20% = £7,000 of tax, against £4,486 on 1257L. NI is unchanged at £1,794. <strong>Take-home falls to £26,206 — £2,514 a year less</strong> — purely because of the code. BR is correct on a genuine second job, where your allowance is already used by your main job. On your only job, it is almost always an error worth fixing immediately, because that £2,514 is yours, not HMRC's.</p>

<h3>£110,000 salary — the taper in action</h3>

<p>At £110,000, your allowance shrinks: £12,570 − (£110,000 − £100,000) ÷ 2 = £7,570, so your code is <strong>757L</strong>. Taxable income is £102,430: the first £37,700 at 20% (£7,540) and the remaining £64,730 at 40% (£25,892), for total income tax of £33,432. NI is £3,016 at 8% up to £50,270 plus £1,195 at 2% above, totalling £4,211. <strong>Take-home: £72,357.</strong> In the taper zone between £100,000 and £125,140, each extra £1 of pay also removes 50p of allowance, so the effective marginal rate hits 60% — the single most expensive stretch of the UK tax system, and a strong reason to check pension contributions or salary-sacrifice options before a pay rise lands you in it.</p>

<h2>Scotland and Wales: The S and C Prefixes</h2>

<p>Your code's number and letter work the same everywhere, but an <strong>S prefix</strong> (Scotland) or <strong>C prefix</strong> (Wales) tells payroll to apply that nation's rates. Scotland has six bands in 2026/27 — starter 19% to £16,537, basic 20% to £29,526, intermediate 21% to £43,662, higher 42% to £75,000, advanced 45% to £125,140, top 48% above — on the same £12,570 allowance. Wales uses the same bands as England. So S1257L on £35,000 gives a slightly different tax bill than 1257L, but the code itself means the same £12,570 tax-free. If you move between nations mid-year, tell HMRC: the wrong prefix is one of the quietest ways to overpay.</p>

<h2>How to Check and Fix a Wrong Tax Code</h2>

<ol>
<li><strong>Find your code</strong> on your latest payslip, then open your Personal Tax Account on GOV.UK (or the HMRC app) and compare — the account shows how HMRC worked your code out, line by line.</li>
<li><strong>Ask whether you can explain it.</strong> A company car, a second job, Marriage Allowance, untaxed income or earnings over £100,000 each explain a non-standard code. If nothing in your life explains it, it is probably wrong.</li>
<li><strong>Update your details</strong> in the Personal Tax Account — a new job, a changed income, a benefit that has ended. HMRC then issues a corrected code to your employer, usually within 15 working days.</li>
<li><strong>Check the next payslip.</strong> A corrected cumulative code refunds earlier overpayments through payroll automatically. If you have left the job, use form P50, or wait for the P800 after the tax year.</li>
<li><strong>For contractors:</strong> a tax code only affects PAYE income — salary from an umbrella company or a second job. Limited-company dividends and corporation tax sit outside it entirely, which is one reason the <a href="/blog/contractor-take-home-pay-2026-27">limited vs umbrella comparison</a> looks so different. If you work through an umbrella, check the code on your umbrella payslip the same way: the <a href="/blog/umbrella-company-costs-uk-2026">umbrella deductions guide</a> shows where the code fits in the deduction chain, and our <a href="/blog/ir35-explained-2026">IR35 guide</a> explains when the whole route changes.</li>
</ol>

<h2>Frequently Asked Questions</h2>

<h3>What does tax code 1257L mean?</h3>
<p>1257L is the standard UK tax code for 2026/27. The number 1257 × 10 = £12,570 of tax-free Personal Allowance for the year, and the letter L means the standard allowance applies with no special adjustments. Most people with one job and no benefits should be on it.</p>

<h3>Is BR tax code bad?</h3>
<p>BR is not a penalty — it means all income from that job is taxed at the basic rate of 20% with no Personal Allowance. It is correct for a second job, where your allowance is already used by your main job. On your only job, it usually means HMRC has no P45 or starter checklist for you, and you are overpaying by £2,514 a year on a £35,000 salary.</p>

<h3>How long does an emergency tax code last?</h3>
<p>Usually until HMRC receives your employment details and issues a cumulative code — HMRC says this can take up to 35 days after starting a job, and in practice a few weeks if you handed over your P45 promptly. If it lasts longer, check your Personal Tax Account or contact HMRC.</p>

<h3>Will I get emergency tax back automatically?</h3>
<p>In most cases, yes. Once your employer receives your correct cumulative code, payroll recalculates the tax year so far and refunds the overpayment through your wages. If you have left the job or the tax year has ended, HMRC issues a P800 calculation, or you can claim with form P50.</p>

<h3>Does my tax code affect National Insurance?</h3>
<p>No. National Insurance is calculated from your earnings alone — 8% between £12,570 and £50,270, then 2% above for most employees in 2026/27 — and never uses your tax code. If your take-home pay looks wrong but your NI looks right, the tax code is the first place to look.</p>

<h2>The Bottom Line</h2>

<p>Your tax code is a small string of characters with a large effect: on a £35,000 salary, the difference between 1257L and BR alone is £2,514 a year. Check it once, when you start a job and whenever it changes, and make sure you can explain it from your own circumstances. If you cannot, your Personal Tax Account will tell you why HMRC set it — and fixing it is usually a few clicks, not a phone queue.</p>

<p>Want your exact numbers under your own code? Run them through our free <a href="/take-home-pay-calculator">take-home pay calculator</a> — salary or day rate in, every deduction shown line by line, England and Scotland supported. And if you are weighing umbrella against limited company, our <a href="/ir35-calculator">IR35 calculator</a> shows what inside vs outside IR35 does to the same rate.</p>
`,
  },
  {
    slug: "uk-student-loan-repayment-2026-27",
    title: "UK Student Loan Repayment 2026/27: How Much You Pay on Your Salary",
    date: "2026-10-27",
    excerpt:
      "Student loan repayment in 2026/27 depends on your plan, not your balance. Every threshold, worked monthly amounts on £30k–£80k salaries, and what changes if you contract through an umbrella or a limited company.",
    description:
      "Student loan repayment 2026/27: Plan 1, 2, 4, 5 and Postgraduate thresholds, monthly amounts on £30k–£80k salaries, plus what changes for contractors.",
    toolHref: "/take-home-pay-calculator",
    toolLabel: "Take-Home Pay Calculator",
    content: `
<p><strong>Student loan repayment 2026/27 works on one simple rule: you repay a percentage of what you earn above your plan's threshold — never a percentage of what you borrowed.</strong> Earn below the threshold and you pay nothing, however large your balance. Earn above it and the deduction comes out of your pay automatically, before you ever see it. This guide covers every plan's 2026/27 threshold (verified against GOV.UK), worked monthly amounts for salaries from £30,000 to £80,000, the interest and write-off rules, and the contractor-specific twist: how repayments differ between an umbrella payslip and a limited company.</p>

<p>The tax year here is <strong>2026/27 — 6 April 2026 to 5 April 2027</strong>. All thresholds, rates and interest figures below are the 2026/27 figures published by GOV.UK and the Student Loans Company.</p>

<img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200" alt="University graduates celebrating at a graduation ceremony" />

<h2>Student Loan Repayment 2026/27: The Thresholds for Every Plan</h2>

<p>Your plan is decided by when and where you studied — not by choice. The repayment rate is 9% of income above the threshold for undergraduate plans (1, 2, 4 and 5) and 6% above the threshold for a Postgraduate Loan.</p>

<table>
<thead><tr><th>Plan</th><th>Yearly threshold</th><th>Monthly threshold</th><th>Rate</th></tr></thead>
<tbody>
<tr><td><strong>Plan 1</strong></td><td>£26,900</td><td>£2,241</td><td>9%</td></tr>
<tr><td><strong>Plan 2</strong></td><td>£29,385</td><td>£2,448</td><td>9%</td></tr>
<tr><td><strong>Plan 4</strong></td><td>£33,795</td><td>£2,816</td><td>9%</td></tr>
<tr><td><strong>Plan 5</strong></td><td>£25,000</td><td>£2,083</td><td>9%</td></tr>
<tr><td><strong>Postgraduate Loan</strong></td><td>£21,000</td><td>£1,750</td><td>6%</td></tr>
</tbody>
</table>

<p>One important detail: payroll works <strong>per pay period</strong>, not per year. Your employer compares each month's pay against the monthly threshold and deducts 9% (or 6%) of the excess, rounded down to the nearest pound. That means a single bonus month can trigger a deduction even if your annual salary sits near the threshold — and if your annual income ends up below the yearly threshold, you can claim a refund from the Student Loans Company at the end of the tax year.</p>

<h2>Which Plan Are You On?</h2>

<ul>
<li><strong>Plan 1:</strong> you started an undergraduate course in England or Wales before 1 September 2012, or you are a Northern Ireland student (any start date).</li>
<li><strong>Plan 2:</strong> you started an undergraduate course in England or Wales between 1 September 2012 and 31 July 2023.</li>
<li><strong>Plan 4:</strong> you are a Scottish student funded by the Student Awards Agency for Scotland (SAAS).</li>
<li><strong>Plan 5:</strong> you started an undergraduate course in England on or after 1 August 2023 — the newest plan, and the first to see repayments from April 2026.</li>
<li><strong>Postgraduate Loan:</strong> you took a master's or doctoral loan in England or Wales. It stacks on top of an undergraduate plan: you pay both at once.</li>
</ul>

<p>If you are unsure, your plan is printed on your payslip deduction line and in your online Student Loans Company account. Getting it wrong matters: ticking the wrong plan type on a starter checklist means your employer deducts against the wrong threshold from day one.</p>

<h2>Worked Examples: What You Actually Pay Each Month</h2>

<p>All figures below are the PAYE monthly deduction (9% or 6% of the month's pay above the monthly threshold, rounded down). Annual totals are the monthly figure × 12, which is how most people experience it.</p>

<h3>Plan 2 on a £40,000 salary — the most common case</h3>

<ul>
<li>Monthly pay: £40,000 ÷ 12 = £3,333.33</li>
<li>Above the Plan 2 monthly threshold: £3,333.33 − £2,448 = £885.33</li>
<li>9% of £885.33 = £79.68, rounded down to <strong>£79 a month — about £956 a year</strong></li>
</ul>

<h3>Plan 5 on a £35,000 salary</h3>

<ul>
<li>Monthly pay: £2,916.67; above the £2,083 threshold: £833.67</li>
<li>9% of £833.67 = £75.03, rounded down to <strong>£75 a month — about £900 a year</strong></li>
</ul>

<h3>Plan 2 plus a Postgraduate Loan on £45,000</h3>

<p>The two loans stack. Monthly pay is £3,750:</p>

<ul>
<li>Postgraduate Loan: 6% of (£3,750 − £1,750) = <strong>£120 a month</strong></li>
<li>Plan 2: 9% of (£3,750 − £2,448) = £117.18, rounded down to <strong>£117 a month</strong></li>
<li>Combined: <strong>£237 a month — about £2,844 a year</strong></li>
</ul>

<h3>Monthly repayments at a glance</h3>

<table>
<thead><tr><th>Salary</th><th>Plan 1</th><th>Plan 2</th><th>Plan 4</th><th>Plan 5</th></tr></thead>
<tbody>
<tr><td>£30,000</td><td>£23</td><td>£4</td><td>£0</td><td>£37</td></tr>
<tr><td>£40,000</td><td>£98</td><td>£79</td><td>£47</td><td>£112</td></tr>
<tr><td>£50,000</td><td>£173</td><td>£155</td><td>£122</td><td>£187</td></tr>
<tr><td>£60,000</td><td>£248</td><td>£230</td><td>£197</td><td>£262</td></tr>
<tr><td>£80,000</td><td>£398</td><td>£380</td><td>£347</td><td>£412</td></tr>
</tbody>
</table>

<p>Notice how the plan changes the bill at the same salary: on £50,000, Plan 5 costs £32 a month more than Plan 2, purely because its threshold is £4,385 lower. Plan type, not effort or balance, is what sets the monthly cost.</p>

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200" alt="Calculator and tax documents on a desk for working out take-home pay" />

<h2>The Marginal Rate Trap: Where £1 Extra Costs 51p</h2>

<p>For graduates, the headline tax bands understate the real marginal rate. Take a Plan 2 graduate earning between £50,271 and £80,000 in 2026/27:</p>

<ul>
<li>Income tax at the higher rate: <strong>40%</strong></li>
<li>Employee National Insurance above £50,270: <strong>2%</strong></li>
<li>Student loan repayment: <strong>9%</strong></li>
<li><strong>Combined marginal rate: 51%</strong> — you keep 49p of each extra £1</li>
</ul>

<p>Between £29,385 and £50,270 the combined rate is 37% (20% tax + 8% NI + 9% loan). Add a Postgraduate Loan and the band between £50,271 and £80,000 reaches 57%. This is why a pay rise, a bonus or extra contracting income can feel smaller than the headline suggests — and why pension contributions, which reduce the income the loan is calculated on, are worth modelling before you accept a higher rate. Our <a href="/blog/uk-tax-code-explained-2026-27">tax code guide</a> shows how the same bands interact with your payslip code.</p>

<h2>Interest and Write-Off: Why the Balance Is Not the Bill</h2>

<p>Interest does not change your monthly repayment — that is always 9% or 6% above the threshold. It only changes how fast the balance grows, and therefore whether you ever clear it before write-off:</p>

<table>
<thead><tr><th>Plan</th><th>Interest 2026/27</th><th>Written off after</th></tr></thead>
<tbody>
<tr><td>Plan 1</td><td>4.1%</td><td>25 years (age 65 for pre-September 2006 loans)</td></tr>
<tr><td>Plan 2</td><td>Variable, capped at 6%</td><td>30 years</td></tr>
<tr><td>Plan 4</td><td>4.1%</td><td>30 years</td></tr>
<tr><td>Plan 5</td><td>4.1%</td><td>40 years</td></tr>
<tr><td>Postgraduate Loan</td><td>6%</td><td>30 years</td></tr>
</tbody>
</table>

<p>Plan 2 interest is income-linked: 4.1% at or below £29,385, rising to 6% at £52,885 and above. The write-off clock starts from the April after you were first due to repay. Anything left at write-off is cancelled and is not taxed. That is the key insight for overpayment decisions (below): for most Plan 2 and Plan 5 borrowers, the loan behaves more like a graduate tax than a conventional debt, because the balance is written off before it is ever repaid in full.</p>

<p>One freeze to watch: the Plan 2 threshold rises to £29,385 in April 2026 and is then <strong>frozen at £29,385 from April 2027 through to April 2030</strong> (announced at the Autumn Budget 2025). With wages rising and the threshold fixed, every £1,000 of pay rise above the frozen threshold adds £90 a year to repayments — fiscal drag, applied to graduates.</p>

<h2>Contractors: Umbrella Payslip vs Limited Company</h2>

<p>This is where student loans catch contractors out, because the route changes how — and when — the repayment is collected.</p>

<h3>Through an umbrella company</h3>

<p>You are an employee of the umbrella, so repayments come out of your payslip through PAYE exactly like any employee, using the monthly thresholds above. On the worked example in our <a href="/blog/umbrella-company-costs-uk-2026">umbrella costs guide</a> — a £400/day assignment giving roughly £77,300 of gross pay — a Plan 2 contractor repays 9% of (£77,300 − £29,385) = <strong>about £4,312 a year, roughly £359 a month</strong>, on top of PAYE tax and NI. It is already inside the take-home figure the umbrella quotes, so check whether a quoted "net" rate includes it.</p>

<h3>Through your own limited company</h3>

<p>There is no PAYE deduction on dividends. Instead, HMRC works out your student loan repayment from your Self Assessment tax return on your <strong>total income for the year</strong> — salary plus dividends (unearned income above £2,000 counts). Example: a director taking a £12,570 salary plus £50,000 of dividends has total income of £62,570. On Plan 2, the repayment is 9% of (£62,570 − £29,385) = <strong>about £2,987 for the year</strong>, payable with the Self Assessment bill — a lump sum, not a monthly deduction, so budget for it. Any PAYE student loan already deducted from employment income in the same year is credited against it.</p>

<p>The practical difference: umbrella contractors pay monthly and never see a bill; limited-company contractors pay annually and must reserve for it. Either way, the loan follows your income, not your route — and our <a href="/blog/contractor-take-home-pay-2026-27">limited vs umbrella comparison</a> shows how the routes differ once every deduction, including the loan, is counted. If you are weighing inside vs outside IR35 at the same time, our <a href="/blog/ir35-explained-2026">IR35 guide</a> explains when the whole route changes.</p>

<img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200" alt="Historic university building exterior" />

<h2>Overpaying: When It Saves Money and When It Does Not</h2>

<p>Voluntary overpayments only save money if you would otherwise clear the loan in full before write-off — typically higher earners or people with small balances. If your loan is heading for write-off with a balance remaining, every extra pound you pay simply reduces the amount that would have been written off anyway. Before overpaying, check three things: your current balance and interest rate in your Student Loans Company account, a realistic salary path to write-off, and whether the same money would do more in a pension (where higher-rate relief and, via salary sacrifice, NI savings apply) or clearing commercial debt first.</p>

<h2>Frequently Asked Questions</h2>

<h3>How much student loan do I pay on a £40,000 salary?</h3>
<p>On Plan 2 in 2026/27, £79 a month: 9% of the £885.33 by which your £3,333.33 monthly pay exceeds the £2,448 monthly threshold, rounded down. On Plan 1 it is £98 a month, on Plan 4 £47, and on Plan 5 £112 — same salary, different plan, different bill.</p>

<h3>Do I pay student loan if I earn below the threshold?</h3>
<p>No. Below your plan's threshold the deduction is £0, however large your balance, and interest still accrues but no repayment is due. If a bonus month pushes you over the monthly threshold but your annual income ends up below the yearly threshold, you can claim a refund at the end of the tax year.</p>

<h3>Does a student loan affect my credit score?</h3>
<p>No — student loans do not appear on UK credit files and do not directly affect your credit score. They do reduce your take-home pay, which mortgage lenders count when assessing affordability, so the monthly deduction can reduce how much you can borrow.</p>

<h3>What happens to my student loan if I go contracting through a limited company?</h3>
<p>Repayments switch from monthly PAYE deductions to an annual Self Assessment calculation on your total income (salary plus dividends). You pay 9% (or 6% for a Postgraduate Loan) of income above your plan's threshold for the year, minus any PAYE repayments already made — so reserve for a lump sum with your tax bill.</p>

<h3>Is the Plan 2 threshold really frozen until 2030?</h3>
<p>Yes. The Plan 2 threshold rises to £29,385 in April 2026 and stays frozen at £29,385 from April 2027 to April 2030 under the Autumn Budget 2025 announcement. With the 9% rate unchanged, each £1,000 of pay rise above the frozen threshold adds £90 a year to what you repay.</p>

<h2>The Bottom Line</h2>

<p>Student loan repayment in 2026/27 is a payroll calculation, not a debt negotiation: find your plan, find its threshold, and take 9% (or 6%) of everything above it. On a £40,000 salary that is £79 a month on Plan 2; on £80,000 it is £380. The expensive mistakes are all avoidable — the wrong plan type on a starter checklist, a forgotten Self Assessment bill as a limited-company contractor, and overpaying a loan that was heading for write-off anyway. Get the plan right, budget the monthly (or annual) figure, and the loan becomes one more line on the payslip — not a surprise.</p>

<p>Want the full picture for your own salary? Run it through our free <a href="/take-home-pay-calculator">take-home pay calculator</a> — salary or day rate in, income tax, National Insurance and every deduction shown line by line, England and Scotland supported.</p>
`,
  },
  {
    slug: "limited-company-pension-contributions-2026-27",
    title: "Limited Company Pension Contributions 2026/27: How Directors Pay £60,000 Tax-Efficiently",
    date: "2026-10-28",
    excerpt:
      "Your company can pay up to £60,000 a year into your pension in 2026/27 — with corporation tax relief, no employer National Insurance and no dividend tax. Worked £20,000 comparisons, the taper, carry forward and the traps.",
    description:
      "Limited company pension contributions 2026/27: the £60,000 allowance, corporation tax relief, no employer NI, carry forward and worked examples.",
    toolHref: "/take-home-pay-calculator",
    toolLabel: "Take-Home Pay Calculator",
    content: `
<p><strong>Limited company pension contributions are the most tax-efficient way for a UK contractor-director to extract profit in 2026/27.</strong> Your company can pay up to £60,000 a year directly into your pension — it counts as an allowable business expense for corporation tax, it attracts no employer National Insurance, no employee National Insurance and no income tax at the point of payment, and it is not capped by the small salary most directors take. This guide explains the 2026/27 rules (tax year 6 April 2026 – 5 April 2027), compares a £20,000 pension contribution against the same £20,000 paid as salary or dividends, and covers the annual allowance taper, carry forward and the traps that catch directors out.</p>

<p>If you currently take most of your income as salary plus dividends — the standard contractor pattern covered in our <a href="/blog/contractor-take-home-pay-2026-27">limited vs umbrella take-home comparison</a> — a pension contribution is the third extraction route, and on typical contractor profits it is the cheapest of the three.</p>

<img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200" alt="Piggy bank with coins representing pension savings for a company director" />

<h2>Limited Company Pension Contributions 2026/27: The £60,000 Rule</h2>

<p>For 2026/27, the standard pension annual allowance is <strong>£60,000</strong>. That is the total amount that can go into your pension pots in the year with tax relief — employer contributions, personal contributions and any tax relief added by the provider, combined, across all schemes. The allowance has stood at £60,000 since April 2023 and is unchanged for 2026/27.</p>

<p>Three features make the company route special for directors:</p>

<ul>
<li><strong>It is an allowable business expense.</strong> An employer pension contribution reduces your company's taxable profit, so it saves corporation tax — 19% on profits up to £50,000, 25% above £250,000, with marginal relief in between (a 26.5% marginal rate on profits between £50,000 and £250,000).</li>
<li><strong>There is no National Insurance on it at all.</strong> Employer contributions attract no employer NI (15% above £5,000 in 2026/27) and no employee NI (8% / 2%). Compare that with salary, which carries both.</li>
<li><strong>It is not limited by your salary.</strong> Personal pension contributions are generally capped at 100% of your relevant UK earnings — and dividends do not count as earnings, so a director on a £12,570 salary could personally contribute only £12,570 with tax relief. Employer contributions have no such salary cap: the company can contribute the full £60,000 even if your salary is £12,570, provided the company has the profits to support it and the contribution is "wholly and exclusively" for the purposes of the trade.</li>
</ul>

<p>The contribution must go to a <strong>registered pension scheme</strong> — typically a SIPP or a workplace scheme — and it must be paid in the tax year you want it counted in. A contribution promised in March but paid in April counts in the next tax year, so year-end timing matters (see below).</p>

<h2>Why a Pension Contribution Beats Salary and Dividends</h2>

<p>Take a higher-rate director who has £20,000 of company profit to extract, on top of a salary already above the NI thresholds. Here is what each route costs and keeps. Corporation tax figures use the 26.5% marginal relief rate that applies to profits between £50,000 and £250,000; dividend tax uses the 2026/27 rates of 10.75% basic / 35.75% higher / 39.35% additional above the £500 dividend allowance.</p>

<table>
<thead><tr><th>Route for £20,000 of profit</th><th>Company pays</th><th>You keep</th><th>Tax lost on the way</th></tr></thead>
<tbody>
<tr><td><strong>Employer pension contribution</strong></td><td>£20,000</td><td>£20,000 in pension</td><td>−£5,300 corporation tax saved, so net company cost £14,700</td></tr>
<tr><td><strong>Salary</strong></td><td>£23,000 (£20,000 + £3,000 employer NI)</td><td>£11,600 cash</td><td>£3,000 employer NI + £8,000 income tax at 40% + £400 employee NI at 2%</td></tr>
<tr><td><strong>Dividend</strong></td><td>£20,000 of profit</td><td>About £9,400 cash</td><td>£5,300 corporation tax + about £5,300 dividend tax at 35.75%</td></tr>
</tbody>
</table>

<p>The pension route puts the full £20,000 into your pot at a net company cost of £14,700. The salary route costs the company £23,000 and leaves you £11,600. The dividend route leaves you about £9,400. That gap — roughly £8,400–£10,600 of value on a single £20,000 — is why accountants raise pensions before they raise salary for directors with spare profit.</p>

<p>The trade-off is real and must be stated plainly: pension money is locked away. You cannot normally access it before age 55 (rising to 57 from April 2028), and when you do draw it, 75% of it is taxed as income at your marginal rate in retirement. A pension contribution is tax <em>deferral plus NI saving</em>, not tax elimination — but the NI saving (15% employer + up to 8% employee) is never clawed back, and retirement income is usually taxed at a lower rate than working income.</p>

<img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200" alt="Growing money and coins showing how pension contributions build retirement wealth" />

<h2>The Annual Allowance, the Taper and Carry Forward</h2>

<p>The £60,000 allowance is not the same for everyone. Two adjustments matter:</p>

<h3>The tapered annual allowance</h3>

<p>If your <strong>threshold income is above £200,000</strong> and your <strong>adjusted income is above £260,000</strong>, your allowance falls by £1 for every £2 of adjusted income above £260,000, down to a minimum of £10,000 (reached at £360,000). Adjusted income includes employer pension contributions, so a large company contribution can itself push you into the taper — worth modelling before paying a big lump sum. Worked example: adjusted income of £300,000 gives an allowance of £60,000 − (£300,000 − £260,000) ÷ 2 = <strong>£40,000</strong>.</p>

<h3>Carry forward</h3>

<p>Unused annual allowance from the previous three tax years can be carried forward, provided you were a member of a registered pension scheme in those years (even with no contributions). The allowance was £60,000 in 2023/24, 2024/25 and 2025/26, so a director who contributed nothing in those three years could have up to £180,000 of unused allowance plus this year's £60,000 — <strong>£240,000 of headroom in 2026/27</strong>. The catch: the contribution still cannot exceed the company's profits for the year, and you must use this year's allowance first, then the oldest carried-forward year first.</p>

<p>Carry forward is the single most valuable pension opportunity for established contractors: several years of taking dividends and ignoring the pension can be corrected in one high-profit year, with full corporation tax relief on the lump sum.</p>

<h2>Worked Example: The £100,000 Contractor, Three Ways</h2>

<p>A contractor-director outside IR35 (see our <a href="/blog/ir35-explained-2026">IR35 guide</a> for why the route matters) has £100,000 of company profit. Compare extracting £20,000 of it three ways, assuming a £12,570 salary already taken and higher-rate tax:</p>

<ul>
<li><strong>As a pension contribution:</strong> £20,000 lands in the pension. Corporation tax saving at the 26.5% marginal rate: £5,300. Net cost to the company: £14,700. Nothing is lost to NI or dividend tax.</li>
<li><strong>As extra salary:</strong> the company pays £23,000 including employer NI, and the director keeps £11,600 after 40% income tax and 2% employee NI.</li>
<li><strong>As dividends:</strong> £20,000 of profit suffers £5,300 of corporation tax, leaving £14,700 to distribute; dividend tax at 35.75% (after the £500 allowance is used elsewhere) takes about £5,300 more, leaving about £9,400.</li>
</ul>

<p>Over five years of £20,000 annual contributions, the pension route shelters £100,000 from NI and dividend tax entirely, saves about £26,500 of corporation tax, and builds a six-figure pot before any investment growth — while the same £100,000 taken as dividends would have delivered roughly £47,000 of spendable cash. The pension is not spendable cash today, which is exactly why the right answer for most directors is a mix: salary to the NI threshold, pension up to the allowance, dividends for the rest.</p>

<h2>Employees and Umbrella Contractors: Salary Sacrifice Instead</h2>

<p>If you are an employee — or a contractor paid through an umbrella company, as explained in our <a href="/blog/umbrella-company-costs-uk-2026">umbrella costs guide</a> — you cannot use the company-contribution route, because you are not the company. Your equivalent is <strong>salary sacrifice</strong>: you agree to a lower contractual salary and your employer pays the difference into your pension.</p>

<p>Salary sacrifice saves both income tax and employee NI, because the sacrificed pay never counts as earnings. Every £1,000 sacrificed costs a basic-rate taxpayer about £720 of take-home pay (20% tax + 8% NI saved) and a higher-rate taxpayer about £580 (40% tax + 2% NI saved), while the full £1,000 lands in the pension. Many employers also pass on some or all of their 15% employer NI saving as extra pension contributions. Two limits apply: your post-sacrifice pay must not fall below the National Minimum Wage, and sacrificed pay can reduce salary-linked benefits such as statutory maternity pay or mortgage affordability calculations.</p>

<p>For umbrella contractors specifically, note that pension contributions through the umbrella are deducted from your assignment rate like any other employment cost — the NI saving is real, but the employer NI that comes out of the rate first is the same drag described in the umbrella guide. Directors of their own company get the cleaner deal.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200" alt="Financial charts and calculator for planning director pension contributions" />

<h2>Limits, Traps and Timing</h2>

<ul>
<li><strong>Company profits cap the contribution.</strong> A contribution larger than the year's profits risks HMRC challenging it as not "wholly and exclusively" for the trade. Keep contributions within profits and document the board decision.</li>
<li><strong>The Money Purchase Annual Allowance (MPAA).</strong> Once you flexibly access a defined contribution pension (drawdown, for example), your annual allowance for future money-purchase contributions drops permanently to £10,000. Do not trigger flexible access in a year you plan a large company contribution.</li>
<li><strong>The Lump Sum Allowance.</strong> Since the lifetime allowance was abolished in April 2024, there is no cap on pot size — but tax-free cash is capped at £268,275 over your lifetime. Amounts above that are taxed as income when drawn.</li>
<li><strong>Personal allowance taper interaction.</strong> A pension contribution does not directly restore the personal allowance (which tapers away between £100,000 and £125,140 of adjusted net income), but for employees, salary sacrifice can pull adjusted net income below £100,000 and restore it — one reason the £100,000–£125,140 zone, where the effective marginal rate hits 60%, rewards pension planning. Our <a href="/blog/uk-tax-code-explained-2026-27">tax code guide</a> shows the taper in action.</li>
<li><strong>Timing.</strong> The contribution counts in the tax year it is <em>paid</em>, not promised. A payment on 6 April 2027 counts in 2027/28, not 2026/27 — so a year-end contribution must clear before 5 April 2027 to use this year's allowance and carry-forward years before they expire.</li>
<li><strong>Student loans and benefits.</strong> Employer pension contributions do not reduce student loan repayments calculated on salary-plus-dividend income in the same way salary sacrifice does for employees — see our <a href="/blog/uk-student-loan-repayment-2026-27">student loan repayment guide</a> for how the two routes differ.</li>
</ul>

<h2>Setting It Up, Step by Step</h2>

<ol>
<li><strong>Check your allowance.</strong> Add up all pension inputs this year (employer + personal + tax relief) and any unused allowance from the last three years. If your income is near £200,000, check the taper first.</li>
<li><strong>Open a scheme that accepts employer contributions.</strong> Most SIPPs do; confirm the provider accepts direct company payments and record the company's details, not just your own.</li>
<li><strong>Minute the decision.</strong> A short board minute recording the contribution amount, the scheme and the business reason protects the corporation tax deduction.</li>
<li><strong>Pay from the company bank account</strong> directly to the provider, before 5 April 2027 for 2026/27 relief, and keep the provider receipt with your accounts.</li>
<li><strong>Tell your accountant before year-end.</strong> The contribution changes your corporation tax computation and your personal Self Assessment (employer contributions are not personal income, but your accountant needs the full picture for the annual allowance and any annual allowance charge).</li>
</ol>

<h2>Frequently Asked Questions</h2>

<h3>How much can my limited company pay into my pension in 2026/27?</h3>
<p>Up to your annual allowance — £60,000 standard, more with carry forward (up to £240,000 if you used nothing in the last three years), less if the taper applies (minimum £10,000). The contribution must also fit within the company's profits for the year.</p>

<h3>Does my company save corporation tax on pension contributions?</h3>
<p>Yes. Employer pension contributions are normally an allowable business expense, so they reduce taxable profit. At the 25% main rate the saving is £250 per £1,000 contributed; at the 26.5% marginal relief rate it is £265 per £1,000; at the 19% small profits rate it is £190 per £1,000.</p>

<h3>Is there National Insurance on employer pension contributions?</h3>
<p>No. Employer pension contributions attract neither employer NI (15% above £5,000) nor employee NI (8% / 2%). That double NI saving is the main reason they beat salary as an extraction route.</p>

<h3>Can I contribute £60,000 if I only take a £12,570 salary?</h3>
<p>Yes, through the company. The 100%-of-earnings cap applies to personal contributions, not employer contributions — and dividends do not count as earnings for personal contributions. The company route is precisely how low-salary directors still use the full allowance.</p>

<h3>What happens if I exceed the annual allowance?</h3>
<p>The excess is charged to income tax at your marginal rate through Self Assessment (the annual allowance charge), wiping out the relief on the excess. Check the taper and carry forward before making a large lump-sum contribution, and declare the excess even if the scheme pays the charge for you.</p>

<h2>The Bottom Line</h2>

<p>For a contractor-director with spare company profit, limited company pension contributions in 2026/27 are the cheapest extraction route available: £20,000 into a pension costs the company £14,700 net after corporation tax relief and loses nothing to NI or dividend tax, against £11,600 kept from salary or about £9,400 from dividends. The £60,000 allowance — plus up to £180,000 of carry forward — means several years of neglected pension can be fixed in one good year, provided the contribution fits the company's profits, lands before 5 April 2027 and respects the taper. Salary to the threshold, pension to the allowance, dividends for the rest: that order is the whole strategy.</p>

<p>Want your exact numbers under your own salary and profit? Run them through our free <a href="/take-home-pay-calculator">take-home pay calculator</a> — salary or day rate in, every deduction shown line by line, England and Scotland supported. And if you are still choosing between routes, our <a href="/umbrella-vs-limited">umbrella vs limited company guide</a> puts the pension question in its full context.</p>
`,
  },
];
