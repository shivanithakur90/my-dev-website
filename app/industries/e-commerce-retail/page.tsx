import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import FaqSection from "@/components/home/FaqSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";

export const metadata: Metadata = {
  title: "E-commerce & Retail",
  description:
    "Custom e-commerce and retail software for storefront operations, inventory, customer workflows, recommendations, and dashboards.",
};


/* =========================================================
   FAQ DATA
========================================================= */

const customApplicationFaqs = [
  {
    question: "Can you connect Shopify, our POS, and accounting?",
    answer:
      "Yes — Shopify, WooCommerce, Stripe, QuickBooks, and more, connected so stock, orders, and finance stay in sync automatically.",
  },
  {
    question: "Can it handle multiple channels and locations?",
    answer:
      "Yes — real-time inventory and orders across storefronts, marketplaces, and warehouses.",
  },
  {
    question: "Can you help with customer outreach?",
    answer:
      "Yes — AI-drafted, personalized outbound through your existing Twilio, SendGrid, or Klaviyo, at scale.",
  },
  {
    question: "How fast can you ship?",
    answer:
      "Working software in week one, full delivery typically in 4–8 weeks depending on scope.",
  },
  {
    question: "Do we own it?",
    answer: "Fully — in your accounts, with no lock-in.",
  },
];

export default function EcommerceRetailPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="E-commerce & Retail"
        title="Software for e-commerce & retail, built for you."
        description="Inventory, order ops, customer portals, outbound, and dashboards built for online and multi-channel retail — on top of Shopify, Stripe, and the tools you already run. Delivered by forward-deployed engineers, production-grade in weeks."
        image="/new-erp-1.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />


      {/* =====================================================
                HOW WE BUILD IT
            ===================================================== */}

      <BuildProcessSection
        eyebrow="How we build it"
        title="Built for you, on your stack."
        description="We don't hand you a tool to configure. A forward-deployed engineer builds around your workflow, connects your systems, deploys it securely, and hands it over."
        cards={[
          {
            title: "We build it for you",
            description:
              "A senior, AI-augmented engineer embeds with your team, scopes the work, and ships — you don't touch a builder."
          },
          {
            title: "On your existing tools",
            description:
              "Built on top of the systems you already run, connected live — not a replacement you have to migrate to.",
          },
          {
            title: "Production-grade & owned",
            description:
              "Secure, scalable, deployed in your accounts. You own it fully, with no lock-in.",
          },
        ]}
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
        description="What e-commerce & retail teams ask before working with us."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px]"
      />


      {/* =====================================================
                CTA
            ===================================================== */}

      <StackCtaSection
        heading="Running an online or retail business?"
        description="Tell us where your channels and tools don't connect. We'll scope it on a 30-minute call and send a fixed-price quote within 48 hours."
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
