"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// COMPONENTS
import Navbar from "@/components/navbar";
import Tentang from "@/app/Tentang/components/konten";
// IMAGE
import bgShape from "@/assets/img/beranda/bgshape.png";
// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";
function Page() {
  const pengguna = useCekPengguna();
  return (
    <div>
      {pengguna ? (
        <div className="overflow-hidden min-h-screen bg-[#FFE893]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 z-0"
          >
            <Image
              src={bgShape}
              alt="Background Shape"
              className="w-full h-auto max-w-3xl object-cover"
              priority
            />
          </motion.div>
          <div className="pt-28 -mb-24">
            <Navbar />
          </div>
          <div>
            <Tentang />
          </div>
        </div>
      ) : (
        <Toaster position="top-right" reverseOrder={false} />
      )}
    </div>
  );
}

export default Page;
