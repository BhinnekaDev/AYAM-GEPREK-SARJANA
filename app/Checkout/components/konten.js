import React from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
// ICONS
import { MdArrowBack, MdAddShoppingCart } from "react-icons/md";
import { FaPencilAlt, FaQrcode } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiPackage } from "react-icons/fi";
import { IoCash } from "react-icons/io5";

const Konten = () => {
  const router = useRouter();

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
        <div className="flex flex-col w-full h-full md:flex-row gap-4 md:gap-6">
          <div className="w-full md:flex bg-gray-200 p-4 rounded-lg shadow-md overflow-hidden">
            <div className="w-full">
              <div className="w-full flex items-center justify-between md:py-1">
                <Typography className="text-black text-lg md:text-2xl font-semibold tracking-wide">
                  Informasi Pengguna
                </Typography>
                <FaPencilAlt
                  onClick={() => router.push("/Profil")}
                  className="text-black cursor-pointer w-4 h-4"
                />
              </div>
              <div className="w-full p-2 space-y-2 md:space-y-4">
                <div className="space-y-1">
                  <Typography className="font-bold text-black text-sm md:text-lg ml-1">
                    Nama Lengkap
                  </Typography>
                  <Input className="w-full bg-gray-400 bg-opacity-20 md:p-2 text-black border-black border rounded-lg" />
                </div>
                <div className="space-y-1">
                  <Typography className="font-bold text-black text-sm md:text-lg ml-1">
                    No Telepon
                  </Typography>
                  <Input className="w-full bg-gray-400 bg-opacity-20 p-2 text-black border-black border rounded-lg" />
                </div>
                <div className="space-y-1">
                  <Typography className="font-bold text-black text-sm md:text-lg ml-1">
                    Alamat Pengiriman
                  </Typography>
                  <Textarea className="w-full bg-gray-400 bg-opacity-20 p-2 text-black border-black border rounded-lg" />
                </div>
              </div>
            </div>

            <div className="hidden md:block mx-6 my-4">
              <div className="w-[3px] rounded-full h-full bg-gray-600"></div>
            </div>

            <div className="w-full md:w-[50%] md:px-1 md:space-y-6 gap-8 md:gap-0 md:flex-col md:flex grid grid-cols-2 justify-center">
              <div className="space-y-2">
                <Typography className="font-bold text-md md:text-lg text-black text-center">
                  Metode Pengiriman
                </Typography>
                <div className="grid grid-cols-2 md:flex justify-between items-center gap-2 md:px-2">
                  <Button className="flex-col flex justify-center w-full md:py-6 gap-4 md:gap-2 hover:shadow-md shadow-md rounded-lg text-green-400 items-center bg-white border border-green-400">
                    <LiaShippingFastSolid className="text-green-400 w-7 h-7 md:w-10 md:h-10" />
                    Delivery
                  </Button>
                  <Button className="flex-col flex justify-center w-full  md:py-6 gap-4 md:gap-2 hover:shadow-md shadow-md rounded-lg text-gray-600 items-center bg-white border border-gray-600">
                    <FiPackage className="text-gray-600 w-7 h-7 md:w-10 md:h-10" />
                    PickUp
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Typography className="font-bold text-md md:text-lg text-black text-center">
                  Metode Pembayaran
                </Typography>
                <div className="grid grid-cols-2 md:flex justify-between items-center gap-4 md:px-2">
                  <Button className="flex-col w-full flex justify-center gap-4 md:gap-2 hover:shadow-md shadow-md  md:py-6 rounded-lg text-green-400 items-center bg-white border border-green-400">
                    <IoCash className="text-green-400 w-7 h-7 md:w-10 md:h-10" />
                    Cash
                  </Button>
                  <Button className="flex-col w-full flex justify-center gap-4 md:gap-2 hover:shadow-md shadow-md  md:py-6 rounded-lg text-gray-600 items-center bg-white border border-gray-600">
                    <FaQrcode className="text-gray-600 w-7 h-7 md:w-10 md:h-10" />
                    Qris
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-gray-200 rounded-lg shadow-md p-6 flex-row">
            <div className="w-full flex justify-center items-center mb-4">
              <Typography className="text-black font-bold text-xl">
                informasi Produk
              </Typography>
            </div>
            <div className="flex flex-col mb-4">
              <ul className="px-4 space-y-3 font-medium text-sm">
                <div className="flex justify-between">
                  <li className="list-disc">Nasi Ayam Sambal Matah</li>
                  <li>1</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Nasi Ayam Sambal Matah</li>
                  <li>2</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Nasi Ayam Sambal Matah</li>
                  <li>3</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Nasi Ayam Sambal Matah</li>
                  <li>4</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Nasi Ayam Sambal Matah</li>
                  <li>5</li>
                </div>
              </ul>
              <div className="h-[3px] rounded-full bg-gray-600 my-4"></div>
              <ul className="px-4 space-y-3 font-medium text-sm">
                <div className="flex justify-between">
                  <li className="list-disc">Total Barang (5)</li>
                  <li>1</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Biaya Layanan</li>
                  <li>Rp 5.000</li>
                </div>
                <div className="flex justify-between">
                  <li className="list-disc">Biaya Pengiriman</li>
                  <li>Rp 5.000</li>
                </div>
              </ul>
              <ul className="px-4 mt-3 font-medium text-sm ">
                <div className="flex justify-between font-bold text-black text-lg">
                  <li>Total</li>
                  <li>Rp 30.000</li>
                </div>
              </ul>
            </div>
            <div className="flex w-full md:hidden justify-end items-center mt-4">
              <Button className=" bg-[#AA5656] px-12 py-2  rounded-full shadow-md hover:shadow-md tracking-widest">
                Checkout
              </Button>
            </div>
          </div>
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
