import { auth, firestore, googleProvider } from "@/lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import getDoc untuk membaca data

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
      const email = pengguna.email; // Ambil email dari autentikasi Firebase

      // Simpan ID pengguna di localStorage jika perlu
      localStorage.setItem("ID", pengguna.uid);

      // Menyimpan hanya email ke Firestore pada collection "pengguna"
      const docRef = doc(firestore, "pengguna", pengguna.uid);
      await setDoc(
        docRef,
        {
          Email: email, // Simpan hanya email
        },
        { merge: true }
      ); // Merge akan mengupdate dokumen jika sudah ada

      toast.success(
        `Selamat datang di Sarjana Geprek, ${pengguna.displayName}!`,
        { duration: 2000 }
      );

      // Ambil data pengguna dari Firestore untuk mengecek apakah biodata lengkap
      const docRefPengguna = doc(firestore, "pengguna", pengguna.uid);
      const docSnap = await getDoc(docRefPengguna);

      if (docSnap.exists()) {
        const penggunaData = docSnap.data();
        // Cek apakah Nama_Lengkap, No_Telepon, dan Alamat sudah ada
        const isBiodataLengkap =
          penggunaData.Nama_Lengkap &&
          penggunaData.No_Telepon &&
          penggunaData.Alamat;

        // Jika biodata lengkap, arahkan ke Beranda, jika tidak ke Biodata
        const nextRoute = isBiodataLengkap ? "/Beranda" : "/Biodata";

        setTimeout(() => {
          router.push(nextRoute);
        }, 2000);
      } else {
        // Jika dokumen tidak ada, berarti data belum lengkap
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
