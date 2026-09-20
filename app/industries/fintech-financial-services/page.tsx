import type { Metadata } from "next";

import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import FeatureHelpSection from "@/components/common/FeatureHelpSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IndustryServicesSection from "@/components/common/IndustryServicesSection";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";
import EmbeddingBenefitsSection from "@/components/common/EmbeddingBenefitsSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";

export const metadata: Metadata = {
  title: "Fintech & Financial Services",
  description:
    "Custom fintech software for payments, lending, KYC, fraud operations, support workflows, dashboards, and compliance reporting.",
};

/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Do you understand financial compliance?",
    answer:
      "Yes. We build KYC/AML-aware workflows, integrate with tools like Sumsub and Persona, and keep data in your environment with audit trails. Our security practice supports SOC 2 readiness. We speak to your compliance bar in scoping, not after.",
  },
  {
    question: "Can you work with our payment and KYC providers?",
    answer:
      "Yes — Stripe, Checkout.com, Sumsub, Persona, and more. We build on top of and integrate the providers you already use rather than replacing them.",
  },
  {
    question: "Is our customer and transaction data safe?",
    answer:
      "It stays in your accounts and infrastructure. We build inside your environment; your data doesn't leave your control, and access is scoped and logged.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Most builds show working software in week one, with full delivery in 4–8 weeks. Speed's support cockpit had a working build in five days.",
  },
  {
    question: "Do we own what you build?",
    answer: "Fully — in your repos and accounts, with no lock-in.",
  },
];

/* =========================================================
   EMBEDDING BENEFIT ICONS
========================================================= */

/* Your environment */
function EnvironmentIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 18.5H17.2C19.3 18.5 21 16.9 21 14.8C21 12.9 19.6 11.3 17.8 11.1C17.2 8 14.8 6 11.8 6C9.2 6 7 7.6 6.2 10C4.3 10.3 3 11.8 3 13.7C3 16.4 4.9 18.5 7.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.5 14.2L11.3 16L15 12.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Scoped & audited */
function ScopedAuditedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="5"
        width="14"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 5V3.5M15 5V3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8.5 10H15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8.5 14H11.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M13.5 16L15 17.5L18.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Readiness, not theater */
function ReadinessIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3H14L19 8V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V5C5 3.9 5.9 3 7 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M14 3V8H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 13L10.5 15L15.5 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 18H15"
        stroke="currentColor"
        strokeWidth="1.7"
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
   PAGE
========================================================= */

export default function FintechFinancialServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHeroBanner
        eyebrow="Fintech & Financial Services"
        title="Software for fintech, built for you."
        description="Custom apps, AI automation, and integrations built for payments, lending, and financial platforms — on top of the SaaS and compliance tools you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/erp-4.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* =====================================================
          PROBLEM
      ===================================================== */}

      <ProblemSection
        eyebrow="THE PROBLEM"
        title="Financial products move fast. Your internal tools don’t."
        description="Support teams tab-switch between six systems to answer one customer. KYC drop-offs pile up. Fraud signals live in one tool, customer data in another, and compliance reporting is a manual scramble. Off-the-shelf software isn't built for how a modern financial platform actually operates — and hiring an engineering team to fix it is slow and expensive."
        image="/fasts-products.png"
        imageAlt="Financial internal tools illustration"
      />

      {/* =====================================================
          SECURITY IS DEFAULT
      ===================================================== */}

      <EmbeddingBenefitsSection
        eyebrow="WHAT'S INCLUDED"
        title="Security isn’t an add-on. It’s the default."
        cards={[
          {
            title: "Your environment",
            icon: <EnvironmentIcon />,
            description:
              "We build and run inside your cloud accounts. Your data and customer information never leave your control.",
          },
          {
            title: "Scoped & audited",
            icon: <ScopedAuditedIcon />,
            description:
              "Role-based access, encryption, and audit trails throughout — so the right people see the right data, and every action is logged.",
          },
          {
            title: "Readiness, not theater",
            icon: <ReadinessIcon />,
            description:
              "Readiness, not theater SOC 2-minded delivery and the DPAs/NDAs your compliance team requires. We prepare you for audit; certification is issued by an accredited auditor.",
          },
        ]}
      />

      {/* =====================================================
                HOW WE DELIVER
                ICONS CHANGED ACCORDING TO EACH STEP
            ===================================================== */}
      <HowWeDeliverSection
        eyebrow="How we help"
        title="What we build for fintech teams."
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

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <IndustryServicesSection
        eyebrow="SERVICES"
        title="Services that fit this industry."
        cards={[
          {
            title: "AI & Intelligent Automation",
            image: "/cloud-dev.avif",
            href: "/services/ai-automation",
            ctaLabel: "Explore",
          },
          {
            title: "Systems Integration & API Development",
            image: "/systems-inte.avif",
            href: "/services/api-development",
            ctaLabel: "Explore",
          },
          {
            title: "Cloud, DevOps & Security",
            image: "/cloud-dev.avif",
            href: "/services/cloud-devops-security",
            ctaLabel: "Explore",
          },
        ]}
      />

      {/* =====================================================
          HOW WE BUILD IT
      ===================================================== */}

      <BuildProcessSection
        eyebrow="Trust & compliance"
        title="Built to meet your compliance bar."
        description="KYC/AML-aware · secure by default · your data stays in your environment. We discuss your specific requirements during scoping — and sign the agreements your team needs."
        cards={[
          {
            title: "Built around your content workflow",
            description:
              "Articles, insights, categories, portfolios, case studies, and drafts are organized around how your team already creates and manages content.",
          },
          {
            title: "Everything connected in one workspace",
            description:
              "Content updates, team activity, publishing actions, and editorial resources stay connected so your team always works from the same source of truth.",
          },
          {
            title: "Scalable, production-ready & owned",
            description:
              "A secure content management experience designed to grow with your team, your content library, and your publishing needs.",
          },
        ]}
      />


      {/* =====================================================
          FAQ
      ===================================================== */}

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Common <br /> Questions.
          </>
        }
        description="What fintech teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <StackCtaSection
        heading="Building a financial product?"
        description="Tell us where your team is losing time or where your tools don't connect. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#040d20"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#fff"
        descriptionColor="#fff"
        buttonIcon={undefined}
      />
    </main>
  );
}