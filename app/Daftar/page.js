"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
// GAMBAR
import logoMasuk from "@/assets/img/masuk/logo.png";
import bgMasuk from "@/assets/img/masuk/bg.png";
// IKON
import { LuEye, LuEyeClosed } from "react-icons/lu";

function halamanDaftar() {
  useEffect(() => {
    console.log("Komponen sudah dirender");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const handleNavMasuk = () => {
    router.push("/Login");
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
      <Card className="bg-transparent w-full max-w-md shadow-none py-4 px-8">
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
            variant="h2"
            color="gray"
            className="text-center text-black"
          >
            Daftar Akun
          </Typography>
        </div>
        <CardBody className="bg-[#FFE893] rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <Typography className="mb-1">Nama</Typography>
              <Input
                type="text"
                label="Masukkan Nama"
                className="w-full bg-white"
                color="blue-gray"
              />
            </div>
            <div className="mb-4">
              <Typography className="mb-1">Email</Typography>
              <Input
                type="email"
                label="Masukkan Email"
                className="w-full bg-white"
                color="blue-gray"
              />
            </div>
            <div className="mb-4">
              <Typography className="mb-1">Kata Sandi</Typography>
              <Input
                type={showPassword ? "text" : "password"}
                label="Masukkan Password"
                className="w-full bg-white"
                color="blue-gray"
              />
              <div
                className="absolute right-16 bottom-[250px] transform -translate-y-1/2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <LuEyeClosed size={24} /> : <LuEye size={24} />}
              </div>
            </div>
            <div className="mb-4">
              <Typography className="mb-1">No Telp</Typography>
              <Input
                type="email"
                label="Masukkan No Telp"
                className="w-full bg-white"
                color="blue-gray"
              />
            </div>
          </form>
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <Button
            variant="outlined"
            fullWidth
            className="flex items-center justify-center bg-[#cb8f0e] border-black hover:bg-gray-100 hover:text-gray-700 text-white gap-2 p-2"
          >
            Daftar
          </Button>
          <div className="flex text-center gap-2 mt-2">
            <Typography variant="small" color="gray">
              Sudah memiliki akun?
            </Typography>
            <Typography
              onClick={handleNavMasuk}
              variant="small"
              className="font-bold hover:underline cursor-pointer"
            >
              Silahkan Masuk
            </Typography>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default halamanDaftar;
