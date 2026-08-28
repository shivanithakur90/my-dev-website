"use client";

import Link from "next/link";
import { useState } from "react";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Custom Application Development", href: "/services/custom-application-development" },
      { label: "AI & Intelligent Automation", href: "/services/ai-automation" },
      { label: "Systems Integration & API Development", href: "/services/api-development" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Forward-Deployed Engineers", href: "/services/forward-deployed-engineers" },
      { label: "Cloud, DevOps & Security", href: "/services/cloud-devops-security" },
      { label: "Web Development Company", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Applicant Tracker", href: "/solutions/applicant-tracker" },
      { label: "Client Portal", href: "/solutions/client-portal" },
      { label: "Custom CRM", href: "/solutions/custom-crm" },
      { label: "Dashboards & Reporting", href: "/solutions/dashboards-reporting" },
      { label: "Employee Portal", href: "/solutions/employee-portal" },
      { label: "ERP", href: "/solutions/erp" },
      { label: "Inventory Management", href: "/solutions/inventory-management" },
      { label: "Knowledge Base", href: "/solutions/knowledge-base" },
      { label: "LMS", href: "/solutions/lms" },
    ],
  },
  {
    title: "Industry",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "SaaS Technology", href: "/industries/saas" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Manufacturing Services", href: "/industries/manufacturing" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Our Work", href: "/our-work" },
      { label: "Library", href: "/library" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Confidentiality", href: "/confidentiality" },
      { label: "Our Team", href: "/team" },
      { label: "Security", href: "/security" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Privacy Policy", href: "/privacy-policy" },
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
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
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
