import { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";
// Database
import { firestore } from "@/lib/firebaseConfig";

const useTampilkanMakanan = () => {
  const [sedangMemuatMakanan, setSedangMemuatMakanan] = useState(false);
  const [daftarMakanan, setDaftarMakanan] = useState([]);

  const ambilDaftarMakanan = useCallback(async () => {
    const referensiMakanan = collection(firestore, "makanan");
    try {
      setSedangMemuatMakanan(true);
      const snapshot = await getDocs(referensiMakanan);
      const makanans = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDaftarMakanan(makanans);
    } catch (error) {
      toast.error(
        "Terjadi kesalahan saat mengambil data makanan: " + error.message
      );
    } finally {
      setSedangMemuatMakanan(false);
    }
  }, []);

  useEffect(() => {
    ambilDaftarMakanan();
  }, [ambilDaftarMakanan]);

  return {
    daftarMakanan,
    sedangMemuatMakanan,
  };
};

export default useTampilkanMakanan;
