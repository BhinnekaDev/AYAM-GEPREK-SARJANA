import { auth, firestore } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const cekStatusPengguna = async () => {
  const userId = localStorage.getItem("ID");
  if (!userId) {
    return null;
  }

  const docRef = doc(firestore, "pengguna", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
