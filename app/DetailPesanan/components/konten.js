import React from "react";
import { Card, Typography, CardBody, Button } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";
// IMAGES
import MMakanan from "@/assets/img/menu/menu1.png";
import MMinuman1 from "@/assets/img/menu/menu2.png";
import MMinuman2 from "@/assets/img/menu/menu3.png";
// ICONS
import { CgProfile } from "react-icons/cg";
import { MdArrowBack } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { IoMdCopy } from "react-icons/io";

const Konten = () => {
  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-6xl shadow-md md:shadow-lg p-4 sm:p-6 ">
        <div className="flex w-full items-center justify-start mb-5 sm:mb-3">
          <CgProfile
            size={20}
            className="mr-2 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack className="mr-2 text-black md:hidden cursor-pointer" />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Tracking Pesanan
          </Typography>
        </div>
        <CardBody className="rounded-lg p-0">
          <div className="w-full justify-center flex items-center">
            <div className="sm:p-3 p-2 rounded-full bg-[#F48888] border-black border-2">
              <RiFileList3Line className="text-black w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="relative w-20 sm:w-64 h-1 bg-gray-400 overflow-hidden rounded-lg">
              <motion.div
                className="absolute h-full bg-[#d87474] w-full"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            <div className="sm:p-3 p-2 justify-center rounded-full bg-gray-400">
              <FaShippingFast className="text-black w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="flex justify-center w-20 sm:w-64 h-1 rounded-lg bg-gray-400"></div>
            <div className="sm:p-3 p-2 rounded-full bg-gray-400">
              <LuPackageCheck className="text-black w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
          <div className="w-full flex mt-1 items-center justify-center gap-4">
            <div className="text-center">
              <Typography className="font-bold text-sm sm:text-lg">
                Pesanan Dibuat
              </Typography>
              <Typography className="text-sm sm:text-lg">
                09.00 - 10.00
              </Typography>
            </div>
            <div className="text-center sm:mx-[195px]">
              <Typography className="font-bold text-sm sm:text-lg">
                Pesanan Diantar
              </Typography>
              <Typography className="text-sm sm:text-lg">
                09.00 - 10.00
              </Typography>
            </div>
            <div className="text-center">
              <Typography className="font-bold text-sm sm:text-lg">
                Pesanan Selesai
              </Typography>
              <Typography className="text-sm sm:text-lg">
                09.00 - 10.00
              </Typography>
            </div>
          </div>
          <div className="bg-[#EFF3EA] rounded-lg shadow-md p-2 sm:p-5 mt-7 sm:mt-10">
            <div className="flex justify-between">
              <Typography className="sm:text-lg text-md uppercase font-bold text-black">
                Detail Pesanan
              </Typography>
              <div className="flex flex-row-reverse sm:flex-row items-center gap-1">
                <Typography className="hidden sm:block text-lg uppercase font-bold text-black">
                  Order ID : ABC - 6457325
                </Typography>
                <Typography className="sm:hidden text-md uppercase font-bold text-black">
                  ABC - 6457325
                </Typography>
                <IoMdCopy className="w-5 h-5 sm:w-6 sm:h-6 hover:cursor-pointer" />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 w-full sm:py-2 sm:gap-9 space-y-4 sm:space-y-0">
              <div className="h-full flex flex-col">
                <Typography className="font-bold p-1 text-sm sm:text-lg text-black">
                  Informasi Pengguna
                </Typography>
                <div className="bg-white mx-1 space-y-1 sm:space-y-0 sm:mx-0 p-2 sm:p-3 rounded-lg border-gray-700 border-2 flex-grow overflow-y-auto scrollbar-none max-h-48">
                  <div className="flex gap-2">
                    <Typography className="font-bold text-sm sm:text-lg text-black">
                      Nama Lengkap :
                    </Typography>
                    <Typography className="text-sm sm:text-lg text-black">
                      Hengki Sitorus
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Typography className="font-bold text-sm sm:text-lg text-black">
                      No Telepon :
                    </Typography>
                    <Typography className="text-sm sm:text-lg text-black">
                      +62 89999999999
                    </Typography>
                  </div>
                  <div className="py-2">
                    <Typography className="font-bold text-sm sm:text-lg text-black">
                      Alamat:
                    </Typography>
                    <Typography className="w-80 sm:w-full text-sm sm:text-lg text-black">
                      Jalan Cikarang no 999 Batujajar Contoh 1 santai oke mantap
                      anjay mabar
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="h-full flex flex-col">
                <Typography className="font-bold p-1 text-sm sm:text-lg text-black">
                  Informasi Pesanan
                </Typography>
                <div className="bg-white mx-1 space-y-1 sm:space-y-0 sm:mx-0 p-2 sm:p-3 rounded-lg border-gray-700 border-2 flex flex-col flex-grow">
                  <div className="flex gap-2 sm:gap-5 overflow-x-auto whitespace-nowrap scrollbar-none flex-grow">
                    <div className="text-center space-y-1 sm:space-y-0">
                      <div className="flex items-center justify-center">
                        <Image
                          src={MMakanan}
                          alt="menu"
                          className="sm:w-24 sm:h-24 w-20 h-20"
                        />
                      </div>
                      <Typography className="text-xs sm:text-sm">
                        Nasi Ayam Geprek
                      </Typography>
                    </div>
                    <div className="text-center space-y-1 sm:space-y-0">
                      <div className="flex items-center justify-center">
                        <Image
                          src={MMinuman1}
                          alt="menu"
                          className="sm:w-24 sm:h-24 w-20 h-20"
                        />
                      </div>
                      <Typography className="text-xs sm:text-sm">
                        Good Day
                      </Typography>
                    </div>
                    <div className="text-center space-y-1 sm:space-y-0">
                      <div className="flex items-center justify-center">
                        <Image
                          src={MMinuman2}
                          alt="menu"
                          className="sm:w-24 sm:h-24 w-20 h-20"
                        />
                      </div>
                      <Typography className="text-xs sm:text-sm">
                        Lemon Tea
                      </Typography>
                    </div>
                  </div>
                  <div className="flex pt-2 w-full justify-end mt-auto">
                    <Typography className="text-sm sm:text-lg text-black w-full">
                      Total Pesanan:
                    </Typography>
                    <Typography className="font-bold text-sm sm:text-lg text-black w-full text-right">
                      Rp 250.000
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between sm:justify-end sm:gap-5 items-center mt-3 sm:mt-4 px-2 sm:px-4">
            <Button className="text-center border tracking-wider bg-orange-600 sm:text-sm text-white border-white shadow-md px-4 py-2 sm:px-9 sm:py-2 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300">
              Beri Penilaian
            </Button>
            <Button className="text-center border tracking-wider bg-[#AA5656] sm:text-sm text-white border-white shadow-md px-4 py-2 sm:px-9 sm:py-2 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300">
              Pesanan Selesai
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Konten;
