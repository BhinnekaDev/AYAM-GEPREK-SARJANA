import { useState, useEffect } from "react";
import { firestore, storage } from "@/lib/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
// HOOKS
import { toast } from "react-hot-toast";
import { useAmbilProfil } from "@/hooks/Backend/useAmbilProfil";
import { formatNama } from "@/utils/formatNama";
import { formatNoTelepon } from "@/utils/formatNoTelepon";
import { formatAlamat } from "@/utils/formatAlamat";
import { formatKodePos } from "@/utils/formatKodePos";
import { formatRT } from "@/utils/formatRT";
import { formatRW } from "@/utils/formatRW";
// IMAGES
import fotoProfile from "@/assets/img/profil/profil.png";

export const useUpdateProfil = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { profilData } = useAmbilProfil();
  const [profileImage, setProfileImage] = useState(fotoProfile);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [formData, setFormData] = useState({
    Nama_Depan: "",
    Nama_Belakang: "",
    Email: "",
    No_Telepon: "",
    Provinsi: "",
    Kota: "",
    Kecamatan: "",
    Kode_Pos: "",
    RT: "",
    RW: "",
    Alamat_Jalan: "",
    Alamat_Detail: "",
  });

  useEffect(() => {
    if (profilData) {
      setFormData({
        Nama_Depan: profilData.Nama_Depan || "",
        Nama_Belakang: profilData.Nama_Belakang || "",
        Email: profilData.Email || "",
        No_Telepon: profilData.No_Telepon || "",
        Provinsi: profilData.Alamat?.Provinsi || "",
        Kota: profilData.Alamat?.Kota || "",
        Kecamatan: profilData.Alamat?.Kecamatan || "",
        Kode_Pos: profilData.Alamat?.Kode_Pos || "",
        RT: profilData.Alamat?.RT || "",
        RW: profilData.Alamat?.RW || "",
        Alamat_Jalan: profilData.Alamat?.Alamat_Jalan || "",
        Alamat_Detail: profilData.Alamat?.Alamat_Detail || "",
      });
      setProfileImage(profilData.profileImage || fotoProfile);
    }
  }, [profilData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      ["Nama_Depan", "Nama_Belakang", "Provinsi", "Kota", "Kecamatan"].includes(
        name
      )
    ) {
      const formattedInput = formatNama(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    if (["No_Telepon"].includes(name)) {
      const formattedInput = formatNoTelepon(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    if (["Alamat_Jalan", "Alamat_Detail"].includes(name)) {
      const formattedInput = formatAlamat(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    if (["Kode_Pos"].includes(name)) {
      const formattedInput = formatKodePos(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    if (["RT"].includes(name)) {
      const formattedInput = formatRT(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    if (["RW"].includes(name)) {
      const formattedInput = formatRW(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedInput,
      }));
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File is too large. Maximum size is 5MB.");
        return;
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Invalid file type. Only JPG and PNG are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = async (newData) => {
    setLoading(true);
    setError(null);

    try {
      const penggunaSaatIni = localStorage.getItem("ID");
      if (!penggunaSaatIni) {
        setError("User ID not found");
        return;
      }

      let imageUrl = profileImage;

      if (profileImage && profileImage !== fotoProfile) {
        const oldFileName = profileImage
          .split("Foto_Pengguna/")[1]
          ?.split("?")[0];
        if (oldFileName) {
          const imageRef = ref(
            storage,
            `Foto_Pengguna/${penggunaSaatIni}/${oldFileName}`
          );
          await deleteObject(imageRef);
          console.log("Previous profile image deleted.");
        }
      }

      if (uploadedImage) {
        const storageRef = ref(
          storage,
          `Foto_Pengguna/${penggunaSaatIni}/${penggunaSaatIni}.jpg`
        );
        const uploadTask = uploadBytesResumable(storageRef, uploadedImage);

        await uploadTask;

        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("Download URL after upload:", downloadURL);

        imageUrl = downloadURL;
      }
      const updatedData = {
        Nama_Depan: newData.Nama_Depan,
        Nama_Belakang: newData.Nama_Belakang,
        Email: newData.Email,
        No_Telepon: newData.No_Telepon,
        profileImage: imageUrl,
        Alamat: {
          Provinsi: newData.Provinsi,
          Kota: newData.Kota,
          Kecamatan: newData.Kecamatan,
          Kode_Pos: newData.Kode_Pos,
          RT: newData.RT,
          RW: newData.RW,
          Alamat_Jalan: newData.Alamat_Jalan,
          Alamat_Detail: newData.Alamat_Detail,
        },
      };

      const docRef = doc(firestore, "pengguna", penggunaSaatIni);
      await updateDoc(docRef, updatedData);

      toast.success("Update Profil Berhasil!");
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    updateProfile,
    profileImage: uploadedImage
      ? URL.createObjectURL(uploadedImage)
      : profileImage,
    handleImageUpload,
    loading,
    error,
  };
};
