"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/DetailPesanan/components/konten";
import Loader from "@/components/loader";
// IMAGES
import bgRiwayat from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
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
      className="overflow-hidden min-h-screen bg-[#FFE893]"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgRiwayat.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Navbar />
          </div>

          <div className="py-6 sm:py-0">
            <Konten />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
