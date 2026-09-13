import Image from "next/image";
import type { ReactNode } from "react";

type DeliverCard = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type HowWeDeliverSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;

  image: string;
  imageAlt?: string;

  cards: DeliverCard[];

  icon?: ReactNode;

  className?: string;
  imageClassName?: string;
};

export default function HowWeDeliverSection({
  eyebrow = "HOW WE DELIVER",
  title,
  description,

  image,
  imageAlt = "How we deliver",

  cards,

  icon,

  className = "",
  imageClassName = "",
}: HowWeDeliverSectionProps) {
  const defaultCardIcons = [
    <DiscoverIcon key="discover" />,
    <BuildIntegrateIcon key="build" />,
    <DeployScaleIcon key="deploy" />,
    <HandOverIcon key="handover" />,
  ];

  return (
    <section
      className={`border-t border-[#eeeeee] bg-white py-[70px] sm:py-[80px] lg:py-[100px] ${className}`}
    >
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-full text-center">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e7e7e7] bg-white px-4 py-2 shadow-[0_15px_40px_rgba(30,25,45,0.07)]">
              <span className="text-[#ff5708]">
                {icon ?? <DeliverBadgeIcon />}
              </span>

              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#333333]">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="mx-auto mt-7 max-w-[760px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#1d1d1d] sm:text-[44px] md:text-[50px] lg:text-[54px]">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="mx-auto mt-7 max-w-[720px] text-[16px] leading-[1.65] text-[#666666] sm:text-[18px]">
              {description}
            </p>
          )}
        </div>

        {/* LARGE IMAGE */}
        <div className="mx-auto mt-[55px] max-w-full overflow-hidden rounded-[22px] border border-[#f0d0c3] bg-[#fffaf8]">
          <div className="relative aspect-[2.5/1] w-full sm:aspect-[2.8/1] lg:aspect-[3.15/1]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 1080px"
              className={`object-cover object-center ${imageClassName}`}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="mx-auto mt-7 grid max-w-full grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="
                group
                rounded-[18px]
                border
                border-[#dddddd]
                bg-white
                px-5
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ffc0a6]
                hover:bg-[#fff8f5]
                hover:shadow-[0_15px_40px_rgba(30,25,45,0.07)]
                sm:px-6
                sm:py-7
              "
            >
              <div className="flex items-center gap-4">
                {/* Card Icon */}
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#fff2ec] text-[#ff5708]">
                  {card.icon ??
                    defaultCardIcons[index] ?? (
                      <DiscoverIcon />
                    )}
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#202020] sm:text-[22px]">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-5 text-[15px] leading-[1.6] text-[#666666] sm:text-[16px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   EYEBROW ICON
========================= */

function DeliverBadgeIcon() {
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
   Discover & Assess
========================= */

function DiscoverIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="3"
        width="12"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 7H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 10H12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M18.5 18.5L21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   CARD 02
   Build & Integrate
========================= */

function BuildIntegrateIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="5"
        cy="6"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="19"
        cy="6"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="5"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="19"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M6.5 7.5L10 10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M17.5 7.5L14 10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M6.5 16.5L10 13.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M17.5 16.5L14 13.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   CARD 03
   Deploy & Scale
========================= */

function DeployScaleIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="5"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="11"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="18"
        cy="6"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M6.5 16.5L9.5 13.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M12.5 10.5L16.5 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14.5 5H19V9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   CARD 04
   Hand Over & Own
========================= */

function HandOverIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 14H7L10 12H15.5C16.9 12 18 13.1 18 14.5C18 15.9 16.9 17 15.5 17H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 14V19H12L21 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 3V10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14.5 7.5L17 10L19.5 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}