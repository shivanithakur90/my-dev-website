import HeroBanner from "@/components/home/HeroBanner";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RecentBuilds from "@/components/home/RecentBuilds";


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
