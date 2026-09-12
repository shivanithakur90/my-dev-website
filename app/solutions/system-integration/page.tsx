import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function SystemIntegrationPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="SYSTEM INTEGRATION"
        title="Connect your systems. Keep your business moving as one."
        description="Bring your apps, platforms, APIs, and business tools together so data flows smoothly, teams stay aligned, and manual handoffs disappear."
        image="/era-9.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED SYSTEMS"
        title="Make every tool in your business work together."
        description="We connect your CRM, ERP, ecommerce platform, internal tools, payment systems, third-party apps, and APIs into one reliable ecosystem. Instead of moving data manually between disconnected platforms, your systems stay synchronized and your workflows keep moving automatically."
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
              y="4"
              width="6"
              height="6"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <rect
              x="15"
              y="14"
              width="6"
              height="6"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M9 7H13C16 7 18 9 18 12V14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M15 17H11C8 17 6 15 6 12V10"
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
        title="Built for teams working across disconnected systems."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Connect internal tools, automate data movement, and keep workflows synchronized across departments.",
          },
          {
            number: "02",
            title: "Ecommerce teams",
            description:
              "Connect storefronts, inventory, payments, shipping, CRM, and back-office systems into one streamlined operation.",
          },
          {
            number: "03",
            title: "Sales & service teams",
            description:
              "Keep customer information, requests, conversations, and activity synchronized across the tools your teams already use.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Add new tools and platforms without creating more data silos, duplicate work, or disconnected processes.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Integrations designed around the way your systems need to communicate."
        description="We map how information moves across your business, identify the systems that need to stay connected, and build secure integrations that keep your data accurate, available, and synchronized."
        cards={[
          {
            title: "Map your systems & data",
            description:
              "We identify your platforms, APIs, data sources, workflows, and dependencies to understand exactly what needs to connect.",
          },
          {
            title: "Build secure integrations",
            description:
              "We connect systems through APIs, webhooks, middleware, and custom integration logic built around your business requirements.",
          },
          {
            title: "Monitor & keep data in sync",
            description:
              "We build reliable data flows with monitoring, error handling, and synchronization so your integrations continue working as your business grows.",
          },
        ]}
      />
    </div>
  );
}