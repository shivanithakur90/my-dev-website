"use client";

import { FormEvent, useState } from "react";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Austria",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Ireland",
  "Portugal",
  "Poland",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Philippines",
  "Japan",
  "South Korea",
  "China",
  "Hong Kong",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "South Africa",
  "Brazil",
  "Mexico",
  "Argentina",
  "Other",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

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
    <main className="min-h-screen bg-[linear-gradient(135deg,#211fd6_0%,#7d247f_42%,#c72336_73%,#f03d05_100%)] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[700px]">
        <div className="rounded-[20px] bg-white px-8 py-10 sm:px-10 md:px-12 md:py-12">
          <div className="mb-6">
            <h1 className="max-w-[560px] text-[42px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#202020] sm:text-[48px] md:text-[52px]">
              Get your fixed-price
              <br />
              quote
            </h1>

            <p className="mt-5 text-[14px] leading-6 text-[#555555]">
              Takes 2 minutes. We reply within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                required
                className="h-[41px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                required
                className="h-[41px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="h-[41px] w-full rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
              />

              <div className="flex gap-2">
                <select
                  name="countryCode"
                  defaultValue="+91"
                  className="h-[41px] w-[90px] shrink-0 rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-2 text-[13px] text-[#34495e] outline-none focus:border-[#6ba5e5]"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+1">CA +1</option>
                  <option value="+61">AU +61</option>
                  <option value="+971">UAE +971</option>
                  <option value="+49">DE +49</option>
                  <option value="+33">FR +33</option>
                  <option value="+39">IT +39</option>
                  <option value="+34">ES +34</option>
                  <option value="+65">SG +65</option>
                  <option value="+64">NZ +64</option>
                  <option value="+966">SA +966</option>
                  <option value="+974">QA +974</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  className="h-[41px] min-w-0 flex-1 rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5]"
                />
              </div>

              {/* COUNTRY DROPDOWN */}
              <select
                name="country"
                defaultValue=""
                required
                className="h-[41px] w-full cursor-pointer rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#777777] outline-none focus:border-[#6ba5e5]"
              >
                <option value="" disabled>
                  Country*
                </option>

                {countries.map((country) => (
                  <option
                    key={country}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>

              <select
                name="budget"
                defaultValue=""
                className="h-[41px] w-full cursor-pointer rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 text-[14px] text-[#777777] outline-none focus:border-[#6ba5e5]"
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

              <textarea
                name="description"
                rows={4}
                placeholder="Project Description*"
                required
                className="min-h-[65px] w-full resize-y rounded-[3px] border border-[#c8d5e3] bg-[#f7f9fb] px-4 py-3 text-[14px] text-[#222222] outline-none placeholder:text-[#b9b9b9] focus:border-[#6ba5e5] sm:col-span-2"
              />

              <div className="mt-8 sm:col-span-2">
                <input
                  type="file"
                  name="files"
                  multiple
                  className="block w-full cursor-pointer text-[14px] text-[#34495e] file:mr-1 file:cursor-pointer file:border file:border-[#777777] file:bg-[#f3f3f3] file:px-2 file:py-1 file:text-[14px] file:text-black"
                />
              </div>
            </div>

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
    </main>
  );
}