import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import StackCtaSection from "@/components/home/StackCtaSection";

export const metadata: Metadata = {
  title: "Employee Hub",
  description:
    "Create a custom employee hub for team data, workflows, operations, requests, dashboards, and internal business processes.",
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

export default function CustomSoftwarePlatformsPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <PageHeroBanner
        eyebrow="EMPLOYEE HUB"
        title="Run your entire operation from one connected platform."
        description="Replace disconnected tools, spreadsheets, and manual processes with custom business software built around the way your team actually works."
        image="/ERP-1.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />

      {/* INTRO SECTION */}
      <IntroContentSection
        eyebrow="CUSTOM BUSINESS SOFTWARE"
        title="Bring your customers, workflows, teams, and operations into one system."
        description="We build custom software platforms that bring customers, jobs, vehicles, technicians, inventory, invoices, reporting, and daily operations into one centralized system. Your team gets real-time visibility, faster workflows, and less manual work across the business."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M3 8H21"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M8 8V21"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M11 12H18"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M11 16H16"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <circle
              cx="5.5"
              cy="5.5"
              r="0.8"
              fill="currentColor"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for businesses managing complex daily operations."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Manage jobs, staff, customers, workflows, inventory, and day-to-day business activity from one connected platform.",
          },
          {
            number: "02",
            title: "Service businesses",
            description:
              "Track customers, bookings, jobs, technicians, service history, invoices, and payments without relying on disconnected tools.",
          },
          {
            number: "03",
            title: "Management teams",
            description:
              "Get real-time dashboards, reports, performance metrics, and operational visibility for faster and better decisions.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Replace spreadsheets and multiple systems with scalable software designed around the way your business actually operates.",
          },
        ]}
      />

      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description="A selection of digital products and platforms designed around real business workflows."
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="pb-0"
      />

      {/* BUILD PROCESS */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Business software designed around your actual operations."
        description="We understand your workflows, users, data, and operational challenges, then build one connected platform that makes everyday work simpler, faster, and easier to manage."
        cards={[
          {
            title: "Map your operations",
            description:
              "We identify your workflows, teams, roles, data, approvals, reporting requirements, and existing business systems.",
          },
          {
            title: "Build your platform",
            description:
              "We create dashboards, modules, permissions, workflows, integrations, and automation around your specific business processes.",
          },
          {
            title: "Scale & improve",
            description:
              "As your business grows, new modules, users, locations, integrations, and workflows can be added without rebuilding everything.",
          },
        ]}
      />

      <StackCtaSection
        heading="Let's connect your stack."
        description="Tell us what needs to talk to what. We'll design the integration layer."
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
    </div>
  );
}
