"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { projects as allProjects } from "./projects";

type WorkShowcaseSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  showFilters?: boolean;
  showFinalCta?: boolean;
  limit?: number;
  className?: string;
};

function CaseStudiesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 4V8M16 4V8M4 10H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WorkShowcaseSection({
  eyebrow,
  title,
  description,
  showFilters = true,
  showFinalCta = true,
  limit,
  className = "",
}: WorkShowcaseSectionProps) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  const industries = [
    "All",
    ...Array.from(new Set(allProjects.flatMap((project) => project.tags))).sort(),
  ];

  const filteredProjects = allProjects.filter((project) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      !showFilters ||
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesIndustry =
      !showFilters ||
      industry === "All" || project.tags.includes(industry);

    return matchesSearch && matchesIndustry;
  });

  const displayedProjects =
    typeof limit === "number" ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={`bg-white py-[50px] ${className}`}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-[1040px] text-center">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e9e9e9] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2b2b2b] shadow-[0_12px_35px_rgba(30,25,45,0.06)]">
                <span className="text-[#ff5708]">
                  <CaseStudiesIcon />
                </span>
                {eyebrow}
              </div>
            )}

            {title && (
              <h2 className="mx-auto mt-6 max-w-[1000px] text-[34px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#171717] sm:text-[44px] md:text-[54px]">
                {title}
              </h2>
            )}

            {description && (
              <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.6] text-[#5d5d5d] sm:text-[18px]">
                {description}
              </p>
            )}
          </div>
        )}

        {showFilters && (
          <div className="mb-10 grid gap-4 rounded-[18px] border border-[#e5e5e5] bg-[#fafafa] p-4 sm:grid-cols-[1fr_260px_auto] sm:items-end sm:p-5">
            <label className="block">
              <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5c5c5c]">
                Search
              </span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search case studies..."
                className="h-12 w-full rounded-[10px] border border-[#dcdcdc] bg-white px-4 text-[14px] text-[#202020] outline-none transition placeholder:text-[#969696] focus:border-[#ff5708]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5c5c5c]">
                Industry
              </span>
              <select
                value={industry}
                onChange={(event) => setIndustry(event.target.value)}
                className="h-12 w-full cursor-pointer rounded-[10px] border border-[#dcdcdc] bg-white px-4 text-[14px] text-[#202020] outline-none transition focus:border-[#ff5708]"
              >
                {industries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setIndustry("All");
              }}
              className="h-12 rounded-[10px] border border-[#ff5708] px-5 text-[14px] font-semibold text-[#ff5708] transition-colors hover:bg-[#ff5708] hover:text-white"
            >
              Clear
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
          {displayedProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[26px] border border-[#dedede] bg-white p-4 shadow-[0_5px_10px_rgba(0,0,0,0.12)] sm:p-5"
            >
              <div
                className={`relative aspect-[1.86/1] overflow-hidden rounded-[16px] p-4 sm:p-5 ${project.imageBackground}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.12)]">
                  <Image
                    src={project.image}
                    alt={`${project.title} dashboard`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-3 pb-1 pt-6 sm:px-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f5f5] px-3 py-1 text-[11px] font-medium leading-none text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-5 text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#151515] sm:text-[22px]">
                  {project.title}
                </h2>

                <p className="mt-2 text-[14px] leading-[1.55] text-[#454545] sm:text-[15px]">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#ff4d00] transition-all hover:gap-3 hover:underline hover:underline-offset-4"
                >
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {displayedProjects.length === 0 && (
          <div className="rounded-[20px] border border-dashed border-[#d6d6d6] px-5 py-16 text-center">
            <h2 className="text-[24px] font-semibold text-[#171717]">
              No case studies found.
            </h2>
            <p className="mt-2 text-[14px] text-[#666]">
              Try another search term or clear the selected industry.
            </p>
          </div>
        )}

        {showFinalCta && (
        <div className="mt-[50px] overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#273ee9_0%,#652596_45%,#c2264c_72%,#f0440b_100%)] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
          <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.4px] sm:text-[42px]">
            Have a project like these?
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.6] text-white/85 sm:text-[16px]">
            Tell us the problem you are solving. We will scope it on a focused call and send a fixed-price quote within 48 hours.
          </p>
          <Link
            href="/contact"
            className="mx-auto mt-7 inline-flex items-center gap-3 rounded-xl bg-[#ff5708] py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white transition hover:bg-[#ed4b00]"
          >
            Request a quote
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#ff5708]" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
