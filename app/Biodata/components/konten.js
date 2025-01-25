"use client";
import React, { useState, useEffect } from "react";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// IMAGES
import logoBiodata from "@/assets/img/logo.png";
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
import { formatAlamat } from "@/utils/formatAlamat";

function halamanBiodata() {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
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
        <div className="flex flex-col items-center sm:p-4 sm:ml-6 w-full sm:w-1/2 sm:space-y-2">
          <Typography
            variant="h2"
            className="font-bold text-black mb-2 text-center sm:text-left"
          >
            Biodata
          </Typography>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div>
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
              <div>
                <Typography className="mb-1">Nama Belakang</Typography>
                <Input
                  type="text"
                  label="Masukkan Nama Belakang"
                  name="Nama_Belakang"
                  className="w-full bg-white rounded-lg"
                  color="blue-gray"
                  value={namaBelakang}
                  onChange={(e) => setNamaBelakang(formatNama(e.target.value))}
                />
              </div>
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
                onChange={(e) => setNoTelepon(formatNoTelepon(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <Typography className="mb-1">Alamat</Typography>
              <Input
                type="text"
                label="Masukkan Alamat"
                name="Alamat"
                className="w-full bg-white rounded-lg"
                color="blue-gray"
                value={alamat}
                onChange={(e) => setAlamat(formatAlamat(e.target.value))}
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outlined"
                className="bg-[#CB6040] px-28 lg:px-32 border-none rounded-full hover:bg-[#CB6040] text-gray-300 hover:shadow-md transform duration-300 ease-in-out tracking-wider"
                type="submit"
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Simpan"}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default halamanBiodata;
