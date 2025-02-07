import React from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
// ICONS
import { MdArrowBack } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaPlus, FaMinus } from "react-icons/fa";

const Konten = () => {
  const router = useRouter();

  const handleTambahMenu = () => {
    router.push("/Menu");
  };

  const handleCheckout = () => {
    router.push("/Checkout");
  };

  return (
    <div className="flex items-center justify-center px-5 py-8 md:py-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex h-[50%] w-full max-w-4xl md:max-w-6xl shadow-md md:shadow-lg md:p-6 p-4">
        <div className="flex w-full items-center justify-start mb-4 md:mb-6">
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
          <div className="w-full bg-gray-200 p-2 md:p-4 rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full border">
              <thead className="border-b-2 border-black text-black">
                <tr className="text-sm md:text-lg">
                  <th className="text-start p-2">Menu</th>
                  <th className="p-2">Kuantitas</th>
                  <th className="p-2">Harga</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-black font-bold border-b text-sm md:text-lg">
                  <td className="p-2">Nasi Ayam Sambal Hengki</td>
                  <td className="p-2">
                    <div className="bg-gray-300 rounded-full flex justify-between items-center py-0 px-2 gap-3 md:gap-0 md:px-3 md:py-1">
                      <FaMinus className="w-3 h-3 md:w-4 md:h-4 cursor-pointer" />
                      <Typography className="text-sm">2</Typography>
                      <FaPlus className="w-3 h-3 md:w-4 md:h-4 cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-2 text-center">Rp 15.000</td>
                  <td className="p-2 text-center">Rp 30.000</td>
                </tr>
              </tbody>
            </table>
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
                <div className="flex justify-between">
                  <li className="list-disc">Total Barang (7)</li>
                  <li>Rp 30.000</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Biaya Layanan</li>
                  <li>Rp 5.000</li>
                </div>
              </ul>
            </div>
            <div className="w-full flex flex-col justify-between items-center gap-3 mt-auto">
              <Typography className="text-black text-center text-3xl font-bold">
                Rp 30.000
              </Typography>
              <Button
                onClick={handleCheckout}
                className="w-full bg-[#AA5656] shadow-md hover:shadow-md hover:rounded-3xl transition-all ease-in-out duration-500 tracking-widest"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full ml-3 mt-4 hidden md:block">
          <Button className="py-2 px-5 bg-[#AA5656] hover:shadow-md hover:rounded-2xl transition-all ease-in-out duration-500 capitalize tracking-wider">
            Tambah Menu
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
