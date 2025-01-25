import React, { useState, useEffect } from "react";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
// ICONS
import { CgProfile } from "react-icons/cg";
import { MdArrowBack, MdEdit } from "react-icons/md";

//HOOKS
import { useAmbilProfil } from "@/hooks/Backend/useAmbilProfil";
import { useUpdateProfil } from "@/hooks/Backend/useUpdateProfil";

const Konten = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profilData } = useAmbilProfil();
  const {
    updateProfile,
    formData,
    handleChange,
    profileImage,
    handleImageUpload,
  } = useUpdateProfil();

  const handleSave = async () => {
    if (isEditing) {
      await updateProfile(formData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-4xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <CgProfile
            size={20}
            className="mr-2 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack className="mr-2 text-black md:hidden cursor-pointer" />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Profile Saya
          </Typography>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2">
          <div className="relative flex w-full items-center justify-center">
            <div className="relative">
              <div className="flex items-center justify-center md:w-56 md:h-56 rounded-full border border-gray-400 shadow-md overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Foto Profil"
                  width={80}
                  height={80}
                  className="object-cover w-36 h-36 md:w-full md:h-full"
                />
                {isEditing && (
                  <div className="flex items-center justify-center bg-black bg-opacity-15 rounded-full w-full h-full absolute inset-0 cursor-pointer">
                    <MdEdit className="text-black w-7 h-7 md:w-9 md:h-9" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-3">
              <div>
                <Typography className=" font-bold text-black md:text-md">
                  Nama Depan
                </Typography>
                <Input
                  type="text"
                  name="Nama_Depan"
                  placeholder="Masukkan Nama Depan"
                  className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                  value={formData.Nama_Depan}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold md:text-md">
                  Nama Belakang
                </Typography>
                <Input
                  type="text"
                  name="Nama_Belakang"
                  placeholder="Masukkan Nama Belakang"
                  className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                  value={formData.Nama_Belakang}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold md:text-md">
                  Email
                </Typography>
                <Input
                  type="email"
                  placeholder="Masukkan Email"
                  className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={profilData?.Email || ""}
                  disabled
                />
              </div>
              <div>
                <Typography className=" text-black font-bold md:text-md">
                  Nomor Telepon
                </Typography>
                <Input
                  type="tel"
                  name="No_Telepon"
                  placeholder="Masukkan No Telepon"
                  className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={formData.No_Telepon}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Typography className=" text-black font-bold md:text-md">
                  Alamat
                </Typography>
                <Input
                  type="text"
                  name="Alamat"
                  placeholder="Masukkan Alamat Anda"
                  className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                  color="blue-gray"
                  value={formData.Alamat}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </form>
            <div className="flex justify-center mt-6 mx-24">
              <Button
                className="w-full py-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-widest rounded-md hover:rounded-2xl hover:scale-95 transform transition-all ease-in-out duration-500"
                onClick={() => {
                  if (isEditing) {
                    handleSave();
                  } else {
                    setIsEditing(!isEditing);
                  }
                }}
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
