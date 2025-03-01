import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Typography,
  Button,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
// ICONS
import { CgProfile } from "react-icons/cg";
import { MdArrowBack, MdEdit } from "react-icons/md";
//HOOKS
import { useUpdateProfil } from "@/hooks/Backend/useUpdateProfil";
import useWilayah from "@/api/wilayah";

const Konten = () => {
  const router = useRouter();
  const [activeForm, setActiveForm] = useState("dataDiri");
  const {
    provinsiAPI,
    kabupatenAPI,
    fetchKabupaten,
    kecamatanAPI,
    fetchKecamatan,
  } = useWilayah();
  const [isEditing, setIsEditing] = useState(false);
  const {
    updateProfile,
    formData,
    handleChange,
    profileImage,
    handleImageUpload,
  } = useUpdateProfil();

  useEffect(() => {
    if (formData.Provinsi) {
      const selectedProvinsi = provinsiAPI.find(
        (provinsi) => provinsi.name === formData.Provinsi
      );
      if (selectedProvinsi) {
        fetchKabupaten(selectedProvinsi.id);
      }
    }
  }, [formData.Provinsi, provinsiAPI]);

  useEffect(() => {
    if (formData.Kota) {
      const selectedKabupaten = kabupatenAPI.find(
        (kabupaten) => kabupaten.name === formData.Kota
      );
      if (selectedKabupaten) {
        fetchKecamatan(selectedKabupaten.id);
      }
    }
  }, [formData.Kota, kabupatenAPI]);

  const handleSave = async () => {
    if (isEditing) {
      try {
        await updateProfile(formData);
        setIsEditing(false);
      } catch (error) {
        console.error("Gagal menyimpan profil:", error);
        toast.error("Gagal menyimpan profil. Periksa kembali data Anda.");
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-4xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <CgProfile
            size={20}
            className="mr-2 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack
            className="mr-2 text-black md:hidden cursor-pointer"
            onClick={() => router.back()}
          />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Profile Saya
          </Typography>
        </div>
        <div className="flex justify-center mx-3 sm:mx-0 p-2 gap-2">
          <Button
            onClick={() => setActiveForm("dataDiri")}
            className={`w-full sm:w-32 py-1 border-2 rounded-full shadow-md hover:shadow-md capitalize text-xs sm:text-sm tracking-wider ${
              activeForm === "dataDiri"
                ? "bg-[#AA5656] text-white border-[#AA5656]"
                : "text-[#AA5656] bg-[#AA5656] bg-opacity-0 hover:bg-opacity-60 hover:text-white transition-all duration-300 border-[#AA5656]"
            }`}
          >
            Data Diri
          </Button>
          <Button
            onClick={() => setActiveForm("alamat")}
            className={`w-full sm:w-32 py-1 border-2 rounded-full shadow-md hover:shadow-md capitalize text-xs sm:text-sm tracking-wider ${
              activeForm === "alamat"
                ? "bg-[#AA5656] text-white border-[#AA5656]"
                : "text-[#AA5656] bg-[#AA5656] bg-opacity-0 hover:bg-opacity-60 hover:text-white transition-all duration-300 border-[#AA5656]"
            }`}
          >
            Alamat
          </Button>
        </div>
        <div
          className={`flex flex-col md:grid ${
            activeForm === "alamat" ? "md:grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          <div
            className={`relative flex w-full items-center justify-center ${
              activeForm === "alamat" ? "hidden" : ""
            }`}
          >
            <div className="relative">
              <div className="flex items-center justify-center md:w-56 md:h-56 rounded-full border border-gray-400 shadow-md overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Foto Profil"
                  width={80}
                  height={80}
                  className="object-cover w-36 h-36 md:w-full md:h-full"
                  priority
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
            {activeForm === "dataDiri" && (
              <div className="space-y-4">
                <div>
                  <Typography className=" font-bold text-black md:text-md">
                    Nama Depan
                  </Typography>
                  <Input
                    type="text"
                    name="Nama_Depan"
                    placeholder="Masukan Nama Depan"
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
                    placeholder="Masukan Nama Belakang"
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
                    placeholder="Masukan Alamat Email"
                    className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                    color="blue-gray"
                    value={formData.Email}
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
                    placeholder="contoh 08********"
                    className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100"
                    color="blue-gray"
                    value={formData.No_Telepon}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            )}
            {activeForm === "alamat" && (
              <div className="w-full space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Provinsi
                    </Typography>
                    <Select
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 font-bold text-gray-700"
                      disabled={!isEditing}
                      value={formData.Provinsi || ""}
                      onChange={(value) => {
                        console.log("Provinsi yang dipilih:", value);
                        handleChange({ target: { name: "Provinsi", value } });
                      }}
                    >
                      {provinsiAPI.map((provinsi) => (
                        <Option
                          key={provinsi.id}
                          value={provinsi.name}
                          className={`hover:!bg-black/25 text-gray-600 ${
                            formData.Provinsi === provinsi.name
                              ? "bg-[#AA5656]/50 text-black"
                              : ""
                          }`}
                        >
                          {provinsi.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kota
                    </Typography>
                    <Select
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 font-bold text-gray-700"
                      disabled={!isEditing}
                      value={formData.Kota || ""}
                      onChange={(value) =>
                        handleChange({ target: { name: "Kota", value } })
                      }
                    >
                      {kabupatenAPI.map((kabupaten) => (
                        <Option
                          key={kabupaten.id}
                          value={kabupaten.name}
                          className={`hover:!bg-black/25 text-gray-600 ${
                            formData.Kota === kabupaten.name
                              ? "bg-[#AA5656]/50 text-black"
                              : ""
                          }`}
                        >
                          {kabupaten.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kecamatan
                    </Typography>
                    <Select
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 font-bold text-gray-700"
                      disabled={!isEditing}
                      value={formData.Kecamatan || ""}
                      onChange={(value) =>
                        handleChange({ target: { name: "Kecamatan", value } })
                      }
                    >
                      {kecamatanAPI.map((kecamatan) => (
                        <Option
                          key={kecamatan.id}
                          value={kecamatan.name}
                          className={`hover:!bg-black/25 text-gray-600 ${
                            formData.Kecamatan === kecamatan.name
                              ? "bg-[#AA5656]/50 text-black"
                              : ""
                          }`}
                        >
                          {kecamatan.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      Kode Pos
                    </Typography>
                    <Input
                      type="number"
                      name="Kode_Pos"
                      placeholder="Masukan Nomor Kode Pos"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 !font-bold !text-gray-700"
                      onChange={handleChange}
                      disabled={!isEditing}
                      value={formData.Kode_Pos}
                    />
                  </div>

                  <div>
                    <Typography className=" text-black  font-bold md:text-md">
                      RT
                    </Typography>
                    <Input
                      type="number"
                      name="RT"
                      placeholder="Masukan Nomor RT"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 !font-bold !text-gray-700"
                      onChange={handleChange}
                      disabled={!isEditing}
                      value={formData.RT}
                    />
                  </div>
                  <div>
                    <Typography className=" text-black font-bold md:text-md">
                      RW
                    </Typography>
                    <Input
                      type="number"
                      name="RW"
                      placeholder="Masukan Nomor RW"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 !font-bold !text-gray-700"
                      onChange={handleChange}
                      disabled={!isEditing}
                      value={formData.RW}
                    />
                  </div>
                </div>
                <div className="sm:flex justify-between gap-4 space-y-2 sm:space-y-0">
                  <div className="w-full">
                    <Typography className=" text-black font-bold md:text-md">
                      Alamat Jalan
                    </Typography>
                    <Textarea
                      size="md"
                      name="Alamat_Jalan"
                      placeholder="Nama Jalan, Gedung, No. Rumah"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 !font-bold !text-gray-700"
                      onChange={handleChange}
                      disabled={!isEditing}
                      value={formData.Alamat_Jalan}
                    ></Textarea>
                  </div>
                  <div className="w-full">
                    <Typography className=" text-black font-bold md:text-md">
                      Alamat Detail
                    </Typography>
                    <Textarea
                      size="lg"
                      name="Alamat_Detail"
                      placeholder="Blok / Unit No. / Patokan"
                      className="w-full rounded-lg bg-white md:text-md disabled:bg-gray-100 !font-bold !text-gray-700"
                      onChange={handleChange}
                      disabled={!isEditing}
                      value={formData.Alamat_Detail}
                    ></Textarea>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center mt-4 sm:mt-6 mx-12 sm:mx-24">
              <Button
                className={`w-full py-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-widest rounded-full hover:scale-95 transform transition-all ease-in-out duration-500 ${
                  activeForm === "alamat" ? "sm:w-52 sm:rounded-full" : ""
                }`}
                onClick={() => setIsEditing(true)}
                hidden={isEditing}
              >
                Edit
              </Button>
              {isEditing && (
                <div className="flex flex-row w-full md:justify-between gap-4">
                  <Button
                    className="w-full py-2 bg-gray-400 text-white hover:bg-gray-500 tracking-widest rounded-full hover:scale-95 transform transition-all ease-in-out duration-500 sm:w-52 sm:rounded-full"
                    onClick={() => setIsEditing(false)}
                  >
                    Batal
                  </Button>
                  <Button
                    className="w-full py-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-widest rounded-full hover:scale-95 transform transition-all ease-in-out duration-500 sm:w-52 sm:rounded-full"
                    onClick={handleSave}
                  >
                    Simpan
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
