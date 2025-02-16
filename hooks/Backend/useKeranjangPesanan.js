import { useState, useEffect } from "react";

const useKeranjangPesanan = () => {
  const [keranjang, setKeranjang] = useState(() => {
    if (typeof window !== "undefined") {
      const storedKeranjang = localStorage.getItem("keranjang");
      return storedKeranjang ? JSON.parse(storedKeranjang) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
    }
  }, [keranjang]);

  const tambahKeKeranjang = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 15),
      jumlah: item.jumlah || 1,
    };

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
