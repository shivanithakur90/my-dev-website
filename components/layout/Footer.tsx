import Link from "next/link";

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
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">

      <div className="pointer-events-none absolute left-0 top-[-20px] w-full overflow-hidden">
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

      <div className="container relative z-10 pb-12 pt-[230px] lg:pt-[250px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 border-b border-white/20 pb-3 text-[17px] font-semibold uppercase text-[#ff4d00]">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-[16px] leading-[1.45] text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ff4d00]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-7 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
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
