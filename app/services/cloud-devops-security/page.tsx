import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cloud, DevOps & Security Services",
  description:
    "Cloud, DevOps, and security services for deployments, infrastructure, CI/CD, monitoring, access control, backups, and scalable production systems.",
};

export default function CloudDevopsSecurityPage() {
  return (
    <ServiceDetailPage
      eyebrow="Cloud, DevOps & Security"
      title="Deploy, scale, and secure with confidence."
      description="We set up the infrastructure, deployment pipelines, monitoring, access controls, and security practices your software needs to run reliably in production."
      introTitle="Production should feel boring in the best way."
      introDescription="Shipping software is only useful when it stays available, observable, recoverable, and secure. We build cloud foundations that make deployments repeatable, issues visible, and growth easier to manage."
      audienceTitle="Best for teams that need dependable production systems."
      audienceCards={[
        {
          number: "01",
          title: "Growing products",
          description:
            "Prepare infrastructure for more users, more data, and more frequent releases.",
        },
        {
          number: "02",
          title: "Ops-heavy teams",
          description:
            "Improve reliability for tools that support daily business operations.",
        },
        {
          number: "03",
          title: "Security-focused teams",
          description:
            "Add better access control, secret handling, backups, and deployment discipline.",
        },
        {
          number: "04",
          title: "Teams with fragile deploys",
          description:
            "Replace manual releases and unclear failures with automated, visible pipelines.",
        },
      ]}
      deliverables={[
        "Cloud architecture and infrastructure setup",
        "CI/CD pipelines and release workflows",
        "Monitoring, logging, alerts, and uptime checks",
        "Role-based access and secrets management",
        "Backup, rollback, and recovery planning",
        "Security review and production hardening",
      ]}
      processTitle="A cleaner path from code to reliable production."
      processDescription="We make deployment and operations predictable, then add the controls your team needs to move quickly without avoidable risk."
      processCards={[
        {
          title: "Audit the current setup",
          description:
            "We review hosting, deploys, access, logs, secrets, backups, and failure points.",
        },
        {
          title: "Build the foundation",
          description:
            "We configure cloud services, pipelines, environments, monitoring, and security controls.",
        },
        {
          title: "Document and hand over",
          description:
            "Your team gets clear runbooks, ownership, and confidence to keep shipping.",
        },
      ]}
    />
  );
}
