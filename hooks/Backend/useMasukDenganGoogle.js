import { auth, firestore, googleProvider } from "@/lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useMasukDenganGoogle = () => {
  const router = useRouter();
  const [sedangMemuatMasukDenganGoogle, setSedangMemuatMasukDenganGoogle] =
    useState(false);

  const masukDenganGoogle = async () => {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    try {
      setSedangMemuatMasukDenganGoogle(true);
      const hasil = await signInWithPopup(auth, googleProvider);
      const pengguna = hasil.user;
      const email = pengguna.email;

      localStorage.setItem("ID", pengguna.uid);

      const docRef = doc(firestore, "pengguna", pengguna.uid);
      await setDoc(
        docRef,
        {
          Email: email,
        },
        { merge: true }
      );

      toast.success(
        `Selamat datang di Sarjana Geprek, ${pengguna.displayName}!`,
        { duration: 2000 }
      );

      const docRefPengguna = doc(firestore, "pengguna", pengguna.uid);
      const docSnap = await getDoc(docRefPengguna);

      if (docSnap.exists()) {
        const penggunaData = docSnap.data();
        const isBiodataLengkap =
          penggunaData.Nama_Depan &&
          penggunaData.Nama_Belakang &&
          penggunaData.No_Telepon &&
          penggunaData.Alamat;

        const nextRoute = isBiodataLengkap ? "/Beranda" : "/Biodata";

        setTimeout(() => {
          router.push(nextRoute);
        }, 3000);
      } else {
        router.push("/Biodata");
      }
    } catch (error) {
      console.error("Login dengan Google gagal:", error);
      toast.error("Gagal masuk dengan Google. Silakan coba lagi.");
    } finally {
      setSedangMemuatMasukDenganGoogle(false);
    }
  };

  return {
    masukDenganGoogle,
    sedangMemuatMasukDenganGoogle,
  };
};

export default useMasukDenganGoogle;
