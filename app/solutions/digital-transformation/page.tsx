import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function SolutionsPage() {
  return (
    <div>
      <PageHeroBanner
        eyebrow="DIGITAL TRANSFORMATION"
        title="Transform the way your business works."
        description="Modernize outdated processes, connect disconnected systems, and build digital experiences that help your team move faster, work smarter, and scale with confidence."
        image="/era-5.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      <IntroContentSection
        eyebrow="SMARTER DIGITAL OPERATIONS"
        title="Turn complex processes into connected digital experiences."
        description="We help businesses replace fragmented tools, manual workflows, and outdated systems with modern digital platforms built around the way their teams actually work. From internal dashboards and automation to customer-facing portals and integrated business systems, everything works together in one scalable ecosystem."
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
        title="Built for businesses ready to work smarter and scale faster."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Growing businesses",
            description:
              "Replace manual processes and disconnected tools with scalable digital systems built for growth.",
          },
          {
            number: "02",
            title: "Operations teams",
            description:
              "Automate repetitive work, connect workflows, and give teams one clear view of daily operations.",
          },
          {
            number: "03",
            title: "Customer-focused teams",
            description:
              "Create faster, simpler digital experiences through portals, dashboards, and self-service platforms.",
          },
          {
            number: "04",
            title: "Enterprise teams",
            description:
              "Modernize legacy systems and connect business-critical tools without disrupting existing operations.",
          },
        ]}
      />

      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Transformation built around your business, not around technology."
        description="We start with how your business works today, identify the processes slowing your team down, and build the right digital systems around them. The result is a connected, scalable solution that improves efficiency without adding unnecessary complexity."
        cards={[
          {
            title: "Understand your current workflows",
            description:
              "We map your processes, tools, users, and pain points to understand where technology can create the biggest impact.",
          },
          {
            title: "Connect and automate the right systems",
            description:
              "We bring platforms, data, workflows, and business tools together so information moves smoothly across your organization.",
          },
          {
            title: "Build for long-term growth",
            description:
              "Your solution is designed to be secure, scalable, maintainable, and flexible enough to evolve as your business grows.",
          },
        ]}
      />
    </div>
  );
}