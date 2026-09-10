"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const serviceLinks = [
  {
    title: "Custom App Development",
    description: "Custom coded application for your special use case",
    href: "/services",
    icon: "</>",
  },
  {
    title: "Forward-Deployed Engineers",
    description: "A senior engineer embedded with your team",
    href: "/services",
    icon: "◎",
  },
  {
    title: "AI & Automation",
    description: "Custom Pipelines for your specific needs",
    href: "/services",
    icon: "⌁",
  },
  {
    title: "Product Engineering",
    description: "From idea to launched product, fast",
    href: "/services",
    icon: "↗",
  },
  {
    title: "Cloud, DevOps & Security",
    description: "Deploy, scale, and secure — done right",
    href: "/services",
    icon: "◉",
  },
  {
    title: "System Integration",
    description: "Connect All of your tools",
    href: "/services",
    icon: "⌘",
  },
];

const mobileNavItems = [
  {
    label: "Services",
    links: ["Custom applications", "AI automation", "Product engineering"],
  },
  {
    label: "Solutions",
    links: ["Client portals", "Custom CRM", "Dashboards"],
  },
  {
    label: "Industries",
    links: ["Healthcare", "Fintech", "Retail"],
  },
  {
    label: "Company",
    links: ["About us", "Careers", "Contact"],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#eeeeee] bg-white/95 text-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "border-white/15 bg-[linear-gradient(110deg,#1736e8_0%,#4129b9_28%,#9b1f57_57%,#d42a1f_78%,#ef3b00_100%)] text-white"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-white"}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 13.5L4 3L7.8 15.2L13.5 13.5Z" fill={isScrolled ? "white" : "#2743E8"} />
              <path d="M13.5 13.5L23 3L19.2 15.2L13.5 13.5Z" fill={isScrolled ? "white" : "#2743E8"} />
              <path d="M13.5 13.5L4 24L16 19.5L13.5 13.5Z" fill={isScrolled ? "white" : "#2743E8"} />
              <path d="M13.5 13.5L23 24L11 19.5L13.5 13.5Z" fill={isScrolled ? "white" : "#2743E8"} />
            </svg>
          </span>

          <span className="text-[24px] font-semibold tracking-[-0.8px]">
            Openxcell
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative flex h-[72px] items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-2 text-[15px] font-medium"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-[68px] w-[624px] -translate-x-[36%] rounded-[18px] bg-white p-5 text-[#171717] shadow-[0_22px_55px_rgba(41,27,55,0.18)]">
                <div className="grid grid-cols-2 gap-x-7 gap-y-5 pb-5">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group flex min-h-[64px] gap-3 rounded-xl p-2 transition-colors hover:bg-[#fff5f0]"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fff0e9] text-[16px] font-semibold text-[#ff4d0a]">
                        {service.icon}
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold leading-5">{service.title}</span>
                        <span className="mt-0.5 block text-[13px] leading-[1.25] text-[#59575c]">{service.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[#e9e7e8] bg-[linear-gradient(90deg,#ff9a72,#ff6a32)] px-4 py-2.5">
                  <span className="text-[14px] font-semibold">Looking for something else?</span>
                  <Link
                    href="/contact"
                    className="min-w-[180px] rounded-xl bg-white px-6 py-3 text-center text-[14px] font-semibold"
                    onClick={() => setServicesOpen(false)}
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/solutions"
            className="flex items-center gap-2 text-[15px] font-medium hover:underline hover:underline-offset-4"
          >
            Solutions
            <span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/industries"
            className="flex items-center gap-2 text-[15px] font-medium hover:underline hover:underline-offset-4"
          >
            Industries
            <span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/company"
            className="flex items-center gap-2 text-[15px] font-medium hover:underline hover:underline-offset-4"
          >
            Company
            <span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/our-work"
            className="text-[15px] font-medium hover:underline hover:underline-offset-4"
          >
            Our work
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-xl bg-[#ff5708] py-1.5 pl-4 pr-1.5 text-[15px] font-semibold text-white transition hover:bg-[#ff6a20]"
          >
            Get a quote

            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
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
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden ${
            isScrolled ? "border-black/20" : "border-white/30"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`border-t px-6 pb-7 pt-4 lg:hidden ${
            isScrolled ? "border-black/10 bg-white" : "border-white/15"
          }`}
        >
          <nav className="flex flex-col">
            {mobileNavItems.map((item) => {
              const isOpen = openAccordion === item.label;

              return (
                <div
                  key={item.label}
                  className={`border-b ${isScrolled ? "border-black/10" : "border-white/10"}`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-medium"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenAccordion(isOpen ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="flex flex-col pb-3 pl-3">
                      {item.links.map((link) => (
                        <Link
                          key={link}
                          href={`/${item.label.toLowerCase()}`}
                          className="py-2 text-[14px] opacity-75 hover:underline hover:underline-offset-4"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/our-work"
              className={`border-b py-3.5 text-[15px] font-medium hover:underline hover:underline-offset-4 ${isScrolled ? "border-black/10" : "border-white/10"}`}
              onClick={() => setMenuOpen(false)}
            >
              Our work
            </Link>

         <Link
        href="/contact"
        className="mt-5 flex w-fit items-center gap-3 rounded-xl bg-[#ff5708] py-2 pl-4 pr-2 text-[15px] font-semibold text-white"
        onClick={() => setMenuOpen(false)}
      >
        Get a quote

        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708]">
          →
        </span>
      </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
