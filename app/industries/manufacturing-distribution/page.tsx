import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import ProblemSection from "@/components/common/ProblemSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import SolutionsTabs, { type SolutionTab } from "@/components/common/SolutionsTabs";

export const metadata: Metadata = {
  title: "Manufacturing & Distribution",
  description:
    "Custom manufacturing and distribution software for demand planning, inventory, vendor workflows, production, and operations.",
};



/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Do we have to replace our ERP?",
    answer:
      "Usually not — we connect to and build on top of your existing ERP and accounting, unifying them rather than forcing a rip-and-replace.",
  },
  {
    question: "Can it handle inventory across locations?",
    answer:
      "Yes — real-time stock across warehouses and locations, with materials, WIP, and finished goods.",
  },
  {
    question: "Can suppliers self-serve?",
    answer:
      "Yes — vendor portals for onboarding, documents, orders, and invoices, connected to your accounting.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Working software early, with full delivery typically in 6–12 weeks for operations that touch multiple areas.",
  },
  {
    question: "Do we own it?",
    answer: "Fully — in your accounts, with no lock-in.",
  },
];

const caseStudies = [
  {
    title: "ContentFlow Studio",
    description:
      "A centralized editorial workspace for managing articles, insights, portfolios, case studies, drafts, and team activity.",
    image: "/erp-4.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "SaaS",
      "Content Management",
      "Dashboard",
    ],
  },

  {
    title: "Smart MLM & Commission Management Platform",
    description:
      "A centralized platform for managing members, sales, payouts, commissions, affiliate networks, and business performance from one dashboard.",
    image: "/erp-7.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "Network Marketing",
      "Dashboard",
      "Affiliate Management",
    ],
  },
];


/* =========================================================
   HOW WE DELIVER ICONS
========================================================= */

function AssessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11L11 13L15 9"
        stroke="#FF5200"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z"
        stroke="#FF5200"
        strokeWidth="1.8"
      />

      <path
        d="M9 4.5V3.5C9 2.94772 9.44772 2.5 10 2.5H14C14.5523 2.5 15 2.94772 15 3.5V4.5"
        stroke="#FF5200"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* Prioritize */
function PrioritizeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[#FF5200]"
    >
      <path
        d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 9h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Implement */
function ImplementIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[#FF6846]"
    >
      <rect
        x="5"
        y="4.5"
        width="14"
        height="16"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M9 4.5V3.7C9 3.04 9.54 2.5 10.2 2.5H13.8C14.46 2.5 15 3.04 15 3.7V4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8.5 9H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M8.5 12.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M8.5 16H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Monitor & Maintain */
function MonitorMaintainIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[#FF6846]"
    >
      <path
        d="M12 3.5A8.5 8.5 0 1 1 4.6 16.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M10 4V11L4.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4.5 14A7.6 7.6 0 0 1 10 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}



type IconProps = {
  className?: string;
};

function InventoryIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 8H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VendorIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 8V12L15 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ErpIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 14V11"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 14V8"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M16 14V10"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ProjectIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="4"
        y="5"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <rect
        x="14"
        y="5"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <rect
        x="9"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

const manufacturingTabs: SolutionTab[] = [
  {
    id: "inventory",
    label: "Content Management",
    image: "/images/inventory-dashboard.png",
    Icon: "inventory",
  },
  {
    id: "vendor",
    label: "Network Marketing",
    image: "/images/vendor-dashboard.png",
    Icon: "vendor",
  },
  {
    id: "erp",
    label: "Reservations",
    image: "/images/erp-dashboard.png",
    Icon: "erp",
  },
  {
    id: "project",
    label: "Project Management",
    image: "/images/project-dashboard.png",
    Icon: "project",
  },
];




export default function ManufacturingDistributionPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Manufacturing & Distribution"
        title="Software for manufacturing & distribution, built for you."
        description="Inventory, vendor portals, order management, and lightweight ERP built for manufacturers, wholesalers, and distributors — on top of the systems you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/new-erp.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* =====================================================
                PROBLEM
            ===================================================== */}

      <ProblemSection
        eyebrow="THE PROBLEM"
        title="Your operation is complex. Your software is a patchwork."
        description="Materials, orders, and stock tracked across spreadsheets, an aging ERP, and a few disconnected tools. Suppliers managed over email. No single view of what's on hand, on order, or overdue. Enterprise ERP is too expensive and rigid; spreadsheets don't scale. You need systems that fit how your operation actually runs."
        image="/manufacturing-distribution.webp"
        imageAlt="Financial internal tools illustration"
      />

      {/* =====================================================
                      HOW WE DELIVER
                      ICONS CHANGED ACCORDING TO EACH STEP
                  ===================================================== */}
      <HowWeDeliverSection
        eyebrow="How we help"
        title="What we build for manufacturing teams."
        image="/from-idea.avif"
        cards={[
          {
            title: "Inventory visibility",
            icon: <AssessIcon />,
            description:
              "Real-time stock views across warehouses, materials, WIP, and finished goods — without spreadsheet chasing.",
          },
          {
            title: "Vendor workflows",
            icon: <PrioritizeIcon />,
            description:
              "Supplier portals for onboarding, documents, orders, invoices, and approvals connected to your back office.",
          },
          {
            title: "Production operations",
            icon: <ImplementIcon />,
            description:
              "Dashboards and workflows for jobs, work orders, production status, bottlenecks, and daily operations.",
          },
          {
            title: "Connected reporting",
            icon: <MonitorMaintainIcon />,
            description:
              "Live reports for orders, stock, purchasing, fulfillment, and the numbers leadership needs to trust.",
          },
        ]}
      />

       <SolutionsTabs
        heading="Solutions for manufacturing."
        description="The operations apps we build most often for manufacturers and distributors."
        tabs={manufacturingTabs}
        defaultTab="project"
      />
      



      {/* BUILD PROCESS */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Built for you, on your stack."
        description="We don't hand you a tool to configure. A forward-deployed engineer builds around your workflow, connects your systems, deploys it securely, and hands it over."
        cards={[
          {
            title: "We build it for you",
            description:
              "A senior, AI-augmented engineer embeds with your team, scopes the work, and ships — you don't touch a builder.",
          },
          {
            title: "On your existing tools",
            description:
              "Built on top of the systems you already run, connected live — not a replacement you have to migrate to.",
          },
          {
            title: "Production-grade & owned",
            description:
              "Secure, scalable, deployed in your accounts. You own it fully, with no lock-in.",
          },
        ]}
      />

      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description=""
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="pb-0"
      />


      {/* =====================================================
                            FAQ
                        ===================================================== */}

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Common <br /> Questions.
          </>
        }
        description="What manufacturing teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />

      {/* =====================================================
                            CTA
                        ===================================================== */}

      <StackCtaSection
        heading="Running a manufacturing or distribution business?"
        description="Tell us how your operation runs and where the gaps are. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#040d20"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#fff"
        descriptionColor="#fff"
        buttonIcon={undefined}
      />
    </main>
  );
}
