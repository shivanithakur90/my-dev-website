import Link from "next/link";

const templates = [
  { tag: "Retail", title: "Employee Directory", description: "Manage team contacts and info, and allow employees to submit requests.", tone: "bg-[#f0f0ee]", accent: "bg-[#25382d]" },
  { tag: "Construction", title: "Vendor Management", description: "A secure vendor management portal to onboard suppliers, track tasks, manage workflows.", tone: "bg-[#f4ddf5]", accent: "bg-[#182333]" },
  { tag: "Manufacturing", title: "Property management", description: "Build a custom investor relations portal and keep every property detail organized.", tone: "bg-[#e4e9fb]", accent: "bg-[#315467]" },
  { tag: "HR & Recruiting", title: "Recruitment Agency Portal", description: "Manage job listings, candidates, and the hiring pipeline in one connected place.", tone: "bg-[#e8ddf8]", accent: "bg-[#7555f7]" },
  { tag: "Business", title: "Partner Portal", description: "Give investors real-time access to companies, funding rounds, team updates, and documents.", tone: "bg-[#edf5df]", accent: "bg-[#66834f]" },
  { tag: "Manage Members", title: "Membership & events", description: "Manage contracts, track tasks, and make it easy for customers to access resources.", tone: "bg-[#e2f0f5]", accent: "bg-[#6a9e67]" },
  { tag: "IT & Operations", title: "AI CRM", description: "Your pipeline, your stages, your process — without a vendor shaping the workflow.", tone: "bg-[#f5ecdd]", accent: "bg-[#167ac4]" },
  { tag: "Legal", title: "Client Portal", description: "Give your clients one secure, branded place to see their data, share files, and track work.", tone: "bg-[#e1f3e2]", accent: "bg-[#2e3522]" },
];

function DashboardPreview({ template, index }) {
  return (
    <div className={`relative h-[150px] overflow-hidden rounded-lg p-3 ${template.tone}`}>
      <span className="absolute left-3 top-3 z-10 rounded bg-white px-2 py-1 text-[10px] font-medium text-[#222] shadow-sm">
        {template.tag}
      </span>
      <div className="flex h-full overflow-hidden rounded-md bg-white shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
        <div className={`w-[22%] p-2 ${template.accent}`}>
          <div className="mt-2 h-2 w-8 rounded bg-white/75" />
          <div className="mt-5 space-y-2">
            {[0, 1, 2, 3, 4].map((line) => (
              <div key={line} className="h-1.5 rounded bg-white/25" />
            ))}
          </div>
        </div>
        <div className="flex-1 p-2.5">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-[#d7dbe0]" />
            <div className="h-3 w-10 rounded bg-[#eceff3]" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((card) => (
              <div key={card} className="h-9 rounded border border-[#edf0f2] bg-[#fafbfc] p-1.5">
                <div className="h-1.5 w-7 rounded bg-[#cfd6dc]" />
                <div className="mt-2 h-2 w-10 rounded bg-[#9db5c5]" />
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-[55px] gap-2">
            <div className="flex-1 rounded border border-[#edf0f2] p-2">
              <div className="flex h-full items-end gap-1">
                {[38, 65, 48, 82, 58, 92].map((height, bar) => (
                  <div key={bar} className={`flex-1 rounded-t ${index % 2 ? "bg-[#7289c7]" : "bg-[#78b3a0]"}`} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="w-[38%] rounded border border-[#edf0f2] p-2">
              <div className="space-y-2">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="h-1.5 rounded bg-[#e2e6e9]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomTemplatesSection() {
  return (
    <section className="w-full bg-[#f7fbfc] py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">▣</span>
            Custom templates
          </div>
          <h2 className="mt-6 text-[34px] font-semibold leading-[1.08] tracking-[-1.4px] text-[#171717] sm:text-[42px] lg:text-[52px] lg:tracking-[-2px]">
            Custom Examples for Preview
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            Each layout can be initialized instantly by our FDEs and tailored
            to match your specific corporate brand design, database models,
            and SaaS environments.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {templates.map((template, index) => (
            <article key={template.title} className="flex flex-col rounded-2xl border border-[#dce2e4] bg-white p-3">
              <DashboardPreview template={template} index={index} />
              <h3 className="mt-4 text-[16px] font-semibold text-[#242424]">{template.title}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-[#5f5f5f]">{template.description}</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#242424] hover:underline hover:underline-offset-4">
                See example <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <Link href="/templates" className="mx-auto mt-10 flex w-fit items-center rounded-xl border border-[#252525] px-5 py-2.5 text-[13px] font-semibold text-[#171717] transition-colors hover:bg-[#171717] hover:text-white">
          See all templates
        </Link>
      </div>
    </section>
  );
}
