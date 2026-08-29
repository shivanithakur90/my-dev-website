export default function ContactStatsSection() {
  const stats = [
    {
      label: "EXPERIENCE",
      value: "15+ years",
    },
    {
      label: "CUSTOMERS",
      value: "1000+",
    },
    {
      label: "TEAM",
      value: "250+",
    },
    {
      label: "MATURITY",
      value: "CMMI L3",
    },
    {
      label: "CERTIFIED",
      value: "ISO 27001:2022",
    },
  ];

  return (
    <section className="w-full bg-[#192747]">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-3 md:py-14 lg:grid-cols-5 lg:gap-x-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="mb-3 text-[12px] font-medium uppercase leading-none text-[#aeb7cb] sm:text-[13px]">
                {item.label}
              </p>

              <h3 className="whitespace-nowrap text-[24px] font-semibold leading-tight tracking-[-0.7px] text-white sm:text-[26px] lg:text-[29px]">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}