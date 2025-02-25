import { useState, useEffect } from "react";
import { firestore } from "@/lib/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-hot-toast";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
import { useRouter } from "next/navigation";

const useCheckout = (pembayaranTerpilih, pengirimanTerpilih) => {
  const { keranjang, kosongkanKeranjang } = useKeranjangPesanan();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);
  const biayaLayanan = 5000;
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsUserInfoLoading(true);
      if (user) {
        const userDocRef = doc(firestore, "pengguna", user.uid);
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            setUserInfo({ ...docSnapshot.data(), id: user.uid });
          } else {
            toast.error("Informasi pengguna tidak ditemukan!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserInfo(null);
      }
      setIsUserInfoLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleCheckout = async () => {
    if (!userInfo) {
      toast.error("Silakan login terlebih dahulu!");
      return;
    }

    if (isUserInfoLoading) {
      toast.info("Sedang memuat informasi pengguna. Mohon tunggu.");
      return;
    }

    if (keranjang.length === 0) {
      toast.error("Keranjang belanja kosong!");
      return;
    }

    if (!userInfo.id) {
      console.error("User ID is undefined!");
      toast.error("Gagal memproses pesanan. User ID tidak ditemukan.");
      return;
    }

    setLoading(true);
    try {
      const newOrderId = Date.now().toString();
      const orderDocRef = doc(firestore, "pesanan", newOrderId);

      const totalAmount = keranjang.reduce((acc, item) => acc + item.harga * item.jumlah, 0) + biayaLayanan;

      await setDoc(orderDocRef, {
        userId: userInfo.id,
        Nama_Depan: userInfo.Nama_Depan,
        Nama_Belakang: userInfo.Nama_Belakang,
        Email: userInfo.Email,
        No_Telepon: userInfo.No_Telepon,
        Alamat: userInfo.Alamat,
        items: keranjang,
        metodePembayaran: pembayaranTerpilih,
        metodePengiriman: pengirimanTerpilih,
        totalAmount: totalAmount,
        status: "Sedang Dibuat",
        createdAt: new Date().toISOString(),
      });

      toast.success("Pesanan berhasil dibuat!");
      kosongkanKeranjang();
      localStorage.setItem("orderId", newOrderId);
      router.push(`/DetailPesanan`);
    } catch (error) {
      console.error("Error processing checkout:", error);
      toast.error("Gagal melakukan checkout, silakan coba lagi!");
    } finally {
      setLoading(false);
    }
  };

  return {
    userInfo,
    keranjang,
    loading,
    handleCheckout,
    isUserInfoLoading,
  };
};

export default useCheckout;
