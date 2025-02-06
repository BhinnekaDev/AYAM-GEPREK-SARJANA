import { useState, useEffect } from "react";
import { cekStatusPengguna } from "@/utils/verifikasiAkun";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const useCekPengguna = () => {
  const [pengguna, setPengguna] = useState(undefined);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchData = async () => {
      try {
        const penggunaData = await cekStatusPengguna();
        if (penggunaData) {
          setPengguna(penggunaData);
        } else {
          // Daftar halaman yang dikecualikan
          const halamanDikecualikan = ["/Beranda", "/Menu"];

          if (!halamanDikecualikan.includes(pathname)) {
            toast.error("Silahkan masuk terlebih dahulu", { duration: 3000 });
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Gagal mengecek status pengguna:", error);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 10);

    return () => clearTimeout(timer);
  }, [router, pathname]);

  return pengguna;
};

export default useCekPengguna;
