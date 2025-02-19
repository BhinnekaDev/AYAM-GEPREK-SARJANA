import { useState, useEffect, useCallback } from "react";
import { firestore } from "@/lib/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

const usePesananSaya = () => {
  const [pesanan, setPesanan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("Semua"); // Status filter default
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("ID");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const fetchPesanan = useCallback(
    async (selectedStatus = "Semua") => {
      setLoading(true);
      try {
        if (userId) {
          let pesananQuery = query(
            collection(firestore, "pesanan"),
            where("userId", "==", userId)
          );

          if (selectedStatus !== "Semua") {
            pesananQuery = query(
              collection(firestore, "pesanan"),
              where("userId", "==", userId),
              where("status", "==", selectedStatus)
            );
          }

          const pesananSnapshot = await getDocs(pesananQuery);
          const pesananList = pesananSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPesanan(pesananList);
        } else {
          setPesanan([]);
        }
      } catch (error) {
        console.error("Gagal mengambil daftar pesanan:", error);
        setPesanan([]);
      } finally {
        setLoading(false);
      }
    },
    [userId]
  );

  useEffect(() => {
    if (userId) {
      fetchPesanan(filterStatus);
    }
  }, [userId, filterStatus, fetchPesanan]);

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleOrderDetailClick = (orderId) => {
    localStorage.setItem("orderId", orderId);
    router.push("/DetailPesanan");
  };

  return {
    pesanan,
    loading,
    handleFilterChange,
    handleOrderDetailClick,
    filterStatus,
  };
};

export default usePesananSaya;
