import type { ReactNode } from "react";

type PageHeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
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

export default function PageHeroBanner({
  eyebrow,
  title,
  description,
  icon,
  className = "",
}: PageHeroBannerProps) {
  return (
    <section
      className={`relative min-h-[460px] overflow-hidden bg-[#f8f4fb] ${className}`}
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
      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1320px] flex-col items-center justify-center px-5 py-16 text-center md:px-8">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-[10px] bg-white px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.04em] text-[#24242b] shadow-[0_6px_20px_rgba(50,40,80,0.05)]">
          {icon ?? <DefaultBriefcaseIcon />}

          <span>{eyebrow}</span>
        </div>

        {/* Heading */}
        <h1 className="text-[46px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#17171b] sm:text-[56px] md:text-[68px] lg:text-[76px]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-[970px] text-[17px] font-medium leading-[1.55] text-[#3f3d43] sm:text-[18px] md:text-[21px]">
          {description}
        </p>
      </div>
    </section>
  );
}