import Image from "next/image";
import type { ReactNode } from "react";

type BenefitCard = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type EmbeddingBenefitsSectionProps = {
  eyebrow?: string;
  title: string;

  image?: string;
  imageAlt?: string;

  cards: BenefitCard[];

  icon?: ReactNode;

  className?: string;
  imageClassName?: string;
};

export default function EmbeddingBenefitsSection({
  eyebrow = "WHAT'S INCLUDED",
  title,

  image,
  imageAlt = "Embedded engineering",

  cards,

  icon,

  className = "",
  imageClassName = "",
}: EmbeddingBenefitsSectionProps) {
  const defaultIcons = [
    <BusinessIcon key="business" />,
    <CapacityIcon key="capacity" />,
    <FirmIcon key="firm" />,
  ];

  return (
    <section
      className={`bg-[#fff] py-[50px] sm:py-[70px] lg:py-[80px] ${className}`}
    >
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[56px]">
          {/* LEFT SIDE */}
          <div>
            {/* Eyebrow */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e7e7e7] bg-white px-4 py-2 shadow-[0_12px_35px_rgba(30,25,45,0.06)]">
                <span className="text-[#ff5708]">
                  {icon ?? <BadgeIcon />}
                </span>

                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#333333]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2 className="mt-6 max-w-[530px] text-[34px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#1e1e1e] sm:text-[44px] md:text-[48px]">
              {title}
            </h2>

            {/* Visual */}
            <div
              className="
                relative
                mt-[45px]
                flex
                aspect-[1.42/1]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[22px]
                bg-[linear-gradient(135deg,#71ddf4_0%,#27a9f1_100%)]
              "
            >
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className={`object-cover ${imageClassName}`}
                />
              ) : (
                <DefaultIllustration />
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5 lg:pt-8">
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="
                  group
                  rounded-[18px]
                  border
                  border-[#dadada]
                  bg-white
                  px-5
                  py-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ffbea3]
                  hover:bg-[#fff8f5]
                  hover:shadow-[0_15px_40px_rgba(30,25,45,0.07)]
                  sm:px-6
                  sm:py-7
                "
              >
                <div className="flex items-center gap-4">
                  {/* Card Icon */}
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#fff1eb] text-[#ff5708]">
                    {card.icon ??
                      defaultIcons[index] ?? (
                        <BusinessIcon />
                      )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#202020] sm:text-[22px]">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="mt-5 text-[15px] leading-[1.6] text-[#666666] sm:text-[16px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   DEFAULT ILLUSTRATION
========================= */

function DefaultIllustration() {
  return (
    <div className="relative flex h-[180px] w-[220px] items-center justify-center">
      {/* Code Circle */}
      <div className="absolute left-[30px] top-[12px] flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 17L8 26L18 35"
            stroke="#4ec5ee"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M34 17L44 26L34 35"
            stroke="#4ec5ee"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M29 14L23 38"
            stroke="#4ec5ee"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Laptop */}
      <div className="absolute bottom-[26px] right-[22px]">
        <div className="h-[76px] w-[105px] rounded-t-[16px] bg-white shadow-[0_5px_14px_rgba(0,0,0,0.14)]" />

        <div className="relative left-[-10px] h-[13px] w-[125px] rounded-b-[18px] bg-white shadow-[0_5px_10px_rgba(0,0,0,0.12)]" />
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

/* =========================
   CARD 01
========================= */

function BusinessIcon() {
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
        y="7"
        width="16"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

/* =========================
   CARD 02
========================= */

function CapacityIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3.5 20C4.2 16.5 6.1 15 9 15C11.9 15 13.8 16.5 14.5 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M15 15C18.1 15 20 16.5 20.5 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   CARD 03
========================= */

function FirmIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 12L11 14.5C12 15.5 13.5 15.5 14.5 14.5L19 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 10L7 6L11 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M21 10L17 6L13 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5.5 12.5L10 17C11.1 18.1 12.9 18.1 14 17L18.5 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}