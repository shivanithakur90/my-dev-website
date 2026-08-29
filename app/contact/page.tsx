"use client";

import { FormEvent, useState } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import ContactStatsSection from "@/components/home/ContactStatsSection";
import RoutedBuilderSection from "@/components/home/RoutedBuilderSection";
import ContactFaqSection from "@/components/home/ContactFaqSection";
import ContactLastCtaSection from "@/components/home/ContactLastCtaSection";
type CountryOption = {
  value: string;
  label: string;
  code: string;
  dialCode: string;
};

const countries: CountryOption[] = [
  {
    value: "India",
    label: "India",
    code: "IN",
    dialCode: "+91",
  },
  {
    value: "United States",
    label: "United States",
    code: "US",
    dialCode: "+1",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
    code: "GB",
    dialCode: "+44",
  },
  {
    value: "Canada",
    label: "Canada",
    code: "CA",
    dialCode: "+1",
  },
  {
    value: "Australia",
    label: "Australia",
    code: "AU",
    dialCode: "+61",
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates",
    code: "AE",
    dialCode: "+971",
  },
  {
    value: "Germany",
    label: "Germany",
    code: "DE",
    dialCode: "+49",
  },
  {
    value: "France",
    label: "France",
    code: "FR",
    dialCode: "+33",
  },
  {
    value: "Italy",
    label: "Italy",
    code: "IT",
    dialCode: "+39",
  },
  {
    value: "Spain",
    label: "Spain",
    code: "ES",
    dialCode: "+34",
  },
  {
    value: "Netherlands",
    label: "Netherlands",
    code: "NL",
    dialCode: "+31",
  },
  {
    value: "Belgium",
    label: "Belgium",
    code: "BE",
    dialCode: "+32",
  },
  {
    value: "Switzerland",
    label: "Switzerland",
    code: "CH",
    dialCode: "+41",
  },
  {
    value: "Austria",
    label: "Austria",
    code: "AT",
    dialCode: "+43",
  },
  {
    value: "Sweden",
    label: "Sweden",
    code: "SE",
    dialCode: "+46",
  },
  {
    value: "Norway",
    label: "Norway",
    code: "NO",
    dialCode: "+47",
  },
  {
    value: "Denmark",
    label: "Denmark",
    code: "DK",
    dialCode: "+45",
  },
  {
    value: "Finland",
    label: "Finland",
    code: "FI",
    dialCode: "+358",
  },
  {
    value: "Ireland",
    label: "Ireland",
    code: "IE",
    dialCode: "+353",
  },
  {
    value: "Portugal",
    label: "Portugal",
    code: "PT",
    dialCode: "+351",
  },
  {
    value: "Poland",
    label: "Poland",
    code: "PL",
    dialCode: "+48",
  },
  {
    value: "New Zealand",
    label: "New Zealand",
    code: "NZ",
    dialCode: "+64",
  },
  {
    value: "Singapore",
    label: "Singapore",
    code: "SG",
    dialCode: "+65",
  },
  {
    value: "Malaysia",
    label: "Malaysia",
    code: "MY",
    dialCode: "+60",
  },
  {
    value: "Indonesia",
    label: "Indonesia",
    code: "ID",
    dialCode: "+62",
  },
  {
    value: "Thailand",
    label: "Thailand",
    code: "TH",
    dialCode: "+66",
  },
  {
    value: "Philippines",
    label: "Philippines",
    code: "PH",
    dialCode: "+63",
  },
  {
    value: "Japan",
    label: "Japan",
    code: "JP",
    dialCode: "+81",
  },
  {
    value: "South Korea",
    label: "South Korea",
    code: "KR",
    dialCode: "+82",
  },
  {
    value: "China",
    label: "China",
    code: "CN",
    dialCode: "+86",
  },
  {
    value: "Hong Kong",
    label: "Hong Kong",
    code: "HK",
    dialCode: "+852",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
    code: "SA",
    dialCode: "+966",
  },
  {
    value: "Qatar",
    label: "Qatar",
    code: "QA",
    dialCode: "+974",
  },
  {
    value: "Kuwait",
    label: "Kuwait",
    code: "KW",
    dialCode: "+965",
  },
  {
    value: "Oman",
    label: "Oman",
    code: "OM",
    dialCode: "+968",
  },
  {
    value: "Bahrain",
    label: "Bahrain",
    code: "BH",
    dialCode: "+973",
  },
  {
    value: "South Africa",
    label: "South Africa",
    code: "ZA",
    dialCode: "+27",
  },
  {
    value: "Brazil",
    label: "Brazil",
    code: "BR",
    dialCode: "+55",
  },
  {
    value: "Mexico",
    label: "Mexico",
    code: "MX",
    dialCode: "+52",
  },
  {
    value: "Argentina",
    label: "Argentina",
    code: "AR",
    dialCode: "+54",
  },
];

const countrySelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    minHeight: "48px",
    height: "48px",
    borderRadius: "3px",
    borderColor: state.isFocused ? "#6ba5e5" : "#c8d5e3",
    backgroundColor: "#f7f9fb",
    boxShadow: "none",
    cursor: "pointer",

    "&:hover": {
      borderColor: state.isFocused ? "#6ba5e5" : "#c8d5e3",
    },
  }),

  valueContainer: (base: any) => ({
    ...base,
    height: "48px",
    padding: "0 14px",
  }),

  indicatorsContainer: (base: any) => ({
    ...base,
    height: "48px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#555",
    padding: "8px",
  }),

  singleValue: (base: any) => ({
    ...base,
    color: "#222222",
    fontSize: "14px",
  }),

  menu: (base: any) => ({
    ...base,
    zIndex: 99999,
    marginTop: "4px",
  }),

  menuPortal: (base: any) => ({
    ...base,
    zIndex: 99999,
  }),

  option: (base: any, state: any) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#eef4ff"
      : state.isFocused
      ? "#f5f7fa"
      : "#ffffff",
    color: "#222222",

    ":active": {
      backgroundColor: "#eef4ff",
    },
  }),
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption>(countries[0]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setSuccess(true);

      setMessage(
        "Thank you! Your quote request has been sent successfully."
      );

      form.reset();
      setSelectedCountry(countries[0]);
    } catch (error) {
      setSuccess(false);

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
      <>

    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#211fd6_0%,#6b269b_32%,#a8235b_58%,#d92628_78%,#f03d05_100%)] py-8 md:py-14">
  {/* Bottom White Fade */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.98))]" />

  <div className="container relative z-10">
    <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
         {/* =====================================================
            LEFT SIDE CONTENT
        ====================================================== */}
        <div className="pt-2 text-white lg:pt-3">
          {/* Heading */}
          <div className="max-w-[570px]">
            <h1 className="text-[40px] font-semibold leading-[1.12] tracking-[-2px] sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              Tell us what needs to
              <br className="hidden sm:block" />
              work. Quote in 48
              <br className="hidden sm:block" />
              hours.
            </h1>

            <p className="mt-6 max-w-[560px] text-[14px] leading-[1.65] text-white/90 sm:text-[15px]">
              Share the workflow, bottleneck, or idea — we&apos;ll route it
              to the right forward-deployed engineer. No long sales loop:
              a scoping call, then a fixed-price proposal in writing.
            </p>
          </div>

          {/* Process Cards */}
          <div className="mt-7 max-w-[590px] space-y-4">
            {/* Card 1 */}
            <div className="flex gap-4 rounded-[7px] border border-white/10 bg-white/15 px-4 py-4 backdrop-blur-[6px] sm:px-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-white/15 text-[14px] font-semibold">
                01
              </div>

              <div>
                <h3 className="text-[14px] font-semibold leading-5 sm:text-[15px]">
                  We reply within one business day
                </h3>

                <p className="mt-1 text-[11px] leading-[1.55] text-white/75 sm:text-[12px]">
                  A real person from the engineering side reads your message,
                  triages it by project type and urgency, and responds with
                  next steps — not an autoresponder.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 rounded-[7px] border border-white/10 bg-white/15 px-4 py-4 backdrop-blur-[6px] sm:px-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-white/15 text-[14px] font-semibold">
                02
              </div>

              <div>
                <h3 className="text-[14px] font-semibold leading-5 sm:text-[15px]">
                  30-minute scoping call
                </h3>

                <p className="mt-1 text-[11px] leading-[1.55] text-white/75 sm:text-[12px]">
                  You talk to a forward-deployed engineer, not a sales rep.
                  We map what you need, which systems it touches, and the
                  right delivery shape.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 rounded-[7px] border border-white/10 bg-white/15 px-4 py-4 backdrop-blur-[6px] sm:px-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-white/15 text-[14px] font-semibold">
                03
              </div>

              <div>
                <h3 className="text-[14px] font-semibold leading-5 sm:text-[15px]">
                  Fixed-price quote in 48 hours
                </h3>

                <p className="mt-1 text-[11px] leading-[1.55] text-white/75 sm:text-[12px]">
                  Scope, timeline, and price in writing after the call. No
                  obligation. If it&apos;s not a fit, we say so and point you
                  somewhere better.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-6 max-w-[590px] rounded-[8px] bg-white px-5 py-5 text-[#202020] shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
            <p className="text-[16px] font-semibold leading-[1.35] sm:text-[17px]">
              “We spent months trying to build a portal ourselves. Our FDE
              had it running in five days.”
            </p>

            <p className="mt-2 text-[9px] leading-4 text-[#737373] sm:text-[10px]">
              Jay Patel · Co-founder &amp; CEO, Speed
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-5 grid max-w-[590px] grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:sales@openxcell.com"
              className="rounded-[8px] bg-white p-4 text-[#202020] shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase text-[#575757]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Email
              </div>

              <p className="mt-2 text-[12px] font-medium text-[#ff5008] sm:text-[13px]">
                sales@openxcell.com
              </p>

              <p className="mt-1 text-[9px] leading-4 text-[#767676]">
                Fastest routing is still the form.
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+18887774629"
              className="rounded-[8px] bg-white p-4 text-[#202020] shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase text-[#575757]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.7 3.5L9.1 8L7.5 9.5C8.5 12 10.5 14 13 15L14.5 13.5L19 16C19.5 16.3 19.8 16.8 19.7 17.4C19.5 19 18.2 20.2 16.7 20.4C9.4 21.3 2.7 14.6 3.6 7.3C3.8 5.8 5 4.5 6.7 4.3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Phone
              </div>

              <p className="mt-2 text-[12px] font-medium text-[#ff5008] sm:text-[13px]">
                +1 888 777 4629
              </p>

              <p className="mt-1 text-[9px] leading-4 text-[#767676]">
                US business hours.
              </p>
            </a>

            {/* US Office */}
            <div className="rounded-[8px] bg-white p-4 text-[#202020] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase text-[#575757]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C12 21 19 15.2 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 15.2 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="12"
                    cy="9.5"
                    r="2.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>

                US Office
              </div>

              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-[#ff5008] sm:text-[12px]">
                304 S. Jones Blvd #520, Las
                <br />
                Vegas, NV 89107
              </p>
            </div>

            {/* India Office */}
            <div className="rounded-[8px] bg-white p-4 text-[#202020] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase text-[#575757]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C12 21 19 15.2 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 15.2 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="12"
                    cy="9.5"
                    r="2.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>

                India Office
              </div>

              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-[#ff5008] sm:text-[12px]">
                12th Floor, Capital One, Ambli
                <br />
                Road, Ahmedabad 380058
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE FORM
        ====================================================== */}
        <div className="w-full">
          <div className="rounded-[20px] bg-white px-6 py-9 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:px-10 md:px-12 md:py-12">
            {/* Heading */}
            <div className="mb-6">
              <h2 className="max-w-[560px] text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#202020] sm:text-[44px] md:text-[48px]">
                Get your fixed-price
                <br />
                quote
              </h2>

              <p className="mt-5 text-[14px] leading-6 text-[#555555]">
                Takes 2 minutes. We reply within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {/* First Name */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required
                  className="h-[48px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
                />

                {/* Last Name */}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  className="h-[48px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  className="h-[48px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
                />

                {/* Budget */}
                <select
                  name="budget"
                  defaultValue=""
                  className="h-[48px] w-full cursor-pointer rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#777777] outline-none focus:border-[#6ba5e5]"
                >
                  <option value="" disabled>
                    Budget
                  </option>

                  <option value="$500 - $1,000">
                    $500 - $1,000
                  </option>

                  <option value="$1,000 - $2,500">
                    $1,000 - $2,500
                  </option>

                  <option value="$2,500 - $5,000">
                    $2,500 - $5,000
                  </option>

                  <option value="$5,000 - $10,000">
                    $5,000 - $10,000
                  </option>

                  <option value="$10,000+">
                    $10,000+
                  </option>
                </select>

                {/* COUNTRY WITH REAL FLAG */}
                <div className="w-full">
                  <Select
                    value={selectedCountry}
                    options={countries}
                    onChange={(option) => {
                      if (option) {
                        setSelectedCountry(option);
                      }
                    }}
                    isSearchable
                    styles={countrySelectStyles}
                    menuPosition="fixed"
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : null
                    }
                    formatOptionLabel={(country) => (
                      <div className="flex items-center gap-3">
                        <ReactCountryFlag
                          countryCode={country.code}
                          svg
                          style={{
                            width: "22px",
                            height: "16px",
                          }}
                        />

                        <span>{country.label}</span>
                      </div>
                    )}
                  />

                  {/* Country value for backend */}
                  <input
                    type="hidden"
                    name="country"
                    value={selectedCountry.value}
                  />

                  {/* Country code for backend */}
                  <input
                    type="hidden"
                    name="countryCode"
                    value={selectedCountry.dialCode}
                  />
                </div>

                {/* PHONE */}
                <div className="flex h-[48px] overflow-hidden rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] focus-within:border-[#6ba5e5]">
                  {/* Dial Code */}
                  <div className="flex min-w-[92px] items-center justify-center gap-2 border-r border-[#c8d5e3] bg-[#eef3f8] px-3">
                    <ReactCountryFlag
                      countryCode={selectedCountry.code}
                      svg
                      style={{
                        width: "20px",
                        height: "14px",
                      }}
                    />

                    <span className="text-[14px] font-medium text-[#34495e]">
                      {selectedCountry.dialCode}
                    </span>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9]"
                  />
                </div>

                {/* Description */}
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Project Description*"
                  required
                  className="min-h-[100px] w-full resize-y rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 py-3 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5] sm:col-span-2"
                />

                {/* File */}
                <div className="mt-8 sm:col-span-2">
                  <input
                    type="file"
                    name="files"
                    multiple
                    className="block w-full cursor-pointer text-[14px] text-[#34495e] file:mr-1 file:cursor-pointer file:border file:border-[#777777] file:bg-[#f3f3f3] file:px-2 file:py-1 file:text-[14px] file:text-black"
                  />
                </div>
              </div>

              {/* Success / Error */}
              {message && (
                <div
                  className={`mt-6 rounded-[5px] px-4 py-3 text-[14px] ${
                    success
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}

              <p className="mt-8 text-[13px] font-medium text-[#ff6500]">
                100% confidential and secure
              </p>

              <button
                type="submit"
                disabled={loading}
                className="mt-9 flex min-h-[44px] items-center justify-center rounded-[3px] bg-[#ff5508] px-6 text-[16px] font-semibold text-white transition hover:bg-[#eb4800] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] text-[#666666] sm:mt-9">
                <span>✓ Confidential by default</span>
                <span>✓ No sales sequence</span>
                <span>✓ Reply in 1 business day</span>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>

    </main> 
<ContactStatsSection />
<RoutedBuilderSection />
<ContactFaqSection />
<ContactLastCtaSection />
  </>
  );
}