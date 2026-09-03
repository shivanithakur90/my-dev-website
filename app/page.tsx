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

export default function Home() {
  return (
    <main>
      <div data-aos="fade-up">
        <HeroBanner />
      </div>
      <div data-aos="fade-up">
        <WhatWeDoSection />
      </div>
      {/* <WhyNowSection /> */}
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
        <CustomTemplatesSection />
      </div>
      <div data-aos="fade-up">
        <WaysToWorkSection />
      </div>
      <div data-aos="fade-up">
        <ComparisonSection />
      </div>
      <div data-aos="fade-up">
        <FaqSection />
      </div>
      <div data-aos="fade-up">
        <StackCtaSection />
      </div>
    </main>
  );
}
