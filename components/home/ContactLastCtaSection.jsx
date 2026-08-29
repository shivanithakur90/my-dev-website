export default function ContactLastCtaSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form-section");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[26px] px-6 py-14 text-center sm:px-10 md:py-16 lg:py-20">
          {/* Background */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f7fb_0%,#ffffff_28%,#f8f5fb_48%,#f3f3f7_100%)]" />

          {/* Blue Glow */}
          <div className="pointer-events-none absolute -left-12 bottom-[-80px] h-[300px] w-[300px] rounded-full bg-[#3d36ff] opacity-85 blur-[70px]" />

          {/* Red Glow */}
          <div className="pointer-events-none absolute left-1/2 bottom-[-120px] h-[300px] w-[340px] -translate-x-1/2 rounded-full bg-[#ff4b35] opacity-65 blur-[85px]" />

          {/* Right Blue Glow */}
          <div className="pointer-events-none absolute -right-14 bottom-[-90px] h-[320px] w-[320px] rounded-full bg-[#243ee8] opacity-90 blur-[75px]" />

          {/* White Top Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-130px] h-[320px] w-[500px] -translate-x-1/2 rounded-full bg-white opacity-95 blur-[90px]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-[850px]">
            <h2 className="text-[40px] font-semibold leading-[1.08] tracking-[-2px] text-[#171717] sm:text-[48px] md:text-[54px] lg:text-[58px]">
              Two minutes now. A quote in
              <br className="hidden sm:block" />
              48 hours.
            </h2>

            <p className="mt-5 text-[13px] leading-6 text-[#222222] sm:text-[14px]">
              Scroll back to the form, or email{" "}
              <a
                href="mailto:sales@openxcell.com"
                className="font-medium text-[#111111] underline-offset-4 hover:underline"
              >
                sales@openxcell.com
              </a>{" "}
              — whichever is easier.
            </p>

            <button
              type="button"
              onClick={scrollToForm}
              className="mt-7 inline-flex items-center gap-3 rounded-[8px] bg-[#ff5708] py-2 pl-4 pr-2 text-[12px] font-semibold text-white transition hover:bg-[#e94d00]"
            >
              Back to the form

              <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-white text-[#ff5708]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M14 7L19 12L14 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}