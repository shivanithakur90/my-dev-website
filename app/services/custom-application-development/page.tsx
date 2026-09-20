import CustomApplicationCoverageSection, {
  AdminIcon,
  DashboardIcon,
  MobileIcon,
  PortalIcon,
  WebAppIcon,
  WorkflowIcon,
} from "@/components/common/CustomApplicationCoverageSection";
import HowWeDeliverSection, {
  BuildIntegrateIcon,
  DeployScaleIcon,
  DiscoverIcon,
  HandOverIcon,
} from "@/components/common/HowWeDeliverSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import WhatWeBuildSection from "@/components/common/WhatWeBuildSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Custom App Development Services",
  description:
    "Custom business app development for portals, dashboards, internal tools, approval workflows, CRMs, and operations systems built around your team.",
};


const customApplicationFaqs = [
  {
    question: "Which tool will you use to build our app?",
    answer:
      "We pick per build, not per preference. Depending on the workflow that means a no-code or low-code platform, a headless SaaS layer, custom code, or a combination. Your forward-deployed engineer chooses what fits the problem and explains why before anything gets built.",
  },
  {
    question: "Do we own the code at the end?",
    answer:
      "Yes — fully. All code is delivered in your repos, on your infrastructure, in your accounts. When the engagement ends, your team can extend, maintain, or migrate it without us. No vendor lock-in.",
  },
  {
    question: "What if our SaaS vendor changes its API?",
    answer:
      "Integrations are built as their own layer, separate from your app's core logic, so a vendor's API change stays a contained fix rather than a rebuild. And because the code lives in your repos and runs in your accounts, your team can make that fix with or without us.",
  },
  {
    question: "How is this different from a contractor or dev shop?",
    answer:
      "A dev shop takes the spec you write and bills the hours. We embed a senior, AI-augmented forward-deployed engineer who learns your business, picks the right tools, and owns the outcome end to end. One call with an engineer gets you a fixed-price quote within 48 hours.",
  },
  {
    question: "What's the smallest engagement you take?",
    answer:
      "A single build — one internal tool, portal, or dashboard. Scoping is a 30-minute call and delivery is typically four to eight weeks, with no minimum retainer to start. Many clients begin with one build, then retain the same engineer for the next ones.",
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

const comparisonColumns = [
  {
    key: "feature",
    label: "Features",
    widthClassName: "w-[28%]",
  },
  {
    key: "openxcell",
    label: "OpenXcell",
    highlighted: true,
  },
  {
    key: "traditional",
    label: "Traditional Dev Shop",
  },
  {
    key: "diy",
    label: "DIY, single tools",
  },
];

const comparisonRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2–3 months",
    diy: "Hours, but limited ",
  },
  {
    feature: "Production-ready & scalable",
    openxcell: "Deep, multi-SaaS",
    traditional: "From Scratch",
    diy: "Tool-limited",
  },
  {
    feature: "You own the code",
    openxcell: "Yes — engineered",
    traditional: "Variable",
    diy: "Breaks at scale",
  },
  {
    feature: "Built on your SaaS",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to tool",
  },
];

const customApplicationCoverageItems = [
  {
    title: "Web applications",
    description:
      "Full custom web apps — internal or customer-facing — built around your workflows.",
    href: "/services/custom-application-development",
    icon: <WebAppIcon />,
  },
  {
    title: "Dashboards & reporting",
    description:
      "Live operational dashboards pulling data from across your stack.",
    href: "/services/custom-application-development",
    icon: <DashboardIcon />,
  },
  {
    title: "Client & customer portals",
    description:
      "Secure, branded portals connected to your CRM, storage, and billing.",
    href: "/services/custom-application-development",
    icon: <PortalIcon />,
  },
  {
    title: "Internal tools & admin panels",
    description:
      "Ops consoles, approval flows, and admin interfaces that run your business in one screen.",
    href: "/services/custom-application-development",
    icon: <AdminIcon />,
  },
  {
    title: "Mobile applications",
    description:
      "iOS and Android apps, including companion apps connected to your web platforms.",
    href: "/services/custom-application-development",
    icon: <MobileIcon />,
  },
  {
    title: "Workflow applications",
    description:
      "Apps that automate and manage multi-step business processes from start to finish.",
    href: "/services/custom-application-development",
    icon: <WorkflowIcon />,
  },
];


export default function CustomApplicationDevelopmentPage() {
  return (
    <div>
      <PageHeroBanner
        eyebrow="custom software development"
        title="Custom web & mobile apps, built around how your team works."
        description="Web apps, internal tools, portals, and dashboards — designed for your specific workflows and built on top of the SaaS you already use. Delivered by AI-native forward-deployed engineers, with working software in weeks."
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />
      <ProblemSection
        eyebrow="THE PROBLEM"
        title="Off-the-shelf SaaS is built for the median customer. Not your team."
        description="So your people tab-switch between tools, export to spreadsheets, and work around software that doesn’t quite fit. Hiring an engineering team to fix it was too slow and too expensive — until now."
        image="/the-problem.webp"
        imageAlt="Financial internal tools illustration"
      />
      <CustomApplicationCoverageSection
        eyebrow="WHAT'S INCLUDED"
        title="What custom application development covers."
        items={customApplicationCoverageItems}
        ctaLabel="Explore service"
      />
      <ComparisonSection
        eyebrow="HOW WE'RE DIFFERENT"
        eyebrowIcon="⑂"
        title="Why OpenXcell for custom app development."
        description="An AI-native, forward-deployed, results-driven approach — versus the three other options most mid-market companies consider."
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="pt-0 pb-[50px] md:pb-[50px]"
      />
      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built on real SaaS"
        description="A selection of digital products and platforms designed around real business workflows."
        projects={caseStudies}
        showFilters={false}
        showFinalCta={false}
        limit={2}
        className="!pt-0"
      />
      <HowWeDeliverSection
        eyebrow="HOW WE DELIVER"
        title="Built fast. Deployed right. Scales with you."
        description="AI-native delivery is the speed. Proper engineering is the reason it lasts."
        image="/how-we-delivery.avif"
        cards={[
          {
            title: "Discover & Assess",
            icon: <DiscoverIcon />,
            description:
              "An FDE embeds, maps your SaaS, and finds the friction. Build plan and fixed quote by the end of week one.",
          },
          {
            title: "Build & Integrate",
            icon: <BuildIntegrateIcon />,
            description:
              "AI-native build, picking the right tools, wired into your existing stack and data. Working software in week one.",
          },
          {
            title: "Deploy & Scale",
            icon: <DeployScaleIcon />,
            description:
              "Production infrastructure, security, and monitoring. Engineered to scale — not a prototype that breaks under real load.",
          },
          {
            title: "Hand Over & Own",
            icon: <HandOverIcon />,
            description:
              "Full code ownership, documented, in your accounts. Run it yourself or keep an FDE on retainer.",
          },
        ]}
      />

      <WhatWeBuildSection
        eyebrow="WHAT WE BUILD"
        title="What we build for you."
        items={[
          "Client portals",
          "Custom CRM",
          "Internal tools & admin panels",
          "Live dashboards",
          "Investor portals",
          "Operations consoles",
          "Workflow apps",
          "Inventory management",
          "Employee directories",
          "Customer portals",
        ]}
        buttonText="Browse all solutions"
        buttonHref="/our-work"
      />

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Common
            <br />
            Questions.
          </>
        }
        description="The things mid-market buyers ask before booking a call."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="pt-[50px] sm:pt-[50px] lg:pt-[80px] "
      />

      
      <StackCtaSection
        heading="Business apps built around how your team works."
        description="Tell us what your team uses and what you're trying to solve. We'll send back a tailored example walkthrough and a custom quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#040d20"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[50px] pb-[50px] sm:pt-[50px] sm:pb-[50px] lg:pt-[80px] lg:pb-[80px]"
        headingColor="#fff"
        descriptionColor="#fff" buttonIcon={undefined} />
    </div>
  );
}
