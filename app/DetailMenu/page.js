"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/DetailMenu/components/konten";
import Loader from "@/components/loader";
// IMAGE
import bgProfile from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pengguna = useCekPengguna();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="overflow-hidden min-h-screen bg-[#FFE893]"
      style={{
        backgroundImage: `url(${
          isMobile ? String(bgMobile) : String(bgProfile)
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading ? (
        <Loader />
      ) : pengguna ? (
        <>
          <Navbar />
          <div className="py-6 lg:py-0">
            <Konten />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Page;
