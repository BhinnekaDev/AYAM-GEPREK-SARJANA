"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/DetailMenu/components/konten";
import bgProfile from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
// HOOKS
import { Toaster } from "react-hot-toast";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";
function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const pengguna = useCekPengguna();
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div>
      {pengguna ? (
        <div
          className="overflow-hidden min-h-screen bg-[#FFE893]"
          style={{
            backgroundImage: `url(${isMobile ? bgMobile.src : bgProfile.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Toaster position="top-right" reverseOrder={false} />
          <div>
            <Navbar />
          </div>
          <div className="py-6 sm:py-0">
            <Konten />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Page;
