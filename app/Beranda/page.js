"use client";
import React from "react";
// COMPONENTS
import Nav from "@/components/navbar";
import Beranda from "@/app/Beranda/components/konten";
// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  return (
    <div className="relative min-h-screen bg-[#FFE893]">
      <Toaster position="top-right" reverseOrder={false} />
      <Nav />
      <main>
        <Beranda />
      </main>
    </div>
  );
}

export default Page;
