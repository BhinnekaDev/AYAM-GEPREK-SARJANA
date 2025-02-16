"use client";
import React, { useState, useEffect } from "react";
// COMPONENTS
import Nav from "@/components/navbar";
import Beranda from "@/app/Beranda/components/konten";
import Loader from "@/components/loader";
// HOOKS
import { Toaster } from "react-hot-toast";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFE893]">
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div>
            <Beranda />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
