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
];

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <WhatWeDoSection />
      {/* <WhyNowSection /> */}
      <WorkedOnSection
        eyebrow="My Work"
        title="Websites I've Worked On"
        description="A selection of live projects I've worked on using Shopify, Liquid and modern frontend development."
        ctaLabel="View All Projects"
        ctaHref="/services"
        projects={workedOnProjects}
      />
      <HowItWorksSection />
      <RecentBuilds />
      <CustomTemplatesSection />
      <WaysToWorkSection />
      <ComparisonSection />
      <FaqSection />
      <StackCtaSection />
    </main>
  );
}
