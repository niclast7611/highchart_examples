import Link from "next/link";
import HomeButton from "../components/HomeButton";

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
          <HomeButton
            href="/charts/PageOne"
            buttonTitle="Browser DrillDown Chart"
          />
          <HomeButton
            href="/charts/PageTwo"
            buttonTitle="Hard Coded MLB Sunburst"
          />
          <HomeButton href="/charts/Test" buttonTitle=" MLB Sunburst w/ API" />
          <HomeButton href="/charts/Spline" buttonTitle="Spline Chart" />
          <HomeButton
            href="/charts/RMSpline"
            buttonTitle="RipeMetrics Copycat Spline Chart"
          />
          <HomeButton href="/charts/Donut" buttonTitle="Donut" />

          {/* class="inline-flex items-center justify-center h-12 mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" */}
        </div>
      </div>
    </div>
  );
}
