import Link from "next/link";

const engagementOptions = [
  {
    title: "Idea to Live",
    description:
      "Take a new product, internal venture, or 0→1 idea from concept to launched, production-grade software — at vibe-coding speed.",
    bestFor: "Founders, product leaders, innovation teams",
    length: "4–8 weeks",
    output: "Launched, deployed, real users",
    border: "border-[#78cee1]",
    ring: "shadow-[inset_0_0_0_8px_#d5f3ee]",
    iconBg: "bg-[#e4f5fa]",
    iconColor: "text-[#00a9e8]",
    background: "bg-[#f7fcfd]",
  },
  {
    title: "Internal tools, custom-built",
    description:
      "Custom software on top of the SaaS tools your team already uses. Surface, integration, and AI layers — shaped around your workflows.",
    bestFor: "Mid-market ops, support, finance, compliance teams",
    length: "4–12 weeks",
    output: "Custom internal software, fully owned",
    border: "border-[#88a9ff]",
    ring: "shadow-[inset_0_0_0_8px_#e0e6ff]",
    iconBg: "bg-[#eaf0ff]",
    iconColor: "text-[#5585ff]",
    background: "bg-[#f8faff]",
  },
  {
    title: "Embedded engineering.",
    description:
      "A forward-deployed engineer on retainer. Continuous capacity for whatever your team needs to build next — tools, agents, integrations.",
    bestFor: "Companies with ongoing custom-software needs",
    length: "3, 6, or 12 months",
    output: "Dedicated engineer + methodology",
    border: "border-[#c99bea]",
    ring: "shadow-[inset_0_0_0_8px_#f0daf8]",
    iconBg: "bg-[#f5eafd]",
    iconColor: "text-[#ad51ee]",
    background: "bg-[#fdf9ff]",
  },
];

function CardIcon({ index }) {
  if (index === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 12L19 5M16 5H19V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 4V20M12 4V20M18 4V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="6" cy="9" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="15" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="8" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 4H19V20H5V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4V9L12 12L9 15V20M14 8L17 11L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WaysToWorkSection() {
  return (
    <section className="w-full bg-[#fbfaff] pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24">
      <div className="container">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">▣</span>
            Three ways to work with us
          </div>

          <h2 className="mt-6 text-[34px] font-semibold leading-[1.08] tracking-[-1.4px] text-[#171717] sm:text-[42px] lg:text-[52px] lg:tracking-[-2px]">
            Pick the engagement shape that fits
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            Going from idea to launch, fixing internal workflow pain, or
            scaling your custom-software capacity — there&apos;s an engagement
            shape that fits.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {engagementOptions.map((option, index) => (
            <article
              key={option.title}
              className={`flex min-h-[600px] flex-col rounded-[30px] border-[8px] p-6 sm:p-7 ${option.background} ${option.border} ${option.ring}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.iconBg} ${option.iconColor}`}>
                <CardIcon index={index} />
              </div>

              <h3 className="mt-4 text-[17px] font-semibold text-[#202020]">
                {option.title}
              </h3>
              <p className="mt-3 min-h-[112px] text-[15px] leading-[1.55] text-[#3f3f3f] sm:text-[16px]">
                {option.description}
              </p>

              <div className="border-t border-[#e8e8e8] pt-4">
                <p className="text-[16px] text-[#666]">Best for</p>
                <p className="mt-2 min-h-[44px] text-[16px] font-semibold leading-[1.35] text-[#242424]">
                  {option.bestFor}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-[16px] text-[#666]">Length</p>
                <p className="mt-2 min-h-[24px] text-[16px] font-semibold text-[#242424]">
                  {option.length}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[16px] text-[#666]">Output</p>
                <p className="mt-2 min-h-[44px] text-[16px] font-semibold leading-[1.35] text-[#242424]">
                  {option.output}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-auto flex min-h-[52px] items-center justify-center gap-4 rounded-xl border border-[#ff5708] px-4 text-[14px] font-semibold text-[#ff5708] transition-colors duration-300 hover:bg-[#ff5708] hover:text-white"
              >
                Request a project quote
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
