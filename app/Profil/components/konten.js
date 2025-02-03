import React, { useState } from "react";
import {
  Card,
  Input,
  Typography,
  Button,
  Textarea,
} from "@material-tailwind/react";
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
          <div className="sm:overflow-y-auto">
            <div className="sm:overflow-y-auto md:max-h-[400px]">
              <form className="space-y-3">
                <div className="sm:flex space-y-3 sm:space-y-0 gap-0 sm:gap-2">
                  <div>
                    <Typography className=" font-bold text-black md:text-md">
                      Nama Depan
                    </Typography>
                    <Input
                      type="text"
                      name="Nama_Depan"
                      label="Masukkan Nama Depan"
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
                      label="Masukkan Nama Belakang"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      value={formData.Nama_Belakang}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Typography className=" text-black font-bold md:text-md">
                    Email
                  </Typography>
                  <Input
                    type="email"
                    label="Masukkan Email"
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
                    label="Masukkan No Telepon"
                    className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                    color="blue-gray"
                    value={formData.No_Telepon}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="sm:flex space-y-3 sm:space-y-0 gap-0 sm:gap-2">
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Provinsi
                    </Typography>
                    <Input
                      type="text"
                      name="Provinsi"
                      label="Masukkan Nama Provinsi"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kota
                    </Typography>
                    <Input
                      type="text"
                      name="Kota"
                      label="Masukkan Nama Kota"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="sm:flex space-y-3 sm:space-y-0 gap-0 sm:gap-2">
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kecamatan
                    </Typography>
                    <Input
                      type="text"
                      name="Kecamatan"
                      label="Masukkan Nama Kecamatan"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kode Pos
                    </Typography>
                    <Input
                      type="tel"
                      name="Kode_Pos"
                      label="Masukkan Nomor Kode Pos"
                      inputMode="numeric"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="sm:flex space-y-3 sm:space-y-0 gap-0 sm:gap-2">
                  <div>
                    <Typography className=" text-black  font-bold md:text-md">
                      RT
                    </Typography>
                    <Input
                      type="tel"
                      name="RT"
                      label="Masukkan Nomor RT"
                      inputMode="numeric"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      RW
                    </Typography>
                    <Input
                      type="tel"
                      name="RW"
                      label="Masukkan Nomor RW"
                      inputMode="numeric"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                      color="blue-gray"
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Typography className=" text-black font-bold md:text-md">
                    Alamat Jalan
                  </Typography>
                  <Textarea
                    size="md"
                    label="Nama Jalan, Gedung, No. Rumah"
                    className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                    color="blue-gray"
                    onChange={handleChange}
                    disabled={!isEditing}
                  ></Textarea>
                </div>
                <div>
                  <Typography className=" text-black font-bold md:text-md">
                    Alamat Detail
                  </Typography>
                  <Textarea
                    size="lg"
                    label="Blok / Unit No. / Patokan"
                    className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                    color="blue-gray"
                    onChange={handleChange}
                    disabled={!isEditing}
                  ></Textarea>
                </div>
              </form>
            </div>
            <div className="flex justify-center mt-4 sm:mt-6 mx-12 sm:mx-24">
              <Button
                className="w-full py-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-widest rounded-full sm:rounded-md hover:rounded-2xl hover:scale-95 transform transition-all ease-in-out duration-500"
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
