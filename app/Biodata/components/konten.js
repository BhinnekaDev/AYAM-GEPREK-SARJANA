"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
// IMAGES
import bgBiodata from "@/assets/img/masuk/bg.png";
import bgMobile from "@/assets/img/masuk/responsive/bgMobile.png";
import bgIpad from "@/assets/img/masuk/responsive/bgIpad.png";
import vektorBiodata from "@/assets/img/masuk/vektor.png";
// HOOKS
import {
  handleSubmitBiodata,
  useFetchUserEmail,
} from "@/hooks/Backend/useBiodata";
import useWilayah from "@/api/wilayah";
import { formatNama } from "@/utils/formatNama";
import { formatNoTelepon } from "@/utils/formatNoTelepon";
import { formatAlamat } from "@/utils/formatAlamat";
import { formatKodePos } from "@/utils/formatKodePos";
import { formatRT } from "@/utils/formatRT";
import { formatRW } from "@/utils/formatRW";
// COMPONENTS
import Loader from "@/components/loader";

function halamanBiodata() {
  const [step, setStep] = useState(1);
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [RT, setRT] = useState("");
  const [RW, setRW] = useState("");
  const [alamatJalan, setAlamatJalan] = useState("");
  const [alamatDetail, setAlamatDetail] = useState("");
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {
    provinsiAPI,
    kabupatenAPI,
    kecamatanAPI,
    fetchKabupaten,
    fetchKecamatan,
  } = useWilayah();

  useFetchUserEmail(setEmail);
  useEffect(() => {
    if (provinsi) {
      const selectedProvinsi = provinsiAPI.find((p) => p.name === provinsi);
      if (selectedProvinsi) {
        fetchKabupaten(selectedProvinsi.id);
      }
    }
  }, [provinsi, provinsiAPI, fetchKabupaten]);

  useEffect(() => {
    if (kota) {
      const selectedKabupaten = kabupatenAPI.find((k) => k.name === kota);
      if (selectedKabupaten) {
        fetchKecamatan(selectedKabupaten.id);
      }
    }
  }, [kota, kabupatenAPI, fetchKecamatan]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsIpad(width >= 640 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    setTimeout(() => setIsLoading(false), 1000);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const biodata = {
      namaDepan,
      namaBelakang,
      email,
      noTelepon,
      provinsi,
      kota,
      kecamatan,
      kodePos,
      RT,
      RW,
      alamatJalan,
      alamatDetail,
    };
    handleSubmitBiodata(biodata, setIsLoading, router);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 lg:px-8"
      style={{
        backgroundImage: `url(${
          isMobile ? bgMobile.src : isIpad ? bgIpad.src : bgBiodata.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-white flex flex-col w-full max-w-xs border border-gray-400 h-auto shadow-lg p-4 md:max-w-2xl md:flex-row lg:flex-row lg:max-w-5xl lg:h-[550px] lg:gap-6">
        <div className="bg-[#AA5656] flex justify-center items-center rounded-xl w-full h-3/5 md:w-full md:h-auto lg:h-full lg:w-1/2">
          <Image
            src={vektorBiodata}
            alt="Sarjana Geprek Logo"
            className="w-60 h-60 lg:w-80 lg:h-80"
          />
        </div>
        <div className="flex flex-col w-full items-center p-4 space-y-2 lg:w-1/2">
          <Typography
            variant="h2"
            className="font-bold text-black mb-2 text-center"
          >
            Biodata
          </Typography>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {step === 1 && (
              <>
                <div className="mb-3">
                  <Typography className="mb-1">Nama Depan</Typography>
                  <Input
                    type="text"
                    placeholder="Masukkan Nama Depan"
                    name="Nama_Depan"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={namaDepan}
                    onChange={(e) => setNamaDepan(formatNama(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Nama Belakang</Typography>
                  <Input
                    type="text"
                    placeholder="Masukkan Nama Belakang"
                    name="Nama_Belakang"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={namaBelakang}
                    onChange={(e) =>
                      setNamaBelakang(formatNama(e.target.value))
                    }
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Email</Typography>
                  <Input
                    type="email"
                    placeholder="Masukkan Email"
                    name="Email"
                    className="w-full rounded-lg bg-white disabled:bg-white disabled:border-blue-gray-200 disabled:border-[1px]"
                    color="blue-gray"
                    value={email}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">No Telepon</Typography>
                  <Input
                    type="tel"
                    placeholder="Masukkan No Telepon (08*****)"
                    name="No_Telepon"
                    inputMode="numeric"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={noTelepon}
                    onChange={(e) =>
                      setNoTelepon(formatNoTelepon(e.target.value))
                    }
                  />
                </div>
                <div className="flex w-full justify-center pt-2 lg:justify-end">
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] w-full p-2 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider lg:w-1/3"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="mb-3">
                  <Typography className="mb-1">Provinsi</Typography>
                  <Select
                    className="w-full bg-white text-black rounded-lg"
                    color="blue-gray"
                    value={provinsi}
                    onChange={(value) => setProvinsi(value)}
                  >
                    {provinsiAPI.length > 0 ? (
                      provinsiAPI.map((item) => (
                        <Option
                          key={item.id}
                          value={item.name}
                          className="text-black"
                        >
                          {item.name}
                        </Option>
                      ))
                    ) : (
                      <Option disabled>Loading...</Option>
                    )}
                  </Select>
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kota</Typography>
                  <Select
                    className="w-full bg-white text-black rounded-lg"
                    color="blue-gray"
                    value={kota}
                    onChange={(value) => setKota(value)}
                    disabled={!provinsi}
                  >
                    {kabupatenAPI.length > 0 ? (
                      kabupatenAPI.map((item) => (
                        <Option
                          key={item.id}
                          value={item.name}
                          className="text-black"
                        >
                          {item.name}
                        </Option>
                      ))
                    ) : (
                      <Option disabled>Loading...</Option>
                    )}
                  </Select>
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kecamatan</Typography>
                  <Select
                    className="w-full bg-white text-black rounded-lg"
                    color="blue-gray"
                    value={kecamatan}
                    onChange={(value) => setKecamatan(value)}
                    disabled={!kota || kecamatanAPI.length === 0}
                  >
                    {kecamatanAPI.length > 0 ? (
                      kecamatanAPI.map((item) => (
                        <Option
                          key={item.id}
                          value={item.name}
                          className="text-black"
                        >
                          {item.name}
                        </Option>
                      ))
                    ) : (
                      <Option disabled>Data Kecamatan Tidak Tersedia</Option>
                    )}
                  </Select>
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kode Pos</Typography>
                  <Input
                    type="number"
                    placeholder="Masukkan Kode Pos"
                    name="Kode_Pos"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={kodePos}
                    onChange={(e) => setKodePos(formatKodePos(e.target.value))}
                  />
                </div>
                <div className="flex w-full justify-center gap-4 pt-2 lg:gap-0 lg:justify-between">
                  <Button
                    variant="outlined"
                    className="bg-gray-500 w-full p-2 border-none rounded-full hover:bg-[#CB6040] text-white hover:shadow-md transform duration-300 ease-in-out tracking-wider lg:w-1/3"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] w-full p-2 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider lg:w-1/3"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="flex flex-col justify-center gap-4 lg:flex-row">
                  <div className="w-full">
                    <Typography className="mb-1">RT</Typography>
                    <Input
                      type="text"
                      placeholder="Masukkan Nomor RT"
                      name="RT"
                      className="w-full bg-white rounded-lg"
                      color="blue-gray"
                      value={RT}
                      onChange={(e) => setRT(formatRT(e.target.value))}
                    />
                  </div>
                  <div className="w-full">
                    <Typography className="mb-1">RW</Typography>
                    <Input
                      type="text"
                      placeholder="Masukkan Nomor RT"
                      name="RW"
                      className="w-full bg-white rounded-lg"
                      color="blue-gray"
                      value={RW}
                      onChange={(e) => setRW(formatRW(e.target.value))}
                    />
                  </div>
                </div>
                <div>
                  <Typography className="mb-1">Alamat Jalan</Typography>
                  <Textarea
                    size="md"
                    placeholder="Nama Jalan, Gedung, No. Rumah"
                    name="Alamat_Jalan"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={alamatJalan}
                    onChange={(e) =>
                      setAlamatJalan(formatAlamat(e.target.value))
                    }
                  ></Textarea>
                </div>
                <div>
                  <Typography className="mb-1">Alamat Detail</Typography>
                  <Textarea
                    size="lg"
                    placeholder="Blok / Unit No. / Patokan"
                    name="Alamat_Detail"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={alamatDetail}
                    onChange={(e) =>
                      setAlamatDetail(formatAlamat(e.target.value))
                    }
                  ></Textarea>
                </div>
                <div className="flex w-full justify-center gap-4 pt-2 lg:gap-0 lg:justify-between">
                  <Button
                    variant="outlined"
                    className="bg-gray-500 w-full p-2 border-none rounded-full hover:bg-[#CB6040] text-white hover:shadow-md transform duration-300 ease-in-out tracking-wider lg:w-1/3"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] w-full p-2 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider lg:w-1/3"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Mengirim..." : "Simpan"}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </Card>
    </div>
  );
}

export default halamanBiodata;
