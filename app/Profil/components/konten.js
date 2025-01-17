"use client";
import React, { useState, useEffect } from "react";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { MdPerson, MdArrowBack } from "react-icons/md";
import bgProfile from "@/assets/img/profil/bgProfil.png"; // Background image default
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png"; // Background image mobile
import fotoProfile from "@/assets/img/profil/profil.png";

const Konten = () => {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 lg:px-8"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgProfile.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] flex flex-col sm:flex-row w-full max-w-3xl sm:max-w-4xl shadow-lg pt-8 sm:pt-16 pb-6 sm:pb-12 px-6 sm:px-10 z-20">
        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
            <Image
              src={fotoProfile}
              alt="Foto Profil"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/3 sm:pl-6">
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center mb-2">
            <MdArrowBack className="mr-2 text-black cursor-pointer" />
            <Typography
              variant="h6"
              className="font-bold text-black text-sm sm:text-base"
            >
              PROFILE
            </Typography>
          </div>
          <form className="space-y-2 mb-4">
            <div>
              <Typography className="mb-1 text-black text-xs sm:text-sm">
                Nama Depan
              </Typography>
              <Input
                type="text"
                placeholder="Masukkan Nama Depan"
                className="w-full rounded-lg bg-white text-xs sm:text-sm"
                color="blue-gray"
                value={namaDepan}
                onChange={(e) => setNamaDepan(e.target.value)}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs sm:text-sm">
                Nama Belakang
              </Typography>
              <Input
                type="text"
                placeholder="Masukkan Nama Belakang"
                className="w-full rounded-lg bg-white text-xs sm:text-sm"
                color="blue-gray"
                value={namaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value)}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs sm:text-sm">
                Email
              </Typography>
              <Input
                type="email"
                placeholder="Masukkan Email"
                className="w-full rounded-lg bg-white text-xs sm:text-sm"
                color="blue-gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs sm:text-sm">
                Nomor Telepon
              </Typography>
              <Input
                type="tel"
                placeholder="Masukkan No Telepon"
                className="w-full rounded-lg bg-white text-xs sm:text-sm"
                color="blue-gray"
                value={noTelepon}
                onChange={(e) => setNoTelepon(e.target.value)}
              />
            </div>
          </form>
          <div className="flex justify-center mt-6">
            <Button
              variant="filled"
              className="w-60 h-10 bg-[#AA5656] text-white rounded-lg hover:bg-[#AA5656] text-xs sm:text-sm"
            >
              Edit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
