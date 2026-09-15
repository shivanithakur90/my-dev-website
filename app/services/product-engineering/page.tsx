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

type ProductCoverageIconVariant =
  | "mvp"
  | "zeroToOne"
  | "production"
  | "scaling"
  | "roadmap"
  | "launch";

function ProductCoverageIcon({
  variant,
}: {
  variant: ProductCoverageIconVariant;
}) {
  const sharedProps = {
    width: 38,
    height: 38,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (variant) {
    case "mvp":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 9H16M8 13H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 16L20 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "zeroToOne":
      return (
        <svg {...sharedProps}>
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 12H15.5M13.5 9.5L16 12L13.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "production":
      return (
        <svg {...sharedProps}>
          <path d="M5 17V7L12 4L19 7V17L12 20L5 17Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "scaling":
      return (
        <svg {...sharedProps}>
          <path d="M5 18L10 13L13 16L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 8H19V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "roadmap":
      return (
        <svg {...sharedProps}>
          <path d="M6 18V6M12 18V9M18 18V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 6C8 4.5 10 4.5 12 6C14 7.5 16 7.5 18 6V12C16 13.5 14 13.5 12 12C10 10.5 8 10.5 6 12V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "launch":
      return (
        <svg {...sharedProps}>
          <path d="M13 4C16 5 18 7.5 19 11L14 16L8 10L13 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 10L5 11L4 15L9 14M14 16L13 21L17 20L18 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 8.5H14.51" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );
  }
}

type ProductDeliverIconVariant = "scope" | "build" | "launch" | "iterate";

function ProductDeliverIcon({
  variant,
}: {
  variant: ProductDeliverIconVariant;
}) {
  const sharedProps = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (variant) {
    case "scope":
      return (
        <svg {...sharedProps}>
          <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 8H16M8 12H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M15 16L18 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="13" cy="14" r="3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "build":
      return (
        <svg {...sharedProps}>
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 5L10 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "launch":
      return (
        <svg {...sharedProps}>
          <path d="M13 4C16 5 18 7.5 19 11L14 16L8 10L13 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 10L5 11L4 15L9 14M14 16L13 21L17 20L18 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 8.5H14.51" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case "iterate":
      return (
        <svg {...sharedProps}>
          <path d="M17 7H9.5C7 7 5 9 5 11.5C5 12.5 5.3 13.4 5.9 14.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M14 4L17 7L14 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 17H14.5C17 17 19 15 19 12.5C19 11.5 18.7 10.6 18.1 9.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M10 20L7 17L10 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

const productEngineeringCoverageItems = [
  {
    title: "MVP development",
    description:
      "A real, launchable first version — not a prototype  — that you can put in front of users and investors.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="mvp" />,
  },
  {
    title: "0→1 product builds",
    description:
      "New products and internal ventures taken from  blank page to live software.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="zeroToOne" />,
  },
  {
    title: "Prototype to production",
    description:
      "Already have a prototype? We turn it into  something that holds up under real use.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="production" />,
  },
  {
    title: "Product scaling",
    description:
      "Re-architect and harden an early product so it  scales as your usage grows.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="scaling" />,
  },
  {
    title: "Iteration & roadmap",
    description:
      "Continuous build cycles to take the product from  launch to product-market fit.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="roadmap" />,
  },
  {
    title: "Launch engineering",
    description:
      "Auth, payments, infrastructure, and monitoring —  the real-world plumbing a product needs to go  live.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="launch" />,
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
      <CustomApplicationCoverageSection
        eyebrow="WHAT'S INCLUDED"
        title="What product engineering covers."
        items={productEngineeringCoverageItems}
        ctaLabel="Explore service"
      />
      <WhatWeBuildSection
        eyebrow="WHAT WE BUILD"
        title="Products we help launch."
        items={[
          "SaaS products",
          "Customer-facing web apps",
          "Internal ventures",
          "Marketplaces",
          "Mobile apps",
          "AI-native products",
          "Data products",
          "Portals & platforms",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />

      <HowWeDeliverSection
        eyebrow="HOW WE DELIVER"
        title="From idea to launch in four to eight weeks."
        description=""
        image="/from-idea.avif"
        cards={[
          {
            title: "Find the work",
            icon: <ProductDeliverIcon variant="scope" />,
            description:
              "We sit with your team and identify  the repetitive, high-volume work  AI can take over.",
          },
          {
            title: "Train on your data",
            icon: <ProductDeliverIcon variant="build" />,
            description:
              "We build the agent or automation,  grounded in your knowledge base  and connected to your tools.",
          },
          {
            title: "Deploy guardrails",
            icon: <ProductDeliverIcon variant="launch" />,
            description:
              "Human-in-the-loop, logging, and  safety checks. Live in production,  not a sandbox.",
          },
          {
            title: "Tune & expand",
            icon: <ProductDeliverIcon variant="iterate" />,
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
