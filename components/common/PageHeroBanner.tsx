import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;

  icon?: ReactNode;
  image?: string;
  className?: string;

  primaryButtonText?: string;
  primaryButtonHref?: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;
};

function DefaultBriefcaseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[#ff4b0a]"
    >
      <path
        d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 11.5C8.7 13 15.3 13 20 11.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PageHeroBanner({
  eyebrow,
  title,
  description,
  icon,
  image,
  className = "",

  primaryButtonText,
  primaryButtonHref,

  secondaryButtonText,
  secondaryButtonHref,
}: PageHeroBannerProps) {
  const hasPrimaryButton =
    Boolean(primaryButtonText) && Boolean(primaryButtonHref);

  const hasSecondaryButton =
    Boolean(secondaryButtonText) && Boolean(secondaryButtonHref);

  const hasButtons = hasPrimaryButton || hasSecondaryButton;

  return (
    <section
      className={`relative overflow-hidden bg-[#f8f4fb] ${className}`}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, #e8d9f1 0%, #f7dfe4 38%, #f4eef8 62%, #cfdafa 100%)",
        }}
      />

      {/* Left Glow */}
      <div className="absolute -left-[120px] top-[40px] h-[420px] w-[520px] rounded-full bg-[#e9bdcf]/45 blur-[100px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-[90px]" />

      {/* Right Glow */}
      <div className="absolute -right-[100px] top-[20px] h-[430px] w-[520px] rounded-full bg-[#9bb5ef]/35 blur-[100px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-[90px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.72))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1420px] flex-col items-center justify-center px-5 py-16 text-center md:px-8 md:py-20">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-[10px] bg-white px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.04em] text-[#24242b] shadow-[0_6px_20px_rgba(50,40,80,0.05)]">
          {icon ?? <DefaultBriefcaseIcon />}

          <span>{eyebrow}</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-full text-[36px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#17171b] sm:text-[42px] md:text-[50px] lg:text-[58px]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[970px] text-[16px] font-medium leading-[1.6] text-[#3f3d43] sm:text-[18px] md:text-[20px]">
          {description}
        </p>

        {/* Dynamic Buttons */}
        {hasButtons && (
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            {hasPrimaryButton && (
              <Link
                href={primaryButtonHref!}
                className="group flex min-h-[50px] w-full max-w-[280px] items-center justify-between gap-4 rounded-xl bg-[#ff4d00] py-[5px] pl-5 pr-[6px] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,77,0,0.3)] sm:w-auto"
              >
                <span>{primaryButtonText}</span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#ff4d00]">
                  <ArrowIcon />
                </span>
              </Link>
            )}

            {hasSecondaryButton && (
              <Link
                href={secondaryButtonHref!}
                className="flex min-h-[50px] w-full max-w-[280px] items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[#171717] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4f4f4] sm:w-auto"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        )}

        {/* Optional Image */}
        {image && (
          <div className="mt-12 w-full max-w-[1100px] rounded-[24px] border border-white/70 bg-white/50 p-2 shadow-[0_30px_80px_rgba(38,35,70,0.15)] backdrop-blur-sm">
            <Image
              src={image}
              alt={title}
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="block h-auto w-full rounded-[18px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}