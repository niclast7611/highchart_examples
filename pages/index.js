import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div class="py-48 mx-auto max-w-7xl px-4 sm:pt-24 md:pt-72 text-center">
        <h1 class="font-extrabold text-black">
          <p class="text-black bg-clip-text text-4xl sm;text-6xl md:text-7xl mb-5">
            HighChart Examples
          </p>
        </h1>
        <div class="mt-5 max-w-content mx-auto flex justify-center items-center md:mt-8">
          <Link href="/charts/PageOne">
            <button
              type="button"
              class="inline-flex items-center justify-center h-12 mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Browser DrillDown Chart
            </button>
          </Link>
          <Link href="/charts/PageTwo">
            <button
              type="button"
              class="inline-flex items-center justify-center h-12 mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Hard Coded MLB Sunburst
            </button>
          </Link>
          <Link href="/charts/Test">
            <button
              type="button"
              class="inline-flex items-center justify-center h-12 mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              MLB Sunburst w/ API
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
