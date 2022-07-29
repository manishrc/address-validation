import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Address Validation Tests</title>
        <meta
          name="description"
          content="Test address validations from various services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-100">
        <div className="max-w-3xl mx-auto py-6">
          <form>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 p-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error"></p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    autoComplete="tel"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="tel-error"></p>
              </div>
              <div className="sm:col-span-3 sm:col-start-1 sm:col-end-4">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    spellCheck="false"
                    autoCorrect="false"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-red-600"
                  id="first-name-error"
                ></p>
              </div>

              <div className="sm:col-span-3 sm:col-start-4 sm:col-end-7">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    spellCheck="false"
                    autoCorrect="false"
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-red-600"
                  id="last-name-error"
                ></p>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <p className="mt-2 text-sm text-red-600" id="country-error"></p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="address-line1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address-line1"
                    id="address-line1"
                    autoComplete="address-line1"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-red-600"
                  id="address-line1-error"
                ></p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="street-address2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, Suite, etc.
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address2"
                    id="street-address2"
                    autoComplete="street-address2"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-red-600"
                  id="address-line2-error"
                ></p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="city-error"></p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="region-error"></p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-red-600"
                  id="postal-code-error"
                ></p>
              </div>

              <div className="sm:col-span-6 mt-4 bg-red-100">
                <button
                  type="submit"
                  className="w-full bg-blue-500 px-6 py-3 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
