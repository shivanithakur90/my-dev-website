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
            <div className="mb-5 flex w-fit items-center gap-2 rounded-md border border-[#e8e8e8] bg-white px-3 py-1.5 shadow-[0_3px_10px_rgba(0,0,0,0.04)]">
              <span className="flex h-4 w-4 items-center justify-center text-[#ff4d00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 6H17M7 6L5 4M7 6L5 8M17 18H7M17 18L19 16M17 18L19 20"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#343434]">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {title}
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#626262] sm:text-[15px]">
              {description}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="group flex w-fit shrink-0 items-center gap-3 rounded-xl border border-[#ff5708] bg-[#ff5708] py-1.5 pl-4 pr-1.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#ff5708]"
          >
            {ctaLabel}
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708] transition-colors duration-300 group-hover:bg-[#ff5708] group-hover:text-white">
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
              className="group rounded-[20px] border border-[#ececf2] bg-white shadow-[0_12px_35px_rgba(20,20,60,0.06)] transition-colors duration-300 hover:border-[#ff5708] hover:bg-[#fffaf7]"
            >
              <div className="relative aspect-[2048/1223] rounded-t-[20px] bg-[#f1f1f6]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-[#15151d]">
                  {project.title}
                </h3>
                <div className="group/link mt-2 flex w-fit items-center gap-1.5 text-sm font-medium text-[#3434ef] transition-colors duration-300 hover:text-[#e64500]">
                  <span className="max-w-[190px] truncate transition-[text-decoration] duration-300 group-hover/link:underline group-hover/link:underline-offset-4">
                    {project.url.replace("https://", "")}
                  </span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <ExternalIcon />
                  </span>
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
