import { useState, useEffect } from "react";

const useKeranjangPesanan = () => {
  // Ambil data dari localStorage saat hook di-mount
  const [keranjang, setKeranjang] = useState(() => {
    if (typeof window !== "undefined") {
      const storedKeranjang = localStorage.getItem("keranjang");
      return storedKeranjang ? JSON.parse(storedKeranjang) : [];
    }
    return [];
  });

  // Simpan keranjang ke localStorage setiap kali berubah
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
    }
  }, [keranjang]);

  const tambahKeKeranjang = (item) => {
    // Buat ID unik baru menggunakan timestamp dan angka acak
    const newItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 15),
      jumlah: item.jumlah || 1,
    };

    // Tambahkan item baru ke keranjang
    setKeranjang([...keranjang, newItem]);
  };

  const hapusDariKeranjang = (itemId) => {
    const keranjangBaru = keranjang.filter((item) => item.id !== itemId);
    setKeranjang(keranjangBaru);
  };

  const updateJumlahItem = (itemId, jumlahBaru) => {
    const keranjangBaru = keranjang.map((item) => {
      if (item.id === itemId) {
        return { ...item, jumlah: jumlahBaru };
      }
      return item;
    });
    setKeranjang(keranjangBaru);
  };

  return {
    keranjang,
    tambahKeKeranjang,
    hapusDariKeranjang,
    updateJumlahItem,
  };
};

export default useKeranjangPesanan;
