"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// IMAGES
import logoBiodata from "@/assets/img/logo.png";
import bgMasuk from "@/assets/img/masuk/bg.png";
// HOOKS
import handleSubmitBiodata from "@/hooks/Backend/useBiodata";

function halamanBiodata() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "pengguna", user.uid);
        getDoc(userDocRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setEmail(userData.Email);
              console.log("Email ditemukan:", userData.Email);
            } else {
              console.log("Dokumen pengguna tidak ditemukan!");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        console.log("Pengguna tidak terautentikasi");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const biodata = { namaLengkap, email, noTelepon, alamat };

    handleSubmitBiodata(biodata, setLoading, router);
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
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-transparent w-full max-w-md shadow-none py-4 px-8">
        <div className="flex flex-col items-center mb-3">
          <Image
            src={logoBiodata}
            alt="Sarjana Geprek Logo"
            className="w-32 h-32"
          />
          <Typography variant="h4" className="font-bold text-black mb-2">
            Sarjana Geprek
          </Typography>
          <Typography variant="h4" color="gray" className="text-center">
            Lengkapi Biodata
          </Typography>
        </div>
        <CardBody className="bg-[#FFE893] rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Typography className="mb-1">Nama Lengkap</Typography>
              <Input
                type="text"
                label="Masukkan Nama"
                name="Nama_Lengkap"
                className="w-full bg-white"
                color="blue-gray"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Typography className="mb-1">Email</Typography>
              <Input
                type="email"
                label="Masukkan Email"
                name="Email"
                className="w-full bg-white"
                color="blue-gray"
                value={email}
                disabled
              />
            </div>
            <div className="mb-3">
              <Typography className="mb-1">No Telepon</Typography>
              <Input
                type="tel"
                label="Masukkan No Telepon"
                name="No_Telepon"
                inputMode="numeric"
                className="w-full bg-white"
                color="blue-gray"
                value={noTelepon}
                onChange={(e) => setNoTelepon(e.target.value)}
              />
            </div>
            <div>
              <Typography className="mb-1">Alamat</Typography>
              <textarea
                name="Alamat"
                className="w-full bg-white rounded-lg border border-blue-gray-200 p-2 text-black placeholder-blue-gray-500 text-sm"
                rows="4"
                placeholder="Masukkan alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button
                variant="outlined"
                fullWidth
                className="flex items-center justify-center bg-[#cb8f0e] border-black hover:bg-gray-100 hover:text-gray-700 text-white gap-2 tracking-wider"
                type="submit"
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Simpan"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default halamanBiodata;
