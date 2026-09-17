import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import WorkedOnSection from "@/components/home/WorkedOnSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RecentBuilds from "@/components/home/RecentBuilds";
import CustomTemplatesSection from "@/components/home/CustomTemplatesSection";
import WaysToWorkSection from "@/components/home/WaysToWorkSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ToolsSection from "@/components/home/ToolsSection";
import CommitmentsSection from "@/components/home/CommitmentsSection";

export const metadata: Metadata = {
  title: "Custom Business Apps & AI Automation",
  description:
    "Build custom portals, internal tools, dashboards, AI workflows, and SaaS integrations with forward-deployed engineers.",
};

const workedOnProjects = [
  {
    title: "Dr. Sheth's",
    url: "https://www.drsheths.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/drsheths.webp",
  },
  {
    title: "Memorize Your Life",
    url: "https://memorizeyourlife.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/memorize-banner.webp",
  },
  {
    title: "Craft Home Decor",
    url: "https://crafthomedecor.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/craft-home-decor.webp",
  },
  {
    title: "Prana Beauty",
    url: "https://www.pranabeauty.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/prana-beauty.webp",
  },
  {
    title: "Banana Republic",
    url: "https://bananarepublic.gap.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/bananarepublic.avif",
  },
  {
    title: "Shoppers Stop",
    url: "https://www.shoppersstop.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/shoppersstop.avif",
  },
  {
    title: "Superkicks",
    url: "https://www.superkicks.in/",
    category: "Shopify",
    tech: "Liquid",
    image: "/superkicks.jpg",
  },
  {
    title: "Aachho",
    url: "https://www.aachho.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/aachho.webp",
  },
];

const homeFaqs = [
  {
    question: "Do we own the code at the end?",
    answer:
      "Yes. Once the engagement is complete, your team owns the source code and all agreed project deliverables.",
  },
  {
    question: "What if our SaaS vendor changes its API?",
    answer:
      "We build integrations to be maintainable and can update the connection when your vendor changes its API or authentication requirements.",
  },
  {
    question: "How is this different from a contractor or traditional dev shop?",
    answer:
      "We work as a product-focused extension of your team, combining discovery, design, engineering, and long-term technical ownership.",
  },
  {
    question: "What's the smallest engagement you take?",
    answer:
      "We can begin with a focused discovery or a small, clearly defined build before expanding into a larger engagement.",
  },
  {
    question: "Do you replace our SaaS, or just sit on top?",
    answer:
      "Usually we connect and extend the tools you already use, but we can also replace specific workflows when that is the better option.",
  },
];

const comparisonRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2–3 months",
    diy: "Hours, but limited",
    inHouse: "3–6 months to hire",
  },
  {
    feature: "Tool selection",
    openxcell: "Best-fit, multi-tool",
    traditional: "Hand-coded only",
    diy: "Locked to one tool",
    inHouse: "You decide",
  },
  {
    feature: "You own it",
    openxcell: "Yes — fully",
    traditional: "Yes",
    diy: "Vendor dependent",
    inHouse: "Yes",
  },
  {
    feature: "Approach",
    openxcell: "Deep, multi-SaaS",
    traditional: "From scratch",
    diy: "Tool-limited",
    inHouse: "You teach them",
  },
  {
    feature: "Pricing",
    openxcell: "Fixed scope",
    traditional: "T&M, creep risk",
    diy: "Subscription",
    inHouse: "Salaries + overhead",
  },
  {
    feature: "SaaS integration depth",
    openxcell: "AI-native FDE",
    traditional: "Usually",
    diy: "Locked to tool",
    inHouse: "Varies",
  },
];

const comparisonColumns = [
  {
    key: "feature",
    label: "Features",
    widthClassName: "w-[24%]",
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
  {
    key: "inHouse",
    label: "Hire in-house",
  },
];

export default function Home() {
  return (
    <main >
      <div data-aos="fade-up">
        <HeroBanner />
      </div>
      <div data-aos="fade-up">
        <WhatWeDoSection />
      </div>
      {/* <div data-aos="fade-up">
        <WhyNowSection />
      </div> */}
      <div data-aos="fade-up">
        <WorkedOnSection
          eyebrow="My Work"
          title="Websites I've Worked On"
          description="A selection of live projects I've worked on using Shopify, Liquid and modern frontend development."
          ctaLabel="View All Projects"
          ctaHref="/services"
          projects={workedOnProjects}
        />
      </div>
      <div data-aos="fade-up">
        <HowItWorksSection />
      </div>
      <div data-aos="fade-up">
        <RecentBuilds />
      </div>
      <div data-aos="fade-up">
        <TestimonialsSection />
      </div>
      {/* <div data-aos="fade-up">
        <ToolsSection />
      </div> */}
      <div data-aos="fade-up">
        <CustomTemplatesSection />
      </div>
      <div data-aos="fade-up">
        <WaysToWorkSection />
      </div>
      {/* <div data-aos="fade-up">
        <CommitmentsSection />
      </div> */}
      <div data-aos="fade-up">
        <ComparisonSection
          eyebrow="How we're different"
          eyebrowIcon="⑂"
          title="OpenXcell vs. the alternatives"
          description="An AI-native, forward-deployed, results-driven approach — versus the three other options most mid-market companies consider."
          columns={comparisonColumns}
          rows={comparisonRows}
          sectionClassName="pb-0 pt-[50px] md:py-[50px]"
        />
      </div>
      <div data-aos="fade-up">
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
          faqs={homeFaqs}
          sectionClassName="pb-0 pt-[50px] md:py-[50px]"
        />
      </div>
      <StackCtaSection
        heading="Let's connect your stack."
        description="Tell us what needs to talk to what. We'll design the integration layer."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#f5f8ff"
        leftGlowColor="#3c2ce8"
        centerGlowColor="#ff5708"
        rightGlowColor="#253ee9"
        paddingClassName="pt-[50px] pb-[50px] sm:pt-[50px] sm:pb-[50px] lg:pt-[80px] lg:pb-[80px]"
        headingColor="#171717"
        descriptionColor="#555555" buttonIcon={undefined}/>
    </main>
  );
}
