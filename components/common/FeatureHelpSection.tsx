import type { ReactNode } from "react";

type FeatureHelpCard = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type FeatureHelpSectionProps = {
  eyebrow?: string;
  title?: string;
  eyebrowIcon?: ReactNode;
  cards: FeatureHelpCard[];
  className?: string;
};

function DefaultHelpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4V20M4 12H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DefaultCardIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 12H16M12 8V16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeatureHelpSection({
  eyebrow,
  title,
  eyebrowIcon,
  cards,
  className = "",
}: FeatureHelpSectionProps) {
  return (
    <section className={`bg-[#f1f3fd] py-[50px] md:py-[70px] ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-[820px] text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 rounded-[8px] border border-[#ece8ef] bg-white px-4 py-2.5 shadow-[0_8px_25px_rgba(20,15,35,0.04)]">
              <span className="flex shrink-0 items-center justify-center text-[#ff5200]">
                {eyebrowIcon ?? <DefaultHelpIcon />}
              </span>

              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#29272b] sm:text-[13px]">
                {eyebrow}
              </span>
            </div>
          )}

          {title && (
            <h2 className="mt-6 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[40px] md:text-[46px] lg:text-[50px]">
              {title}
            </h2>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[22px] border border-[#e8e8ec] bg-white p-6 shadow-[0_12px_34px_rgba(24,20,45,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#fff0e8] text-[#ff5200]">
                {card.icon ?? <DefaultCardIcon />}
              </div>

              <h3 className="mt-6 text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#171717]">
                {card.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.6] text-[#636067]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
