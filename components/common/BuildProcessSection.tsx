import type { ReactNode } from "react";

export type BuildProcessCard = {
  title: string;
  description: string;
};

type BuildProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  cards?: BuildProcessCard[];
  className?: string;
};

function DefaultBuildIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.5 6.5L17.5 9.5M4 20L10.5 13.5M13 4L20 11L16.5 14.5L9.5 7.5L13 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 11L3 9L7 5L9 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BuildProcessSection({
  eyebrow,
  title,
  description,
  icon,
  cards = [],
  className = "",
}: BuildProcessSectionProps) {
  return (
    <div className="container">
    <section className={`bg-[#fff] py-[50px] ${className}`}>
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[30px] bg-[#0e0e11] px-5 py-[70px] sm:px-8 md:px-12 md:py-[85px] lg:px-12">
        
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            transform: "rotate(-18deg) scale(1.35)",
          }}
        />

        {/* Soft Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />

        <div className="relative z-10">
          {/* Heading Area */}
          <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
            
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-[9px] bg-white px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="flex items-center justify-center text-[#ff5200]">
                  {icon ?? <DefaultBuildIcon />}
                </span>

                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#29272b] sm:text-[13px]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2 className="max-w-[950px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-[40px] md:text-[48px] lg:text-[52px]">
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="mt-7 max-w-[950px] text-[15px] font-medium leading-[1.65] text-white/70 sm:text-[17px] md:text-[18px]">
                {description}
              </p>
            )}
          </div>

          {/* Cards */}
          {cards.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-5 md:mt-[65px] md:grid-cols-3 md:gap-7">
              {cards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="min-h-[180px] rounded-[16px] border border-white/[0.14] bg-[#19191f]/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5200]/60 hover:bg-[#1d1d23] sm:p-7"
                >
                  {card.title && (
                    <h3 className="text-[18px] font-semibold leading-[1.3] text-[#ff5200] sm:text-[19px]">
                      {card.title}
                    </h3>
                  )}

                  {card.description && (
                    <p className="mt-4 text-[15px] font-medium leading-[1.55] text-white/85 sm:text-[16px]">
                      {card.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}