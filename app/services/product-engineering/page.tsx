import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import CustomApplicationCoverageSection from "@/components/common/CustomApplicationCoverageSection";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import TrustedAiSection from "@/components/common/TrustedAiSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import BuiltWithOnSection from "@/components/common/BuiltWithOnSection";
import FaqSection from "@/components/home/FaqSection";

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
    title: "Fleet Dispatch Management Platform",
    description:
      "A centralized workspace for dispatch orders, fleet tracking, load management, and real-time delivery operations.",
    image: "/erp-3.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "SaaS",
      "Dashboard",
      "Logistics",
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
    feature: "Time to launch",
    openxcell: "4–8 weeks",
    traditional: "4–9 months",
    diy: "Fast, but fragile ",
  },
  {
    feature: "Production-grade",
    openxcell: "From day one",
    traditional: "Eventually",
    diy: "Rarely",
  },
  {
    feature: "Survives scale",
    openxcell: "Engineered to",
    traditional: "Variable",
    diy: "Breaks early",
  },
  {
    feature: "Passes due diligence",
    openxcell: "Yes — clean & owned",
    traditional: "Usually",
    diy: "Risky",
  },
  {
    feature: "You own it",
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
          <path d="M9 18H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M10 21H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 10.5C8 8.3 9.8 6.5 12 6.5C14.2 6.5 16 8.3 16 10.5C16 12 15.2 13.1 14.1 14.1C13.4 14.7 13.2 15.3 13.1 16H10.9C10.8 15.3 10.6 14.7 9.9 14.1C8.8 13.1 8 12 8 10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 3.5V4.8M5.7 6.2L6.7 7.2M18.3 6.2L17.3 7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "build":
      return (
        <svg {...sharedProps}>
          <path d="M12 5V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 10C12 13 6 13 6 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 10C12 13 18 13 18 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "launch":
      return (
        <svg {...sharedProps}>
          <path d="M12 4.5L18 7V11.5C18 15.2 15.6 18.4 12 19.5C8.4 18.4 6 15.2 6 11.5V7L12 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 9V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9 12H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "iterate":
      return (
        <svg {...sharedProps}>
          <path d="M13 4.5C15.8 5.5 17.6 7.6 18.5 10.5L14 15L9 10L13 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 10L6.2 11.2L5.2 14.8L9.6 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 15L13.2 19.5L16.8 18.5L18 15.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.2 8.6H14.21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M6 20L8.2 17.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
  }
}

const productEngineeringCoverageItems = [
  {
    title: "MVP development",
    description:
      "A real, launchable first version — not a prototype — that you can put in front of users and investors.",
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
      "Auth, payments, infrastructure, and monitoring — the real-world plumbing a product needs to go live.",
    href: "/services/product-engineering",
    icon: <ProductCoverageIcon variant="launch" />,
  },
];




const customApplicationFaqs = [
  {
    question: "Isn't an AI-built product just a throwaway prototype?",
    answer:
      "Not the way we build. We use AI for speed but engineer real architecture, auth, payments, and infrastructure underneath — so what you launch is a genuine product that survives real users and scales, not a demo that breaks.",
  },
  {
    question: "Will it pass investor or acquirer due diligence?",
    answer:
      "Yes. You get clean, documented, fully-owned code with security and data handling done properly. It holds up when someone technical looks under the hood.",
  },
  {
    question: "How is this different from your Custom App Development service?",
    answer:
      "Product Engineering is for net-new products and ventures going from idea to launch — including the launch plumbing (auth, payments, infra). Custom App Development is for building tools and apps on top of your existing operations and SaaS.",
  },
  {
    question: "Can you keep building after launch?",
    answer:
      "Yes — most clients keep a forward-deployed engineer on to iterate toward product-market fit after the initial launch.",
  },
  {
    question: "Do we own everything?",
    answer:
      "Fully. All code, in your repos and infrastructure. No lock-in to a tool or to us.",
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
            title: "Shape the idea",
            icon: <ProductDeliverIcon variant="scope" />,
            description:
              "We turn your concept into a scoped, buildable v1 — the smallest thing that's genuinely useful and launchable.",
          },
          {
            title: "Build the product",
            icon: <ProductDeliverIcon variant="build" />,
            description:
              "AI-native build with real architecture. Working software in week one, shaped with you daily.",
          },
          {
            title: "Launch-engineer",
            icon: <ProductDeliverIcon variant="launch" />,
            description:
              "Auth, payments, infrastructure, monitoring, security — the plumbing that turns a build into a product.",
          },
          {
            title: "Launch & iterate",
            icon: <ProductDeliverIcon variant="iterate" />,
            description:
              "Go live with real users. Keep an FDE on to iterate toward product-market fit.",
          },
        ]}
      />
      <TrustedAiSection
        eyebrow="BUILT TO BE TRUSTED"
        title="Built fast but not throwaway."
        description="AI speed is only an advantage if what you ship survives contact with real users. We engineer for that from day one."
        secondaryDescription="We build automation that earns it."
        items={[
          {
            title: "Real architecture, not demo glue",
            description:
              "AI drafts and proposes; your team approves before anything goes out or changes. You decide how much autonomy to grant, and dial it up as trust builds.",
          },
          {
            title: "Survives real load",
            description:
              "Built and deployed on production infrastructure, right- sized to your expected usage. It won't fall over when the tenth — or ten-thousandth — user shows up.",
          },
          {
            title: "Passes due diligence",
            description:
              "Clean, owned, documented code with security and data handling done properly — so it holds up when investors or acquirers look under the hood.",
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

      <BuiltWithOnSection
        eyebrow="BUILT WITH & BUILT ON"
        title="Built with a product stack that can launch."
        description="From prototype to production, we choose tools that support auth, payments, data, UI, and deployment from day one."
        paddingClassName="pt-[50px] sm:pt-[50px] lg:pt-[80px]"
        leftGroup={{
          title: "Built with",
          description:
            "Frameworks and product infrastructure for launchable software.",
          items: [
            {
              label: "Next.js",
              image: "/next.svg",
              icon: <span className="font-semibold text-black">N</span>,
            },
            {
              label: "React",
              icon: <span className="font-semibold text-[#149eca]">R</span>,
            },
            {
              label: "TypeScript",
              icon: <span className="font-semibold text-[#3178c6]">TS</span>,
            },
            {
              label: "Tailwind CSS",
              icon: <span className="font-semibold text-[#38bdf8]">TW</span>,
            },
            {
              label: "PostgreSQL",
              icon: <span className="font-semibold text-[#336791]">DB</span>,
            },
          ],
        }}
        rightGroup={{
          title: "Built on",
          description:
            "Connected to product services your users and teams depend on.",
          items: [
            {
              label: "Vercel",
              image: "/vercel.svg",
              icon: <span className="text-black">V</span>,
            },
            {
              label: "Stripe",
              icon: <span className="font-semibold text-[#635bff]">S</span>,
            },
            {
              label: "Auth",
              icon: <span className="font-semibold text-[#ff5708]">A</span>,
            },
            {
              label: "HubSpot",
              image: "/hubspot.svg",
              icon: <span className="text-[#ff5c35]">H</span>,
            },
            {
              label: "Your APIs",
              icon: <span className="font-mono text-[#4285f4]">API</span>,
            },
          ],
        }}
        moreLabel="+more"
      />
      <FaqSection
        eyebrow="FAQ"
        title={
          <> Common <br /> Questions. </>
        }
        description="Specific to product engineering."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px] "
      />
    </>
  );
}
