import HeroBanner from "@/components/home/HeroBanner";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RecentBuilds from "@/components/home/RecentBuilds";
import CustomTemplatesSection from "@/components/home/CustomTemplatesSection";
import WaysToWorkSection from "@/components/home/WaysToWorkSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <WhatWeDoSection />
      <WhyNowSection />
      <HowItWorksSection />
      <RecentBuilds />
      <CustomTemplatesSection />
      <WaysToWorkSection />
      <FaqSection />
      <StackCtaSection />
    </main>
  );
}
