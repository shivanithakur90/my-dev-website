import Link from "next/link";
import WorkedOnSection from "@/components/home/WorkedOnSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

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
    image: "/banner-beauty.avif",
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
    title: "Custom Application Development",
    description:
      "We build scalable, secure, and high-performance web applications tailored to your business requirements.",
    workLink: "https://us.usm.com",
    icon: "code",
  },
  {
    number: "02",
    title: "AI & Intelligent Automation",
    description:
      "Automate repetitive processes and unlock new opportunities with intelligent AI-powered solutions.",
    workLink: "https://sohnne.com",
    icon: "ai",
  },
  {
    number: "03",
    title: "Systems Integration & APIs",
    description:
      "Connect platforms, services and business tools with reliable APIs and seamless third-party integrations.",
    workLink: "https://modulecanada.com",
    icon: "link",
  },
  {
    number: "04",
    title: "Product Engineering",
    description:
      "From concept to launch, we build scalable, reliable and user-focused digital products.",
    workLink: "https://row.rastah.co",
    icon: "rocket",
  },
  {
    number: "05",
    title: "Cloud, DevOps & Security",
    description:
      "Build modern infrastructure with deployment automation, monitoring and enterprise-ready security.",
    workLink: "https://us.usm.com",
    icon: "cloud",
  },
  {
    number: "06",
    title: "Web Development",
    description:
      "Modern, responsive and SEO-friendly websites focused on performance, usability and conversions.",
    workLink: "https://sohnne.com",
    icon: "web",
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

function ExternalIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5H19V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "code") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 9L5 12L8 15M16 9L19 12L16 15M14 5L10 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="7"
          width="14"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M9 12H9.01M15 12H15.01M9 16H15M12 4V7M3 11H5M19 11H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 13C11.1046 14.1046 12.8954 14.1046 14 13L17 10C18.1046 8.89543 18.1046 7.10457 17 6C15.8954 4.89543 14.1046 4.89543 13 6L11.5 7.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M14 11C12.8954 9.89543 11.1046 9.89543 10 11L7 14C5.89543 15.1046 5.89543 16.8954 7 18C8.10457 19.1046 9.89543 19.1046 11 18L12.5 16.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 5C16.5 3 19 3 21 3C21 5 21 7.5 19 10L14 15L9 10L14 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <path
          d="M9 10L5 11L3 15L9 14M14 15L13 21L9 19L10 15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 18H17C19.2091 18 21 16.2091 21 14C21 11.7909 19.2091 10 17 10C16.8377 10 16.6777 10.0097 16.5205 10.0285C15.7112 7.67501 13.4805 6 10.8571 6C7.54344 6 4.85714 8.68629 4.85714 12C3.27804 12.4861 2 13.9518 2 15.7143C2 17.5289 3.47106 19 5.28571 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3 12H21M12 3C14 5.5 15 8.5 15 12C15 15.5 14 18.5 12 21M12 3C10 5.5 9 8.5 9 12C9 15.5 10 18.5 12 21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function getIconClasses(index: number) {
  if (index === 0) {
    return "bg-[#eeebff] text-[#5439ff]";
  }

  if (index === 1) {
    return "bg-[#ffe9f0] text-[#ff3d79]";
  }

  if (index === 2) {
    return "bg-[#e9f5ff] text-[#149dff]";
  }

  if (index === 3) {
    return "bg-[#e7fbef] text-[#13c66b]";
  }

  if (index === 4) {
    return "bg-[#fff3dd] text-[#f1a500]";
  }

  return "bg-[#f0e9ff] text-[#6938ff]";
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

      <div id="portfolio" data-aos="fade-up">
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
        className="bg-[#fafafe] px-5 py-20 md:px-8 lg:py-28"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#3038ef]">
              Our Services
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-[52px]">
              What We Do
            </h2>

            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-7 text-[#686873]">
              End-to-end digital solutions designed to solve real business
              problems and deliver measurable results.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[22px] border border-[#e8e8ef] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(34,34,90,0.09)] md:p-8"
              >
                <div
                  className={`mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-[17px] ${getIconClasses(
                    index
                  )}`}
                >
                  <ServiceIcon type={service.icon} />
                </div>

                <div className="mb-2 text-xs font-semibold text-[#9999a2]">
                  {service.number}
                </div>

                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#14141c]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-[15px] leading-[1.7] text-[#64646e]">
                  {service.description}
                </p>

                <a
                  href={service.workLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-3 text-[14px] font-semibold text-[#3535ed]"
                >
                  View My Work

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>

                  <ExternalIcon />
                </a>
              </div>
            ))}
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
          <div className="absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full bg-white/15 blur-[100px]" />

          <div className="absolute -bottom-40 left-[20%] h-[350px] w-[350px] rounded-full bg-[#868fff]/20 blur-[100px]" />

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
                Tell us about your project and let&apos;s create a fast,
                scalable and high-performing digital experience together.
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