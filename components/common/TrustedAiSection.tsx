import type { ReactNode } from "react";

type TrustItem = {
  title: string;
  description: string;
};

type TrustedAiSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  secondaryDescription?: string;

  items: TrustItem[];

  icon?: ReactNode;

  className?: string;
};

export default function TrustedAiSection({
  eyebrow = "BUILT TO BE TRUSTED",
  title,
  description,
  secondaryDescription,

  items,

  icon,

  className = "",
}: TrustedAiSectionProps) {
  return (
    <section
      className={`bg-white px-4 pb-[50px] sm:px-6 sm:pb-[50px] lg:pb-[80px] ${className}`}>
        <div className="container">
            <div className="relative mx-auto max-w-full overflow-hidden bg-[#131313] px-5 pb-[55px] pt-[55px] text-white sm:px-8 sm:pb-[65px] sm:pt-[65px] lg:px-[42px] lg:pb-[55px]">
                {/* Background wave */}
                <WaveBackground />

                {/* Main content */}
                <div className="relative z-10">
                {/* Top */}
                <div className="mx-auto max-w-full text-center">
                    {eyebrow && (
                    <div className="inline-flex items-center gap-2 rounded-[7px] bg-white px-4 py-2 text-[#262626] shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
                        <span className="text-[#ff5708]">
                        {icon ?? <BadgeIcon />}
                        </span>

                        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] sm:text-[12px]">
                        {eyebrow}
                        </span>
                    </div>
                    )}

                    <h2 className="mx-auto mt-6 max-w-[760px] text-[34px] font-semibold leading-[1.07] tracking-[-0.045em] text-white sm:text-[44px] md:text-[50px] lg:text-[52px]">
                    {title}
                    </h2>

                    {description && (
                    <p className="mx-auto mt-7 max-w-[720px] text-[15px] font-medium leading-[1.6] text-white/85 sm:text-[17px]">
                        {description}
                    </p>
                    )}

                    {secondaryDescription && (
                    <p className="mx-auto mt-1 max-w-[720px] text-[15px] font-medium leading-[1.6] text-white/85 sm:text-[17px]">
                        {secondaryDescription}
                    </p>
                    )}
                </div>

                {/* Trust points */}
                <div className="mx-auto mt-[155px] grid max-w-[1000px] grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
                    {items.map((item, index) => (
                    <article key={`${item.title}-${index}`}>
                        <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#ff5708] sm:text-[22px]">
                        {item.title}
                        </h3>

                        <p className="mx-auto mt-3 max-w-[320px] text-[14px] leading-[1.55] text-white/90 sm:text-[15px]">
                        {item.description}
                        </p>
                    </article>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

/* =========================
   WAVE BACKGROUND
========================= */

function WaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] overflow-hidden">
      <svg
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        className="h-full w-full opacity-40"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, index) => {
          const y = 55 + index * 14;

          return (
            <path
              key={index}
              d={`M-50 ${y}
                C 80 ${y - 70},
                  180 ${y + 70},
                  300 ${y}
                S 520 ${y - 65},
                  650 ${y}
                S 880 ${y + 60},
                  1020 ${y}
                S 1180 ${y - 55},
                  1270 ${y}`}
              fill="none"
              stroke="rgba(255,255,255,0.17)"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* soft glow */}
      <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#131313] via-[#131313]/60 to-transparent" />
    </div>
  );
}

/* =========================
   BADGE ICON
========================= */

function BadgeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 8H8.01M12 8H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}