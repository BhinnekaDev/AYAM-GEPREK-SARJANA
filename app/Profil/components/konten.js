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
      className="min-h-screen flex items-center justify-center px-5"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgProfile.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] border border-gray-400 lg:border-none flex w-full max-w-3xl lg:max-w-4xl shadow-md lg:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <MdArrowBack className="mr-2 text-black cursor-pointer" />
          <Typography className="font-bold text-black text-sm lg:text-md uppercase">
            Profile Saya
          </Typography>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="flex w-full items-center justify-center">
            <Image
              src={fotoProfile}
              alt="Foto Profil"
              className="object-cover lg:w-56 lg:h-56"
            />
          </div>
          <div>
            <form className="space-y-3">
              <div>
                <Typography className=" font-bold text-black lg:text-md">
                  Nama Depan
                </Typography>
                <Input
                  type="text"
                  placeholder="Masukkan Nama Depan"
                  className="w-full rounded-lg bg-white lg:text-md disabled:bg-gray-100"
                  value={namaDepan}
                  onChange={(e) => setNamaDepan(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold lg:text-md">
                  Nama Belakang
                </Typography>
                <Input
                  type="text"
                  placeholder="Masukkan Nama Belakang"
                  className="w-full rounded-lg bg-white lg:text-md disabled:bg-gray-100"
                  value={namaBelakang}
                  onChange={(e) => setNamaBelakang(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold lg:text-md">
                  Email
                </Typography>
                <Input
                  type="email"
                  placeholder="Masukkan Email"
                  className="w-full rounded-lg bg-white lg:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold lg:text-md">
                  Nomor Telepon
                </Typography>
                <Input
                  type="tel"
                  placeholder="Masukkan No Telepon"
                  className="w-full rounded-lg bg-white lg:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={noTelepon}
                  onChange={(e) => setNoTelepon(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold lg:text-md">
                  Alamat
                </Typography>
                <Input
                  type="text"
                  placeholder="Masukkan Alamat Anda"
                  className="w-full rounded-lg bg-white lg:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </form>
            <div className="flex justify-center mt-6 mx-24">
              <Button
                className="w-full py-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-widest rounded-md hover:rounded-2xl hover:scale-95 transform transition-all ease-in-out duration-500"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Simpan" : "Edit"}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
