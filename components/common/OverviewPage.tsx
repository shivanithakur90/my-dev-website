import Link from "next/link";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export type OverviewCard = {
  title: string;
  description: string;
  eyebrow: string;
  accent: "orange" | "blue" | "purple" | "green";
};

type OverviewPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  cards: OverviewCard[];
  statementTitle: string;
  statementDescription: string;
  points: string[];
};

const accents = {
  orange: {
    icon: "bg-[#fff0e8] text-[#ff5708]",
    border: "hover:border-[#ffb18c]",
  },
  blue: {
    icon: "bg-[#eaf3ff] text-[#287cff]",
    border: "hover:border-[#a9caff]",
  },
  purple: {
    icon: "bg-[#f2eaff] text-[#9154e9]",
    border: "hover:border-[#cdb0f5]",
  },
  green: {
    icon: "bg-[#eaf8ee] text-[#32985a]",
    border: "hover:border-[#a9dab9]",
  },
};

function CardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function OverviewPage({
  eyebrow,
  title,
  description,
  sectionEyebrow,
  sectionTitle,
  sectionDescription,
  cards,
  statementTitle,
  statementDescription,
  points,
}: OverviewPageProps) {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-white py-[50px]">
        <div className="container">
          <div className="mx-auto max-w-[780px] text-center">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#e8e8e8] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.07em] text-[#333] shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
              <span className="text-[#ff5708]">✦</span>
              {sectionEyebrow}
            </div>
            <h2 className="mt-6 text-[30px] font-semibold leading-[1.08] tracking-[-1.6px] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.6] text-[#626262] sm:text-[17px]">
              {sectionDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const colors = accents[card.accent];
              return (
                <article
                  key={card.title}
                  className={`flex min-h-[280px] flex-col rounded-[22px] border border-[#e3e3e3] bg-white p-6 transition-colors ${colors.border} sm:p-7`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-[13px] ${colors.icon}`}>
                    <CardIcon />
                  </div>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.4px] text-[#181818]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#666]">
                    {card.description}
                  </p>
                  <Link href="/contact" className="mt-auto pt-6 text-[14px] font-semibold text-[#ff5708] hover:underline hover:underline-offset-4">
                    Learn more →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6fb] py-[50px]">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="max-w-[680px] text-[30px] font-semibold leading-[1.1] tracking-[-1.6px] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {statementTitle}
            </h2>
            <p className="mt-5 max-w-[700px] text-[15px] leading-[1.65] text-[#626262] sm:text-[17px]">
              {statementDescription}
            </p>
          </div>
          <div className="rounded-[24px] border border-[#e2ddea] bg-white p-6 shadow-[0_16px_45px_rgba(42,26,70,0.08)] sm:p-8">
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-[14px] font-medium leading-[1.5] text-[#303030] sm:text-[15px]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e8] text-[12px] font-bold text-[#ff5708]">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-[50px]">
        <div className="container">
          <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#273ee9_0%,#652596_45%,#c2264c_72%,#f0440b_100%)] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.4px] sm:text-[42px]">Ready to build what your team needs?</h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.6] text-white/85 sm:text-[16px]">Tell us where the friction is. We will map the right approach and send a clear, fixed-price proposal.</p>
            <Link href="/contact" className="mx-auto mt-7 inline-flex items-center gap-3 rounded-xl bg-[#ff5708] py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white transition hover:bg-[#ed4b00]">
              Get a quote
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#ff5708]" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
