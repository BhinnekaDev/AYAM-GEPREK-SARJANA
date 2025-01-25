import { useEffect, useState } from "react";
import { firestore } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const useAmbilProfil = (field = null) => {
  const [profilData, setProfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const userId = localStorage.getItem("ID");
        if (!userId) {
          setProfil(null);
          return;
        }

        const docRef = doc(firestore, "pengguna", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setProfil(field ? userData[field] : userData);
        } else {
          setProfil(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [field]);

  return { profilData, loading, error };
};
