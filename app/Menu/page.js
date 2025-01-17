"use client";
import React from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/Menu/components/konten";
// IMAGE

function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#FFE893]">
      <div className="mb-8 lg:mb-0">
        <Navbar />
      </div>

      <div>
        <Beranda />
      </div>
    </div>
  );
}

export default Page;
