import type { ReactNode } from "react";

type ComparisonColumn = {
  title: string;
  items: string[];
  type: "negative" | "positive";
};

type FdeComparisonSectionProps = {
  eyebrow?: string;
  title: string;

  description?: string;
  secondaryDescription?: string;

  leftColumn: ComparisonColumn;
  rightColumn: ComparisonColumn;

  icon?: ReactNode;

  className?: string;
};

export default function FdeComparisonSection({
  eyebrow = "WHAT AN FDE IS",
  title,

  description,
  secondaryDescription,

  leftColumn,
  rightColumn,

  icon,

  className = "",
}: FdeComparisonSectionProps) {
  return (
    <section className={`bg-[#eef8ff] px-4 py-[50px] sm:px-6 sm:py-[70px] lg:py-[80px] ${className}`}>
        <div className="container">
            <div className="relative mx-auto max-w-full overflow-hidden rounded-[30px] bg-[#0e0e11] px-5 py-[60px] text-white sm:px-8 sm:py-[70px] lg:px-[44px] lg:py-[65px]">
                {/* GRID BACKGROUND */}
                <div className=" pointer-events-none absolute inset-0 opacity-100"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
                    `,
                    backgroundSize: "180px 142px",
                }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                {/* TOP CONTENT */}
                <div className="mx-auto max-w-full text-center">
                    {/* Eyebrow */}
                    {eyebrow && (
                    <div className=" inline-flex items-center gap-2 rounded-[7px] bg-white px-4 py-2 text-[#252525] shadow-[0_14px_35px_rgba(0,0,0,0.18)] ">
                        <span className="text-[#ff5708]">
                        {icon ?? <FdeIcon />}
                        </span>

                        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] sm:text-[12px]">
                        {eyebrow}
                        </span>
                    </div>
                    )}

                    {/* Heading */}
                    <h2
                    className="
                        mx-auto
                        mt-7
                        max-w-[760px]
                        text-[32px]
                        font-semibold
                        leading-[1.06]
                        tracking-[-0.045em]
                        text-white
                        sm:text-[42px]
                        md:text-[48px]
                        lg:text-[50px]
                    "
                    >
                    {title}
                    </h2>

                    {/* Description */}
                    {description && (
                    <p
                        className="
                        mx-auto
                        mt-7
                        max-w-[720px]
                        text-[15px]
                        leading-[1.65]
                        text-white/75
                        sm:text-[17px]
                        "
                    >
                        {description}
                    </p>
                    )}

                    {/* Second Description */}
                    {secondaryDescription && (
                    <p
                        className="
                        mx-auto
                        mt-5
                        max-w-[720px]
                        text-[15px]
                        leading-[1.65]
                        text-white/75
                        sm:text-[17px]
                        "
                    >
                        {secondaryDescription}
                    </p>
                    )}
                </div>

                {/* COMPARISON CARDS */}
                <div
                    className="
                    mx-auto
                    mt-[70px]
                    grid
                    max-w-full
                    grid-cols-1 gap-5 md:grid-cols-2">
                    <ComparisonCard column={leftColumn} />
                    <ComparisonCard column={rightColumn} />
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

/* =========================
   COMPARISON CARD
========================= */

function ComparisonCard({
  column,
}: {
  column: ComparisonColumn;
}) {
  const isPositive = column.type === "positive";

  return (
    <div
      className={`
        rounded-[16px]
        border
        px-6
        py-7
        sm:px-7
        sm:py-8
        ${
          isPositive
            ? "border-[#076b34] bg-[#042e18]"
            : "border-[#35353d] bg-[#202025]"
        }
      `}
    >
      <h3 className="text-[18px] font-semibold leading-[1.25] text-white sm:text-[20px]">
        {column.title}
      </h3>

      <div className="mt-6 flex flex-col gap-5">
        {column.items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-[1px] shrink-0 ${
                isPositive
                  ? "text-[#00ed6f]"
                  : "text-[#ff4b3e]"
              }`}
            >
              {isPositive ? (
                <CheckIcon />
              ) : (
                <CrossIcon />
              )}
            </span>

            <span className="text-[14px] leading-[1.45] text-white sm:text-[15px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   ICONS
========================= */

function FdeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="4"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="20"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="20"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="4"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 5.5V9M18.5 12H15M12 15V18.5M9 12H5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
