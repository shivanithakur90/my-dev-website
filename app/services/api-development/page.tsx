import type { Metadata } from "next";

import FaqSection from "@/components/home/FaqSection";
import BuiltWithOnSection from "@/components/common/BuiltWithOnSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import ProblemSection from "@/components/common/ProblemSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import CustomApplicationCoverageSection from "@/components/common/CustomApplicationCoverageSection";

export const metadata: Metadata = {
  title: "System Integration & API Development",
  description:
    "System integration and API development services to connect CRMs, ERPs, payment tools, support platforms, databases, and SaaS workflows.",
};

/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Will this disrupt our current systems?",
    answer:
      "No. We build integrations in an isolated layer that sits beside your tools, not inside them. Your existing systems keep running exactly as they do today — we just connect them.",
  },
  {
    question: "What if a vendor changes their API?",
    answer:
      "Because the integration layer is isolated, an upstream API change is a surgical fix, not a rebuild. On a retainer we monitor for these changes and handle them proactively.",
  },
  {
    question: "Can you connect to our in-house / legacy system?",
    answer:
      "Yes. If it has any way to expose data — an API, a database, even a file export — we can bridge it to your modern stack without rebuilding it.",
  },
  {
    question: "How is this different from Zapier or Make?",
    answer:
      "Those are great for simple triggers. We build deep, custom integrations that handle complex logic, large volumes, and reliability requirements that no-code connectors break under — and you own the result outright.",
  },
  {
    question: "Do we own the integration code?",
    answer:
      "Fully. It lives in your infrastructure and accounts. No lock-in to a connector platform or to us.",
  },
];

/* =========================================================
   COMPARISON DATA
========================================================= */

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
    label: "DIY / Vibe-coding Alone",
  },
];

const comparisonRows = [
  {
    feature: "Depth",
    openxcell: "Deep, custom, multi-SaaS",
    traditional: "Project-by-project",
    diy: "Surface-level triggers",
  },
  {
    feature: "Handles complex logic",
    openxcell: "Yes",
    traditional: "Sometimes",
    diy: "Limited",
  },
  {
    feature: "Reliability at scale",
    openxcell: "Monitored, resilient",
    traditional: "Variable",
    diy: "Breaks at volume",
  },
  {
    feature: "Disruption to current tools",
    openxcell: "None — isolated layer",
    traditional: "Risk of rework",
    diy: "None, but shallow",
  },
  {
    feature: "You own it",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to platform",
  },
];

/* =========================================================
   COVERAGE ICONS
========================================================= */

/* SaaS-to-SaaS integration */
function SaaSIntegrationIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="8"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="24"
        y="20"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M15 17L25 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M21 20L25 23L21 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M25 17L15 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M19 9L15 11L17 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Custom API development */
function ApiDevelopmentIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 11L5 20L13 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M27 11L35 20L27 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 7L16 33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Middleware & data sync */
function DataSyncIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="11"
        rx="7"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M5 11V24C5 26.2 8.1 28 12 28C13.2 28 14.3 27.8 15.2 27.5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M5 18C5 20.2 8.1 22 12 22"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M20 13H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M29 10L32 13L29 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32 23H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M23 20L20 23L23 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Legacy connectivity */
function LegacyConnectivityIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="7"
        width="13"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 13H13M8 19H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <rect
        x="25"
        y="10"
        width="11"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M17 20H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22 17L25 20L22 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Event & webhook pipelines */
function WebhookPipelineIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="20"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="32"
        cy="9"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="32"
        cy="31"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M12 18L28 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M12 22L28 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M19 13L22 20L18 20L21 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Unified data layer */
function UnifiedDataIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="20"
        cy="9"
        rx="11"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M9 9V19C9 21.8 13.9 24 20 24C26.1 24 31 21.8 31 19V9"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M9 19V29C9 31.8 13.9 34 20 34C26.1 34 31 31.8 31 29V19"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M9 19C9 21.8 13.9 24 20 24C26.1 24 31 21.8 31 19"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

/* =========================================================
   COVERAGE DATA
========================================================= */

const productEngineeringCoverageItems = [
  {
    title: "SaaS-to-SaaS integration",
    description:
      "Connect the tools you already use so data flows automatically between them — no re-keying.",
    href: "/services/product-engineering",
    icon: <SaaSIntegrationIcon />,
  },
  {
    title: "Custom API development",
    description:
      "Build the APIs your systems need to expose and consume data securely.",
    href: "/services/product-engineering",
    icon: <ApiDevelopmentIcon />,
  },
  {
    title: "Middleware & data sync",
    description:
      "A reliable layer that keeps records in agreement across every system, in real time.",
    href: "/services/product-engineering",
    icon: <DataSyncIcon />,
  },
  {
    title: "Legacy connectivity",
    description:
      "Bridge older or in-house systems to modern SaaS and apps without rebuilding them.",
    href: "/services/product-engineering",
    icon: <LegacyConnectivityIcon />,
  },
  {
    title: "Event & webhook pipelines",
    description:
      "Trigger actions across your stack the moment something happens — orders, signups, payments.",
    href: "/services/product-engineering",
    icon: <WebhookPipelineIcon />,
  },
  {
    title: "Unified data layer",
    description:
      "One trustworthy source of truth assembled from all your systems, ready for apps and dashboards.",
    href: "/services/product-engineering",
    icon: <UnifiedDataIcon />,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ApiDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHeroBanner
        eyebrow="SYSTEMS INTEGRATION & API DEVELOPMENT"
        title="Connect the systems you already run into one coherent stack."
        description="Your data is trapped across 15+ disconnected tools. We build the integrations, APIs, and middleware that make them work as one — without ripping out anything you already depend on."
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
        title="Your tools don’t talk. So your data is stuck."
        description="Sales lives in one system, support in another, billing in a third, and the truth lives in a spreadsheet someone updates by hand. Data gets re-keyed, reports go stale, and nobody trusts the numbers. The tools are fine — the gaps between them aren't."
        image="/your-tool.avif"
        imageAlt="Disconnected business systems and data integration illustration"
      />

      {/* =====================================================
          WHAT'S INCLUDED
      ===================================================== */}
      <CustomApplicationCoverageSection
        eyebrow="WHAT'S INCLUDED"
        title="What systems integration covers."
        items={productEngineeringCoverageItems}
        ctaLabel="Explore service"
      />

      {/* =====================================================
          WHY US
      ===================================================== */}
      <ComparisonSection
        eyebrow="WHY US"
        eyebrowIcon="⑂"
        title="Why OpenXcell for integration."
        description=""
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="pb-[50px] sm:pb-[70px] lg:pb-[80px]"
      />

      {/* =====================================================
          BUILT WITH & BUILT ON
      ===================================================== */}
      <BuiltWithOnSection
        eyebrow="BUILT WITH & BUILT ON"
        title="We connect to your stack."
        description="Custom integration infrastructure built around the tools, APIs, databases, and platforms your business already depends on."
        paddingClassName="pt-[50px] sm:pt-[50px] lg:pt-[80px]"
        leftGroup={{
          title: "Built with",
          description:
            "Reliable integration technologies selected for your systems, traffic, and workflows.",
          items: [
            {
              label: "REST APIs",
              icon: <span className="font-mono text-[#ff5708]">{"</>"}</span>,
            },
            {
              label: "GraphQL",
              icon: (
                <span className="text-[17px] font-semibold text-[#e535ab]">
                  ◇
                </span>
              ),
            },
            {
              label: "Webhooks",
              icon: (
                <span className="text-[18px] text-[#ff5708]">
                  ↯
                </span>
              ),
            },
            {
              label: "Message Queues",
              icon: (
                <span className="text-[16px] text-[#333333]">
                  ⇄
                </span>
              ),
            },
            {
              label: "Custom Middleware",
              icon: (
                <span className="text-[#ff5708]">
                  ⚙
                </span>
              ),
            },
          ],
        }}
        rightGroup={{
          title: "Built on",
          description:
            "Connected to the SaaS platforms and systems your teams already use.",
          items: [
            {
              label: "HubSpot",
              image: "/hubspot.svg",
              icon: (
                <span className="text-[#ff5c35]">
                  ⌯
                </span>
              ),
            },
            {
              label: "Intercom",
              image: "/itercom.png",
              icon: (
                <span className="text-[#12253f]">
                  ▥
                </span>
              ),
            },
            {
              label: "Slack",
              image: "/slack.svg",
              icon: <span>✣</span>,
            },
            {
              label: "Notion",
              image: "/notion.svg",
              icon: (
                <span className="font-semibold text-black">
                  N
                </span>
              ),
            },
            {
              label: "Your Systems",
              icon: (
                <span className="text-[#4285f4]">
                  ◫
                </span>
              ),
            },
          ],
        }}
        moreLabel="+more"
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
        description="Specific to systems integration."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />
    </>
  );
}