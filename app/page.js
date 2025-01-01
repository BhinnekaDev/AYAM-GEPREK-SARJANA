"use client";
import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
// GAMBAR
import logoMasuk from "@/assets/img/logo.png";
import bgMasuk from "@/assets/img/masuk/bg.png";
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

  const handleNavBeranda = () => {
    router.push("/Beranda");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#FFBC2B] sm:px-6 lg:px"
      style={{
        backgroundImage: `url(${bgMasuk.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-transparent w-full max-w-md shadow-none p-8">
        <div className="flex flex-col items-center mb-3">
          <Image
            src={logoMasuk}
            alt="Sarjana Geprek Logo"
            className="w-32 h-32"
          />
          <Typography variant="h4" className="font-bold text-black mb-2">
            Sarjana Geprek
          </Typography>
          <Typography
            variant="h3"
            color="gray"
            className="text-center text-black"
          >
            Login
          </Typography>
        </div>
        <CardBody className="bg-[#FFE893] rounded-xl shadow-md w-full">
          <div className="text-center">
            <Typography className="font-bold text-lg">Masuk dengan:</Typography>
            <div className="flex items-center justify-center my-5">
              <Button
                variant="outlined"
                onClick={masukDenganGoogle}
                disabled={sedangMemuatMasukDenganGoogle}
                className={`flex text-center items-center justify-center bg-[#cb8f0e] border-black border-2 hover:bg-[#ebc87d] p-5 rounded-full ${
                  sedangMemuatMasukDenganGoogle
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <FcGoogle size={50} />
              </Button>
            </div>
            {sedangMemuatMasukDenganGoogle && (
              <Typography className="mt-2 text-sm text-gray-600">
                Sedang memuat, harap tunggu...
              </Typography>
            )}
          </div>
        </CardBody>
        <div className="flex justify-between mt-5">
          <div className="border-t w-full border-black mt-3" />
          <Typography className="mx-4 w-full text-center font-bold">
            Sarjana Geprek?
          </Typography>
          <div className="border-t w-full border-black mt-3" />
        </div>
        <CardFooter className="flex flex-col items-center -mt-5">
          <div className="flex text-center gap-1 mt-2">
            <Typography
              onClick={handleNavBeranda}
              variant="small"
              color="gray"
              className="font-bold hover:underline cursor-pointer"
            >
              Cek Disini !
            </Typography>
            <Typography variant="small">
              Untuk melihat detail lebih lanjut.
            </Typography>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default halamanMasuk;
