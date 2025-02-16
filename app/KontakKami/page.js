"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/KontakKami/components/konten";
import Loader from "@/components/loader";
// IMAGES
import bgKontak from "@/assets/img/kontak/bg.png";
import bgMobile from "@/assets/img/kontak/bgmobile1.png";
// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      className="min-h-screen overflow-hidden bg-[#FFE893]"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgKontak.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="z-50 sm:mb-20">
            <Navbar />
          </div>
          <div className="-z-50 mb-4 sm:mb-0">
            <Konten />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
