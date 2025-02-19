"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Typography } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
// ICONS
import { MdArrowBack } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
//HOOK
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
import { formatRupiah } from "@/utils/formatRupiah";

const Konten = () => {
  const router = useRouter();
  const { keranjang, hapusDariKeranjang, updateJumlahItem } =
    useKeranjangPesanan();
  const [totalHarga, setTotalHarga] = useState(0);
  const biayaLayanan = 5000;
  const [maxLengthName, setMaxLengthName] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      setMaxLengthName(window.innerWidth <= 768 ? 33 : 24);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hitungTotal = () => {
      let total = 0;
      keranjang.forEach((item) => {
        total += item.harga * item.jumlah;
      });
      setTotalHarga(total);
    };

    hitungTotal();
  }, [keranjang]);

  const tambahKuantitas = (itemId) => {
    const item = keranjang.find((item) => item.id === itemId);
    updateJumlahItem(itemId, item.jumlah + 1);
  };

  const kurangKuantitas = (itemId) => {
    const item = keranjang.find((item) => item.id === itemId);
    if (item.jumlah > 1) {
      updateJumlahItem(itemId, item.jumlah - 1);
    } else {
      hapusDariKeranjang(itemId);
      toast.success("Item dihapus dari keranjang!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const handleTambahMenu = () => {
    router.push("/Menu");
  };

  const handleCheckout = () => {
    router.push("/Checkout");
  };

  return (
    <div className="flex items-center justify-center px-5">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex h-[50%] w-full max-w-4xl md:max-w-6xl shadow-md md:shadow-lg md:p-6 p-4">
        <div className="flex w-full items-center justify-start md:mb-6">
          <HiMiniShoppingCart
            size={24}
            className="mr-3 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack
            onClick={() => router.back()}
            className="mr-2 text-black md:hidden cursor-pointer"
          />
          <Typography className="font-bold text-black text-md md:text-xl uppercase tracking-wide">
            Keranjang
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 space-y-4 md:space-y-0">
          {/* DESKTOP */}
          <div className="w-full bg-gray-200 p-2 md:p-4 rounded-lg shadow-md overflow-hidden hidden sm:block">
            <table className="min-w-full border">
              <thead className="border-b-2 border-black text-black">
                <tr className="text-lg">
                  <th className="text-start p-2">Menu</th>
                  <th className="p-2">Kuantitas</th>
                  <th className="p-2">Harga</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
              {keranjang.map((item) => (
                  <tr
                    key={item.id}
                    className="text-black font-bold border-b text-sm lg:text-lg"
                  >
                    <td className="p-2">
                      {item.nama.length > maxLengthName
                        ? item.nama.slice(0, maxLengthName) + " ..."
                        : item.nama}
                      <div className="text-xs text-gray-600">
                        {item.rasaSambal && `Sambal: ${item.rasaSambal} - `}
                        {item.kategori === "makanan" &&
                          item.levelPedas !== undefined &&
                          `Level Pedas: ${item.levelPedas}`}
                        {item.tipeMinuman && `Tipe: ${item.tipeMinuman}`}
                      </div>
                    </td>
                    <td className="p-2">
                      <Toaster position="top-right" reverseOrder={false} />
                      <div className="bg-gray-300 rounded-full flex justify-between items-center gap-0 px-3 py-1">
                        {item.jumlah > 1 ? (
                          <FaMinus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => kurangKuantitas(item.id)}
                          />
                        ) : (
                          <FaTrashCan
                            className="w-4 h-4 cursor-pointer text-red-500"
                            onClick={() => kurangKuantitas(item.id)}
                          />
                        )}
                        <Typography className="text-sm">
                          {item.jumlah}
                        </Typography>
                        <FaPlus
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => tambahKuantitas(item.id)}
                        />
                      </div>
                    </td>
                    <td className="p-2 text-center">
                      {formatRupiah(item.harga)}
                    </td>
                    <td className="p-2 text-center">
                      {formatRupiah(item.harga * item.jumlah)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* MOBILE */}
          <div className="w-full bg-gray-200 p-2 md:p-4 rounded-lg shadow-md overflow-hidden sm:hidden">
            <div className="flex justify-between mx-2 border-b-2 border-black py-1">
              <Typography className="font-bold text-black text-lg">
                Menu
              </Typography>
              <Typography className="font-bold text-black text-lg">
                {keranjang.length} Item
              </Typography>
            </div>
            <div className="p-2">
              {keranjang.map((item) => (
                <div key={item.id} className="space-y-3">
                  <Typography className="font-bold text-black text-md">
                    {item.nama.length > maxLengthName
                      ? item.nama.slice(0, maxLengthName) + " ..."
                      : item.nama}
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                    {item.rasaSambal && `Sambal: ${item.rasaSambal} - `}
                    {item.kategori === "makanan" &&
                      item.levelPedas !== undefined &&
                      `Level Pedas: ${item.levelPedas}`}
                    {item.tipeMinuman && `Tipe: ${item.tipeMinuman}`}
                  </Typography>
                  <div className="flex justify-between items-center">
                    <Typography className="font-bold text-black text-md">
                      {formatRupiah(item.harga)}
                    </Typography>
                    <div className="bg-gray-300 border border-gray-400 rounded-full flex justify-between items-center gap-6 px-2 py-0">
                      {item.jumlah > 1 ? (
                        <FaMinus
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => kurangKuantitas(item.id)}
                        />
                      ) : (
                        <FaTrashCan
                          className="w-4 h-4 cursor-pointer text-red-500"
                          onClick={() => kurangKuantitas(item.id)}
                        />
                      )}
                      <Typography className="text-md">{item.jumlah}</Typography>
                      <FaPlus
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => tambahKuantitas(item.id)}
                      />
                    </div>
                  </div>
                  <div className="h-px bg-gray-500"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mx-2">
              <Typography className="font-bold text-black text-md">
                Total:
              </Typography>
              <Typography className="font-bold text-black text-md">
                {formatRupiah(totalHarga)}
              </Typography>
            </div>
          </div>
          <div className="w-full flex md:hidden justify-between px-3">
            <Button
              onClick={handleTambahMenu}
              className="py-1 px-4 border border-gray-400 text-black bg-gray-300 shadow-md hover:shadow-md rounded-full capitalize tracking-wider"
            >
              Tambah Menu
            </Button>
            <Button
              onClick={handleCheckout}
              className="py-1 px-4 bg-[#AA5656] shadow-md rounded-full hover:shadow-md capitalize tracking-wider"
            >
              Checkout
            </Button>
          </div>
          <div className="w-[50%] hidden md:block bg-gray-200 rounded-lg shadow-md p-6 flex-row">
            <div className="w-full flex justify-center items-center mb-4">
              <Typography className="text-black font-bold text-2xl">
                Detail Harga
              </Typography>
            </div>
            <div className="flex flex-col mb-4">
              <ul className="px-4 space-y-3 font-medium">
                <div className="flex justify-between md:text-sm"> 
                  <li className="list-disc">
                    Total Barang ({keranjang.length})
                  </li>
                  <li>{formatRupiah(totalHarga)}</li>
                </div>
                <div className="flex justify-between md:text-sm">
                  <li className="list-disc">Biaya Layanan</li>
                  <li>{formatRupiah(biayaLayanan)}</li>
                </div>
              </ul>
            </div>
            <div className="w-full flex flex-col justify-between items-center gap-3 mt-auto">
              <Typography className="text-black text-center md:text-xl lg:text-3xl font-bold">
                {formatRupiah(totalHarga + biayaLayanan)}
              </Typography>
              <Button
                onClick={handleCheckout}
                className="w-full md:p-2 bg-[#AA5656] shadow-md hover:shadow-md hover:rounded-3xl transition-all ease-in-out duration-500 tracking-widest"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full ml-3 mt-4 hidden md:block">
          <Button
            onClick={handleTambahMenu}
            className="py-2 px-5 bg-[#AA5656] hover:shadow-md hover:rounded-2xl transition-all ease-in-out duration-500 capitalize tracking-wider"
          >
            Tambah Menu
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
