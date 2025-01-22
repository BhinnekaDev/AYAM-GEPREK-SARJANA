import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useKeluarAkun = () => {
  const router = useRouter();

  const keluarAkun = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("ID");
      router.push("/");
      toast.error("Anda telah keluar dari aplikasi!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { keluarAkun };
};

export default useKeluarAkun;
