import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function BusinessAutomationPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="BUSINESS AUTOMATION"
        title="Automate the work that slows your business down."
        description="Connect workflows, automate repetitive tasks, manage approvals, and keep your operations moving — all from one intelligent system built around the way your team works."
        image="/era-6.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="AUTOMATED OPERATIONS"
        title="Less manual work. More time for work that matters."
        description="We build business automation systems that bring your workflows, tasks, approvals, clients, and operational data into one connected workspace. Your team spends less time moving information between tools and more time focused on growing the business."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="3"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M12 3V6M12 18V21M3 12H6M18 12H21"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M18.4 5.6L16.2 7.8M7.8 16.2L5.6 18.4"
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
        title="Built for teams tired of repetitive manual work."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Automate recurring tasks, approvals, assignments, and internal processes from one connected system.",
          },
          {
            number: "02",
            title: "Sales teams",
            description:
              "Automatically capture leads, update records, assign opportunities, and trigger follow-ups without manual admin work.",
          },
          {
            number: "03",
            title: "Service teams",
            description:
              "Route incoming requests, assign tasks, update customers, and keep every service workflow moving automatically.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Scale your operations without adding more spreadsheets, disconnected tools, or repetitive processes.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Automation built around the way your business actually works."
        description="We start by understanding your existing workflows, identify where your team is losing time, and automate the right parts without creating unnecessary complexity. The result is a reliable system that connects your tools and keeps your operations moving."
        cards={[
          {
            title: "Map your existing workflows",
            description:
              "We identify repetitive steps, approvals, handoffs, disconnected tools, and operational bottlenecks across your business.",
          },
          {
            title: "Connect and automate",
            description:
              "We connect your systems and automate tasks, notifications, assignments, data updates, and business rules.",
          },
          {
            title: "Monitor, improve & scale",
            description:
              "Dashboards give your team real-time visibility into every workflow so you can measure performance and continuously improve.",
          },
        ]}
      />
    </div>
  );
}