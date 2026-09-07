import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SST Employee Hub",
    description:
      "A self-service employee portal for attendance, leave management, payslips, company policies, and internal announcements in one dashboard.",
    tags: ["HRMS", "Employee Portal"],
    image: "/ERP-1.png",
    imageBackground: "bg-[#9d92ff]",
    href: "/our-work/bank-deposit-guardian",
  },
  {
    title: "Smart Restaurant POS Platform",
    description:
      "A modern point-of-sale workspace for managing menu items, table orders, reservations, billing, payments, and daily restaurant operations.",
    tags: ["FoodTech", "Restaurant Management"],
    image: "/erp-5.png",
    imageBackground: "bg-[#b6c1cd]",
    href: "/our-work/ctms",
  },
  {
    title: "Fleet Dispatch Management Platform",
    description:
      "A centralized workspace for dispatch orders, fleet tracking, load management, and real-time delivery operations.",
    tags: ["SaaS", "Logistics"],
    image: "/erp-3.png",
    imageBackground: "bg-[#bcebd4]",
    href: "/our-work/coverage-intelligence",
  },
  {
    title: "Content Management Studio Dashboard",
    description:
      "A centralized workspace to manage articles, insights, industries, portfolios, and case studies in one streamlined platform.",
    tags: ["Content Management"],
    image: "/erp-4.png",
    imageBackground: "bg-[#ddd]",
    href: "/our-work/case-operations-console",
  },
  {
    title: "Smart MLM & Commission Management Platform",
    description:
      "A centralized platform for managing members, sales, payouts, commissions, affiliate networks, and business performance from one dashboard.",
    tags: ["Network Marketing","Affiliate Management"],
    image: "/erp-7.png",
    imageBackground: "bg-[#0060D2]",
    href: "/our-work/case-operations-console",
  },
  {
    title: "MealOps Vendor Invoice Management Platform",
    description:
      "A streamlined kitchen operations platform for managing vendor invoices, purchase orders, inventory records, and supplier approvals from one centralized workspace.",
    tags: ["Kitchen Operations", "FoodTech"],
    image: "/erp-6.png",
    imageBackground: "bg-[#ff5708]",
    href: "/our-work/case-operations-console",
  },
];

export default function WorkShowcaseSection() {
  return (
    <section className="bg-white py-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[26px] border border-[#dedede] bg-white p-4 shadow-[0_5px_10px_rgba(0,0,0,0.12)] sm:p-5"
            >
              <div
                className={`relative aspect-[1.86/1] overflow-hidden rounded-[16px] p-4 sm:p-5 ${project.imageBackground}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.12)]">
                  <Image
                    src={project.image}
                    alt={`${project.title} dashboard`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-3 pb-1 pt-6 sm:px-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f5f5] px-3 py-1 text-[11px] font-medium leading-none text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-5 text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#151515] sm:text-[22px]">
                  {project.title}
                </h2>

                <p className="mt-2 text-[14px] leading-[1.55] text-[#454545] sm:text-[15px]">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#ff4d00] transition-all hover:gap-3 hover:underline hover:underline-offset-4"
                >
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
