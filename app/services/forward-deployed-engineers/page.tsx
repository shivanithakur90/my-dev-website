import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Forward-Deployed Engineers",
  description:
    "Forward-deployed engineers embedded with your team to understand workflows, build custom software, integrate tools, and ship production systems fast.",
};

export default function ForwardDeployedEngineersPage() {
  return (
    <ServiceDetailPage
      eyebrow="Forward-Deployed Engineers"
      title="Senior engineers embedded with your team."
      description="Get product-minded engineers who work close to your business, understand the actual workflow, and build production software without forcing your team through a slow agency process."
      introTitle="Engineering capacity that sits closer to the problem."
      introDescription="A forward-deployed engineer works with your operators, founders, managers, and existing technical team to translate real business problems into working software. The focus is practical: understand the work, build the system, integrate the stack, and keep momentum."
      audienceTitle="Best for teams that need hands-on execution, not just advice."
      audienceCards={[
        {
          number: "01",
          title: "Lean teams",
          description:
            "Add senior build capacity without hiring a full engineering department.",
        },
        {
          number: "02",
          title: "Founders",
          description:
            "Move from idea, workflow, or customer request to a usable product faster.",
        },
        {
          number: "03",
          title: "Internal ops",
          description:
            "Get an engineer close enough to see the real bottlenecks and fix them properly.",
        },
        {
          number: "04",
          title: "Technical teams",
          description:
            "Bring in focused help for integrations, automation, dashboards, or product backlogs.",
        },
      ]}
      deliverables={[
        "Embedded discovery and workflow mapping",
        "Feature planning and technical scoping",
        "Hands-on product and application development",
        "Integrations across your existing stack",
        "Weekly shipping cadence and progress reviews",
        "Documentation and knowledge transfer",
      ]}
      processTitle="Your engineer works with the business, then ships."
      processDescription="The engagement is built around short feedback loops, clear priorities, and visible progress so software reaches users quickly."
      processCards={[
        {
          title: "Embed and understand",
          description:
            "We learn the workflow from the people doing the work and define the first useful build.",
        },
        {
          title: "Ship in focused cycles",
          description:
            "Features are built, reviewed, and refined in short cycles with the team that will use them.",
        },
        {
          title: "Own the handoff",
          description:
            "You get documented systems, clear ownership, and a path for continued improvement.",
        },
      ]}
    />
  );
}
