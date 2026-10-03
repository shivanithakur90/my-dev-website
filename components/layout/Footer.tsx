"use client";

import Link from "next/link";
import { useState } from "react";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Custom Application Development", href: "/services/custom-application-development" },
      { label: "AI & Intelligent Automation", href: "/services/ai-automation" },
      { label: "Systems Integration & API Development", href: "/services/api-development" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Forward-Deployed Engineers", href: "/services/forward-deployed-engineers" },
      { label: "Cloud, DevOps & Security", href: "/services/cloud-devops-security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Employee Hub", href: "/solutions/employee-hub" },
      { label: "Smart Restaurant", href: "/solutions/smart-restaurant" },
      { label: "Fleet Dispatch", href: "/solutions/fleet-dispatch" },
      { label: "Content Management", href: "/solutions/content-management" },
      { label: "Smart MLM", href: "/solutions/smart-mlm" },
      { label: "MealOps Vendory", href: "/solutions/mealops-vendory" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "All Industries", href: "/industries" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Fintech & Financial Services", href: "/industries/fintech-financial-services" },
      { label: "E-commerce & Retail", href: "/industries/e-commerce-retail" },
      { label: "Manufacturing & Distribution", href: "/industries/manufacturing-distribution" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Blogs", href: "/company/blogs" },
      { label: "Our Work", href: "/our-work" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Company", href: "/company" },
      { label: "About Us", href: "/company/about" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const [openColumn, setOpenColumn] = useState<string | null>(null);

  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">

      <div className="hidden">
        <div className="footer-marquee flex w-max whitespace-nowrap">
          <span className="shrink-0 pr-16 text-[100px] font-semibold uppercase leading-none tracking-[-5px] text-white/[0.12] sm:text-[130px] lg:text-[165px] xl:text-[190px]">
            Innovative Company · For · Innovative Company · For ·
          </span>

          <span
            aria-hidden="true"
            className="shrink-0 pr-16 text-[100px] font-semibold uppercase leading-none tracking-[-5px] text-white/[0.12] sm:text-[130px] lg:text-[165px] xl:text-[190px]"
          >
            Innovative Company · For · Innovative Company · For ·
          </span>
        </div>
      </div>

      <div className="container py-[50px]">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-12 lg:grid-cols-5 lg:gap-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-white/20 py-4 text-left text-[14px] font-semibold uppercase text-[#ff4d00] sm:hidden"
                aria-expanded={openColumn === column.title}
                onClick={() =>
                  setOpenColumn(
                    openColumn === column.title ? null : column.title,
                  )
                }
              >
                {column.title}
                <span
                  className={`flex h-5 w-5 items-center justify-center text-[0px] transition-transform duration-200 after:block after:h-2 after:w-2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-[#ff4d00] after:content-[''] ${
                    openColumn === column.title ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              <h3 className="mb-4 hidden border-b border-white/20 pb-3 text-[14px] font-semibold uppercase text-[#ff4d00] sm:block">
                {column.title}
              </h3>

              <ul
                className={`space-y-3 pb-4 pt-4 sm:block sm:p-0 ${
                  openColumn === column.title ? "block" : "hidden"
                }`}
              >
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-[14px] leading-[1.45] text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ff4d00]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-6 text-[13px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} My Dev Website. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/company/about" className="transition hover:text-white">
              About Us
            </Link>

            <Link href="/company/blogs" className="transition hover:text-white">
              Blogs
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
