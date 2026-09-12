import Link from "next/link";
import Image from "next/image";

import { projects } from "@/components/our-work/projects";

const templates = projects.map((project) => ({
  ...project,
  tag: project.tags.join(" / "),
  tone: project.imageBackground,
}));

function DashboardPreview({ template }) {
  return (
    <div className={`relative h-[220px] w-full overflow-hidden rounded-lg p-3 ${template.tone}`}>
      <span className="absolute left-3 top-3 z-10 rounded bg-white px-2 py-1 text-[10px] font-medium text-[#222] shadow-sm">
        {template.tag}
      </span>
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
        <Image
          src={template.image}
          alt={`${template.title} dashboard preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}

export default function CustomTemplatesSection() {
  return (
    <section className="w-full bg-[#f7fbfc] pb-0 pt-[50px] md:py-[50px]">
      <div className="container">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">▣</span>
            Custom templates
          </div>
          <h2 className="mt-6 text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[35px] lg:text-[45px] lg:tracking-[-2px]">
            Custom Examples for Preview
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            Each layout can be initialized instantly by our FDEs and tailored
            to match your specific corporate brand design, database models,
            and SaaS environments.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {templates.map((template) => (
            <article key={template.title} className="flex flex-col rounded-2xl border border-[#dce2e4] bg-white p-3">
              <DashboardPreview template={template} />
              <h3 className="mt-4 text-[16px] font-semibold text-[#242424]">{template.title}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-[#5f5f5f]">{template.description}</p>
              <Link href={template.href} className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#242424] hover:underline hover:underline-offset-4">
                See example <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <Link href="/our-work" className="mx-auto mt-10 flex w-fit items-center rounded-xl border border-[#252525] px-5 py-2.5 text-[13px] font-semibold text-[#171717] transition-colors hover:bg-[#171717] hover:text-white">
          See all projects
        </Link>
      </div>
    </section>
  );
}
