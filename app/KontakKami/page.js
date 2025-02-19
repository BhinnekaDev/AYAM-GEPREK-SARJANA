"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Navbar from "@/components/navbar";
import Konten from "@/app/KontakKami/components/konten";
import Loader from "@/components/loader";
// IMAGES
import bgKontak from "@/assets/img/kontak/bg.png";
import bgMobile from "@/assets/img/kontak/bgmobile.png";
import bgIpad from "@/assets/img/kontak/bgipad.png";
// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

    setTimeout(() => setIsLoading(false), 1000);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#FFE893]"
      style={{
        backgroundImage: `url(${
          isMobile ? bgMobile.src : isIpad ? bgIpad.src : bgKontak.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="z-50">
            <Navbar />
          </div>
          <div className="-z-50 lg:pb-4">
            <Konten />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
