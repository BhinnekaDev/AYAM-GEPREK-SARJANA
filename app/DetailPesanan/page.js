"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/DetailPesanan/components/konten";
// IMAGES
import bgRiwayat from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
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
        className="overflow-hidden min-h-screen bg-[#FFE893]"
        style={{
          backgroundImage: `url(${isMobile ? bgMobile.src : bgRiwayat.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Navbar />
        </div>

        <div className="my-6 lg:m-0">
          <Konten />
        </div>
      </div>
    </div>
  );
}

export default Page;
