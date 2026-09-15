import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import CustomApplicationCoverageSection from "@/components/common/CustomApplicationCoverageSection";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import TrustedAiSection from "@/components/common/TrustedAiSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";

export const metadata: Metadata = {
  title: "Product Engineering Services",
  description:
    "Product engineering services for MVPs, SaaS products, customer portals, dashboards, and production-ready digital products from idea to launch.",
};


const caseStudies = [
  {
    title: "MealOps Vendor Invoice Management Platform",
    description:
      "A streamlined kitchen operations platform for managing vendor invoices, purchase orders, inventory records, and supplier approvals from one centralized workspace.",
    image: "/erp-6.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "Kitchen Operations",
      "FoodTech",
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


const comparisonColumns = [
  {
    key: "feature",
    label: "Features",
    widthClassName: "w-[28%]",
  },
  {
    key: "openxcell",
    label: "OpenXcell FDE",
    highlighted: true,
  },
  {
    key: "traditional",
    label: "Traditional Dev Shop",
  },
  {
    key: "diy",
    label: "DIY, single tools",
  },
];

const comparisonRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2-3 months",
    diy: "Hours, but limited ",
  },
  {
    feature: "Production-ready & scalable",
    openxcell: "Deep, multi-SaaS",
    traditional: "From Scratch",
    diy: "Tool-limited",
  },
  {
    feature: "You own the code",
    openxcell: "Yes — engineered",
    traditional: "Variable",
    diy: "Breaks at scale",
  },
  {
    feature: "Built on your SaaS",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to tool",
  },
];




export default function ProductEngineeringPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="PRODUCT ENGINEERING"
        title="From idea to launched product — at AI-native speed."
        description="Take a new product, venture, or 0→1 idea from concept to live, production-grade software. Built fast by forward-deployed engineers — and engineered to survive real users, real load, and real due diligence."
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />
      <ProblemSection
        eyebrow="THE PROBLEM"
        title="AI made prototypes cheap. Real products are still hard."
        description="Anyone can vibe-code a demo in a weekend. But a demo isn't a product. It breaks with the tenth user, can't handle payments or auth properly, fails a security review, and can't be extended once it matters. The gap between looks like it works and actually works is where most ideas die."
        image="/product-enginer.webp"
        imageAlt="Financial internal tools illustration"
      />
      <CustomApplicationCoverageSection />
      <WhatWeBuildSection
        eyebrow="WHAT WE BUILD"
        title="AI Solutions we deliver under this services"
        items={[
          "AI agents & copilots",
          "Support cockpits (AI replies)",
          "RAG / knowledge assistants",
          "Document processing",
          "Conversational interface",
          "Intelligent ticket triage",
          "Wrokflow automation agents",
          "KYC/ onboarding automation",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />

      <HowWeDeliverSection
        eyebrow="HOW WE DELIVER"
        title="From manual work to working automation, in weeks."
        description="AI-native delivery is the speed. Proper engineering is the reason it lasts."
        image="/from-manual.avif"
        cards={[
          {
            title: "Find the work",
            description:
              "We sit with your team and identify  the repetitive, high-volume work  AI can take over.",
          },
          {
            title: "Train on your data",
            description:
              "We build the agent or automation,  grounded in your knowledge base  and connected to your tools.",
          },
          {
            title: "Deploy guardrails",
            description:
              "Human-in-the-loop, logging, and  safety checks. Live in production,  not a sandbox.",
          },
          {
            title: "Tune & expand",
            description:
              "We measure what it removes,  tune accuracy, and widen  autonomy as trust grows.",
          },
        ]}
      />
      <TrustedAiSection
        eyebrow="BUILT TO BE TRUSTED"
        title="AI you can actually let loose safely."
        description="The reason most AI projects stall isn't capability. It's trust."
        secondaryDescription="We build automation that earns it."
        items={[
          {
            title: "Human-in-the-loop by default",
            description:
              "AI drafts and proposes; your team approves before anything goes out or changes. You decide how much autonomy to grant, and dial it up as trust builds.",
          },
          {
            title: "Grounded in your data",
            description:
              "Answers come from your knowledge base, docs, and records — not the open internet. Less hallucination, more accuracy, every source traceable.",
          },
          {
            title: "Audited and owned",
            description:
              "Every AI action is logged and reviewable. The system runs in your infrastructure, on your accounts — your data never leaves your control.",
          },
        ]}
      />
      <ComparisonSection
        eyebrow="WHY US"
        eyebrowIcon="⑂"
        title="Why OpenXcell for AI automation."
        description=""
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="pb-[50px] sm:pb-[70px] lg:pb-[80px]"
      />
      <WorkShowcaseSection
                eyebrow="CASE STUDIES"
                title="Real interfaces, built on real SaaS"
                description="A selection of digital products and platforms designed around real business workflows."
                projects={caseStudies}
                showFilters={false}
                showFinalCta={false}
                limit={2}
                className="!pt-0"
              />
    </>
  );
}
