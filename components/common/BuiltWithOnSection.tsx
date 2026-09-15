import Image from "next/image";
import type { ReactNode } from "react";

type StackItem = {
  label: string;
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
};

type StackGroup = {
  title: string;
  description?: string;
  items: StackItem[];
};

type BuiltWithOnSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;

  leftGroup: StackGroup;
  rightGroup: StackGroup;

  moreLabel?: string;

  icon?: ReactNode;
  className?: string;
};

export default function BuiltWithOnSection({
  eyebrow = "BUILT WITH & BUILT ON",
  title,
  description,

  leftGroup,
  rightGroup,

  moreLabel = "+more",

  icon,

  className = "",
}: BuiltWithOnSectionProps) {
  return (
    <section className={`relative overflow-hidden bg-white pb-[50px] sm:pb-[50px] lg:pb-[110px] ${className}`}>
      {/* Soft glow */}
        <div className="container">
        <div className="pointer-events-none absolute left-1/2 top-[70px] h-[360px] w-full -translate-x-1/2 rounded-full bg-[#efe4ff] opacity-60 blur-[120px]" />

        <div className="relative z-10 mx-auto px-5 md:px-6 lg:px-8">
            {/* HEADER */}
            <div className="mx-auto max-w-full text-center">
            {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e8e8e8] bg-white px-4 py-2 shadow-[0_14px_40px_rgba(30,25,45,0.07)]">
                <span className="text-[#ff5708]">
                    {icon ?? <BadgeIcon />}
                </span>

                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#333333]">
                    {eyebrow}
                </span>
                </div>
            )}

            <h2 className="mx-auto mt-7 max-w-[820px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#202020] sm:text-[44px] md:text-[50px] lg:text-[52px]">
                {title}
            </h2>

            {description && (
                <p className="mx-auto mt-7 max-w-[760px] text-[16px] leading-[1.65] text-[#666666] sm:text-[18px]">
                {description}
                </p>
            )}
            </div>

            {/* MAIN PANEL */}
            <div
            className="
                mx-auto
                mt-[55px]
                max-w-full
                rounded-[28px]
                bg-[linear-gradient(110deg,#f4ded2_0%,#eee2f5_48%,#d8e8ff_100%)]
                p-5
                sm:p-8
                lg:p-[42px]
            "
            >
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* LEFT */}
                <StackCard
                title={leftGroup.title}
                description={leftGroup.description}
                items={leftGroup.items}
                />

                {/* RIGHT */}
                <StackCard
                title={rightGroup.title}
                description={rightGroup.description}
                items={rightGroup.items}
                moreLabel={moreLabel}
                showMore
                />
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}

function StackCard({
  title,
  description,
  items,
  showMore = false,
  moreLabel = "+more",
}: {
  title: string;
  description?: string;
  items: StackItem[];
  showMore?: boolean;
  moreLabel?: string;
}) {
  return (
    <div
      className="
        rounded-[22px]
        border
        border-white/80
        bg-white/55
        px-5
        py-6
        backdrop-blur-sm
        sm:px-7
        sm:py-7
      "
    >
      <h3 className="text-center text-[21px] font-semibold text-[#222222] sm:text-[23px]">
        {title}
      </h3>

      {description && (
        <p className="mx-auto mt-4 max-w-[430px] text-center text-[14px] leading-[1.6] text-[#666666] sm:text-[15px]">
          {description}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="
              flex
              min-h-[50px]
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              text-[14px]
              font-medium
              text-[#2a2a2a]
              shadow-[0_8px_20px_rgba(30,25,45,0.04)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_28px_rgba(30,25,45,0.08)]
            "
          >
            {(item.image || item.icon) && (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.label}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </span>
            )}

            <span>{item.label}</span>
          </div>
        ))}

        {showMore && (
          <div className="flex min-h-[50px] items-center justify-center rounded-full bg-[#202020] px-7 py-3 text-[14px] font-semibold text-white">
            {moreLabel}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================
   BADGE ICON
========================= */

function BadgeIcon() {
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
