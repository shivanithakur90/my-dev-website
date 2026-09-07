import Link from "next/link";
import { SiShopify, SiWordpress, SiReact } from "react-icons/si";
import { FaCode, FaLink, FaPenNib } from "react-icons/fa6";

const services = [
  { number: "01", title: "Shopify Development", description: "High-converting Shopify stores built with custom Liquid development, flexible sections and a smooth shopping experience.", tags: ["Liquid", "Shopify 2.0", "Custom Themes", "App Integration"], icon: "shopify", theme: "green" },
  { number: "02", title: "WordPress & WooCommerce", description: "Fast, responsive WordPress websites and WooCommerce stores tailored around your brand, products and business goals.", tags: ["WordPress", "WooCommerce", "Elementor", "Custom CSS"], icon: "wordpress", theme: "blue" },
  { number: "03", title: "React & Next.js Development", description: "Modern websites and web applications built with React and Next.js for performance, scalability and a polished user experience.", tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: "react", theme: "pink" },
  { number: "04", title: "Custom Web Development", description: "Custom web solutions for businesses that need more than a standard website, including dashboards, portals and dynamic functionality.", tags: ["JavaScript", "Node.js", "APIs", "Database"], icon: "code", theme: "purple" },
  { number: "05", title: "API & App Integrations", description: "Connect your store or website with payment systems, CRMs, shipping tools and third-party platforms through reliable integrations.", tags: ["REST API", "GraphQL", "Webhooks", "Automation"], icon: "integration", theme: "orange" },
  { number: "06", title: "UI/UX & Web Design", description: "User-focused interfaces that are modern, clean and conversion-driven for eCommerce stores and web applications.", tags: ["Figma", "UI/UX Design", "Responsive", "Branding"], icon: "design", theme: "mint" },
] as const;

const themeClasses = {
  green: { card: "from-[#f7fffb] via-white to-white", icon: "bg-[#e5f8eb] text-[#39b75e]", tag: "bg-[#ebf9ef] text-[#168542]" },
  blue: { card: "from-[#f7fbff] via-white to-white", icon: "bg-[#e4f2ff] text-[#2175d9]", tag: "bg-[#eaf4ff] text-[#1965bf]" },
  pink: { card: "from-[#fff9fc] via-white to-white", icon: "bg-[#ffe5f0] text-[#f53687]", tag: "bg-[#fff0f6] text-[#dd3476]" },
  purple: { card: "from-[#faf9ff] via-white to-white", icon: "bg-[#eee9ff] text-[#6738f5]", tag: "bg-[#f2eeff] text-[#6337df]" },
  orange: { card: "from-[#fffaf5] via-white to-white", icon: "bg-[#fff0df] text-[#ff5708]", tag: "bg-[#fff3e6] text-[#d87308]" },
  mint: { card: "from-[#f7fffb] via-white to-white", icon: "bg-[#e1f9ef] text-[#08a96b]", tag: "bg-[#eafaf3] text-[#0b8c5b]" },
} as const;

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "shopify") return <SiShopify className="h-9 w-9" />;
  if (type === "wordpress") return <SiWordpress className="h-9 w-9" />;
  if (type === "react") return <SiReact className="h-9 w-9" />;
  if (type === "code") return <FaCode className="h-8 w-8" />;
  if (type === "integration") return <FaLink className="h-8 w-8" />;
  return <FaPenNib className="h-8 w-8" />;
}

export default function ServicesGridSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbff] py-[50px]" data-aos="fade-up">
      <div className="pointer-events-none absolute -left-[250px] -top-[160px] h-[600px] w-[600px] rounded-full bg-[#fff0e8] blur-[30px]" />
      <div className="pointer-events-none absolute -right-[250px] top-10 h-[580px] w-[580px] rounded-full bg-[#f4edff] blur-[30px]" />

      <div className="container relative">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">✦</span>
            Our Services
          </div>
          <h2 className="mt-6 text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px] lg:tracking-[-2px]">
            Digital Solutions for Modern Brands
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            From eCommerce to custom web applications, we help businesses build, scale and succeed with clean, high-performance digital solutions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const colors = themeClasses[service.theme];
            return (
              <article key={service.number} className={`group relative flex min-h-[350px] flex-col rounded-[24px] border border-[#e4e6f1] bg-gradient-to-br ${colors.card} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(31,35,80,0.10)] sm:p-7`}>
                <span className="absolute right-7 top-7 text-[12px] font-semibold tracking-[0.08em] text-[#969bb0]">{service.number}</span>
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-[18px] ${colors.icon}`}><ServiceIcon type={service.icon} /></div>
                <h3 className="pr-8 text-[20px] font-semibold tracking-[-0.03em] text-[#171717] sm:text-[22px]">{service.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#656a7b] sm:text-[15px]">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className={`rounded-full px-3.5 py-2 text-[11px] font-medium sm:text-[12px] ${colors.tag}`}>{tag}</span>)}
                </div>
                <div className="mt-auto pt-8">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#ff5708] transition-all duration-300 group-hover:gap-4 hover:underline hover:underline-offset-4">
                    Learn More <ArrowIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
