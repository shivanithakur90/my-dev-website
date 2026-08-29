export default function RoutedBuilderSection() {
  const cards = [
    {
      title: "Senior builder",
      description:
        "A forward-deployed engineer works directly with your team instead of passing specs between handoffs.",
      iconBg: "#fff0ea",
      iconColor: "#ff5708",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="10"
            cy="8"
            r="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M3.5 19C3.5 15.8 6.3 13.3 10 13.3C12.2 13.3 14.1 14.2 15.3 15.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M18 13.5V19.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M15 16.5H21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      title: "AI + best tools",
      description:
        "We use AI, no-code, and custom code where each makes sense — not one rigid delivery model.",
      iconBg: "#eaf5ff",
      iconColor: "#198cff",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3L13.2 7.2L17 9L13.2 10.8L12 15L10.8 10.8L7 9L10.8 7.2L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          <path
            d="M18.5 3.5L19.1 5.5L21 6.5L19.1 7.5L18.5 9.5L17.9 7.5L16 6.5L17.9 5.5L18.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />

          <path
            d="M6.5 13L7.4 16.1L10 17.5L7.4 18.9L6.5 22L5.6 18.9L3 17.5L5.6 16.1L6.5 13Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      title: "Built on your stack",
      description:
        "We connect to the SaaS, data, and workflows your team already relies on, then ship usable software.",
      iconBg: "#eef7e9",
      iconColor: "#5aa72a",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3L20 7L12 11L4 7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          <path
            d="M4 11L12 15L20 11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          <path
            d="M4 15L12 19L20 15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fbfbfc] py-16 md:py-20 lg:py-24">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-[320px] w-[320px] rounded-full bg-[#fff1ec] opacity-60 blur-[110px]" />

      <div className="pointer-events-none absolute right-[8%] top-[22%] h-[340px] w-[340px] rounded-full bg-[#eef0ff] opacity-70 blur-[120px]" />

      <div className="container relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-[6px] border border-[#e5e5e5] bg-white px-3 py-2 shadow-[0_5px_18px_rgba(0,0,0,0.04)]">
          <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#ff5708] text-[#ff5708]">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 17V11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="7"
                r="1"
                fill="currentColor"
              />
            </svg>
          </span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#333333]">
            Where your message goes
          </span>
        </div>

        {/* Heading */}
        <div className="mt-5 max-w-[760px]">
          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#202020] sm:text-[44px] lg:text-[50px]">
            Routed to the right builder.
          </h2>

          <p className="mt-4 max-w-[720px] text-[14px] leading-[1.65] text-[#5d5d5d] sm:text-[15px]">
            Your message isn&apos;t a lead in a CRM queue — it&apos;s a brief
            that gets matched to a forward-deployed engineer who fits your
            stack and problem.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[14px] border border-[#dedede] bg-white px-5 py-5 shadow-[0_10px_25px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.1)] sm:px-6 sm:py-6"
            >
              {/* Icon */}
              <div
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px]"
                style={{
                  backgroundColor: card.iconBg,
                  color: card.iconColor,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.4px] text-[#202020]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-[1.55] text-[#666666]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}