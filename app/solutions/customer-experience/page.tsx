import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function CustomerExperiencePage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="CUSTOMER EXPERIENCE"
        title="Create digital experiences your customers actually enjoy using."
        description="Make every customer interaction faster, simpler, and more personal with connected digital experiences built around the way your customers want to engage with your business."
        image="/era-10.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="BETTER CUSTOMER JOURNEYS"
        title="Turn every interaction into a smoother customer experience."
        description="We build customer-facing platforms that bring support, self-service, account management, communication, payments, and personalized experiences into one connected journey. Customers get what they need faster while your team gains better visibility into every interaction."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="9"
              cy="8"
              r="3"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M4 19C4.8 15.8 6.6 14 9 14C11.4 14 13.2 15.8 14 19"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M15.5 7.5H20.5V12.5H18L16 14V12.5H15.5V7.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for teams that want customers to stay, engage, and come back."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Customer service teams",
            description:
              "Give customers faster support, clearer communication, and easier access to the information they need.",
          },
          {
            number: "02",
            title: "Sales teams",
            description:
              "Create smoother lead and customer journeys with connected touchpoints, personalized experiences, and better visibility.",
          },
          {
            number: "03",
            title: "Product teams",
            description:
              "Build intuitive customer portals, self-service tools, onboarding experiences, and account management platforms.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Deliver a consistent customer experience across more users, channels, services, and digital touchpoints as you scale.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Customer experiences built around real journeys, not assumptions."
        description="We understand how your customers discover, use, and interact with your business, then design connected digital experiences that remove friction and make every step easier."
        cards={[
          {
            title: "Map the customer journey",
            description:
              "We identify your customer touchpoints, common frustrations, support needs, and the moments that have the biggest impact on the experience.",
          },
          {
            title: "Design connected experiences",
            description:
              "We bring customer data, communication, self-service, payments, support, and account tools into one seamless experience.",
          },
          {
            title: "Measure & improve",
            description:
              "We use customer activity, feedback, engagement, and performance data to continuously improve the experience over time.",
          },
        ]}
      />
    </div>
  );
}