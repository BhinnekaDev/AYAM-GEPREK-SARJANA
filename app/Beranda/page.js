"use client";
import React from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/Beranda/components/konten";
// IMAGE

// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  return (
    <div>
      <div className="min-h-screen overflow-hidden bg-[#FFE893]">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="mb-8 lg:mb-0">
          <Navbar />
        </div>
        <div>
          <Beranda />
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Page;
