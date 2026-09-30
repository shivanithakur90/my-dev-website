import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Manufacturing & Distribution",
  description:
    "Custom manufacturing and distribution software for demand planning, inventory, vendor workflows, production, and operations.",
};



/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Is what you build HIPAA-aware?",
    answer:
      "We build with privacy and access controls appropriate to healthcare — encryption, role-based access, audit trails, and data kept in your environment. We'll discuss your specific compliance requirements during scoping and sign the agreements your team needs.",
  },
  {
    question: "Can you connect to our EHR or existing systems?",
    answer:
      "Yes, where they expose data through an API or integration. We build on top of your existing systems rather than replacing them.",
  },
  {
    question: "Where does patient data live?",
    answer:
      "In your accounts and infrastructure. We build inside your environment; data doesn't leave your control, and access is scoped and logged.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Working software in week one, full delivery typically in 4–8 weeks depending on scope and compliance requirements.",
  },
  {
    question: "Do we own it?",
    answer: "Fully — in your accounts, with no lock-in.",
  },
];



export default function ManufacturingDistributionPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Manufacturing & Distribution"
        title="Software for manufacturing & distribution, built for you."
        description="Inventory, vendor portals, order management, and lightweight ERP built for manufacturers, wholesalers, and distributors — on top of the systems you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/new-erp.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* =====================================================
                            FAQ
                        ===================================================== */}

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Common <br /> Questions.
          </>
        }
        description="What healthcare teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />

      {/* =====================================================
                            CTA
                        ===================================================== */}

      <StackCtaSection
        heading="Running a manufacturing or distribution business?"
        description="Tell us how your operation runs and where the gaps are. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#040d20"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#fff"
        descriptionColor="#fff"
        buttonIcon={undefined}
      />
    </main>
  );
}
