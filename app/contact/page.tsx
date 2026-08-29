export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-16">
      <div className="mx-auto max-w-[600px] rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="mb-3 text-4xl font-bold text-black">
          Get your fixed-price quote
        </h1>

        <p className="mb-8 text-gray-600">
          Takes 2 minutes. We reply within one business day.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name*"
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Last Name*"
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="email"
              placeholder="Email Address*"
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            />

            <input
              type="tel"
              placeholder="+91"
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <select
              defaultValue=""
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            >
              <option value="" disabled>
                Country*
              </option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
            </select>

            <select
              defaultValue=""
              className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none"
            >
              <option value="" disabled>
                Budget
              </option>
              <option value="1">$1,000 - $5,000</option>
              <option value="2">$5,000 - $10,000</option>
              <option value="3">$10,000 - $25,000</option>
              <option value="4">$25,000+</option>
            </select>
          </div>

          <textarea
            placeholder="Project Description*"
            rows={5}
            className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none"
          />

          <input type="file" multiple className="block w-full" />

          <p className="text-sm text-[#ff5708]">
            100% confidential and secure
          </p>

          <button
            type="submit"
            className="rounded-md bg-[#ff5708] px-8 py-3 font-semibold text-white"
          >
            Submit
          </button>

          <div className="flex flex-wrap gap-4 pt-4 text-xs text-gray-500">
            <span>✓ Confidential by default</span>
            <span>✓ No sales sequence</span>
            <span>✓ Reply in 1 business day</span>
          </div>
        </form>
      </div>
    </main>
  );
}