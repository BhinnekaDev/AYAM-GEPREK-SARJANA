import { useState, useEffect } from "react";
import { cekStatusPengguna } from "@/utils/verifikasiAkun";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useCekPengguna = () => {
  const [pengguna, setPengguna] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const penggunaData = await cekStatusPengguna();
      if (penggunaData) {
        setPengguna(penggunaData);
      } else {
        router.push("/");
        setPengguna(null);
        toast.error("Silahkan masuk terlebih dahulu", { duration: 3000 });
      }
    };

    fetchData();
  }, [router]);

  return pengguna;
};

export default useCekPengguna;
