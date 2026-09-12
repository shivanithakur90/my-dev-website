import Image from "next/image";
import type { ReactNode } from "react";

type ProblemSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
};

function DefaultProblemIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3.5L14.2 6.7L18 6.2L17.5 10L20.5 12L17.5 14L18 17.8L14.2 17.3L12 20.5L9.8 17.3L6 17.8L6.5 14L3.5 12L6.5 10L6 6.2L9.8 6.7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ProblemSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  icon,
  imagePosition = "right",
  className = "",
}: ProblemSectionProps) {
  const imageFirst = imagePosition === "left";

  return (
    <div className="container">
        <section className={`bg-white  py-[50px] md:py-[70px] lg:py-[80px] ${className}`}>
        <div className="mx-auto max-w-full">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[90px]">
            {/* Image */}
            {image && imageFirst && (
                <div className="order-1 lg:order-none">
                <div className="rounded-[28px] bg-[#fff7f3] p-5 shadow-[0_1px_0_rgba(0,0,0,0.12)] sm:p-6">
                    <div className="overflow-hidden rounded-[18px] bg-white">
                    <Image
                        src={image}
                        alt={imageAlt || title || "Section image"}
                        width={1000}
                        height={760}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    </div>
                </div>
                </div>
            )}

            {/* Content */}
            <div className="order-2 lg:order-none">
                {/* Eyebrow */}
                {eyebrow && (
                <div className="mb-7 inline-flex items-center gap-2.5 rounded-[8px] border border-[#ece8ef] bg-white px-4 py-2.5 shadow-[0_8px_25px_rgba(20,15,35,0.04)]">
                    <span className="flex shrink-0 items-center justify-center text-[#ff5200]">
                    {icon ?? <DefaultProblemIcon />}
                    </span>

                    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#29272b] sm:text-[13px]">
                    {eyebrow}
                    </span>
                </div>
                )}

                {/* Heading */}
                {title && (
                <h2 className="max-w-[620px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[40px] md:text-[46px] lg:text-[50px]">
                    {title}
                </h2>
                )}

                {/* Description */}
                {description && (
                <p className="mt-7 max-w-[620px] text-[16px] leading-[1.55] text-[#5d5a60] sm:text-[17px] md:text-[18px]">
                    {description}
                </p>
                )}
            </div>

            {/* Image Right */}
            {image && !imageFirst && (
                <div className="order-1 lg:order-none">
                <div className="rounded-[28px] bg-[#fff7f3] p-5 shadow-[0_1px_0_rgba(0,0,0,0.12)] sm:p-6">
                    <div className="overflow-hidden rounded-[18px] bg-white">
                    <Image
                        src={image}
                        alt={imageAlt || title || "Section image"}
                        width={1000}
                        height={760}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    </div>
                </div>
                </div>
            )}
            </div>
        </div>
        </section>
    </div>
  );
}