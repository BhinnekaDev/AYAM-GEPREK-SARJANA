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
// HOOK
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const hitungTotal = () => {
      let total = 0;
      if (Array.isArray(keranjang)) {
        keranjang.forEach((item) => {
          total += (item.harga || 0) * (item.jumlah || 1);
        });
      }
      setTotalHarga(total);
    };
    hitungTotal();
  }, [keranjang]);

  const handleKuantitas = (itemId, operation) => {
    const item = keranjang?.find((i) => i.id === itemId);
    if (!item) return;

    if (operation === "tambah") {
      updateJumlahItem(itemId, item.jumlah + 1);
    } else {
      if (item.jumlah > 1) {
        updateJumlahItem(itemId, item.jumlah - 1);
      } else {
        hapusDariKeranjang(itemId);
        toast.success("Item dihapus dari keranjang!");
        setTimeout(() => window.location.reload(), 1000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center px-5">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex h-[50%] w-full max-w-4xl md:max-w-6xl shadow-md md:shadow-lg md:p-6 p-4">
        {/* Header */}
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
          {/* Desktop View */}
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
                {keranjang?.length > 0 ? (
                  keranjang.map((item) => (
                    <tr
                      key={item.id}
                      className="text-black font-bold border-b text-sm lg:text-lg"
                    >
                      <td className="p-2">
                        {item.nama?.slice(0, maxLengthName)}
                        <div className="text-xs text-gray-600">
                          {item.kategori === "minuman" ? (
                            <span>{item.tipeMinuman}</span>
                          ) : (
                            <>
                              {item.rasaSambal && `Sambal: ${item.rasaSambal}`}
                              {item.levelPedas &&
                                ` • Level: ${item.levelPedas}`}
                            </>
                          )}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="bg-gray-300 rounded-full flex justify-between items-center gap-0 px-3 py-1">
                          {item.jumlah > 1 ? (
                            <FaMinus
                              className="w-4 h-4 cursor-pointer"
                              onClick={() => handleKuantitas(item.id, "kurang")}
                            />
                          ) : (
                            <FaTrashCan
                              className="w-4 h-4 cursor-pointer text-red-500"
                              onClick={() => handleKuantitas(item.id, "kurang")}
                            />
                          )}
                          <Typography className="text-sm">
                            {item.jumlah}
                          </Typography>
                          <FaPlus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => handleKuantitas(item.id, "tambah")}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-2">
                      Keranjang kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Mobile View */}
          <div className="w-full bg-gray-200 p-2 md:p-4 rounded-lg shadow-md overflow-hidden sm:hidden">
            <div className="flex justify-between mx-2 border-b-2 border-black py-1">
              <Typography className="font-bold text-black text-lg">
                Menu
              </Typography>
              <Typography className="font-bold text-black text-lg">
                {keranjang?.length ?? 0} Item
              </Typography>
            </div>

            <div className="p-2">
              {keranjang?.length > 0 ? (
                keranjang.map((item) => (
                  <div key={item.id} className="space-y-3">
                    <Typography className="font-bold text-black text-md">
                      {item.nama?.slice(0, maxLengthName)}
                    </Typography>
                    <div className="flex justify-between items-center">
                      <Typography className="text-sm text-gray-600">
                        {formatRupiah(item.harga)}
                      </Typography>
                      <div className="bg-gray-300 border border-gray-400 rounded-full flex items-center gap-2 px-2 py-1">
                        <FaMinus
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => handleKuantitas(item.id, "kurang")}
                        />
                        <Typography className="text-sm">
                          {item.jumlah}
                        </Typography>
                        <FaPlus
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => handleKuantitas(item.id, "tambah")}
                        />
                      </div>
                    </div>
                    <div className="h-px bg-gray-500" />
                  </div>
                ))
              ) : (
                <Typography className="text-center">
                  Keranjang kosong
                </Typography>
              )}
            </div>
          </div>

          {/* Checkout Section */}
          <div className="w-[50%] hidden md:block bg-gray-200 rounded-lg shadow-md p-6">
            <div className="mb-6">
              <Typography className="text-black font-bold text-2xl text-center">
                Detail Harga
              </Typography>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Typography>Total Barang ({keranjang?.length ?? 0})</Typography>
                <Typography>{formatRupiah(totalHarga)}</Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Biaya Layanan</Typography>
                <Typography>{formatRupiah(biayaLayanan)}</Typography>
              </div>

              <div className="border-t border-gray-400 pt-4">
                <Typography className="text-xl font-bold text-center">
                  {formatRupiah(totalHarga + biayaLayanan)}
                </Typography>
              </div>
            </div>

            <Button
              onClick={() => router.push("/Checkout")}
              className="w-full mt-6 bg-[#AA5656] hover:shadow-lg transition-all"
            >
              Checkout
            </Button>
          </div>
        </div>
        {/* Mobile Buttons */}
        <div className="w-full flex md:hidden justify-between px-3 mt-4">
          <Button
            onClick={() => router.push("/Menu")}
            className="bg-gray-300 text-black border border-gray-400"
          >
            Tambah Menu
          </Button>
          <Button
            onClick={() => router.push("/Checkout")}
            className="bg-[#AA5656] text-white"
          >
            Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
