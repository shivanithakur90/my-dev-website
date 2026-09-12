import type { Metadata } from "next";
import Link from "next/link";
import WorkedOnSection from "@/components/home/WorkedOnSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ServicesGridSection from "@/components/services/ServicesGridSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Openxcell services for Shopify development, WordPress, React, Next.js, custom web apps, API integrations, and UI/UX design.",
};

const projects = [
  {
    title: "G Shot Health & Wellness",
    url: "https://gshotdrink.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/13.webp",
  },
  {
    title: "Seek & Swoon Blankets",
    url: "https://www.seekandswoon.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/website_hero_2160x1080_15.webp",
  },
  {
    title: "NutriPaw Pet Wellness",
    url: "https://nutri-paw.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/all-itch-immunity-treats-933888.webp",
  },
  {
    title: "Wooven Club Fashion",
    url: "https://www.woovenclub.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/women-image.webp",
  },
  {
    title: "Smaints Functional Mushrooms",
    url: "https://smaints.de/en",
    category: "Shopify",
    tech: "Liquid",
    image: "/banner-desktop.webp",
  },
  {
    title: "LootBloc Gaming Merch",
    url: "https://lootbloc.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/game-banner-img.webp",
  },
  {
    title: "Rastah Contemporary Fashion",
    url: "https://row.rastah.co/",
    category: "Shopify",
    tech: "Liquid",
    image: "/fashion-banner.webp",
  },
  {
    title: "Shoppers Stop Fashion & Lifestyle",
    url: "https://www.shoppersstop.com/",
    category: "Shopify",
    tech: "Liquid",
    image: "/Handbags_web.avif",
  },
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

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#10101b]">
      {/* ================= HERO ================= */}

      <PageHeroBanner
        eyebrow="Our Services"
        title="Services."
        description="Modern digital solutions built around your business — from Shopify development and custom applications to automation, integrations, and scalable web experiences."
      />

      {/* ================= MY WORK ================= */}

      <div
        id="portfolio"
        data-aos="fade-up"
      >
        <WorkedOnSection
          eyebrow="My Work"
          title="Websites I've Worked On"
          description="A selection of live projects I've worked on using Shopify, Liquid and modern frontend development."
          ctaLabel="View All Projects"
          ctaHref="/portfolio"
          projects={projects}
        />
      </div>



      <ServicesGridSection />

      {/* ================= FINAL CTA ================= */}

      <section
        className="bg-white px-5 pb-[50px] pt-0 md:px-8"
        data-aos="fade-up"
      >
        <div
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] px-6 py-12 md:px-12 lg:px-16 lg:py-16"
          style={{
            background:
              "linear-gradient(120deg, #2036e9 0%, #742c8d 48%, #d62a34 75%, #f0440b 100%)",
          }}
        >
          {/* Glow */}

          <div className="absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full bg-white/15 blur-[100px]" />

          <div className="absolute -bottom-40 left-[20%] h-[350px] w-[350px] rounded-full bg-[#868fff]/20 blur-[100px]" />

          {/* Content */}

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                Start a project
              </p>

              <h2 className="mt-3 max-w-[700px] text-3xl font-semibold tracking-[-0.035em] text-white md:text-[46px] md:leading-[1.12]">
                Have an idea?
                <br />
                Let&apos;s build something great.
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/75 md:text-base">
                Tell us about your project and
                let&apos;s create a fast, scalable and
                high-performing digital experience
                together.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 rounded-[14px] bg-[#ff4a08] px-6 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
            >
              Get a quote

              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff4a08]">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
