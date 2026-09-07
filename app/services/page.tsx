import Link from "next/link";
import WorkedOnSection from "@/components/home/WorkedOnSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

import {
  SiShopify,
  SiWordpress,
  SiReact,
} from "react-icons/si";

import {
  FaCode,
  FaLink,
  FaPenNib,
} from "react-icons/fa6";

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

const services = [
  {
    number: "01",
    title: "Shopify Development",
    description:
      "High-converting Shopify stores built with custom Liquid development, flexible sections and a smooth shopping experience.",
    tags: [
      "Liquid",
      "Shopify 2.0",
      "Custom Themes",
      "App Integration",
    ],
    icon: "shopify",
    theme: "green",
    href: "/contact",
  },
  {
    number: "02",
    title: "WordPress & WooCommerce",
    description:
      "Fast, responsive WordPress websites and WooCommerce stores tailored around your brand, products and business goals.",
    tags: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Custom CSS",
    ],
    icon: "wordpress",
    theme: "blue",
    href: "/contact",
  },
  {
    number: "03",
    title: "React & Next.js Development",
    description:
      "Modern websites and web applications built with React and Next.js for performance, scalability and a polished user experience.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    icon: "react",
    theme: "pink",
    href: "/contact",
  },
  {
    number: "04",
    title: "Custom Web Development",
    description:
      "Custom web solutions for businesses that need more than a standard website, including dashboards, portals and dynamic functionality.",
    tags: [
      "JavaScript",
      "Node.js",
      "APIs",
      "Database",
    ],
    icon: "code",
    theme: "purple",
    href: "/contact",
  },
  {
    number: "05",
    title: "API & App Integrations",
    description:
      "Connect your store or website with payment systems, CRMs, shipping tools and third-party platforms through reliable integrations.",
    tags: [
      "REST API",
      "GraphQL",
      "Webhooks",
      "Automation",
    ],
    icon: "integration",
    theme: "orange",
    href: "/contact",
  },
  {
    number: "06",
    title: "UI/UX & Web Design",
    description:
      "User-focused interfaces that are modern, clean and conversion-driven for eCommerce stores and web applications.",
    tags: [
      "Figma",
      "UI/UX Design",
      "Responsive",
      "Branding",
    ],
    icon: "design",
    theme: "mint",
    href: "/contact",
  },
];

const themeClasses: Record<
  string,
  {
    card: string;
    icon: string;
    tag: string;
  }
> = {
  green: {
    card: "from-[#f7fffb] via-white to-white",
    icon: "bg-[#e5f8eb] text-[#39b75e]",
    tag: "bg-[#ebf9ef] text-[#168542]",
  },

  blue: {
    card: "from-[#f7fbff] via-white to-white",
    icon: "bg-[#e4f2ff] text-[#2175d9]",
    tag: "bg-[#eaf4ff] text-[#1965bf]",
  },

  pink: {
    card: "from-[#fff9fc] via-white to-white",
    icon: "bg-[#ffe5f0] text-[#f53687]",
    tag: "bg-[#fff0f6] text-[#dd3476]",
  },

  purple: {
    card: "from-[#faf9ff] via-white to-white",
    icon: "bg-[#eee9ff] text-[#6738f5]",
    tag: "bg-[#f2eeff] text-[#6337df]",
  },

  orange: {
    card: "from-[#fffaf5] via-white to-white",
    icon: "bg-[#fff0df] text-[#ff870b]",
    tag: "bg-[#fff3e6] text-[#d87308]",
  },

  mint: {
    card: "from-[#f7fffb] via-white to-white",
    icon: "bg-[#e1f9ef] text-[#08a96b]",
    tag: "bg-[#eafaf3] text-[#0b8c5b]",
  },
};

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

function ServiceIcon({
  type,
}: {
  type: string;
}) {
  if (type === "shopify") {
    return (
      <SiShopify className="h-9 w-9" />
    );
  }

  if (type === "wordpress") {
    return (
      <SiWordpress className="h-9 w-9" />
    );
  }

  if (type === "react") {
    return (
      <SiReact className="h-9 w-9" />
    );
  }

  if (type === "code") {
    return (
      <FaCode className="h-8 w-8" />
    );
  }

  if (type === "integration") {
    return (
      <FaLink className="h-8 w-8" />
    );
  }

  return (
    <FaPenNib className="h-8 w-8" />
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

      {/* ================= SERVICES ================= */}

      <section
        className="relative overflow-hidden bg-[#fbfbff] px-5 py-20 md:px-8 lg:py-28"
        data-aos="fade-up"
      >
        {/* Background Glow Left */}
        <div className="pointer-events-none absolute -left-[250px] -top-[160px] h-[600px] w-[600px] rounded-full bg-[#eeeeff] blur-[25px]" />

        {/* Background Glow Right */}
        <div className="pointer-events-none absolute -right-[250px] top-[40px] h-[580px] w-[580px] rounded-full bg-[#faeefe] blur-[30px]" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* ================= HEADING ================= */}

          <div className="relative mx-auto mb-14 max-w-[920px] text-center md:mb-16">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#3844ff]">
              Our Services
            </p>

            <h2 className="text-[40px] font-semibold leading-[1.03] tracking-[-0.05em] text-[#090b17] sm:text-[48px] md:text-[58px] lg:text-[66px]">
              Digital Solutions for

              <span className="block bg-gradient-to-r from-[#3f55ff] via-[#9053df] to-[#ec4e8d] bg-clip-text text-transparent">
                Modern Brands
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.7] text-[#676b7c] sm:text-[16px] md:text-[18px]">
              From eCommerce to custom web applications, we help
              businesses build, scale and succeed with modern
              technology and clean, high-performance digital
              solutions.
            </p>
          </div>

          {/* ================= LEFT TEXT ================= */}

          <div className="pointer-events-none absolute left-0 top-[55px] hidden -rotate-6 text-[#aaa7ff] xl:block">
            <p className="font-serif text-[25px] italic leading-[1.05]">
              Build
              <br />
              Better
              <br />
              Together
            </p>

            <svg
              className="ml-14 mt-2 h-14 w-14"
              viewBox="0 0 60 60"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 5C32 11 40 27 38 50M38 50L31 40M38 50L47 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* ================= RIGHT TEXT ================= */}

          <div className="pointer-events-none absolute right-3 top-[55px] hidden rotate-3 text-[#aaa7ff] xl:block">
            <p className="font-serif text-[24px] italic leading-[1.1]">
              Ideas into
              <br />
              Impact
            </p>

            <svg
              className="ml-14 mt-2 h-14 w-14"
              viewBox="0 0 60 60"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 5C33 11 42 27 40 50M40 50L32 40M40 50L48 39"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* ================= SERVICE CARDS ================= */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const colors =
                themeClasses[service.theme];

              return (
                <article
                  key={service.number}
                  className={`group relative flex min-h-[360px] flex-col rounded-[25px] border border-[#e4e6f1] bg-gradient-to-br ${colors.card} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(31,35,80,0.10)] sm:p-7 lg:p-8`}
                >
                  {/* Number */}

                  <span className="absolute right-7 top-7 text-[12px] font-semibold tracking-[0.08em] text-[#969bb0]">
                    {service.number}
                  </span>

                  {/* Icon */}

                  <div
                    className={`mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] ${colors.icon}`}
                  >
                    <ServiceIcon
                      type={service.icon}
                    />
                  </div>

                  {/* Title */}

                  <h3 className="pr-8 text-[21px] font-semibold tracking-[-0.03em] text-[#080b15] sm:text-[23px]">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#656a7b] sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3.5 py-2 text-[11px] font-medium sm:text-[12px] ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}

                  <div className="mt-auto pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3442ff] transition-all duration-300 group-hover:gap-4"
                    >
                      Learn More

                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section
        className="bg-white px-5 py-20 md:px-8 lg:py-24"
        data-aos="fade-up"
      >
        <div
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] px-6 py-16 md:px-12 lg:px-16 lg:py-20"
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