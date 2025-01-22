"use client";
import React, { useEffect, useState } from "react";
// COMPONENTS
import Biodata from "@/app/Biodata/components/konten";
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
          <div>
            <Biodata />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
