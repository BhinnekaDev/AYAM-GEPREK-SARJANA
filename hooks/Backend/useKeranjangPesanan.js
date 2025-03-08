import { useState, useEffect } from "react";

const useKeranjangPesanan = () => {
  const [keranjang, setKeranjang] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedKeranjang = localStorage.getItem("keranjang");
        const parsed = storedKeranjang ? JSON.parse(storedKeranjang) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error("Error parsing keranjang:", error);
        return [];
      }
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

  const kosongkanKeranjang = () => {
    setKeranjang([]); // Mengosongkan keranjang
    if (typeof window !== "undefined") {
      localStorage.removeItem("keranjang"); // Hapus dari localStorage
    }
  };

  return {
    keranjang,
    tambahKeKeranjang,
    hapusDariKeranjang,
    updateJumlahItem,
    kosongkanKeranjang,
  };
};

export default useKeranjangPesanan;
