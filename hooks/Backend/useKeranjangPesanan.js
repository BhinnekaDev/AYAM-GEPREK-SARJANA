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
    // Cek apakah item sudah ada di keranjang
    const itemSudahAda = keranjang.find(
      (keranjangItem) => keranjangItem.id === item.id
    );

    if (itemSudahAda) {
      // Jika item sudah ada, tambahkan jumlahnya
      const keranjangBaru = keranjang.map((keranjangItem) =>
        keranjangItem.id === item.id
          ? { ...keranjangItem, jumlah: keranjangItem.jumlah + item.jumlah }
          : keranjangItem
      );
      setKeranjang(keranjangBaru);
    } else {
      // Jika item belum ada, tambahkan ke keranjang
      setKeranjang([...keranjang, item]);
    }
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
