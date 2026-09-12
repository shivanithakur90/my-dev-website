import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type IndustryServiceCard = {
  title: string;
  image: string;
  href: string;
  ctaLabel?: string;
  imageAlt?: string;
};

type IndustryServicesSectionProps = {
  eyebrow?: string;
  title?: string;
  icon?: ReactNode;
  cards?: IndustryServiceCard[];
  className?: string;
};

function DefaultServicesIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 12.5L11.5 15.5L16 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 6.5L9 4.5L11 6.5M13 17.5L15 19.5L17 17.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 9L3 11L5 13M19 11L21 13L19 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13.5 6.5M19 12L13.5 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IndustryServicesSection({
  eyebrow,
  title,
  icon,
  cards = [],
  className = "",
}: IndustryServicesSectionProps) {
  return (
    <section
      className={`bg-[#f7faff] px-5 py-[70px] md:px-8 md:py-[90px] lg:py-[110px] ${className}`}
    >
      <div className="mx-auto max-w-[1210px]">
        {/* Header */}
        {(eyebrow || title) && (
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-[9px] border border-[#ece8ef] bg-white px-4 py-2.5 shadow-[0_8px_28px_rgba(30,20,60,0.05)]">
                <span className="flex shrink-0 items-center justify-center text-[#ff5200]">
                  {icon ?? <DefaultServicesIcon />}
                </span>

                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#28262b] sm:text-[13px]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}
            {title && (
              <h2 className="max-w-[900px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[40px] md:text-[48px] lg:text-[52px]">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Cards */}
        {cards.length > 0 && (
          <div
            className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${
              eyebrow || title ? "mt-14 lg:mt-[65px]" : ""
            }`}
          >
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="group flex min-h-[390px] flex-col rounded-[26px] border border-[#e5e5e5] bg-white p-[14px] shadow-[0_18px_45px_rgba(30,40,70,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(30,40,70,0.12)]"
              >
                {/* Image */}
                {card.image && (
                  <div className="relative aspect-[1.62/1] w-full overflow-hidden rounded-[18px] border border-[#ffd5c4] bg-[#fffaf7]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt || card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
                  {card.title && (
                    <h3 className="max-w-[330px] text-[22px] font-semibold leading-[1.22] tracking-[-0.035em] text-[#222126] sm:text-[23px]">
                      {card.title}
                    </h3>
                  )}

                  {/* CTA */}
                  {card.href && (
                    <div className="mt-auto pt-8">
                      <Link
                        href={card.href}
                        className="group/link inline-flex items-center gap-2 text-[15px] font-medium text-[#222126] transition-colors duration-300 hover:text-[#ff5200]"
                      >
                        <span>{card.ctaLabel || "Explore"}</span>

                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                          <ArrowIcon />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}