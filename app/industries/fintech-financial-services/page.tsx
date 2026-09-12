import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import FeatureHelpSection from "@/components/common/FeatureHelpSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IndustryServicesSection from "@/components/common/IndustryServicesSection";

export const metadata: Metadata = {
  title: "Fintech & Financial Services",
  description:
    "Custom fintech software for payments, lending, KYC, fraud operations, support workflows, dashboards, and compliance reporting.",
};

export default function FintechFinancialServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Fintech & Financial Services"
        title="Software for fintech, built for you."
        description="Custom apps, AI automation, and integrations built for payments, lending, and financial platforms — on top of the SaaS and compliance tools you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/erp-4.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      <ProblemSection
          eyebrow="THE PROBLEM"
          title="Financial products move fast. Your internal tools don’t."
          description="Support teams tab-switch between six systems to answer one customer. KYC drop-offs pile up. Fraud signals live in one tool, customer data in another, and compliance reporting is a manual scramble. Off-the-shelf software isn't built for how a modern financial platform actually operates — and hiring an engineering team to fix it is slow and expensive."
          image="/fasts-products.png"
          imageAlt="Financial internal tools illustration"
        />

        <FeatureHelpSection
          eyebrow="HOW WE HELP"
          title="What we build for fintech teams."
          eyebrowIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="5"
                width="16"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M8 9H12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          }
          cards={[
            {
              title: "Faster support",
              description:
                "Unified support cockpits with customer 360 and AI-drafted replies — agents stop tab-switching and handling time drops.",
              icon: (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V13"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 11H4.5C3.67 11 3 11.67 3 12.5V15.5C3 16.33 3.67 17 4.5 17H6V11H5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M19 11H19.5C20.33 11 21 11.67 21 12.5V15.5C21 16.33 20.33 17 19.5 17H18V11H19Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              ),
            },

            {
              title: "Higher KYC conversion",
              description:
                "Onboarding ops that segment users by stage, nudge drop-offs, and raise approval rates.",
              icon: (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="5"
                    width="17"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="9"
                    cy="10"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M6.5 15C7.3 13.7 8.4 13 9.8 13C11.3 13 12.4 13.7 13.2 15"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 9H18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },

            {
              title: "Connected compliance",
              description:
                "Fraud, transaction, and KYC data pulled into one view, with audit trails and reporting built in.",
              icon: (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="6"
                    y="4"
                    width="12"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M9 9H15M9 13H15M9 17H13"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },

            {
              title: "Live financial ops",
              description:
                "Real-time dashboards for cash position, reconciliation, and the metrics your leadership tracks.",
              icon: (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M12 5V12L17 15"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
          ]}
        />


        <IndustryServicesSection
          eyebrow="SERVICES"
          title="Services that fit this industry."
          cards={[
            {
              title: "AI & Intelligent Automation",
              image: "/cloud-dev.avif",
              href: "/services/ai-automation",
              ctaLabel: "Explore",
            },
            {
              title: "Systems Integration & API Development",
              image: "/systems-inte.avif",
              href: "/services/api-development",
              ctaLabel: "Explore",
            },
            {
              title: "Cloud, DevOps & Security",
              image: "/cloud-dev.avif",
              href: "/services/cloud-devops",
              ctaLabel: "Explore",
            },
          ]}
        />

        <BuildProcessSection
                eyebrow="HOW WE BUILD IT"
                title="Built around the way your content team actually works."
                description="Instead of forcing your team into disconnected tools, we build one streamlined workspace around your editorial process — connecting content, activity, drafts, portfolios, and publishing workflows in one production-ready system."
                cards={[
                  {
                    title: "Built around your content workflow",
                    description:
                      "Articles, insights, categories, portfolios, case studies, and drafts are organized around how your team already creates and manages content.",
                  },
                  {
                    title: "Everything connected in one workspace",
                    description:
                      "Content updates, team activity, publishing actions, and editorial resources stay connected so your team always works from the same source of truth.",
                  },
                  {
                    title: "Scalable, production-ready & owned",
                    description:
                      "A secure content management experience designed to grow with your team, your content library, and your publishing needs.",
                  },
                ]}
              />
    </main>
  );
}
