import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "AI & Automation Services",
  description:
    "AI automation services for document workflows, customer operations, internal approvals, reporting, notifications, and SaaS-connected business processes.",
};

export default function AiAutomationPage() {
  return (
    <ServiceDetailPage
      eyebrow="AI & Automation"
      title="AI automation for the workflows slowing you down."
      description="We build automation systems that route work, draft responses, extract data, summarize records, trigger approvals, and connect the tools your team already uses."
      introTitle="Automation that fits your process, not a generic bot."
      introDescription="Useful AI starts with the workflow. We identify where manual steps repeat, where decisions need context, and where your data already lives — then build reliable automations with the right checks, handoffs, and human review points."
      audienceTitle="Best for teams with repeatable work and too many manual steps."
      audienceCards={[
        {
          number: "01",
          title: "Support teams",
          description:
            "Draft replies, summarize cases, classify tickets, and route issues to the right owner.",
        },
        {
          number: "02",
          title: "Operations teams",
          description:
            "Automate intake, approvals, document checks, notifications, and status updates.",
        },
        {
          number: "03",
          title: "Sales teams",
          description:
            "Enrich leads, generate follow-ups, update CRM fields, and surface next actions.",
        },
        {
          number: "04",
          title: "Leadership teams",
          description:
            "Turn scattered activity into summaries, dashboards, alerts, and decision-ready reports.",
        },
      ]}
      deliverables={[
        "Workflow audit and automation roadmap",
        "AI assistants, classifiers, and extraction flows",
        "Human-in-the-loop approval controls",
        "SaaS triggers, webhooks, and scheduled jobs",
        "Dashboards, logs, and failure alerts",
        "Security-minded data handling and documentation",
      ]}
      processTitle="Automated carefully, with humans still in control."
      processDescription="We focus on dependable automation: clear inputs, visible outputs, safe fallbacks, and approvals where judgment matters."
      processCards={[
        {
          title: "Find the repetitive work",
          description:
            "We study the workflow and identify where AI or automation can remove the most effort safely.",
        },
        {
          title: "Build reliable pipelines",
          description:
            "We connect the tools, prompts, rules, queues, and review steps needed for production use.",
        },
        {
          title: "Monitor and refine",
          description:
            "We add visibility, logs, and iteration loops so the automation improves with real usage.",
        },
      ]}
    />
  );
}
