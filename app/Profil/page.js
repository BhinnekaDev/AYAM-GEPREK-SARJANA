// page.js
"use client";
import React from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/Profil/components/konten";
// IMAGE

function Page() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FFE893]">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-0">
        <Konten />
      </div>
    </div>
  );
}

export default Page;
