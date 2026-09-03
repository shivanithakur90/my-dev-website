import Link from "next/link";

export default function StackCtaSection() {
  return (
    <section className="w-full bg-white pb-[50px] pt-[50px] md:pb-[100px]">
      <div className="container">
        <div className="relative isolate flex min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] bg-[#f7f7fb] px-5 py-16 sm:min-h-[440px] sm:px-10 lg:min-h-[460px]">
          <div className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[520px] w-[470px] rounded-full bg-[#3c2ce8] opacity-90 blur-[75px]" />
          <div className="pointer-events-none absolute -bottom-52 left-1/2 -z-10 h-[390px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff472d] opacity-85 blur-[85px]" />
          <div className="pointer-events-none absolute -bottom-48 -right-32 -z-10 h-[500px] w-[470px] rounded-full bg-[#253ee9] opacity-95 blur-[75px]" />
          <div className="pointer-events-none absolute left-[18%] top-6 -z-10 h-[260px] w-[360px] rounded-full bg-white opacity-90 blur-[65px]" />
          <div className="pointer-events-none absolute right-[17%] top-12 -z-10 h-[260px] w-[340px] rounded-full bg-white opacity-90 blur-[65px]" />

          <div className="relative z-10 mx-auto max-w-[900px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px] lg:tracking-[-2px]">
              Don&apos;t see your stack?
            </h2>

            <p className="mx-auto mt-7 max-w-[850px] text-[15px] font-medium leading-[1.6] text-[#171717] sm:text-[17px] lg:text-[19px]">
              Tell us what your team uses and what you&apos;re trying to solve.
              We&apos;ll send back a tailored walkthrough and a custom quote
              within 48 hours.
            </p>

            <Link
              href="/contact"
              className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-xl border border-[#ff5708] bg-[#ff5708] py-1.5 pl-4 pr-1.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#ff5708]"
            >
              Tell us what you need
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708] transition-colors duration-300 group-hover:bg-[#ff5708] group-hover:text-white">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M14 7L19 12L14 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
