import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";

export default function OurWorkPage() {
  return (
    <main>
      <PageHeroBanner
        eyebrow="Our Work"
        title="Case studies."
        description="Real engagements, real engineering, real outcomes — the problems we were handed, what we built, and what changed."
      />
      <WorkShowcaseSection />
    </main>
  );
}
