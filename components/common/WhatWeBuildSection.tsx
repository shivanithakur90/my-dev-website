import Link from "next/link";
import type { ReactNode } from "react";

type WhatWeBuildSectionProps = {
  eyebrow?: string;
  title: string;

  items: string[];

  buttonText?: string;
  buttonHref?: string;

  icon?: ReactNode;

  className?: string;

  sectionBackground?: string;
  cardBackground?: string;
};

export default function WhatWeBuildSection({
  eyebrow = "WHAT WE BUILD",
  title,
  items,

  buttonText = "Browse all solutions",
  buttonHref = "/solutions",

  icon,

  className = "",

  sectionBackground = "#eef8ff",
  cardBackground = "#001d2c",
}: WhatWeBuildSectionProps) {
  return (
    <section
      className={`py-[70px] sm:py-[80px] lg:py-[90px] ${className}`}
      style={{
        backgroundColor: sectionBackground,
      }}
    >
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div
          className="
            mx-auto
            max-w-full
            rounded-[20px]
            px-5
            py-[60px]
            text-center
            text-white
            sm:px-8
            sm:py-[70px]
            md:px-12
            lg:min-h-[400px]
            lg:px-[80px]
            lg:py-[65px]
          "
          style={{
            backgroundColor: cardBackground,
          }}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-[7px]
                bg-white
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#252525]
              "
            >
              <span className="text-[#ff5708]">
                {icon ?? <BuildIcon />}
              </span>

              <span>{eyebrow}</span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-[800px]
              text-[32px]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-white
              sm:text-[40px]
              md:text-[46px]
              lg:text-[48px]
            "
          >
            {title}
          </h2>

          {/* Pills */}
          <div
            className="
              mx-auto
              mt-[55px]
              flex
              max-w-[760px]
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="
                  rounded-[11px]
                  bg-white
                  px-5
                  py-[14px]
                  text-[13px]
                  font-medium
                  leading-none
                  text-[#111111]
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_35px_rgba(255,255,255,0.14)]
                  sm:text-[14px]
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          {buttonText && buttonHref && (
            <div className="mt-[62px]">
              <Link
                href={buttonHref}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[13px]
                  font-medium
                  text-white
                  transition-opacity
                  hover:opacity-80
                "
              >
                {buttonText}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BuildIcon() {
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
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}