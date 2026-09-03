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
    <section className="relative z-20 bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#3038ef]">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] md:text-[46px]">
              {title}
            </h2>
            <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-[#6b6b74] md:text-base">
              {description}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="group flex w-fit items-center gap-3 rounded-full border border-[#3d3df2] px-6 py-3 text-sm font-semibold text-[#3333e8] transition duration-300 hover:bg-[#3333e8] hover:text-white"
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
              className="group overflow-hidden rounded-[20px] border border-[#ececf2] bg-white shadow-[0_12px_35px_rgba(20,20,60,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(20,20,60,0.12)]"
            >
              <div className="relative aspect-[1.45/1] overflow-hidden bg-[#f1f1f6]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/[0.04]" />
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
