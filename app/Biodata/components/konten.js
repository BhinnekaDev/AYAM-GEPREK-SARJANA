"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
// IMAGES
import bgBiodata from "@/assets/img/masuk/bg.png";
import bgMobile from "@/assets/img/masuk/mobile/bg.png";
import vektorBiodata from "@/assets/img/masuk/vektor.png";
// HOOKS
import {
  handleSubmitBiodata,
  useFetchUserEmail,
} from "@/hooks/Backend/useBiodata";
import { formatNama } from "@/utils/formatNama";
import { formatNoTelepon } from "@/utils/formatNoTelepon";
import { formatKodePos } from "@/utils/formatKodePos";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useFetchUserEmail(setEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const biodata = {
      namaDepan,
      namaBelakang,
      email,
      noTelepon,
      alamat,
      provinsi,
      kota,
      kecamatan,
      kodePos,
    };
    handleSubmitBiodata(biodata, setLoading, router);
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 lg:px-8"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile.src : bgBiodata.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-white flex flex-col sm:flex-row w-full max-w-xs h-[600px] sm:max-w-5xl sm:h-[550px] shadow-lg p-4">
        <div className="bg-[#AA5656] sm:flex justify-center items-center rounded-xl w-full h-3/5 sm:h-full sm:w-1/2 hidden">
          <Image
            src={vektorBiodata}
            alt="Sarjana Geprek Logo"
            className="w-60 h-60 sm:w-80 sm:h-80"
          />
        </div>
        <div className="hidden sm:flex flex-col items-center p-4 ml-6 w-1/2 space-y-2">
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
                    label="Masukkan Nama Depan"
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
                    label="Masukkan Nama Belakang"
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
                    label="Masukkan Email"
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
                    label="Masukkan No Telepon (08*****)"
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
                <div className="flex justify-end pt-2">
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] px-16 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider"
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
                  <Input
                    type="text"
                    label="Masukkan Nama Provinsi"
                    name="Provinsi"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={provinsi}
                    onChange={(e) => setProvinsi(formatNama(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kota</Typography>
                  <Input
                    type="text"
                    label="Masukkan Nama Kota"
                    name="Kota"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={kota}
                    onChange={(e) => setKota(formatNama(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kecamatan</Typography>
                  <Input
                    type="text"
                    label="Masukkan Nama Kecamatan"
                    name="Kota"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={kecamatan}
                    onChange={(e) => setKecamatan(formatNama(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <Typography className="mb-1">Kode Pos</Typography>
                  <Input
                    type="number"
                    label="Masukkan Kode Pos"
                    name="Kode_Pos"
                    className="w-full bg-white rounded-lg"
                    color="blue-gray"
                    value={kodePos}
                    onChange={(e) => setKodePos(formatKodePos(e.target.value))}
                  />
                </div>
                <div className="flex justify-between lg:pt-2">
                  <Button
                    variant="outlined"
                    className="bg-gray-500 px-16 border-none rounded-full text-white hover:shadow-md transform duration-300 ease-in-out tracking-wider"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] px-16 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="flex justify-center gap-4">
                  <div className="w-full">
                    <Typography className="mb-1">RT</Typography>
                    <Input
                      type="tel"
                      label="Masukkan Nomor RT"
                      name="Kode_Pos"
                      inputMode="numeric"
                      className="w-full bg-white rounded-lg"
                      color="blue-gray"
                    />
                  </div>
                  <div className="w-full">
                    <Typography className="mb-1">RW</Typography>
                    <Input
                      type="tel"
                      label="Masukkan Nomor RW"
                      name="Kode_Pos"
                      inputMode="numeric"
                      className="w-full bg-white rounded-lg"
                      color="blue-gray"
                    />
                  </div>
                </div>
                <div>
                  <Typography className="mb-1">Alamat Jalan</Typography>
                  <Textarea
                    size="md"
                    label="Nama Jalan, Gedung, No. Rumah"
                  ></Textarea>
                </div>
                <div>
                  <Typography className="mb-1">Alamat Detail</Typography>
                  <Textarea
                    size="lg"
                    label="Blok / Unit No. / Patokan"
                  ></Textarea>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outlined"
                    className="bg-gray-500 px-16 border-none rounded-full text-white hover:shadow-md transform duration-300 ease-in-out tracking-wider"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    className="bg-[#CB6040] px-16 border-none rounded-full hover:bg-[#CB6040] text-white hover:shadow-md transform duration-300 ease-in-out tracking-wider"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Mengirim..." : "Simpan"}
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
