import { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { firestore } from "@/lib/firebaseConfig";

const useTampilkanMinuman = () => {
  const [sedangMemuatMinuman, setSedangMemuatMinuman] = useState(false);
  const [daftarMinuman, setDaftarMinuman] = useState([]);

  const ambilDaftarMinuman = useCallback(async () => {
    const referensiMinuman = collection(firestore, "minuman");
    try {
      setSedangMemuatMinuman(true);
      const snapshot = await getDocs(referensiMinuman);
      const minumans = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDaftarMinuman(minumans);
    } catch (error) {
      toast.error(
        "Terjadi kesalahan saat mengambil data minuman: " + error.message
      );
    } finally {
      setSedangMemuatMinuman(false);
    }
  }, []);

  useEffect(() => {
    ambilDaftarMinuman();
  }, [ambilDaftarMinuman]);

  return {
    daftarMinuman,
    sedangMemuatMinuman,
  };
};

export default useTampilkanMinuman;
