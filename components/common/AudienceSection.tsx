"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export type AudienceCard = {
  number: string;
  title: string;
  description: string;
};

type AudienceSectionProps = {
  eyebrow?: string;
  title?: string;
  icon?: ReactNode;
  cards?: AudienceCard[];
  className?: string;
  autoPlaySpeed?: number;
};

function DefaultAudienceIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M16 10C17.3807 10 18.5 8.88071 18.5 7.5C18.5 6.11929 17.3807 5 16 5C14.6193 5 13.5 6.11929 13.5 7.5C13.5 8.88071 14.6193 10 16 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M3.5 18C3.5 15.7909 5.29086 14 7.5 14H8.5C10.7091 14 12.5 15.7909 12.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M13.5 14C16.5 13.5 19.5 15 20 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AudienceSection({
  eyebrow,
  title,
  icon,
  cards = [],
  className = "",
  autoPlaySpeed = 2000,
}: AudienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (cards.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % cards.length;
      });
    }, autoPlaySpeed);

    return () => {
      window.clearInterval(interval);
    };
  }, [cards.length, autoPlaySpeed]);

  return (
    <div className="container">
        <section
        className={`relative overflow-hidden bg-white py-[50px] md:py-[70px] lg:py-[80px] ${className}`}>
        <div className="relative z-10">
            {/* Header */}
            {(eyebrow || title) && (
            <div className="flex flex-col items-center text-center">
                {/* Eyebrow */}
                {eyebrow && (
                <div className="mb-7 inline-flex items-center gap-2.5 rounded-[9px] border border-[#ece8f0] bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(40,30,70,0.05)]">
                    <span className="flex shrink-0 items-center justify-center text-[#ff5200]">
                    {icon ?? <DefaultAudienceIcon />}
                    </span>

                    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#252329] sm:text-[13px]">
                    {eyebrow}
                    </span>
                </div>
                )}

                {/* Heading */}
                {title && (
                <h2 className="max-w-[900px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[30px] md:text-[38px] lg:text-[40px]">
                    {title}
                </h2>
                )}
            </div>
            )}

            {/* Cards */}
            {cards.length > 0 && (
            <div
                className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 ${
                eyebrow || title ? "mt-14 lg:mt-[70px]" : ""
                }`}
            >
                {cards.map((card, index) => {
                const isActive = activeIndex === index;

                return (
                    <article
                        key={`${card.number}-${index}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`flex min-h-[320px] cursor-pointer flex-col rounded-[22px] border p-6 transition-all duration-500 ease-in-out ${
                            isActive
                            ? "border-[#ff5200] bg-[#fff5ef] shadow-[0_12px_35px_rgba(255,82,0,0.08)]"
                            : "border-[#ededed] bg-white shadow-[0_8px_24px_rgba(25,20,40,0.08)]"
                        }`}
                        >
                        {/* Number */}
                        <div
                            className={`text-[48px] font-bold leading-none tracking-[-0.06em] transition-colors duration-500 ${
                            isActive ? "text-[#ff5200]" : "text-[#dedede]"
                            }`}
                        >
                            {card.number}
                        </div>

                        {/* Content */}
                        <div className="mt-[70px]">
                            {card.title && (
                            <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#202024] md:text-[22px]">
                                {card.title}
                            </h3>
                            )}

                            {card.description && (
                            <p className="mt-4 text-[16px] leading-[1.55] text-[#646167] md:text-[17px]">
                                {card.description}
                            </p>
                            )}
                        </div>
                        </article>
                );
                })}
            </div>
            )}
        </div>

        {/* Bottom subtle section color */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] bg-[#f5faff]" />
        </section>
    </div>
  );
}