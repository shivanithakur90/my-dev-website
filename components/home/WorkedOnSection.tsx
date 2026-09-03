import Link from "next/link";
import Image from "next/image";

export type WorkedOnProject = {
  title: string;
  url: string;
  category: string;
  tech: string;
  image: string;
};

type WorkedOnSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  projects: WorkedOnProject[];
};

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 5H19V10M10 14L19 5M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkedOnSection({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  projects,
}: WorkedOnSectionProps) {
  return (
    <section className="w-full bg-white pb-0 pt-[50px] md:py-[50px]">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#343434]">
              {eyebrow}
            </p>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {title}
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#626262] sm:text-[15px]">
              {description}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="group flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#3d3df2] px-6 py-3 text-sm font-semibold text-[#3333e8] transition duration-300 hover:bg-[#3333e8] hover:text-white"
          >
            {ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[20px] border border-[#ececf2] bg-white shadow-[0_12px_35px_rgba(20,20,60,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(20,20,60,0.12)]"
            >
              <div className="relative aspect-[5/3] rounded-t-[20px] bg-[#f1f1f6]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-[#15151d]">
                  {project.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#3434ef]">
                  <span className="max-w-[190px] truncate">
                    {project.url.replace("https://", "")}
                  </span>
                  <ExternalIcon />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#f4f4f7] px-3 py-1.5 text-xs font-medium text-[#444]">
                    {project.category}
                  </span>
                  <span className="rounded-md bg-[#f4f4f7] px-3 py-1.5 text-xs font-medium text-[#444]">
                    {project.tech}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
