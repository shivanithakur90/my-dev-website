import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import OverviewPage from "@/components/common/OverviewPage";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom software solutions for client portals, content workspaces, automation, dashboards, workflows, and connected business systems.",
};


export default function SolutionsPage() {
  return (
    <div>
      <PageHeroBanner
        eyebrow="CLIENT PORTAL"
        title="A client portal, built for you — not by you."
        description="Give your clients one secure, branded place to see their data, share files, track requests, and pay invoices — connected to the CRM, storage, and billing you already use."
        image="/erp-4.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />
      <IntroContentSection
        eyebrow="CONTENT WORKSPACE"
        title="Everything your content team needs, in one place."
        description="A centralized editorial workspace for managing articles, insights, categories, portfolios, and case studies. Teams can create content, monitor activity, manage drafts, and keep every update organized through one clean, scalable dashboard."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 18H15M10 21H14M8.5 15.5C6.9 14.4 6 12.6 6 10.5C6 7.2 8.7 4.5 12 4.5C15.3 4.5 18 7.2 18 10.5C18 12.6 17.1 14.4 15.5 15.5C14.8 16 14.5 16.5 14.5 17H9.5C9.5 16.5 9.2 16 8.5 15.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for teams managing content at scale."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Content teams",
            description:
              "Plan, create, organize, and manage articles, insights, and editorial content from one workspace.",
          },
          {
            number: "02",
            title: "Marketing teams",
            description:
              "Keep campaigns, categories, content updates, and brand resources organized and easy to manage.",
          },
          {
            number: "03",
            title: "Editorial teams",
            description:
              "Manage drafts, publishing workflows, recent updates, and team activity from a centralized dashboard.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Scale your content operations with one system for articles, portfolios, case studies, and insights.",
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

    </div>
  );
}
