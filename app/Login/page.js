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
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function halamanMasuk() {
  useEffect(() => {
    console.log("Komponen sudah dirender");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const handleNavDaftar = () => {
    router.push("/Daftar");
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
        <CardBody className="bg-[#FFE893] rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <Typography className="mb-1">Email</Typography>
              <Input
                type="email"
                label="Masukkan Email"
                className="w-full bg-white"
                color="blue-gray"
              />
            </div>
            <div className="mb-6">
              <Typography className="mb-1">Kata Sandi</Typography>
              <Input
                type={showPassword ? "text" : "password"}
                label="Masukkan Password"
                className="w-full bg-white"
                color="blue-gray"
              />
              <div
                className="absolute right-16 bottom-[297px] transform -translate-y-1/2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <LuEyeClosed size={24} /> : <LuEye size={24} />}
              </div>
            </div>
            <Button
              type="submit"
              fullWidth
              className="py-2 font-bold text-gray-200 bg-[#cb8f0e] border border-black hover:bg-gray-200 hover:text-gray-700 hover:border-gray-600"
            >
              Masuk
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Typography
              variant="small"
              className="hover:underline text-black cursor-pointer"
            >
              Forgot password?
            </Typography>
          </div>
        </CardBody>
        <div className="flex justify-between mt-4 mx-4">
          <div className="border-t border-black w-full mt-3" />
          <Typography className="mx-8 text-center">atau</Typography>
          <div className="border-t border-black w-full mt-3" />
        </div>
        <CardFooter className="flex flex-col items-center -mt-3">
          <Button
            variant="outlined"
            fullWidth
            className="flex items-center justify-center bg-[#cb8f0e] border-black hover:bg-gray-100 hover:text-gray-700 text-white gap-2 p-2"
          >
            <FcGoogle size={26} />
            Lanjutkan menggunakan Google
          </Button>
          <div className="flex text-center gap-2 mt-2">
            <Typography variant="small" color="gray">
              Belum punya akun?
            </Typography>
            <Typography
              onClick={handleNavDaftar}
              variant="small"
              className="font-bold hover:underline cursor-pointer"
            >
              Silahkan Daftar
            </Typography>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default halamanMasuk;
