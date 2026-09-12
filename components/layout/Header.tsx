"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const solutionsMenu = [
  {
    name: "Digital Transformation",
    description:
      "Modernize your business with smarter digital systems and workflows.",
    href: "/solutions/digital-transformation",
  },
  {
    name: "Business Automation",
    description:
      "Automate repetitive tasks and connect your business workflows.",
    href: "/solutions/business-automation",
  },
  {
    name: "AI & Intelligent Systems",
    description:
      "Build AI-powered systems that automate decisions and everyday business tasks.",
    href: "/solutions/ai-intelligent-systems",
  },
  {
  name: "Data & Analytics",
  description:
    "Turn business data into clear dashboards, reports, and actionable insights.",
  href: "/solutions/data-analytics",
},
{
  name: "System Integration",
  description:
    "Connect your apps, platforms, and business systems into one seamless workflow.",
  href: "/solutions/system-integration",
},
{
  name: "Customer Experience",
  description:
    "Build seamless digital experiences that make every customer interaction faster, easier, and more personal.",
  href: "/solutions/customer-experience",
},
{
  name: "Custom Software Platforms",
  description:
    "Build scalable web platforms and internal tools designed around your unique business needs.",
  href: "/solutions/custom-software-platforms",
},
];

const mobileNavItems = [
  {
    label: "Services",
    links: [
      {
        name: "Custom applications",
        href: "/services",
      },
      {
        name: "AI automation",
        href: "/services",
      },
      {
        name: "Product engineering",
        href: "/services",
      },
    ],
  },
  {
    label: "Solutions",
    links: solutionsMenu,
  },
  {
    label: "Industries",
    links: [
      {
        name: "Healthcare",
        href: "/industries",
      },
      {
        name: "Fintech",
        href: "/industries",
      },
      {
        name: "Retail",
        href: "/industries",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        name: "About us",
        href: "/company",
      },
      {
        name: "Careers",
        href: "/company",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [openAccordion, setOpenAccordion] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#eeeeee] bg-white text-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "border-white/15 bg-[linear-gradient(110deg,#1736e8_0%,#4129b9_28%,#9b1f57_57%,#d42a1f_78%,#ef3b00_100%)] text-white"
      }`}
    >
      <div className="container mx-auto flex h-[78px] items-center justify-between px-5 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
              isScrolled ? "bg-black" : "bg-white"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 13.5L4 3L7.8 15.2L13.5 13.5Z"
                fill={isScrolled ? "white" : "#2743E8"}
              />

              <path
                d="M13.5 13.5L23 3L19.2 15.2L13.5 13.5Z"
                fill={isScrolled ? "white" : "#2743E8"}
              />

              <path
                d="M13.5 13.5L4 24L16 19.5L13.5 13.5Z"
                fill={isScrolled ? "white" : "#2743E8"}
              />

              <path
                d="M13.5 13.5L23 24L11 19.5L13.5 13.5Z"
                fill={isScrolled ? "white" : "#2743E8"}
              />
            </svg>
          </span>

          <span className="text-[24px] font-semibold tracking-[-0.8px] sm:text-[26px]">
            Openxcell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Services */}
          <Link
            href="/services"
            className="flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-80"
          >
            Services
            <ChevronDown />
          </Link>

          {/* Solutions */}
          <div className="group relative">
            <Link
              href="/solutions"
              className="flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-80"
            >
              Solutions

              <span className="transition-transform duration-300 group-hover:rotate-180">
                <ChevronDown />
              </span>
            </Link>

            {/* Mega Menu */}
            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-[999]
                -translate-x-1/2
                translate-y-3
                pt-5
                opacity-0
                transition-all
                duration-300
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
             <div
                    className="
                      w-[520px]
                      max-h-[calc(100vh-110px)]
                      overflow-y-auto
                      rounded-[20px]
                      border
                      border-black/5
                      bg-white
                      p-6
                      text-[#111111]
                      shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                    "
                  >
                <div className="grid grid-cols-1 gap-3">
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                        group/item
                        flex
                        items-start
                        gap-4
                        rounded-[16px]
                        p-3
                        transition-all
                        duration-300
                        hover:bg-[#fff7f3]
                      "
                    >
                      {/* Icon */}
                      <span
                        className="
                          flex
                          h-[46px]
                          w-[46px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[11px]
                          bg-[#ffebe2]
                          text-[#ff4e0a]
                        "
                      >
                     {item.name === "Business Automation" ? (
  <BusinessAutomationIcon />
) : item.name === "AI & Intelligent Systems" ? (
  <AiSystemsIcon />
) : item.name === "Data & Analytics" ? (
  <DataAnalyticsIcon />
) : item.name === "System Integration" ? (
  <SystemIntegrationIcon />
) : item.name === "Customer Experience" ? (
  <CustomerExperienceIcon />
) : item.name === "Custom Software Platforms" ? (
  <CustomSoftwarePlatformsIcon />
) : (
  <DigitalIcon />
)}
                      </span>

                      {/* Content */}
                      <span className="flex flex-1 items-start justify-between gap-4">
                        <span>
                          <span
                            className="
                              block
                              text-[17px]
                              font-semibold
                              leading-[1.25]
                              text-[#111111]
                            "
                          >
                            {item.name}
                          </span>

                          <span
                            className="
                              mt-1.5
                              block
                              max-w-[340px]
                              text-[14px]
                              leading-[1.45]
                              text-[#626262]
                            "
                          >
                            {item.description}
                          </span>
                        </span>

                        <span
                          className="
                            mt-1
                            -translate-x-1
                            text-[20px]
                            text-[#ff4e0a]
                            opacity-0
                            transition-all
                            duration-300
                            group-hover/item:translate-x-0
                            group-hover/item:opacity-100
                          "
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <Link
            href="/industries"
            className="flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-80"
          >
            Industries
            <ChevronDown />
          </Link>

          {/* Company */}
          <Link
            href="/company"
            className="flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-80"
          >
            Company
            <ChevronDown />
          </Link>

          {/* Our Work */}
          <Link
            href="/our-work"
            className="text-[15px] font-medium transition-opacity hover:opacity-80"
          >
            Our work
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-[#ff5708]
              py-1.5
              pl-5
              pr-1.5
              text-[15px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#ff6a20]
              hover:shadow-lg
            "
          >
            Get a quote

            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff5708]">
              <ArrowRight />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:hidden ${
            isScrolled ? "border-black/20" : "border-white/30"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t px-5 pb-7 pt-3 ${
            isScrolled
              ? "border-black/10 bg-white"
              : "border-white/15 bg-[linear-gradient(110deg,#1736e8_0%,#4129b9_28%,#9b1f57_57%,#d42a1f_78%,#ef3b00_100%)]"
          }`}
        >
          <nav className="flex flex-col">
            {mobileNavItems.map((item) => {
              const isOpen = openAccordion === item.label;

              return (
                <div
                  key={item.label}
                  className={`border-b ${
                    isScrolled
                      ? "border-black/10"
                      : "border-white/15"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenAccordion(
                        isOpen ? null : item.label
                      )
                    }
                  >
                    <span>{item.label}</span>

                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>

                 <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[1200px] pb-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                    <div className="flex flex-col gap-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenAccordion(null);
                          }}
                          className={`rounded-xl ${
                            item.label === "Solutions"
                              ? "bg-white p-3 text-[#111111]"
                              : isScrolled
                              ? "px-4 py-3 text-black/70 hover:bg-black/5"
                              : "px-4 py-3 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          {item.label === "Solutions" ? (
                            <span className="flex items-start gap-3">
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#ffebe2] text-[#ff4e0a]">
                               {link.name === "Business Automation" ? (
                                    <BusinessAutomationIcon />
                                  ) : link.name === "AI & Intelligent Systems" ? (
                                    <AiSystemsIcon />
                                  ) : link.name === "Data & Analytics" ? (
                                    <DataAnalyticsIcon />
                                  ) : link.name === "System Integration" ? (
                                    <SystemIntegrationIcon />
                                  ) : link.name === "Customer Experience" ? (
                                    <CustomerExperienceIcon />
                                  ) : link.name === "Custom Software Platforms" ? (
                                    <CustomSoftwarePlatformsIcon />
                                  ) : (
                                    <DigitalIcon />
                                  )}
                              </span>

                              <span>
                                <span className="block text-[15px] font-semibold">
                                  {link.name}
                                </span>

                                {"description" in link && (
                                  <span className="mt-1 block text-[13px] leading-[1.45] text-[#666666]">
                                    {link.description}
                                  </span>
                                )}
                              </span>
                            </span>
                          ) : (
                            link.name
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/our-work"
              onClick={() => setMenuOpen(false)}
              className={`border-b py-4 text-[15px] font-medium ${
                isScrolled
                  ? "border-black/10"
                  : "border-white/15"
              }`}
            >
              Our work
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-6
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                bg-[#ff5708]
                py-2
                pl-5
                pr-2
                text-[15px]
                font-semibold
                text-white
              "
            >
              Get a quote

              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff5708]">
                <ArrowRight />
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function DigitalIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M17.5 13.5V21M13.5 17.5H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BusinessAutomationIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="18"
        cy="6"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="18"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8.5 11L15.5 7M8.5 13L15.5 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AiSystemsIcon() {
  return (
    <svg
      width="23"
      height="23"
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
        d="M7 7.2L9.7 9.8M17 7.2L14.3 9.8M7 16.8L9.7 14.2M17 16.8L14.3 14.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function DataAnalyticsIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M9 20V9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14 20V5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M19 20V11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M3 20H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SystemIntegrationIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="15"
        y="14"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 7H13C16 7 18 9 18 12V14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M15 17H11C8 17 6 15 6 12V10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M16 12L18 14L20 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 12L6 10L4 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CustomerExperienceIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 19C4.8 15.8 6.6 14 9 14C11.4 14 13.2 15.8 14 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M15.5 7.5H20.5V12.5H18L16 14V12.5H15.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CustomSoftwarePlatformsIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="8"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="13"
        y="4"
        width="8"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="3"
        y="14"
        width="8"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="13"
        y="14"
        width="8"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M7 10V14M17 10V14M11 7H13M11 17H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}