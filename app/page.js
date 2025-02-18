"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
// GAMBAR
import logoMasuk from "@/assets/img/logo.png";
import bgMasuk from "@/assets/img/masuk/bg.png";
import bgMobile from "@/assets/img/masuk/responsive/bgMobile.png";
import bgIpad from "@/assets/img/masuk/responsive/bgIpad.png";
import vektorMasuk from "@/assets/img/masuk/vektor.png";
// IKON
import { FcGoogle } from "react-icons/fc";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
// HOOK
import useMasukDenganGoogle from "@/hooks/Backend/useMasukDenganGoogle";
// COMPONENTS
import Loader from "@/components/loader";

function halamanMasuk() {
  const router = useRouter();
  const { masukDenganGoogle, sedangMemuatMasukDenganGoogle } =
    useMasukDenganGoogle();
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 lg:px-8"
      style={{
        backgroundImage: `url(${
          isMobile ? bgMobile.src : isIpad ? bgIpad.src : bgMasuk.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-white flex flex-col w-full max-w-xs h-[600px] shadow-lg p-4 md:flex-row md:max-w-2xl md:h-[400px] lg:flex-row lg:max-w-5xl lg:h-[500px]">
        <div className="bg-[#AA5656] flex justify-center items-center rounded-xl w-full h-3/5 md:w-full md:h-auto lg:h-full lg:w-1/2">
          <Image
            src={vektorMasuk}
            alt="Sarjana Geprek Logo"
            className="w-60 h-60 lg:w-80 lg:h-80"
          />
        </div>
        <div className="flex flex-col items-center w-full lg:p-10 mt-6 lg:mt-0 lg:ml-6 lg:w-1/2 lg:space-y-2">
          <Image
            src={logoMasuk}
            alt="Sarjana Geprek Logo"
            className="w-20 h-20 hidden md:block lg:w-32 lg:h-32 lg:block "
          />
          <Typography
            variant="h3"
            className="font-bold text-black hidden mb-2 md:text-2xl lg:text-3xl lg:block"
          >
            Ayam Geprek Sarjana
          </Typography>
          <Typography
            variant="h3"
            color="gray"
            className="text-center text-black hidden lg:block lg:text-2xl"
          >
            Masuk
          </Typography>
          <Typography
            variant="h3"
            color="gray"
            className="text-center text-black lg:hidden"
          >
            Selamat Datang!
          </Typography>
          <div className="text-center mt-2">
            <Typography className="font-bold text-md hidden lg:block">
              Silahkan ketuk tombol dibawah untuk melanjutkan!
            </Typography>
            <Typography className="font-bold text-md lg:hidden">
              Di Ayam Geprek Sarjana, Silahkan ketuk tombol dibawah untuk
              melanjutkan!
            </Typography>
            <div className="flex items-center text-center justify-center my-6 md:mt-12 lg:mt-8">
              <Button
                onClick={masukDenganGoogle}
                disabled={sedangMemuatMasukDenganGoogle}
                className={`flex items-center py-1 px-3 text-xs justify-center gap-2 shadow-lg bg-[#FF0000] bg-opacity-50 border-none 
                            hover:bg-[#FF0000] hover:bg-opacity-60 hover:shadow-md hover:scale-110 transform duration-300 ease-in-out rounded-full md:p-2 lg:p-3   
                            ${
                              sedangMemuatMasukDenganGoogle
                                ? "cursor-not-allowed opacity-80"
                                : ""
                            }`}
              >
                {sedangMemuatMasukDenganGoogle ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FcGoogle className="bg-white rounded-full w-5 h-5" />
                    Lanjutkan dengan Google
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center text-center justify-center mt-4">
              <Button
                onClick={() => router.push("/Beranda")}
                className={`relative flex items-center p-0 gap-1 hover:gap-0 justify-center bg-transparent text-gray-700 shadow-none hover:shadow-none 
                transition-all ease-in-out duration-300
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:w-0 after:bg-gray-700 
                after:transition-all after:duration-500
                hover:after:w-full
                ${sedangMemuatMasukDenganGoogle ? "cursor-not-allowed" : ""}`}
              >
                <TiChevronRightOutline className="w-4 h-4" />
                Lanjutkan tanpa Google
                <TiChevronLeftOutline className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default halamanMasuk;
