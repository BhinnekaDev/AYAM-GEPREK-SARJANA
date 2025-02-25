import { useState, useEffect, useCallback } from "react";
import { firestore } from "@/lib/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const useTampilkanPesanan = (orderId = null) => {
  const [pesanan, setPesanan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("ID");
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
  }, []);

  const fetchPesanan = useCallback(async () => {
    setLoading(true);
    try {
      if (userId && orderId) {
        const pesananDocRef = doc(firestore, "pesanan", orderId);
        const pesananSnapshot = await getDoc(pesananDocRef);

        if (pesananSnapshot.exists()) {
          setPesanan({ id: pesananSnapshot.id, ...pesananSnapshot.data() });
        } else {
          setPesanan(null);
          if (typeof window !== "undefined") {
            localStorage.removeItem("orderId");
          }
          router.push("/PesananSaya");
        }
      } else {
        setPesanan(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("orderId");
        }
        router.push("/PesananSaya");
      }
    } catch (error) {
      console.error("Gagal mengambil daftar pesanan:", error);
      setPesanan(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("orderId");
      }
      router.push("/PesananSaya");
    } finally {
      setLoading(false);
    }
  }, [userId, orderId, router]);

  useEffect(() => {
    if (userId && orderId) {
      fetchPesanan();
    }
  }, [userId, orderId, fetchPesanan]);

  const batalkanPesanan = useCallback(async (orderId) => {
    try {
      const orderDocRef = doc(firestore, "pesanan", orderId);
      await updateDoc(orderDocRef, { status: "Dibatalkan" });
      // router.push("/PesananSaya");
    } catch (error) {
      console.error("Gagal membatalkan pesanan:", error);
      throw error;
    }
  }, []);

  const tandaiSelesai = useCallback(async (orderId) => {
    try {
      const orderDocRef = doc(firestore, "pesanan", orderId);
      await updateDoc(orderDocRef, { status: "Selesai" });
    } catch (error) {
      console.error("Gagal menandai pesanan sebagai selesai:", error);
      throw error;
    }
  }, []);

  return { pesanan, loading, batalkanPesanan, tandaiSelesai };
};

export default useTampilkanPesanan;
