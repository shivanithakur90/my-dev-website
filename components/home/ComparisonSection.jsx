const comparisonRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2–3 months",
    diy: "Hours, but limited",
    inHouse: "3–6 months to hire",
  },
  {
    feature: "Tool selection",
    openxcell: "Best-fit, multi-tool",
    traditional: "Hand-coded only",
    diy: "Locked to one tool",
    inHouse: "You decide",
  },
  {
    feature: "You own it",
    openxcell: "Yes — fully",
    traditional: "Yes",
    diy: "Vendor dependent",
    inHouse: "Yes",
  },
  {
    feature: "Approach",
    openxcell: "Deep, multi-SaaS",
    traditional: "From scratch",
    diy: "Tool-limited",
    inHouse: "You teach them",
  },
  {
    feature: "Pricing",
    openxcell: "Fixed scope",
    traditional: "T&M, creep risk",
    diy: "Subscription",
    inHouse: "Salaries + overhead",
  },
  {
    feature: "SaaS integration depth",
    openxcell: "AI-native FDE",
    traditional: "Usually",
    diy: "Locked to tool",
    inHouse: "Varies",
  },
];

export default function ComparisonSection() {
  return (
    <section className="w-full bg-[#fcf9ff] pb-0 pt-[50px] md:py-[50px]">
      <div className="container">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">⑂</span>
            How we&apos;re different
          </div>

          <h2 className="mt-6 text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px] lg:tracking-[-2px]">
            OpenXcell vs. the alternatives
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            An AI-native, forward-deployed, results-driven approach — versus
            the three other options most mid-market companies consider.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-3 lg:mt-14">
          <div className="min-w-[950px] px-2 pt-3">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr>
                  <th className="w-[24%] px-4 py-4 font-semibold text-[#555]">
                    Features
                  </th>
                  <th className="rounded-t-xl bg-[#ff5708] px-4 py-4 text-center text-[16px] font-semibold text-white shadow-[0_-5px_18px_rgba(255,87,8,0.18)]">
                    OpenXcell
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[#555]">
                    Traditional Dev Shop
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[#555]">
                    DIY, single tools
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[#555]">
                    Hire in-house
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.feature}>
                    <td className={`border-b border-l border-[#dedede] bg-white px-4 py-4 font-medium text-[#555] ${index === 0 ? "border-t rounded-tl-lg" : ""} ${index === comparisonRows.length - 1 ? "rounded-bl-lg" : ""}`}>
                      {row.feature}
                    </td>
                    <td className={`border-b border-white/15 bg-gradient-to-b from-[#ff6c36] to-[#ee4b08] px-4 py-4 text-center font-semibold text-white shadow-[7px_0_16px_rgba(70,30,15,0.15),-7px_0_16px_rgba(70,30,15,0.10)] ${index === comparisonRows.length - 1 ? "rounded-b-xl" : ""}`}>
                      {row.openxcell}
                    </td>
                    <td className={`border-b border-r border-[#dedede] bg-white px-4 py-4 text-center text-[#666] ${index === 0 ? "border-t" : ""}`}>
                      {row.traditional}
                    </td>
                    <td className={`border-b border-r border-[#dedede] bg-white px-4 py-4 text-center text-[#666] ${index === 0 ? "border-t" : ""}`}>
                      {row.diy}
                    </td>
                    <td className={`border-b border-r border-[#dedede] bg-white px-4 py-4 text-center text-[#666] ${index === 0 ? "border-t rounded-tr-lg" : ""} ${index === comparisonRows.length - 1 ? "rounded-br-lg" : ""}`}>
                      {row.inHouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
