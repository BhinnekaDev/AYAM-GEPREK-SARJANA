"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/Keranjang/components/konten";
import Loader from "@/components/loader";
// IMAGE
import bgKeranjang from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
import bgIpad from "@/assets/img/masuk/responsive/bgIpad.png";
// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isIpad, setIsIpad] = useState(false);
  const pengguna = useCekPengguna();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsIpad(width >= 640 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="overflow-hidden min-h-screen bg-[#FFE893]"
      style={{
        backgroundImage: `url(${
          isMobile ? bgMobile.src : isIpad ? bgIpad.src : bgKeranjang.src
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
          <div className="my-6 md:py-52 lg:py-12 lg:m-0">
            <Konten />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Page;
