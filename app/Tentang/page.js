"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// COMPONENTS
import Navbar from "@/components/navbar";
import Tentang from "@/app/Tentang/components/konten";
import Loader from "@/components/loader";
// IMAGE
import bgShape from "@/assets/img/beranda/bgshape.png";
// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const pengguna = useCekPengguna();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden min-h-screen bg-[#FFE893]">
      <Toaster position="top-right" reverseOrder={false} />

      {isLoading ? (
        <Loader />
      ) : pengguna ? (
        <>
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

          <Navbar />
          <div className="py-2 sm:py-0">
            <Tentang />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Page;
