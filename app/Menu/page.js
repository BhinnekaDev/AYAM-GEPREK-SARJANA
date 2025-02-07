"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/Menu/components/konten";

// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  return (
    <div>
      <div className="min-h-screen overflow-hidden bg-[#FFE893]">
        <div className="pt-28 -mb-14 lg:mb-0">
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
