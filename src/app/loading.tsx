
import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#faf7f7] flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">

        {/* Logo / Brand */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#800020]">
            Bangla News 24
          </h1>

          <div className="h-1 w-12 bg-[#800020] rounded-full mx-auto mt-3" />
        </div>

        {/* Loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#800020]/10" />

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#800020] animate-spin" />
        </div>

        {/* Text */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800">
            Loading...
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please wait while we fetch the latest news.
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-12 bg-[#800020]/20" />

          <span className="text-xs font-medium text-[#800020]/60">
            Stay Updated
          </span>

          <span className="h-px w-12 bg-[#800020]/20" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
