import { firestore } from "@/lib/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const handleSubmitBiodata = async (biodata, setLoading, router) => {
  const { namaDepan, namaBelakang, email, noTelepon, alamat } = biodata;

  if (!namaDepan || !namaBelakang || !email || !noTelepon || !alamat) {
    toast.error("Semua data harus dilengkapi!");
    return;
  }

  setLoading(true);

  try {
    const userId = localStorage.getItem("ID");

    if (!userId) {
      toast.error("ID pengguna tidak ditemukan!");
      return;
    }

    const docRef = doc(firestore, "pengguna", userId);

    await setDoc(docRef, {
      Nama_Depan: namaDepan,
      Nama_Belakang: namaBelakang,
      Email: email,
      No_Telepon: noTelepon,
      Alamat: alamat,
    });

    toast.success("Data berhasil disimpan!", {
      duration: 2000,
    });

    setTimeout(() => {
      router.push("/Beranda");
    }, 2000);
  } catch (error) {
    console.error("Error saving biodata:", error);
    toast.error("Gagal menyimpan biodata. Silakan coba lagi.");
  } finally {
    setLoading(false);
  }
};

export default handleSubmitBiodata;
