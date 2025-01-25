import { firestore } from "@/lib/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const handleSubmitBiodata = async (biodata, setLoading, router) => {
  const { namaDepan, namaBelakang, email, noTelepon, alamat } = biodata;

  if (!namaDepan) {
    toast.error("Nama depan harus diisi!");
    return;
  }
  if (!namaBelakang) {
    toast.error("Nama belakang harus diisi!");
    return;
  }
  if (!email) {
    toast.error("Email harus diisi!");
    return;
  }
  if (!noTelepon) {
    toast.error("Nomor telepon harus diisi!");
    return;
  }
  if (!alamat) {
    toast.error("Alamat harus diisi!");
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

    toast.success("Data berhasil disimpan!", { duration: 2000 });
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

const useFetchUserEmail = (setEmail) => {
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDocRef = doc(firestore, "pengguna", user.uid);

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
  }, [setEmail]);
};

export { handleSubmitBiodata, useFetchUserEmail };
