"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/Menu/components/konten";
// IMAGE

// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";

function Page() {
  const pengguna = useCekPengguna();
  return (
    <div>
      {pengguna ? (
        <div className="min-h-screen overflow-hidden bg-[#FFE893]">
          <div className="mb-8 lg:mb-0">
            <Navbar />
          </div>

          <div>
            <Beranda />
          </div>
        </div>
      ) : (
        <Toaster position="top-right" reverseOrder={false} />
      )}
    </div>
  );
}

export default Page;
