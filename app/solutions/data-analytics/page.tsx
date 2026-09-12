import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function DataAnalyticsPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="DATA & ANALYTICS"
        title="Turn your business data into decisions that drive growth."
        description="Bring your data together, uncover meaningful insights, and give your team clear dashboards and reports that make it easier to understand performance and act with confidence."
        image="/era-8.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED INSIGHTS"
        title="See what is happening across your business in one clear view."
        description="We build data and analytics platforms that bring information from different systems into one connected experience. From real-time dashboards and performance reporting to customer insights and operational analytics, your team gets the visibility needed to make faster, better-informed decisions."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 20V13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M9 20V9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M14 20V5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M19 20V11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M3 20H21"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for teams that need clearer answers from their data."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Leadership teams",
            description:
              "Track key business metrics, performance trends, and growth indicators from one executive dashboard.",
          },
          {
            number: "02",
            title: "Sales & marketing teams",
            description:
              "Understand campaigns, leads, conversions, customer behaviour, and revenue performance with connected reporting.",
          },
          {
            number: "03",
            title: "Operations teams",
            description:
              "Monitor workflows, productivity, costs, capacity, and operational performance without relying on scattered spreadsheets.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Bring data from multiple tools together and create a reliable source of truth as your business becomes more complex.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Analytics built around the questions your business needs answered."
        description="We start with the decisions your team needs to make, identify the data required to support them, and build a reporting experience that turns complex information into clear, useful insights."
        cards={[
          {
            title: "Connect your data sources",
            description:
              "We bring together information from your CRM, ERP, ecommerce platform, internal tools, APIs, spreadsheets, and other business systems.",
          },
          {
            title: "Build meaningful dashboards",
            description:
              "We organize your data into clear KPIs, charts, reports, and dashboards designed around the metrics that matter most to your team.",
          },
          {
            title: "Monitor, analyze & improve",
            description:
              "Real-time reporting and historical trends help your team spot opportunities, understand performance, and make better decisions over time.",
          },
        ]}
      />
    </div>
  );
}