import CustomApplicationCoverageSection from "@/components/common/CustomApplicationCoverageSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Custom App Development Services",
  description:
    "Custom business app development for portals, dashboards, internal tools, approval workflows, CRMs, and operations systems built around your team.",
};

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



export default function CustomApplicationDevelopmentPage() {
  return (
    <div>
        <PageHeroBanner
           eyebrow="custom software development"
            title="Custom web & mobile apps, built around how your team works."
            description="Web apps, internal tools, portals, and dashboards — designed for your specific workflows and built on top of the SaaS you already use. Delivered by AI-native forward-deployed engineers, with working software in weeks."
            primaryButtonText="Request a quote"
            primaryButtonHref="/contact"
            secondaryButtonText="See what we built"
            secondaryButtonHref="/our-work"
          />
        <CustomApplicationCoverageSection />
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
        <WhatWeBuildSection
        eyebrow="WHAT WE BUILD"
        title="What we build for you."
        items={[
          "Client portals",
          "Custom CRM",
          "Internal tools & admin panels",
          "Live dashboards",
          "Investor portals",
          "Operations consoles",
          "Workflow apps",
          "Inventory management",
          "Employee directories",
          "Customer portals",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />
    </div>
  );
}
