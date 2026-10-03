import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import SolutionsTabs, { type SolutionTab } from "@/components/common/SolutionsTabs";
import WorkShowcaseSection from "@/components/our-work/AllWork";
import ProblemSection from "@/components/common/ProblemSection";
import EmbeddingBenefitsSection from "@/components/common/EmbeddingBenefitsSection";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Custom healthcare software for patient workflows, provider operations, secure portals, reporting, automation, and integrations.",
};


/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Is what you build HIPAA-aware?",
    answer:
      "We build with privacy and access controls appropriate to healthcare — encryption, role-based access, audit trails, and data kept in your environment. We'll discuss your specific compliance requirements during scoping and sign the agreements your team needs.",
  },
  {
    question: "Can you connect to our EHR or existing systems?",
    answer:
      "Yes, where they expose data through an API or integration. We build on top of your existing systems rather than replacing them.",
  },
  {
    question: "Where does patient data live?",
    answer:
      "In your accounts and infrastructure. We build inside your environment; data doesn't leave your control, and access is scoped and logged.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Working software in week one, full delivery typically in 4–8 weeks depending on scope and compliance requirements.",
  },
  {
    question: "Do we own it?",
    answer: "Fully — in your accounts, with no lock-in.",
  },
];



/* =========================================================
   HOW WE DELIVER ICONS
========================================================= */

function AssessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11L11 13L15 9"
        stroke="#FF5200"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z"
        stroke="#FF5200"
        strokeWidth="1.8"
      />

      <path
        d="M9 4.5V3.5C9 2.94772 9.44772 2.5 10 2.5H14C14.5523 2.5 15 2.94772 15 3.5V4.5"
        stroke="#FF5200"
        strokeWidth="1.8"
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
      className="text-[#FF5200]"
    >
      <path
        d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 9h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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
      className="text-[#FF6846]"
    >
      <rect
        x="5"
        y="4.5"
        width="14"
        height="16"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M9 4.5V3.7C9 3.04 9.54 2.5 10.2 2.5H13.8C14.46 2.5 15 3.04 15 3.7V4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8.5 9H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M8.5 12.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M8.5 16H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
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
      className="text-[#FF6846]"
    >
      <path
        d="M12 3.5A8.5 8.5 0 1 1 4.6 16.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M10 4V11L4.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4.5 14A7.6 7.6 0 0 1 10 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}


const manufacturingTabs: SolutionTab[] = [
  {
    id: "inventory",
    label: "Content Management",
    image: "/erp-4.png",
    Icon: "inventory",
  },
  {
    id: "vendor",
    label: "Network Marketing",
    image: "/erp-7.png",
    Icon: "vendor",
  },
  {
    id: "erp",
    label: "Kitchen Operations",
    image: "/erp-6.png",
    Icon: "erp",
  },
  {
    id: "project",
    label: "Reservations",
    image: "/erp-5.png",
    Icon: "project",
  },
];




const caseStudies = [
  {
    title: "Smart Restaurant",
    description:
      "Your team gets a faster way to serve customers while managers get real-time visibility into daily operations.",
    image: "/erp-5.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "POS System",
      "Reservations",
      "Dashboard",
    ],
  },

  {
    title: "MealOps Vendor Invoice Management Platform",
    description:
      "A streamlined kitchen operations platform for managing vendor invoices, purchase orders, inventory records, and supplier approvals from one centralized workspace.",
    image: "/erp-6.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "Kitchen Operations",
      "FoodTech",
    ],
  },
];




export default function HealthcarePage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Healthcare"
        title="Software for healthcare operations, built for you."
        description="Patient intake, provider portals, scheduling, and operational workflows built for healthcare and practice teams — on top of the tools you already use, with privacy built in. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/ERP-1.png"
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
        title="Care is complex. The admin around it shouldn’t be."
        description="Patient intake on paper or clunky forms. Scheduling across disconnected systems. Provider and referral information scattered. Staff spending time on admin that software should handle — while privacy requirements make teams wary of building anything new. Off-the-shelf tools rarely fit the operational reality of a practice or health organization."
        image="/manufacturing-distribution.webp"
        imageAlt="Financial internal tools illustration"
      />

      {/* =====================================================
                            HOW WE DELIVER
                            ICONS CHANGED ACCORDING TO EACH STEP
                        ===================================================== */}
      <HowWeDeliverSection
        eyebrow="How we help"
        title="What we build for healthcare teams."
        image=""
        cards={[
          {
            title: "Smoother intake",
            icon: <AssessIcon />,
            description:
              "Digital patient intake with intelligent triage and routing to the right provider.",
          },
          {
            title: "Connected scheduling",
            icon: <PrioritizeIcon />,
            description:
              "Scheduling and coordination that works across your existing systems.",
          },
          {
            title: "Provider & patient portals",
            icon: <ImplementIcon />,
            description:
              "Secure portals for patients and providers to access what's relevant to them.",
          },
          {
            title: "Less admin burden",
            icon: <MonitorMaintainIcon />,
            description:
              "Operational workflows automated, with privacy and access controls built in.",
          },
        ]}
      />




      <SolutionsTabs
        heading="Solutions for healthcare."
        description="The apps we build most often for teams like yours."
        tabs={manufacturingTabs}
        paddingClassName="py-[0px] max-md:py-[0px]"
      />

      <EmbeddingBenefitsSection
        eyebrow="WHAT'S INCLUDED"
        title="Built to meet your compliance bar."
        cards={[
          {
            title: "Your environment",
            description:
              "We build and run inside your cloud accounts. Your data and customer information never leave your control.",
          },
          {
            title: "Scoped & audited",
            description:
              "Role-based access, encryption, and audit trails throughout — so the right people see the right data, and every action is logged.",
          },
          {
            title: "Readiness, not theater",
            description:
              "Readiness, not theater SOC 2-minded delivery and the DPAs/NDAs your compliance team requires. We prepare you for audit; certification is issued by an accredited auditor.",
          },
        ]}
      />


      {/* =====================================================
                      HOW WE BUILD IT
                  ===================================================== */}

      <BuildProcessSection
        paddingClassName="pb-[50px] sm:pb-[50px] md:pb-[70px] lg:pb-[80px]"
        eyebrow="How we build it"
        title="Built for you, on your stack."
        description="We don't hand you a tool to configure. A forward-deployed engineer builds around your workflow, connects your systems, deploys it securely, and hands it over."
        cards={[
          {
            title: "We build it for you",
            description:
              "A senior, AI-augmented engineer embeds with your team, scopes the work, and ships — you don't touch a builder."
          },
          {
            title: "On your existing tools",
            description:
              "Built on top of the systems you already run, connected live — not a replacement you have to migrate to.",
          },
          {
            title: "Production-grade & owned",
            description:
              "Secure, scalable, deployed in your accounts. You own it fully, with no lock-in.",
          },
        ]}
      />


      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description=""
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="pt-0! pb-0!"
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
        description="What healthcare teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />


      {/* =====================================================
                      CTA
                  ===================================================== */}

      <StackCtaSection
        heading="Running a healthcare operation?"
        description="Tell us where admin is slowing your team down. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
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
