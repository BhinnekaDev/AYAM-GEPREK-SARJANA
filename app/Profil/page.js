"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Nav from "@/components/navbar";
import Konten from "@/app/Profil/components/konten";
// IMAGES
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
          className="relative min-h-screen bg-[#FFE893]"
          style={{
            backgroundImage: `url(${isMobile ? bgMobile.src : bgProfile.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Nav />
          <div className="my-6 sm:my-0">
            <Konten />
          </div>
        </div>
      ) : (
        <Toaster position="top-right" reverseOrder={false} />
      )}
    </div>
  );
}

export default Page;
