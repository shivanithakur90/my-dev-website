import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";

export default function OurWorkPage() {
  return (
    <main>
             <PageHeroBanner
                eyebrow="Our Work"
                title="Our Work."
                description="Modern digital solutions built around your business — from Shopify development and custom applications to automation, integrations, and scalable web experiences."
              />
      <WorkShowcaseSection />
    </main>
  );
}
