import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import ProblemSection from "@/components/common/ProblemSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import SolutionsTabs, { type SolutionTab } from "@/components/common/SolutionsTabs";
import IntegrationsSection, { IntegrationItem } from "@/components/common/IntegrationsSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";

export const metadata: Metadata = {
  title: "E-commerce & Retail",
  description:
    "Custom e-commerce and retail software for storefront operations, inventory, customer workflows, recommendations, and dashboards.",
};


/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Can you connect Shopify, our POS, and accounting?",
    answer:
      "Yes — Shopify, WooCommerce, Stripe, QuickBooks, and more, connected so stock, orders, and finance stay in sync automatically.",
  },
  {
    question: "Can it handle multiple channels and locations?",
    answer:
      "Yes — real-time inventory and orders across storefronts, marketplaces, and warehouses.",
  },
  {
    question: "Can you help with customer outreach?",
    answer:
      "Yes — AI-drafted, personalized outbound through your existing Twilio, SendGrid, or Klaviyo, at scale.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Working software in week one, full delivery typically in 4–8 weeks depending on scope.",
  },
  {
    question: "Do we own it?",
    answer: "Fully — in your accounts, with no lock-in.",
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


const manufacturingTabs: SolutionTab[] = [
  {
    id: "inventory",
    label: "Content Management",
    image: "/erp-4.png",
    Icon: "inventory",
  },
  {
    id: "vendor",
    label: "Network Marketing",
    image: "/erp-7.png",
    Icon: "vendor",
  },
  {
    id: "erp",
    label: "Kitchen Operations",
    image: "/erp-6.png",
    Icon: "erp",
  },
  {
    id: "project",
    label: "Reservations",
    image: "/erp-5.png",
    Icon: "project",
  },
];


const integrations: IntegrationItem[] = [
  {
    name: "Shopify",
    logo: "/shopify.avif",
  },
  {
    name: "Stripe",
    logo: "/stirpe.avif",
  },
  {
    name: "QuickBooks",
    logo: "/quick-books.avif",
  },
  {
    name: "Twilio",
    logo: "/twilio.avif",
  },
  {
    name: "SendGrid",
    logo: "/sendgrid.avif",
  },
  {
    name: "WooCommerce",
    logo: "/woocomerce.avif",
  },
  {
    name: "Klaviyo",
    logo: "/klaviyo.avif",
  },
  {
    name: "+Your stack",
    logo: "/your-stack.avif",
  },
];


const caseStudies = [
  {
    title: "Smart MLM & Commission Management Platform",
    description:
      "A centralized platform for managing members, sales, payouts, commissions, affiliate networks, and business performance from one dashboard.",
    image: "/erp-7.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "Network Marketing",
      "Affiliate Management",
    ],
  },

  {
    title: "MealOps Vendor Invoice Management Platform",
    description:
      "A streamlined kitchen operations platform for managing vendor invoices, purchase orders, inventory records, and supplier approvals from one centralized workspace.",
    image: "/erp-6.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/mealops-vendory",
    ctaLabel: "View case study",
    tags: [
      "Kitchen Operations",
      "FoodTech",
    ],
  },
];



export default function EcommerceRetailPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="E-commerce & Retail"
        title="Software for e-commerce & retail, built for you."
        description="Inventory, order ops, customer portals, outbound, and dashboards built for online and multi-channel retail — on top of Shopify, Stripe, and the tools you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/erp-4.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />

      {/* =====================================================
                            PROBLEM
                        ===================================================== */}

      <ProblemSection
        eyebrow="THE PROBLEM"
        title="You sell across channels. Your data doesn’t keep up."
        description="Stock levels that don't match reality. Orders tracked across Shopify, spreadsheets, and email. Customer data in one tool, support in another, marketing in a third. As you add channels and volume, the gaps between your tools turn into stockouts, slow fulfillment, and blind spots. The tools are fine — the connections between them aren't."
        image="/ContentFlow Articles Dashboard.png"
        imageAlt="Financial internal tools illustration"
      />

      {/* =====================================================
                                    HOW WE DELIVER
                                    ICONS CHANGED ACCORDING TO EACH STEP
                                ===================================================== */}
      <HowWeDeliverSection
        eyebrow="How we help"
        title="What we build for e-commerce & retail teams."
        image=""
        cards={[
          {
            title: "Accurate inventory",
            icon: <AssessIcon />,
            description:
              "Real-time stock across channels and locations, with reorder alerts before you run out.",
          },
          {
            title: "Faster fulfillment",
            icon: <PrioritizeIcon />,
            description:
              "Order and fulfillment workflows connected end to end, no manual re-keying.",
          },
          {
            title: "Personalized outbound",
            icon: <ImplementIcon />,
            description:
              "AI-drafted, history-aware customer outreach at scale through your existing channels.",
          },
          {
            title: "One view of the business",
            icon: <MonitorMaintainIcon />,
            description:
              "Live dashboards pulling sales, stock, and customer data into one place.",
          },
        ]}
      />

      <SolutionsTabs
        heading="Solutions for fintech."
        description="The apps we build most often for teams like yours."
        tabs={manufacturingTabs}
        paddingClassName="py-[0px] max-md:py-[0px]"
      />


      {/* =====================================================
                HOW WE BUILD IT
            ===================================================== */}

      <BuildProcessSection
        paddingClassName="py-[50px] sm:py-[50px] md:py-[70px] lg:py-[80px]"
        eyebrow="How we build it"
        title="Built for you, on your stack."
        description="We don't hand you a tool to configure. A forward-deployed engineer builds around your workflow, connects your systems, deploys it securely, and hands it over."
        cards={[
          {
            title: "We build it for you",
            description:
              "A senior, AI-augmented engineer embeds with your team, scopes the work, and ships — you don't touch a builder."
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



      <IntegrationsSection
        badge="BUILT ON YOUR STACK"
        heading="Connected to the tools e-commerce & retail teams run on."
        buttonText="View all Integrations"
        buttonHref="/services/api-development"
        integrations={integrations}
        classNames={{
          section: "w-full bg-white pb-[50px] sm:pb-[50px] lg:pb-[80px]",
          container: "mx-auto container px-5",

          badgeWrapper: "flex justify-center",

          badge:
            "inline-flex items-center gap-2 rounded-[8px] border border-[#e8e8e8] px-4 py-2",

          badgeIcon: "text-[#ff5200]",

          badgeText:
            "text-[13px] font-medium uppercase text-[#242424]",

          headerWrapper:
            "mx-auto mt-6 max-w-[750px] text-center",

          heading:
            "text-[48px] font-semibold leading-[1.08] tracking-[-2px] text-[#202020]",

          buttonWrapper:
            "mt-9 flex justify-center",

          button:
            "rounded-[10px] border border-black px-5 py-3 text-[14px] font-semibold",

          grid:
            "mt-[58px] grid grid-cols-4 gap-[14px] max-lg:grid-cols-2 max-sm:grid-cols-1",

          card:
            "flex min-h-[165px] flex-col items-center justify-center rounded-[15px] bg-[#f6f6f6] p-6",

          logoWrapper:
            "flex h-[58px] w-[58px] rounded-[10px] items-center justify-center",

          logo:
            "h-[58px] w-[58px] object-contain rounded-[10px]",

          title:
            "mt-4 text-[17px] font-medium text-[#262626]",
        }}
      />

      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description=""
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="pt-0! pb-0!"
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
        description="What e-commerce & retail teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />


      {/* =====================================================
                CTA
            ===================================================== */}

      <StackCtaSection
        heading="Running an online or retail business?"
        description="Tell us where your channels and tools don't connect. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
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
