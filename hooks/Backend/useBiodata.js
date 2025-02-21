import { firestore } from "@/lib/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const handleSubmitBiodata = async (biodata, setIsLoading, router) => {
  const {
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
  } = biodata;

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
  if (!provinsi) {
    toast.error("Provinsi harus diisi!");
    return;
  }
  if (!kota) {
    toast.error("Kota harus diisi!");
    return;
  }
  if (!kecamatan) {
    toast.error("Kecamatan harus diisi!");
    return;
  }
  if (!kodePos) {
    toast.error("Kode pos harus diisi!");
    return;
  }
  if (!RT) {
    toast.error("RT harus diisi!");
    return;
  }
  if (!RW) {
    toast.error("RW harus diisi!");
    return;
  }
  if (!alamatJalan) {
    toast.error("Alamat jalan harus diisi!");
    return;
  }
  if (!alamatDetail) {
    toast.error("Alamat detail harus diisi!");
    return;
  }

  setIsLoading(true);

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
      Alamat: {
        Provinsi: provinsi,
        Kota: kota,
        Kecamatan: kecamatan,
        Kode_Pos: kodePos,
        RT: RT,
        RW: RW,
        Alamat_Jalan: alamatJalan,
        Alamat_Detail: alamatDetail,
      },
    });

    toast.success("Data berhasil disimpan!", { duration: 2000 });
    setTimeout(() => {
      router.push("/Beranda");
    }, 2000);
  } catch (error) {
    console.error("Error saving biodata:", error);
    toast.error("Gagal menyimpan biodata. Silakan coba lagi.");
  } finally {
    setIsLoading(false);
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
