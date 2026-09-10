const tools = ["Softr", "Cursor", "Supabase", "Airtable", "n8n", "Retool", "Replit", "Lovable", "Make", "Notion", "Figma", "Custom Code", "Bolt", "Base44", "Convex", "Claude"];

export default function ToolsSection() {
  return (
    <section className="bg-white py-[50px]">
      <div className="container">
        <div className="grid items-end gap-7 md:grid-cols-[1fr_.8fr]">
          <div>
            <span className="inline-flex rounded-lg border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[.16em] text-[#4b4650]">
              What we build with
            </span>
            <h2 className="mt-6 max-w-[720px] text-[30px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#171717] md:text-[48px]">
              We choose the right tool, so you don’t have to.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.65] text-[#67626a]">
            Our engineers work across modern app platforms, automation tools, databases and custom code to choose the stack that fits your workflow.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {tools.map((tool, index) => (
            <div key={tool} className="flex min-h-[88px] items-center justify-center rounded-2xl border border-black/10 bg-[#faf9fb] px-3 text-center text-[14px] font-semibold text-[#29262c]">
              <span className="mr-2 text-[#ff4d0a]">{String(index + 1).padStart(2, "0")}</span>{tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
