
"use client";

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-screen  flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] leading-none font-black tracking-tighter text-red-800">
            404
          </h1>

          {/* Decorative circles */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-red-800/10 -z-0" />
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-red-800/5 -z-0" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-7 mb-8">
            Sorry, the page you are looking for doesn&apos;t exist or may have
            been moved to another location.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-red-800 text-white font-semibold shadow-lg shadow-red-800/20 hover:bg-red-900 hover:-translate-y-0.5 transition-all duration-200"
            >
              ← Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-red-800/20 text-red-800 font-semibold hover:bg-red-800/5 transition-all duration-200"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-red-800/20" />

          <span className="text-sm font-medium text-red-800/60">
            Bangla News 24
          </span>

          <span className="h-px w-16 bg-red-800/20" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;

