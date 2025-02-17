import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
// ICONS
import {
  MdArrowBack,
  MdAddShoppingCart,
  MdFastfood,
  MdDeliveryDining,
  MdLocalShipping,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPencilAlt, FaChevronDown } from "react-icons/fa";
import { PiHandCoinsFill, PiHandArrowDownBold } from "react-icons/pi";
import { BsQrCode, BsCash } from "react-icons/bs";

const Konten = () => {
  const router = useRouter();
  const [openMenuPembayaran, setOpenMenuPembayaran] = React.useState(false);
  const [openMenuPengiriman, setOpenMenuPengiriman] = React.useState(false);
  const alamat = `Jalan Desa Batujajar, RT.2/RW.1, Kp Batujajar, Batujajar, Batujajar, KAB. Bandung Jalan Desa Batujajar, RT.2/RW.1, Kp Batujajar, Batujajar, Batujajar, KAB. Bandung`;
  const maxLength = 100;
  const alamatTerbatas =
    alamat.length > maxLength ? alamat.substring(0, maxLength) + "..." : alamat;
  const [pembayaranTerpilih, setPembayaranTerpilih] =
    useState("Metode Pembayaran");
  const [pengirimanTerpilih, setPengirmanTerpilih] =
    useState("Metode Pengiriman");

  return (
    <div className="flex items-center justify-center px-5 md:py-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex h-auto w-full max-w-4xl md:max-w-6xl shadow-md md:shadow-lg md:p-6 p-4">
        <div className="flex w-full items-center justify-start mb-4 md:mb-6">
          <MdAddShoppingCart
            size={24}
            className="mr-3 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack
            onClick={() => router.back()}
            className="mr-2 text-black md:hidden cursor-pointer"
          />
          <Typography className="font-bold text-black text-md md:text-xl uppercase tracking-wide">
            Checkout
          </Typography>
        </div>
        <div className="bg-gray-200 w-full p-5 shadow-md border-gray-400 border rounded-lg space-y-1 mb-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaLocationDot className="w-5 h-5" />
              <Typography className="font-bold text-lg">
                Informasi Pengguna
              </Typography>
            </div>
            <div className="items-center sm:hidden">
              <Button
                onClick={() => router.push("/Profil")}
                className="rounded-full p-1 bg-transparent shadow-none"
              >
                <FaPencilAlt className="text-black w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="h-[2px] rounded-full bg-gray-300"></div>
          <div className="flex w-full sm:gap-2 sm:px-3 py-1">
            <div className="sm:w-56 w-full">
              <Typography className="font-bold text-md">
                Sandro Anugrah
              </Typography>
              <Typography className="font-bold text-md">08123456789</Typography>
            </div>
            <div className="w-full">
              <Typography className="text-md">{alamatTerbatas}</Typography>
            </div>
            <div className="items-center px-1 hidden sm:flex">
              <Button
                onClick={() => router.push("/Profil")}
                className="rounded-full p-2 bg-black/15 hover:shadow-md border border-black/15 hover:border-black transition-all duration-300"
              >
                <FaPencilAlt className="text-black" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4 md:gap-3">
          <div className="w-full space-y-2 flex flex-col">
            <div className="bg-gray-200 w-full h-full shadow-md p-5 border-gray-400 border rounded-lg space-y-1 flex flex-col">
              <div className="flex items-center gap-2">
                <MdFastfood className="w-5 h-5" />
                <Typography className="font-bold text-lg">
                  Informasi Produk
                </Typography>
              </div>
              <div className="h-[2px] rounded-full bg-gray-300"></div>
              <div className="space-y-3 py-2 sm:max-h-32 overflow-auto">
                <div className="flex flex-col sm:flex-row justify-between ml-6 mr-3">
                  <div>
                    <Typography className="font-bold text-md lg:text-lg">
                      Nasi Ayam Geprek
                    </Typography>
                    <div className="sm:hidden text-sm text-gray-700">
                      <Typography>Sambal Matah • Level Pedas 1</Typography>
                    </div>
                  </div>
                  <Typography className="text-md lg:text-lg hidden sm:block">
                    Sambal Matah
                  </Typography>
                  <Typography className="text-md lg:text-lg hidden sm:block">
                    Level Pedas 1
                  </Typography>
                  <Typography className="font-bold text-md lg:text-lg text-end">
                    Rp 15.000
                  </Typography>
                </div>
              </div>
              <div className="h-[2px] rounded-full bg-gray-300"></div>
              <div className="flex justify-end items-center gap-1">
                <Typography className="text-black font-bold text-lg">
                  Total:
                </Typography>
                <Typography className="text-black font-bold text-lg">
                  Rp 15.000
                </Typography>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full md:w-2/5 lg:w-2/6 shadow-md px-5 py-3 sm:p-5 border-gray-400 border rounded-lg">
            <div className="flex flex-col h-full py-2 sm:py-0 sm:space-y-2">
              <div className="mb-3 sm:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <PiHandCoinsFill className="w-5 h-5 md:hidden lg:block" />
                  <Typography className="font-bold md:text-md lg:text-lg">
                    Metode Pembayaran
                  </Typography>
                </div>
                <Menu open={openMenuPembayaran} handler={setOpenMenuPembayaran}>
                  <MenuHandler className="bg-gray-300 w-full flex justify-between items-center border-gray-400 border py-2 rounded-full sm:rounded-lg sm:p-3 tracking-wide">
                    <Button
                      variant="text"
                      className="flex items-center sm:gap-3 text-base font-normal tracking-normal"
                    >
                      {pembayaranTerpilih}
                      <FaChevronDown
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 md:w-3 md:h-3 transition-transform ${
                          openMenuPembayaran ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="bg-white w-80 md:w-40 lg:w-60 border border-gray-500 sm:border-gray-300 shadow-lg rounded-md p-2 space-y-1 sm:space-y-0">
                    <MenuItem
                      className="flex items-center gap-2 font-bold hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all"
                      onClick={() => setPembayaranTerpilih("QRIS")}
                    >
                      <BsQrCode className="w-4 h-4" />
                      QRIS
                    </MenuItem>
                    <MenuItem
                      className="flex items-center gap-2 font-bold hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all"
                      onClick={() => setPembayaranTerpilih("Cash")}
                    >
                      <BsCash className="w-4 h-4" />
                      Cash
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <div className="mt-auto sm:mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <MdLocalShipping className="w-5 h-5 md:hidden lg:block" />
                  <Typography className="font-bold md:text-md lg:text-lg">
                    Metode Pengiriman
                  </Typography>
                </div>
                <Menu open={openMenuPengiriman} handler={setOpenMenuPengiriman}>
                  <MenuHandler className="bg-gray-300 w-full flex justify-between items-center border-gray-400 border py-2 rounded-full sm:rounded-lg sm:p-3 tracking-wide md:text-md">
                    <Button
                      variant="text"
                      className="flex items-center gap-3 text-base font-normal tracking-normal"
                    >
                      {pengirimanTerpilih}
                      <FaChevronDown
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 md:w-3 md:h-3 transition-transform ${
                          openMenuPengiriman ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="bg-white w-80 md:w-40 lg:w-60 border border-gray-500 sm:border-gray-300 shadow-lg rounded-md p-2 space-y-1 sm:space-y-0 md:text-md lg:text-lg">
                    <MenuItem
                      className="flex items-center gap-2 text-md font-bold hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all"
                      onClick={() => setPengirmanTerpilih("QRIS")}
                    >
                      <PiHandArrowDownBold className="w-5 h-5" />
                      Pick Up
                    </MenuItem>
                    <MenuItem
                      className="flex items-center gap-2 text-md font-bold hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all"
                      onClick={() => setPengirmanTerpilih("Cash")}
                    >
                      <MdDeliveryDining className="w-5 h-5" />
                      Delivery
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:hidden justify-end items-center mt-4">
          <Button
            onClick={() => router.push("/DetailPesanan")}
            className="bg-[#AA5656] px-12 py-2  rounded-full shadow-md hover:shadow-md tracking-widest"
          >
            Checkout
          </Button>
        </div>
        <div className="md:flex hidden w-full justify-center md:justify-between items-center mt-4 px-4">
          <Button
            onClick={() => router.back()}
            className="bg-gray-600 px-32  shadow-md hover:shadow-md hover:rounded-3xl transition-all ease-in-out duration-500 tracking-widest"
          >
            Kembali
          </Button>
          <Button className=" bg-[#AA5656] px-32 shadow-md hover:shadow-md hover:rounded-3xl transition-all ease-in-out duration-500 tracking-widest">
            Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
