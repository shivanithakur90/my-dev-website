const testimonials = [
  {
    quote: "The team understood the product quickly, communicated clearly, and kept moving until the experience felt complete.",
    name: "Bryan Rivers",
    role: "CEO, Malibbo",
  },
  {
    quote: "They combined strong engineering judgment with thoughtful execution and delivered a polished product we could confidently launch.",
    name: "Franz A. Wakefield",
    role: "Founder, CoolTVNetwork",
  },
  {
    quote: "OpenXcell turned our early ideas into a practical solution and brought useful suggestions to every design discussion.",
    name: "Lisa Bailey",
    role: "Founder, DockHere",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7f3fb] py-[50px]">
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-lg border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[.16em] text-[#4b4650]">
            Client stories
          </span>
          <h2 className="mt-6 text-[30px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#171717] md:text-[48px]">
            Trusted by teams that expect results.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="flex min-h-[270px] flex-col justify-between rounded-[22px] border border-black/10 bg-white p-7 shadow-[0_8px_24px_rgba(39,28,50,.06)]">
              <p className="text-[17px] font-medium leading-[1.55] text-[#29262c]">“{item.quote}”</p>
              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="font-semibold text-[#171717]">{item.name}</p>
                <p className="mt-1 text-[13px] text-[#716c74]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
