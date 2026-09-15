import Link from "next/link";
import type { ReactNode } from "react";

export type CoverageItem = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

type CustomApplicationCoverageSectionProps = {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title?: ReactNode;
  items?: CoverageItem[];
  ctaLabel?: string;
  className?: string;
};

const defaultCoverageItems: CoverageItem[] = [
  {
    title: "Web applications",
    description:
      "Full custom web apps — internal or customer-facing — built around your workflows.",
    href: "/services/web-applications",
    icon: <WebAppIcon />,
  },
  {
    title: "Dashboards & reporting",
    description:
      "Live operational dashboards pulling data from across your stack.",
    href: "/services/dashboards-reporting",
    icon: <DashboardIcon />,
  },
  {
    title: "Client & customer portals",
    description:
      "Secure, branded portals connected to your CRM, storage, and billing.",
    href: "/services/customer-portals",
    icon: <PortalIcon />,
  },
  {
    title: "Internal tools & admin panels",
    description:
      "Ops consoles, approval flows, and admin interfaces that run your business in one screen.",
    href: "/services/internal-tools",
    icon: <AdminIcon />,
  },
  {
    title: "Mobile applications",
    description:
      "iOS and Android apps, including companion apps connected to your web platforms.",
    href: "/services/mobile-applications",
    icon: <MobileIcon />,
  },
  {
    title: "Workflow applications",
    description:
      "Apps that automate and manage multi-step business processes from start to finish.",
    href: "/services/workflow-applications",
    icon: <WorkflowIcon />,
  },
];

export default function CustomApplicationCoverageSection({
  eyebrow = "What's included",
  eyebrowIcon = <IncludedIcon />,
  title = "What custom application development covers.",
  items = defaultCoverageItems,
  ctaLabel = "Learn more",
  className = "",
}: CustomApplicationCoverageSectionProps) {
  return (
    <section className={`border-t border-[#eeeeee] bg-white py-[70px] sm:py-[80px] lg:py-[100px] ${className}`}>
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-full text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e8e8e8] bg-white px-4 py-2 shadow-[0_14px_40px_rgba(30,25,45,0.07)]">
              {eyebrowIcon && (
                <span className="text-[#ff5708]">
                  {eyebrowIcon}
                </span>
              )}

              <span className="text-[12px] font-semibold uppercase tracking-[0.11em] text-[#373737]">
                {eyebrow}
              </span>
            </div>
          )}

          <h2 className="mx-auto mt-7 max-w-[780px] text-[30px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-[44px] md:text-[50px] lg:text-[54px]">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-[58px] grid max-w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="
                group
                flex
                min-h-[278px]
                flex-col
                rounded-[20px]
                border
                border-[#f0cfc2]
                bg-white
                px-6
                py-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ffb79a]
                hover:bg-[#fff7f3]
                hover:shadow-[0_18px_45px_rgba(30,25,45,0.08)]
                sm:px-7
                sm:py-8
              "
            >
              {/* Icon */}
              <div className="mb-6 flex h-[34px] items-center text-[#ff5108]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[21px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#202020] sm:text-[23px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[16px] leading-[1.65] text-[#5d5d5d] sm:text-[17px]">
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href={item.href}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-0 text-[14px] font-medium text-[#202020] transition-all group-hover:gap-3"
              >
                {ctaLabel}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ICONS ---------------- */

export function IncludedIcon() {
  return (
    <svg
      width="16"
      height="16"
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

export function WebAppIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="7"
        width="28"
        height="25"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M6 13H34"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="11"
        cy="10"
        r="1"
        fill="currentColor"
      />

      <circle
        cx="15"
        cy="10"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="14"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M20 6V20L9 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M20 20L31 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PortalIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="7"
        width="28"
        height="21"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M16 33H24M20 28V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M10 23H30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AdminIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="7"
        width="28"
        height="22"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="10"
        y="11"
        width="20"
        height="22"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="20"
        cy="20"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M14 30C15 26 17 24 20 24C23 24 25 26 26 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="11"
        y="4"
        width="18"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M11 9H29M11 31H29"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function WorkflowIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="27"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M13 27C20 27 19 18 26 18H31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M27 13L32 18L27 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
