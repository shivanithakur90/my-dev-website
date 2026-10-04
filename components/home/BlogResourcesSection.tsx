import Image from "next/image";
import Link from "next/link";
import type { ResourceItem } from "@/app/company/blogs/ResourcesSection";

type BlogResourcesSectionProps = {
  resources: ResourceItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  limit?: number;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  paddingClassName?: string;
};

export default function BlogResourcesSection({
  resources,
  eyebrow = "RESOURCES",
  title = "Insights to help your business grow.",
  description = "Practical guides on Shopify, business operations and building better digital experiences.",
  limit = 3,
  ctaLabel = "View more resources",
  ctaHref = "/company/blogs",
  className = "",
  paddingClassName = "py-[50px] md:py-[70px] lg:py-[80px]",
}: BlogResourcesSectionProps) {
  const visibleResources = resources.slice(0, limit);
  if (visibleResources.length === 0) return null;

  return (
    <section className={`bg-[#fcf9ff] ${paddingClassName} ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] uppercase tracking-[0.08em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#ff5708]">
              <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            {eyebrow}
          </span>
          <h2 className="mt-6 text-[30px] leading-[1.08] tracking-[-1.5px] text-[#171717] sm:text-[35px] lg:text-[45px]">{title}</h2>
          {description && <p className="mt-5 text-[15px] leading-[1.6] text-[#656565] sm:text-[17px]">{description}</p>}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleResources.map((resource) => (
            <article key={resource.slug} className="h-full">
              <Link href={`/company/blogs/${resource.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e8e4ed] bg-white p-3 shadow-[0_12px_35px_rgba(30,25,45,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbea3] hover:shadow-[0_18px_45px_rgba(30,25,45,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5708]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#f1eef5]">
                  <Image src={resource.image} alt={resource.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#777]">
                    {resource.type && <span className="rounded-full bg-[#fff0e9] px-3 py-1 text-[#d94b08]">{resource.type}</span>}
                    {resource.readTime && <span>{resource.readTime.replace(/\s+read$/i, "")} read</span>}
                  </div>
                  <h3 className="mt-4 text-[21px] leading-[1.3] tracking-[-0.4px] text-[#202020] group-hover:text-[#ff5708]">{resource.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-[1.65] text-[#666]">{resource.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] text-[#ff5708]">Read article <ArrowIcon /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={ctaHref} className="inline-flex items-center gap-3 rounded-xl bg-[#ff5708] px-6 py-3.5 text-[15px] text-white transition-colors hover:bg-[#e94b00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5708]">
            {ctaLabel}<ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
