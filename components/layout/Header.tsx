"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const solutionsMenu = [
{
  name: "Employee Hub",
  description:
    "Manage your team, employee information, workflows, and internal operations from one connected hub.",
  href: "/solutions/employee-hub",
},
{
  name: "Smart Restaurant",
  description:
    "Manage orders, tables, reservations, menu items, billing, and restaurant operations from one smart platform.",
  href: "/solutions/smart-restaurant",
},
 {
  name: "Fleet Dispatch",
  description:
    "Manage dispatch orders, trucks, drivers, loads, routes, and fleet activity from one connected platform.",
  href: "/solutions/fleet-dispatch",
},
 {
  name: "Content Management",
  description:
    "Create, organize, publish, and manage digital content from one flexible platform.",
  href: "/solutions/content-management",
},
{
  name: "Smart MLM",
  description:
    "Manage members, referrals, commissions, teams, payouts, and network growth from one connected MLM platform.",
  href: "/solutions/smart-mlm",
},
{
  name: "MealOps Vendory",
  description:
    "Manage vendors, purchasing, inventory, ingredients, orders, and food operations from one connected platform.",
  href: "/solutions/mealops-vendory",
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
                  {item.name === "Employee Hub" ? (
                              <EmployeeHubIcon />
                            ) : item.name === "Smart Restaurant" ? (
                              <SmartRestaurantIcon />
                            ) : item.name === "Fleet Dispatch" ? (
                              <FleetDispatchIcon />
                            ) : item.name === "Content Management" ? (
                              <ContentManagementIcon />
                            ) : item.name === "Smart MLM" ? (
                              <SmartMLMIcon />
                            ) : item.name === "MealOps Vendory" ? (
                              <MealOpsVendoryIcon />
                            ) : (
                              <EmployeeHubIcon />
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
            ? "max-h-[2000px] opacity-100"
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
                              {link.name === "Employee Hub" ? (
                                <EmployeeHubIcon />
                              ) : link.name === "Smart Restaurant" ? (
                                <SmartRestaurantIcon />
                              ) : link.name === "Fleet Dispatch" ? (
                                <FleetDispatchIcon />
                              ) : link.name === "Content Management" ? (
                                <ContentManagementIcon />
                              ) : link.name === "Smart MLM" ? (
                                <SmartMLMIcon />
                              ) : link.name === "MealOps Vendory" ? (
                                <MealOpsVendoryIcon />
                              ) : (
                                <EmployeeHubIcon />
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

function EmployeeHubIcon() {
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
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M6.5 19C7.2 15.8 9.1 14 12 14C14.9 14 16.8 15.8 17.5 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="5"
        cy="10"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="19"
        cy="10"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M2.5 18C2.9 15.8 4.1 14.5 6 14.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M21.5 18C21.1 15.8 19.9 14.5 18 14.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmartRestaurantIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3V10C7 11.7 8.3 13 10 13V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M4 3V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M10 3V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M17 3C15.3 3 14 4.3 14 6V12C14 13.1 14.9 14 16 14H18V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FleetDispatchIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6H14V16H3V6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M14 9H18L21 12V16H14V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <circle
        cx="7"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="18"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M5 10H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M7 8L5 10L7 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ContentManagementIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 8H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 12H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 16H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M14.5 16.5L18.5 12.5L20 14L16 18H14.5V16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SmartMLMIcon() {
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
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="6"
        cy="17"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="18"
        cy="17"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 7.5V11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M12 11L6 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M12 11L18 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M3.5 21C3.9 19.3 4.8 18.5 6 18.5C7.2 18.5 8.1 19.3 8.5 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M15.5 21C15.9 19.3 16.8 18.5 18 18.5C19.2 18.5 20.1 19.3 20.5 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MealOpsVendoryIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Store / supplier */}
      <path
        d="M4 9L6 4H18L20 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 9V20H19V9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 9C3.5 10.4 4.5 11.5 6 11.5C7.5 11.5 8.5 10.4 8.5 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8.5 9C8.5 10.4 9.5 11.5 11 11.5C12.5 11.5 13.5 10.4 13.5 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M13.5 9C13.5 10.4 14.5 11.5 16 11.5C17.5 11.5 18.5 10.4 18.5 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Invoice */}
      <rect
        x="10"
        y="13"
        width="6"
        height="7"
        rx="1"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 15.5H14.5M12 18H14"
        stroke="currentColor"
        strokeWidth="1.4"
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