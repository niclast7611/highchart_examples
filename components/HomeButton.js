import React from "react";
import Link from "next/link";

export default function HomeButton({ href, buttonTitle }) {
  return (
    <div className="mt-5 mb-3 max-w-content mx-auto flex justify-center items-center md:mt-8">
      <Link href={href}>
        <button
          type="button"
          className="inline-flex items-center justify-center h-12 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {buttonTitle}
        </button>
      </Link>
    </div>
  );
}
