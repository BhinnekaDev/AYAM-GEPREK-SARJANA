"use client";
import React, { useState, useEffect } from "react";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";
import bgProfile from "@/assets/img/profil/bgProfil.png";
import bgMobile from "@/assets/img/profil/mobile/bgProfil.png";
import fotoProfile from "@/assets/img/profil/profil.png";

const Konten = () => {
  const [namaDepan, setNamaDepan] = useState("Hengki");
  const [namaBelakang, setNamaBelakang] = useState("Ganteng");
  const [email, setEmail] = useState("Hengki@example.com");
  const [noTelepon, setNoTelepon] = useState("1234567890");
  const [alamat, setAlamat] = useState("Lembang");
  const [isMobile, setIsMobile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
      <Card className="bg-[#FFF2C2] flex flex-col lg:flex-row w-full max-w-3xl lg:max-w-4xl shadow-lg pt-2 lg:pt-8 pb-2 lg:pb-8 px-6 lg:px-12 z-20">
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
          <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4">
            <Image
              src={fotoProfile}
              alt="Foto Profil"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-6">
          <div className="absolute top-2 left-2 lg:top-4 lg:left-4 flex items-center mb-2">
            <MdArrowBack className="mr-2 text-black cursor-pointer" />
            <Typography
              variant="h6"
              className="font-bold text-black text-xs lg:text-sm"
            >
              PROFILE
            </Typography>
          </div>
          <form className="space-y-2 mb-4">
            <div>
              <Typography className="mb-1 text-black text-xs lg:text-sm">
                Nama Depan
              </Typography>
              <Input
                type="text"
                placeholder="Masukkan Nama Depan"
                className="w-full rounded-lg bg-white text-xs lg:text-sm"
                color="blue-gray"
                value={namaDepan}
                onChange={(e) => setNamaDepan(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs lg:text-sm">
                Nama Belakang
              </Typography>
              <Input
                type="text"
                placeholder="Masukkan Nama Belakang"
                className="w-full rounded-lg bg-white text-xs lg:text-sm"
                color="blue-gray"
                value={namaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs lg:text-sm">
                Email
              </Typography>
              <Input
                type="email"
                placeholder="Masukkan Email"
                className="w-full rounded-lg bg-white text-xs lg:text-sm"
                color="blue-gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs lg:text-sm">
                Nomor Telepon
              </Typography>
              <Input
                type="tel"
                placeholder="Masukkan No Telepon"
                className="w-full rounded-lg bg-white text-xs lg:text-sm"
                color="blue-gray"
                value={noTelepon}
                onChange={(e) => setNoTelepon(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Typography className="mb-1 text-black text-xs lg:text-sm">
                Alamat
              </Typography>
              <Input
                type="text"
                placeholder="Masukkan Alamat Anda"
                className="w-full rounded-lg bg-white text-xs lg:text-sm"
                color="blue-gray"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </form>
          <div className="flex justify-center mt-4">
            <Button
              variant="filled"
              className="w-48 h-10 bg-[#AA5656] text-white rounded-lg hover:bg-[#AA5656] text-xs lg:text-sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Simpan" : "Edit"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
