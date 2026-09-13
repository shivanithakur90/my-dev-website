"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const servicesMenu = [
  {
    name: "Custom App Development",
    description: "Custom coded application for your special use case",
    href: "/services/custom-application-development",
  },
  {
    name: "Forward-Deployed Engineers",
    description: "A senior engineer embedded with your team",
    href: "/services/forward-deployed-engineers",
  },
  {
    name: "AI & Automation",
    description: "Custom pipelines for your specific needs",
    href: "/services/ai-automation",
  },
  {
    name: "Product Engineering",
    description: "From idea to launched product, fast",
    href: "/services/product-engineering",
  },
  {
    name: "Cloud, DevOps & Security",
    description: "Deploy, scale, and secure — done right",
    href: "/services/cloud-devops-security",
  },
  {
    name: "System Integration",
    description: "Connect all of your tools",
    href: "/services/api-development",
  },
];

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

const industriesMenu = [
  {
    name: "Fintech & Financial Services",
    description: "Spot risk and fraud before it becomes a problem.",
    href: "/industries/fintech-financial-services",
  },
  {
    name: "E-commerce & Retail",
    description: "Recommend the right product to the right customer, automatically.",
    href: "/industries/e-commerce-retail",
  },
  {
    name: "Healthcare",
    description: "Free up staff time by automating routine patient workflows.",
    href: "/industries/healthcare",
  },
  {
    name: "Manufacturing & Distribution",
    description: "Forecast demand and avoid costly downtime.",
    href: "/industries/manufacturing-distribution",
  },
];

const mobileNavItems = [
  {
    label: "Services",
    links: servicesMenu,
  },
  {
    label: "Solutions",
    links: solutionsMenu,
  },
  {
    label: "Industries",
    links: industriesMenu,
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
      <div className="container mx-auto flex h-[68px] items-center justify-between px-5 md:px-6 lg:px-8">
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
          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-2 rounded-[10px] px-3.5 py-2 text-[17px] font-medium transition-all duration-300 ${
                isScrolled
                  ? "group-hover:bg-[#e9e9e9]"
                  : "group-hover:bg-white/90 group-hover:text-[#111111]"
              }`}
            >
              Services

              <span className="transition-transform duration-300 group-hover:rotate-180">
                <ChevronDown />
              </span>
            </Link>

            <div
              className="
                invisible
                absolute
                left-[-210px]
                top-full
                z-[999]
                pointer-events-none
                translate-y-3
                pt-0
                opacity-0
                transition-all
                duration-300
                group-hover:pointer-events-auto
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <div
                className="
                  w-[625px]
                  max-h-[calc(100vh-110px)]
                  overflow-y-auto
                  rounded-[16px]
                  border
                  border-black/5
                  bg-white
                  text-[#111111]
                  shadow-[0_22px_55px_rgba(0,0,0,0.13)]
                "
              >
                <div className="grid grid-cols-2 gap-x-10 gap-y-7 px-8 pb-7 pt-8">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                        group/item
                        flex
                        items-start
                        gap-3.5
                        rounded-[12px]
                        p-2
                        transition-all
                        duration-300
                        hover:bg-[#fff7f3]
                      "
                    >
                      <span
                        className="
                          flex
                          h-[36px]
                          w-[36px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[8px]
                          bg-[#ffebe2]
                          text-[#ff4e0a]
                        "
                      >
                        <ServiceIcon name={item.name} />
                      </span>

                      <span className="flex flex-1 items-start justify-between gap-2">
                        <span>
                          <span className="block text-[16px] font-semibold leading-[1.22] text-[#111111] transition-colors duration-300 group-hover/item:text-[#ff4e0a]">
                            {item.name}
                          </span>

                          <span className="mt-1 block max-w-[235px] text-[14px] leading-[1.25] text-[#626262]">
                            {item.description}
                          </span>
                        </span>

                        <SubMenuArrow className="mt-0.5" />
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-[#eeeeee] px-5 pb-5 pt-4">
                  <div className="grid grid-cols-[1fr_180px] items-center gap-4 rounded-[8px] bg-[linear-gradient(90deg,#ff9568_0%,#ff4e0a_100%)] px-4 py-3.5 text-[#111111]">
                    <span className="text-[16px] font-semibold">
                      Looking for something else?
                    </span>

                    <Link
                      href="/contact"
                      className="rounded-[11px] bg-white px-6 py-3 text-center text-[15px] font-semibold transition-colors hover:bg-[#fff4ef]"
                    >
                      Talk to sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="group relative">
            <Link
              href="/solutions"
              className={`flex items-center gap-2 rounded-[10px] px-3.5 py-2 text-[17px] font-medium transition-all duration-300 ${
                isScrolled
                  ? "group-hover:bg-[#e9e9e9]"
                  : "group-hover:bg-white/90 group-hover:text-[#111111]"
              }`}
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
                pointer-events-none
                -translate-x-1/2
                translate-y-3
                pt-5
                opacity-0
                transition-all
                duration-300
                group-hover:pointer-events-auto
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

                        <SubMenuArrow className="mt-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="group relative">
            <Link
              href="/industries"
              className={`flex items-center gap-2 rounded-[10px] px-3.5 py-2 text-[17px] font-medium transition-all duration-300 ${
                isScrolled
                  ? "group-hover:bg-[#e9e9e9]"
                  : "group-hover:bg-white/90 group-hover:text-[#111111]"
              }`}
            >
              Industries

              <span className="transition-transform duration-300 group-hover:rotate-180">
                <ChevronDown />
              </span>
            </Link>

            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-[999]
                pointer-events-none
                -translate-x-1/2
                translate-y-3
                pt-5
                opacity-0
                transition-all
                duration-300
                group-hover:pointer-events-auto
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <div
                className="
                  w-[430px]
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
                  {industriesMenu.map((item) => (
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
                        <IndustryIcon name={item.name} />
                      </span>

                      <span className="flex flex-1 items-start justify-between gap-4">
                        <span>
                          <span className="block text-[17px] font-semibold leading-[1.25] text-[#111111]">
                            {item.name}
                          </span>

                          <span className="mt-1.5 block max-w-[270px] text-[14px] leading-[1.45] text-[#626262]">
                            {item.description}
                          </span>
                        </span>

                        <SubMenuArrow className="mt-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <Link
            href="/company"
            className={`flex items-center gap-2 rounded-[10px] px-3.5 py-2 text-[17px] font-medium transition-all duration-300 ${
              isScrolled
                ? "hover:bg-[#e9e9e9]"
                : "hover:bg-white/90 hover:text-[#111111]"
            }`}
          >
            Company
            <ChevronDown />
          </Link>

          {/* Our Work */}
          <Link
            href="/our-work"
            className={`rounded-[10px] px-3.5 py-2 text-[17px] font-medium transition-all duration-300 ${
              isScrolled
                ? "hover:bg-[#e9e9e9]"
                : "hover:bg-white/90 hover:text-[#111111]"
            }`}
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
                            item.label === "Services" ||
                            item.label === "Solutions" ||
                            item.label === "Industries"
                              ? "bg-white p-3 text-[#111111]"
                              : isScrolled
                              ? "px-4 py-3 text-black/70 hover:bg-black/5"
                              : "px-4 py-3 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          {item.label === "Services" ||
                          item.label === "Solutions" ||
                          item.label === "Industries" ? (
                            <span className="flex items-start gap-3">
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#ffebe2] text-[#ff4e0a]">
                                {item.label === "Services" ? (
                                  <ServiceIcon name={link.name} />
                                ) : item.label === "Industries" ? (
                                  <IndustryIcon name={link.name} />
                                ) : link.name === "Employee Hub" ? (
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

function ServiceIcon({ name }: { name: string }) {
  if (name === "Forward-Deployed Engineers") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.8 19C5.6 15.6 7.7 13.8 11 13.8C14.3 13.8 16.4 15.6 17.2 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M17.5 7.5C19.1 8.1 20.2 9.6 20.2 11.4C20.2 13.1 19.2 14.6 17.8 15.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "AI & Automation") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 11.2L16.2 6.8M8 12.8L16.2 17.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "Product Engineering") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13.5 4.5C16.7 4.9 19.1 7.3 19.5 10.5L14 16L8 10L13.5 4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L5.5 11L4.5 15.5L9 14.5M14 16L13 20.5L17.5 19.5L18.5 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="9" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Cloud, DevOps & Security") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.2 18H17.2C19.3 18 21 16.4 21 14.3C21 12.5 19.7 11 18 10.7C17.5 7.9 15.1 6 12.2 6C9.8 6 7.7 7.4 6.8 9.5C4.7 9.7 3 11.5 3 13.7C3 16.1 4.9 18 7.2 18Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 13.3L11.3 15.1L15 11.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "System Integration") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <rect x="14" y="13" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 8H13.5C15.4 8 17 9.6 17 11.5V13M14 16H10.5C8.6 16 7 14.4 7 12.5V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 9L5 12L8 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 9L19 12L16 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 6.5L10.5 17.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SubMenuArrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`-translate-x-1 text-[#ff4e0a] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
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

function IndustryIcon({ name }: { name: string }) {
  if (name === "E-commerce & Retail") {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5H6.2L8.1 15.2H18.2L20 8H7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9.5" cy="19" r="1.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="19" r="1.6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (name === "Healthcare") {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20S5 15.9 5 9.8C5 7.3 6.7 5.5 9 5.5C10.3 5.5 11.3 6.1 12 7.1C12.7 6.1 13.7 5.5 15 5.5C17.3 5.5 19 7.3 19 9.8C19 15.9 12 20 12 20Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 12H10.4L11.6 9.8L13.2 14.2L14.5 12H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "Manufacturing & Distribution") {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19V10.5L9 13V10.5L14 13V8L20 11V19H4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 19V16M12 19V16M16 19V16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16 8V5H19V10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 20V10H10V20M14 20V10H18V20" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M4 10L12 5L20 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13H9M15 13H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
