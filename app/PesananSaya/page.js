"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/PesananSaya/components/konten";
import Loader from "@/components/loader";
// IMAGES
import bgRiwayat from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
import bgIpad from "@/assets/img/masuk/responsive/bgIpad.png";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
          isMobile ? bgMobile.src : isIpad ? bgIpad.src : bgRiwayat.src
        })`,
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

          <div className="py-6 lg:py-0">
            <Konten />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
