// page.js
"use client";
import React from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/Profil/components/konten";

function Page() {
  return (
    <div className="overflow-hidden min-h-screen bg-[#FFE893]">
      <div>
        <Navbar />
      </div>

      <div>
        <Konten />
      </div>
    </div>
  );
}

export default Page;
