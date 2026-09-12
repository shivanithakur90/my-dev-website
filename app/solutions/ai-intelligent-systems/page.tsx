import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function AiIntelligentSystemsPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="AI & INTELLIGENT SYSTEMS"
        title="Build smarter systems that think, learn, and work with your team."
        description="Use AI to automate decisions, understand data, improve customer experiences, and handle repetitive work — with intelligent systems built around your real business needs."
        image="/era-7.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="INTELLIGENT OPERATIONS"
        title="Turn everyday workflows into intelligent business systems."
        description="We build AI-powered platforms that help your team analyze information, automate decisions, answer questions, process content, and complete tasks faster. Instead of adding AI for the sake of it, we integrate intelligence where it creates real value across your business."
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

            <circle
              cx="5"
              cy="6"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="19"
              cy="6"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="5"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="19"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M7 7.2L9.7 9.8M17 7.2L14.3 9.8M7 16.8L9.7 14.2M17 16.8L14.3 14.2"
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
        title="Built for teams ready to put AI to practical use."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Use intelligent systems to process information, prioritize work, automate decisions, and reduce repetitive operational tasks.",
          },
          {
            number: "02",
            title: "Customer service teams",
            description:
              "Build AI assistants that answer questions, organize requests, summarize conversations, and help customers faster.",
          },
          {
            number: "03",
            title: "Sales & marketing teams",
            description:
              "Use AI to qualify leads, generate insights, personalize outreach, analyze customer data, and speed up everyday work.",
          },
          {
            number: "04",
            title: "Product teams",
            description:
              "Add intelligent features such as recommendations, natural language search, AI assistants, and automated insights to your products.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="AI systems designed around real business problems."
        description="We start with the problem you want to solve, identify where AI can make a measurable difference, and build an intelligent solution that fits your existing workflows, systems, and data."
        cards={[
          {
            title: "Find the right AI opportunities",
            description:
              "We identify repetitive tasks, decision points, data-heavy processes, and customer interactions where AI can create meaningful value.",
          },
          {
            title: "Build and connect intelligent workflows",
            description:
              "We combine AI models, business logic, APIs, data sources, and existing tools into one connected intelligent system.",
          },
          {
            title: "Test, monitor & improve",
            description:
              "We validate outputs, monitor system performance, improve accuracy, and make sure the solution remains reliable as your business grows.",
          },
        ]}
      />
    </div>
  );
}