import AudienceSection from "@/components/common/AudienceSection";
import EmbeddingBenefitsSection from "@/components/common/EmbeddingBenefitsSection";
import FdeComparisonSection from "@/components/common/FdeComparisonSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Forward-Deployed Engineers",
  description:
    "Forward-deployed engineers embedded with your team to understand workflows, build custom software, integrate tools, and ship production systems fast.",
};

function BusinessContextIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4.5"
        y="7"
        width="15"
        height="12.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 7V5.5C8 4.4 8.9 3.5 10 3.5H14C15.1 3.5 16 4.4 16 5.5V7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 12H16M8 15.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlexibleCapacityIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 17L9.5 12.5L12.5 15.5L19 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8H19V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FirmBackedIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5L19 7V12C19 16.2 16.3 19 12 20.5C7.7 19 5 16.2 5 12V7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12L11 14.2L15.6 9.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



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
    label: "Staff- Aug Contractor",
  },
  {
    key: "diy",
    label: "Full Time Hire",
  },
];

const comparisonRows = [
  {
    feature: "Time to productive",
    openxcell: "Days",
    traditional: "Weeks (with mgmt)",
    diy: "3–6 months to hire",
  },
  {
    feature: "Unit of work",
    openxcell: "Outcomes",
    traditional: "Tickets",
    diy: "Outcomes",
  },
  {
    feature: "Breadth",
    openxcell: "Whole-solution",
    traditional: "Single stack",
    diy: "Single role",
  },
  {
    feature: "Built on your SaaS",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to tool",
  },
];



const caseStudies = [
  {
    title: "ContentFlow Studio",
    description:
      "A centralized editorial workspace for managing articles, insights, portfolios, case studies, drafts, and team activity.",
    image: "/erp-4.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "SaaS",
      "Content Management",
      "Dashboard",
    ],
  },

  {
    title: "Smart MLM & Commission Management Platform",
    description:
      "A centralized platform for managing members, sales, payouts, commissions, affiliate networks, and business performance from one dashboard.",
    image: "/erp-7.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "Network Marketing",
      "Dashboard",
      "Affiliate Management",
    ],
  },
];



const customApplicationFaqs = [
  {
    question: "How is an FDE different from a contractor?",
    answer:
      "A contractor works the tickets you write, in one stack, and needs managing. An FDE understands your business, finds the work, picks the right tools, ships whole solutions, and owns the outcome — backed by our methodology and AI-augmented so one person does what a team used to. You're buying capability, not a seat.",
  },
  {
    question: "Can we hire a whole team of them?",
    answer:
      "You can add multiple FDEs, but our model is deliberately quality-over-quantity — senior, AI-augmented engineers, not a bench of junior bodies. For most teams, one or two FDEs replace what used to take a larger group.",
  },
  {
    question: "What stacks and tools do they work in?",
    answer:
      "FDEs are fluent across the modern app-building stack — Softr, Lovable, Retool, Supabase, Cursor, custom code — and choose the right one per build, rather than being locked to a single technology.",
  },
  {
    question: "How do we work with them day to day?",
    answer:
      "They embed: your Slack, your standups, your sprints. You assign work the way you would to a team member, and they ship continuously.",
  },
  {
    question: "What's the commitment?",
    answer:
      "3, 6, or 12-month engagements, fractional or full-time, on a monthly retainer. You can scale capacity up or down as your needs change.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Embedded engagements run on a monthly retainer at a fixed FDE rate, so the cost is predictable and shifting priorities don’t trigger a new quote — you scale capacity up or down instead. Bounded, fully-specified builds work differently: a fixed price, quoted within 48 hours of the scoping call.",
  },
];


export default function ForwardDeployedEngineersPage() {
  return (
    <div>
      <PageHeroBanner
        eyebrow="FORWARD-DEPLOYED ENGINEERS"
        title="Embed a forward-deployed engineer with your team."
        description="Not a contractor by the stack. Not a ticket-taker. A senior, AI-augmented builder who learns your business, picks the right tools, ships whole solutions, and is accountable for the outcome. One FDE does what used to take a team."
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />
      <ProblemSection
        eyebrow="THE PROBLEM"
        title="You have continuous build needs. Hiring is slow. Contractors are a gamble."
        description="Full-time engineers take months to hire and are hard to justify for variable work. Staff-aug contractors need managing, work in narrow stacks, and produce tickets, not outcomes. You want capacity — without the overhead of either."
        image="/you-have.avif"
        imageAlt="Financial internal tools illustration"
      />
      <FdeComparisonSection
        eyebrow="WHAT AN FDE IS"
        title="What is a forward-deployed engineer?"
        description="A forward-deployed engineer is a senior engineer who embeds in your team and owns an outcome, instead of working tickets from a spec. Palantir invented the model because its customers couldn't fully explain what they needed — someone had to sit in the room and build. The unit of work is a solved problem, not an hour."
        secondaryDescription="OpenAI, Ramp, and other frontier AI companies now run the same play. Until recently you could only get an FDE by buying the platform it came with. That is what has changed."
        leftColumn={{
          title: "A staff-aug contractor",
          type: "negative",
          items: [
            "Works the ticket you write",
            "One narrow stack",
            "Needs managing and specs",
            "Rented by the hour, by the seat",
            "Produces code; you own the outcome",
            "Swappable, interchangeable",
          ],
        }}
        rightColumn={{
          title: "An OpenXcell FDE",
          type: "positive",
          items: [
            "Understands your business and finds the work",
            "Fluent across the modern app-building stack",
            "Self-directs; embeds in your team",
            "Capacity, backed by our methodology",
            "Owns the outcome, end to end",
            "AI-augmented — one does what a team did",
          ],
        }}
      />
      <EmbeddingBenefitsSection
        eyebrow="WHAT'S INCLUDED"
        title="Why embedding beats a project or a hire."
        cards={[
          {
            title: "Knows your business",
            description:
              "An embedded FDE learns your workflows, data, and stack — so every build is informed by context a contractor never gets.",
          },
          {
            title: "Capacity without hiring",
            description:
              "Continuous build capacity, scaled up or down, without recruiting, onboarding, or carrying full-time overhead.",
          },
          {
            title: "Backed by the firm",
            description:
              "Not a lone freelancer. Your FDE is backed by OpenXcell's methodology, pattern library, and senior oversight.",
          },
        ]}
      />
      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for businesses managing complex daily operations."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Manage jobs, staff, customers, workflows, inventory, and day-to-day business activity from one connected platform.",
          },
          {
            number: "02",
            title: "Service businesses",
            description:
              "Track customers, bookings, jobs, technicians, service history, invoices, and payments without relying on disconnected tools.",
          },
          {
            number: "03",
            title: "Management teams",
            description:
              "Get real-time dashboards, reports, performance metrics, and operational visibility for faster and better decisions.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Replace spreadsheets and multiple systems with scalable software designed around the way your business actually operates.",
          },
        ]}
      />

      <ComparisonSection
        eyebrow="HOW WE'RE DIFFERENT"
        eyebrowIcon="⑂"
        title="Why OpenXcell for forward-deployed engineering."
        description="Set against the three alternatives most mid-market companies weigh: a full-time hire, a staff-aug contractor, or a traditional dev shop. What you get here is an embedded engineer plus the methodology behind them — a pattern library from every prior build, and senior oversight on architecture. Capability, not a seat."
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="py-[50px] sm:py-[70px] lg:py-[80px]"
      />

      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description="A selection of digital products and platforms designed around real business workflows."
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="!pt-0 pb-[50px] sm:pb-[50px] lg:pb-[80px]"
      />
      <WhatWeBuildSection
        eyebrow="WHAT THAY BUILD"
        title="What an embedded FDE builds for you."
        items={[
          "Internal tools & apps",
          "AI agents & automation",
          "SaaS integrations",
          "Dashboards",
          "New product features",
          "Workflow automation",
          "Data pipelines",
          "Iterations on prior builds",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />
      <FaqSection
        eyebrow="FAQ"
        title={
          <> Common <br /> Questions. </>
        }
        description="Specific to forward-deployed engineers."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px] "
      />
      <StackCtaSection
        heading="Need build capacity, not a hire?"
        description="Tell us what your team needs to build. We'll match you with an FDE and send a retainer quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#f7f7fb"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#171717"
        descriptionColor="#555555" buttonIcon={undefined} />
    </div>
  );
}
