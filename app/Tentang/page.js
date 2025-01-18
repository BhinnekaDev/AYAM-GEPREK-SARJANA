"use client";
import React from "react";
import Image from "next/image";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/Tentang/components/konten";
// IMAGE
import bgShape from "@/assets/img/beranda/bgshape.png";

function Page() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FFE893]">
      <div className="absolute top-0 right-0 z-0">
        <Image
          src={bgShape}
          alt="Background Shape"
          className="w-full h-auto max-w-3xl object-cover"
          priority
        />
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-20">
        <Beranda />
      </div>
    </div>
  );
}

export default Page;
