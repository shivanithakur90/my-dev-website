import HeroBanner from "@/components/HeroBanner";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyNowSection from "@/components/WhyNowSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RecentBuilds from "@/components/RecentBuilds";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <WhatWeDoSection />
       <WhyNowSection />
        <HowItWorksSection />
          <RecentBuilds />
    </main>
  );
}