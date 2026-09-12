import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function ContentManagementPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="CONTENT MANAGEMENT"
        title="Create, organize, and publish all your content from one place."
        description="Manage articles, insights, categories, portfolios, case studies, drafts, and publishing workflows from one flexible content platform built for modern teams."
        image="/erp-4.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED CONTENT OPERATIONS"
        title="Give your content team one workspace for everything they publish."
        description="We build content management platforms that bring articles, industry insights, categories, portfolios, case studies, drafts, and publishing activity into one organized workspace. Your team can create content faster, keep information structured, and manage every update without jumping between disconnected tools."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="3"
              width="16"
              height="18"
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
              d="M8 12H13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M8 16H11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M14.5 16.5L18.5 12.5L20 14L16 18H14.5V16.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for teams creating and managing content at scale."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Content teams",
            description:
              "Create, edit, organize, review, and publish articles, insights, case studies, and other digital content from one workspace.",
          },
          {
            number: "02",
            title: "Marketing teams",
            description:
              "Manage campaigns, thought leadership, industry content, landing page content, and brand assets without relying on developers for every update.",
          },
          {
            number: "03",
            title: "Portfolio-driven businesses",
            description:
              "Organize projects, case studies, portfolios, categories, and supporting content in a structured system that is easy to maintain.",
          },
          {
            number: "04",
            title: "Growing organizations",
            description:
              "Scale content production with clear workflows, drafts, publishing controls, activity tracking, and role-based access.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Content platforms designed around the way your team actually publishes."
        description="We understand how your content moves from idea to draft, review, approval, and publishing, then build a flexible system that keeps your team organized and your content easy to manage."
        cards={[
          {
            title: "Structure your content",
            description:
              "We define content types, categories, fields, relationships, authors, tags, media, and publishing rules around your real content needs.",
          },
          {
            title: "Build your publishing workflow",
            description:
              "We create dashboards, editors, drafts, approvals, quick actions, permissions, and publishing tools that make everyday content work faster.",
          },
          {
            title: "Track, manage & scale",
            description:
              "Activity feeds, content status, recent updates, search, filters, and reporting help your team manage growing volumes of content with confidence.",
          },
        ]}
      />
    </div>
  );
}