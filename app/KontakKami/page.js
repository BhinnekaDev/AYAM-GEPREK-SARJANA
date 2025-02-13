"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Beranda from "@/app/KontakKami/components/konten";
// IMAGES
import bgKontak from "@/assets/img/kontak/bg.png";
import bgMobile from "@/assets/img/kontak/bgmobile1.png";
// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div>
      <div
        className="min-h-screen overflow-hidden bg-[#FFE893]"
        style={{
          backgroundImage: `url(${isMobile ? bgMobile.src : bgKontak.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className="z-50">
          <Navbar />
        </div>
        <div className="-z-50">
          <Beranda />
        </div>
      </div>
    </div>
  );
}

export default Page;
