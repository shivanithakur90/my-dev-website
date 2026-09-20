import type { Metadata } from "next";

import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import CustomApplicationCoverageSection from "@/components/common/CustomApplicationCoverageSection";
import EmbeddingBenefitsSection from "@/components/common/EmbeddingBenefitsSection";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import AudienceSection from "@/components/common/AudienceSection";
import BuiltWithOnSection from "@/components/common/BuiltWithOnSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";

export const metadata: Metadata = {
  title: "Cloud, DevOps & Security Services",
  description:
    "Cloud, DevOps, and security services for deployments, infrastructure, CI/CD, monitoring, access control, backups, and scalable production systems.",
};

/* =========================================================
   COVERAGE ICONS
========================================================= */

function CloudIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 29H29C33.4 29 36 26.4 36 22.5C36 18.8 33.3 16 29.8 15.6C28.6 11.2 25.1 8 20.5 8C15.8 8 12 11.4 11.1 15.9C7 16.3 4 19.1 4 23C4 26.7 6.8 29 11 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeploymentIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="20"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="30"
        cy="10"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="30"
        cy="30"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M14 18L26 12M14 22L26 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="7"
        width="30"
        height="23"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M10 22L15 17L20 21L26 13L31 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15 34H25M20 30V34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 5L32 10V18C32 26 27.2 32.2 20 35C12.8 32.2 8 26 8 18V10L20 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M14 20L18 24L26 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="9"
        y="5"
        width="22"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M14 13H26M14 19H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M15 27L18 30L25 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccessControlIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="17"
        width="24"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M13 17V12C13 8.1 16.1 5 20 5C23.9 5 27 8.1 27 12V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="20"
        cy="25"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M20 27.5V31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   SECURITY BENEFIT ICONS
========================================================= */

/* On everything we build */
function BuiltInSecurityIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L20 6.5V11.5C20 16.6 16.8 20.7 12 22C7.2 20.7 4 16.6 4 11.5V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12L11 14.5L15.8 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* On systems you already have */
function ExistingSystemIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 21H16M12 17V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="16.5"
        cy="10.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M16.5 6.5V8M16.5 13V14.5M12.5 10.5H14M19 10.5H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Your data stays yours */
function DataOwnershipIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="10"
        cy="6"
        rx="6"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 6V12C4 13.7 6.7 15 10 15C11 15 11.9 14.9 12.7 14.6"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 12V17C4 18.7 6.7 20 10 20"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="13"
        y="13"
        width="8"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M15 13V11.5C15 10.1 15.9 9 17 9C18.1 9 19 10.1 19 11.5V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   HOW WE DELIVER ICONS
========================================================= */

/* Assess */
function AssessIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="3"
        width="12"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 7H12.5M8 10.5H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="16.5"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M19 18.5L21 20.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Prioritize */
function PrioritizeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 6H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 12H17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 18H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M3.5 6L4.5 7L6.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 12L4.5 13L6.5 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 18L4.5 19L6.5 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Implement */
function ImplementIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 3V6M12 18V21M3 12H6M18 12H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M5.6 5.6L7.7 7.7M16.3 16.3L18.4 18.4M18.4 5.6L16.3 7.7M7.7 16.3L5.6 18.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Monitor & Maintain */
function MonitorMaintainIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M6 13L9 10L12 13L16 8L19 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 21H15M12 18V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   COVERAGE DATA
========================================================= */

const productEngineeringCoverageItems = [
  {
    title: "Cloud infrastructure",
    description:
      "Set up, manage, and right-size your cloud — built to scale with your usage, not over-provisioned.",
    href: "/services/product-engineering",
    icon: <CloudIcon />,
  },
  {
    title: "CI/CD & deployment automation",
    description:
      "Reliable, repeatable pipelines so releases are fast, safe, and reversible.",
    href: "/services/product-engineering",
    icon: <DeploymentIcon />,
  },
  {
    title: "Monitoring & reliability",
    description:
      "Logging, alerting, and uptime monitoring so issues surface before users feel them.",
    href: "/services/product-engineering",
    icon: <MonitoringIcon />,
  },
  {
    title: "Security assessment & hardening",
    description:
      "Review and harden your applications and infrastructure against real-world threats.",
    href: "/services/product-engineering",
    icon: <SecurityIcon />,
  },
  {
    title: "Compliance readiness",
    description:
      "Prepare your systems and data handling for SOC 2, GDPR, and other frameworks your buyers require.",
    href: "/services/product-engineering",
    icon: <ComplianceIcon />,
  },
  {
    title: "Data & access controls",
    description:
      "Role-based access, encryption, and audit trails — so the right people see the right data, and only that.",
    href: "/services/product-engineering",
    icon: <AccessControlIcon />,
  },
];




const comparisonColumns = [
  {
    key: "feature",
    label: "Features",
    widthClassName: "w-[28%]",
  },
  {
    key: "openxcell",
    label: "OpenXcell FDE",
    highlighted: true,
  },
  {
    key: "traditional",
    label: "Traditional Dev Shop",
  },
  {
    key: "diy",
    label: "Pure Security Consultancy",
  },
];

const comparisonRows = [
  {
    feature: "Dedicated DevOps & security staff",
    openxcell: "Yes",
    traditional: "Rarely",
    diy: "Yes",
  },
  {
    feature: "Understands the app being secured",
    openxcell: "We often built it",
    traditional: "-",
    diy: "Outside-in only",
  },
  {
    feature: "Works on systems we didn't build",
    openxcell: "Yes",
    traditional: "No",
    diy: "Yes",
  },
  {
    feature: "Runs in your environment",
    openxcell: "Yes — your data stays",
    traditional: "Varies",
    diy: "Varies",
  },
  {
    feature: "Part of one delivery team",
    openxcell: "Yes — end to end",
    traditional: "Build only",
    diy: "Assessment only",
  },
];




const customApplicationFaqs = [
  {
    question: "Do you only secure software you built?",
    answer:
      "No. Our DevOps engineers and security specialists work on systems we didn't build too — assessing, hardening, and setting up the infrastructure and monitoring they're missing.",
  },
  {
    question: "Is secure deployment an extra cost on your other services?",
    answer:
      "No. Everything we build is deployed securely and engineered to scale as standard — it's the default, not an upsell. This service is for deeper or standalone cloud and security work, including on systems we didn't build.",
  },
  {
    question: "Can you help us get SOC 2 ready?",
    answer:
      "Yes. We prepare your systems, infrastructure, and data-handling practices for SOC 2 and similar frameworks. We get you ready for audit; the certification itself is issued by an accredited auditor.",
  },
  {
    question: "Where does our data and infrastructure live?",
    answer:
      "In your cloud accounts and environment. We work inside your infrastructure — your data and customer information never leave your control.",
  },
  {
    question: "Will you sign a DPA / NDA?",
    answer:
      "Yes. We sign the data-processing and confidentiality agreements your compliance and legal teams require.",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function CloudDevopsSecurityPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHeroBanner
        eyebrow="CLOUD, DEVOPS & SECURITY"
        title="Deploy, scale, and secure your software."
        description="Production-grade cloud infrastructure, deployment automation, and security built in — for the software we build and the systems you already run. So your apps stay fast, available, and safe as you grow."
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />

      {/* =====================================================
          PROBLEM
      ===================================================== */}
      <ProblemSection
        eyebrow="THE PROBLEM"
        title="Shipping is one thing. Running it safely at scale is another."
        description="Software that works in a demo can buckle under real load, leak data through a misconfiguration, or fail a security review right when a deal depends on it. Most teams don't have dedicated DevOps and security people — so these risks quietly accumulate until they don't."
        image="/shiping-is.avif"
        imageAlt="Cloud, DevOps and security infrastructure illustration"
      />

      {/* =====================================================
          WHAT CLOUD DEVOPS SECURITY COVERS
      ===================================================== */}
      <CustomApplicationCoverageSection
        eyebrow="WHAT'S INCLUDED"
        title="What Cloud, DevOps & Security covers."
        items={productEngineeringCoverageItems}
        ctaLabel="Explore service"
      />

      {/* =====================================================
          SECURITY IS DEFAULT
          ICONS CHANGED ACCORDING TO CONTENT
      ===================================================== */}
      <EmbeddingBenefitsSection
        eyebrow="Trust & compliance"
        title="Built to meet your compliance bar."
        cards={[
          {
            title: "Your environment",
            icon: <DataOwnershipIcon />,
            description:
              "We build and run inside your cloud accounts. Your data and customer information never leave your control.",
          },
          {
            title: "Scoped & audited",
            icon: <BuiltInSecurityIcon />,
            description:
              "Role-based access, encryption, and audit trails throughout — so the right people see the right data, and every action is logged.",
          },
          {
            title: "Readiness, not theater",
            icon: <ComplianceIcon />,
            description:
              "Readiness, not theater SOC 2-minded delivery and the DPAs/NDAs your compliance team requires. We prepare you for audit; certification is issued by an accredited auditor.",
          },
        ]}
      />

      {/* =====================================================
          ENGAGEMENTS
      ===================================================== */}
      <WhatWeBuildSection
        eyebrow="WHAT WE BUILD"
        title="Engagements we deliver."
        items={[
          "Cloud setup & migration",
          "CI/CD pipelines",
          "Security assessment & hardening",
          "Monitoring & alerting",
          "SOC 2 readiness",
          "Infrastructure-as-code",
          "Access & identity controls",
          "Managed infrastructure",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />

      {/* =====================================================
          HOW WE DELIVER
          ICONS CHANGED ACCORDING TO EACH STEP
      ===================================================== */}
      <HowWeDeliverSection
        eyebrow="HOW WE DELIVER"
        title="From risk to resilient, in a clear sequence."
        image="/from-idea.avif"
        cards={[
          {
            title: "Assess",
            icon: <AssessIcon />,
            description:
              "We review your infrastructure, deployment, and security posture, and document the gaps and risks.",
          },
          {
            title: "Prioritize",
            icon: <PrioritizeIcon />,
            description:
              "A clear, ranked plan — what to fix first, what scales, and what protects you in a review.",
          },
          {
            title: "Implement",
            icon: <ImplementIcon />,
            description:
              "Infrastructure, pipelines, monitoring, and hardening — built as code, in your environment.",
          },
          {
            title: "Monitor & Maintain",
            icon: <MonitorMaintainIcon />,
            description:
              "Ongoing monitoring and upkeep, or a clean handover to your team. Your choice.",
          },
        ]}
      />
      <ComparisonSection
        eyebrow="WHY US"
        eyebrowIcon="⑂"
        title="Why OpenXcell for custom app development."
        description="An AI-native, forward-deployed, results-driven approach — versus the three other options most mid-market companies consider."
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="pb-[50px] sm:pb-[70px] lg:pb-[80px]"
      />
      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="OUR SECURITY POSTURE"
        title="How we work, safely."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Your environment",
            description:
              "We build and run in your cloud accounts.",
          },
          {
            number: "02",
            title: "Least privilege",
            description:
              "Access scoped to exactly what's needed.",
          },
          {
            number: "03",
            title: "Encrypted & audited",
            description:
              "Data encrypted; actions logged and reviewable.",
          },
          {
            number: "04",
            title: "DPAs & NDAs",
            description:
              "We sign the agreements your compliance needs.",
          },
        ]}
      />
      <BuiltWithOnSection
        eyebrow="BUILT WITH & BUILT ON"
        title="We work across your cloud."
        description="So your people tab-switch between tools, export to spreadsheets, and work around software that doesn’t quite fit."
        paddingClassName="pt-[50px] sm:pt-[50px] lg:pt-[80px]"
        leftGroup={{
          title: "Built with",
          description:
            "Frontier models and the right framework for the job.",
          items: [
            {
              label: "Claude",
              icon: <span className="text-[#df7045]">✳</span>,
            },
            {
              label: "n8n",
              image: "/n8n.svg",
              icon: <span className="text-[#ff4f64]">⌁</span>,
            },
            {
              label: "Open AI",
              image: "/open-ai.svg",
              icon: <span className="text-black">◉</span>,
            },
            {
              label: "RAG/Vector DBs",
              image: "/rag.svg",
              icon: <span>🗄️</span>,
            },
            {
              label: "Custom Agent",
              icon: <span className="text-[#ff5708]">⚙</span>,
            },
          ],
        }}
        rightGroup={{
          title: "Built on",
          description:
            "Connected to where your work and knowledge already live.",
          items: [
            {
              label: "Intercom",
              image: "/itercom.png",
              icon: <span className="text-[#12253f]">▥</span>,
            },
            {
              label: "HubSpot",
              image: "/hubspot.svg",
              icon: <span className="text-[#ff5c35]">⌯</span>,
            },
            {
              label: "Notion",
              image: "/notion.svg",
              icon: <span className="text-black">N</span>,
            },
            {
              label: "Slack",
              image: "/slack.svg",
              icon: <span>✣</span>,
            },
            {
              label: "Your Docs",
              image: "/doc.svg",
              icon: <span className="text-[#4285f4]">▤</span>,
            },
          ],
        }}
        moreLabel="+more"
      />
      <FaqSection
        eyebrow="FAQ"
        title={
          <> Common <br /> Questions. </>
        }
        description="Specific to cloud, DevOps & security."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px] "
      />
      <StackCtaSection
        heading="Need it deployed and secured properly?"
        description="Whether we built it or you did — tell us what needs to scale and staysafe. We'll assess it on a 30-minute call and send a quote within 48hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#f7f7fb"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#171717"
        descriptionColor="#555555" buttonIcon={undefined} />
    </main>
  );
}
