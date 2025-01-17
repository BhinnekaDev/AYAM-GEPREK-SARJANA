"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
// GAMBAR
import logoMasuk from "@/assets/img/logo.png";
import bgMasuk from "@/assets/img/masuk/bg.png";
import bgMobile from "@/assets/img/masuk/mobile/bg.png";
import vektorMasuk from "@/assets/img/masuk/vektor.png";
// IKON
import { FcGoogle } from "react-icons/fc";
// HOOK
import useMasukDenganGoogle from "@/hooks/Backend/useMasukDenganGoogle";

function halamanMasuk() {
  const router = useRouter();
  const { masukDenganGoogle, sedangMemuatMasukDenganGoogle } =
    useMasukDenganGoogle();

  useEffect(() => {
    console.log("Komponen sudah dirender");
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 lg:px-8"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgMasuk.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-white flex flex-col sm:flex-row w-full max-w-xs h-[600px] lg:max-w-5xl lg:h-[500px] shadow-lg p-4">
        <div className="bg-[#AA5656] flex justify-center items-center rounded-xl w-full h-3/5 lg:h-full lg:w-1/2">
          <Image
            src={vektorMasuk}
            alt="Sarjana Geprek Logo"
            className="w-60 h-60 lg:w-80 lg:h-80"
          />
        </div>
        <div className="flex flex-col items-center lg:p-10 mt-6 lg:mt-0 lg:ml-6 w-full lg:w-1/2 lg:space-y-2">
          <Image
            src={logoMasuk}
            alt="Sarjana Geprek Logo"
            className="w-20 h-20 lg:w-32 lg:h-32 lg:block hidden"
          />
          <Typography
            variant="h3"
            className="font-bold text-black md:text-2xl mb-2 hidden lg:block"
          >
            Ayam Geprek Sarjana
          </Typography>
          <Typography
            variant="h3"
            color="gray"
            className="text-center text-black hidden lg:block lg:text-3xl"
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
            <div className="flex items-center text-center justify-center mt-7">
              <Button
                onClick={masukDenganGoogle}
                disabled={sedangMemuatMasukDenganGoogle}
                className={`flex items-center justify-center gap-2 shadow-lg bg-[#FF0000] bg-opacity-50 border-none hover:bg-[#FF0000] hover:bg-opacity-60 hover:shadow-md hover:scale-110 transform duration-300 ease-in-out rounded-full  ${
                  sedangMemuatMasukDenganGoogle ? "cursor-not-allowed" : ""
                }`}
              >
                <FcGoogle size={30} className="bg-white rounded-full" />
                Lanjutkan dengan Google
              </Button>
            </div>
            {sedangMemuatMasukDenganGoogle && (
              <Typography className="mt-2 text-lg text-gray-600">
                Sedang memuat, harap tunggu...
              </Typography>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default halamanMasuk;
