import type { ReactNode } from "react";

type IntroContentSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  showBottomGradient?: boolean;
};

export default function IntroContentSection({
  eyebrow,
  title,
  description,
  icon,
  className = "",
  showBottomGradient = true,
}: IntroContentSectionProps) {
  return (
    <div className="container">
    <section
      className={`relative overflow-hidden bg-white py-[80px] sm:py-[50px] md:py-[70px] lg:py-[80px] ${className}`}
    >
      <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-[9px] border border-[#ece9f0] bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(30,20,60,0.04)]">
            {/* Optional Icon */}
            {icon && (
              <span className="flex shrink-0 items-center justify-center text-[#ff5200]">
                {icon}
              </span>
            )}

            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2c2a2f] sm:text-[13px]">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Heading */}
        {title && (
          <h2 className="max-w-full text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[30px] md:text-[38px] lg:text-[40px]">
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="mt-8 max-w-[820px] text-[16px] font-medium leading-[1.55] text-[#5d5a60] sm:text-[17px] md:text-[18px]">
            {description}
          </p>
        )}
      </div>

      {/* Bottom subtle gradient */}
      {showBottomGradient && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(240,245,255,0.65) 50%, rgba(232,241,255,0.9) 100%)",
          }}
        />
      )}
    </section>
    </div>
  );
}