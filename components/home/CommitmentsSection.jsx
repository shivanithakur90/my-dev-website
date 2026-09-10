const commitments = [
  ["You own everything", "Your application, source code, accounts and data remain under your control."],
  ["A clear fixed scope", "The build plan, deliverables and commercial expectations are agreed before work begins."],
  ["Working software early", "You see progress from the first week and shape the product through frequent reviews."],
];

export default function CommitmentsSection() {
  return (
    <section className="bg-[#171717] py-[50px] text-white">
      <div className="container">
        <span className="inline-flex rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[.16em]">
          What we commit to
        </span>
        <div className="mt-6 grid gap-8 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.5px] md:text-[48px]">Three commitments. No fine print.</h2>
            <p className="mt-5 text-[#bcb7bf]">Clear expectations for every engagement, from kickoff to handover.</p>
          </div>
          <div className="grid gap-3">
            {commitments.map(([title, description], index) => (
              <article key={title} className="grid gap-4 rounded-2xl border border-white/15 bg-white/[.06] p-5 sm:grid-cols-[48px_1fr]">
                <span className="text-[13px] font-semibold text-[#ff6a32]">0{index + 1}</span>
                <div>
                  <h3 className="text-[18px] font-semibold">{title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#bcb7bf]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
