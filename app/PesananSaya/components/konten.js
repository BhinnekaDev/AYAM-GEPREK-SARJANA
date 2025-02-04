import React from "react";
import { Card, Typography, Button, CardBody } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import gambar1 from "@/assets/img/menu/menu1.png";
// ICONS
import { CgProfile } from "react-icons/cg";
import { MdArrowBack } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const Konten = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-6xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <CgProfile
            size={20}
            className="mr-2 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack className="mr-2 text-black md:hidden cursor-pointer" />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Pesanan Saya
          </Typography>
        </div>
        <CardBody className="bg-[#EFF3EA] rounded-lg sm:p-6 p-3">
          <div className="sm:flex hidden gap-2 items-center">
            <Button
              variant="outlined"
              className="py-1 px-4 capitalize text-sm text-[#AA5656] border-[#AA5656] rounded-full"
            >
              Semua
            </Button>
            <Button
              variant="outlined"
              className="py-1 px-4 capitalize text-sm text-gray-600 border-gray-600 rounded-full"
            >
              Sedang Dibuat
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-4 capitalize text-sm text-gray-600 border-gray-600 rounded-full"
            >
              Sedang Dikirim
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-4 capitalize text-sm text-gray-600 border-gray-600 rounded-full"
            >
              Selesai
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-4 capitalize text-sm text-gray-600 border-gray-600 rounded-full"
            >
              Dibatalkan
            </Button>
          </div>
          <div className="flex sm:hidden gap-3 items-center overflow-x-auto scrollbar-none">
            <Button
              variant="outlined"
              className="py-1 px-3 capitalize text-sm text-[#AA5656] border-[#AA5656] rounded-lg"
            >
              Semua
            </Button>
            <Button
              variant="outlined"
              className="py-1 px-3 capitalize text-sm text-gray-600 border-gray-600 rounded-lg"
            >
              Dibuat
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-3 capitalize text-sm text-gray-600 border-gray-600 rounded-lg"
            >
              Dikirim
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-3 capitalize text-sm text-gray-600 border-gray-600 rounded-lg"
            >
              Selesai
            </Button>
            <Button
              variant="outlined"
              className="p-1 py-1 px-3 capitalize text-sm text-gray-600 border-gray-600 rounded-lg"
            >
              Dibatalkan
            </Button>
          </div>
          <div className="mt-4 sm:mx-8 sm:max-h-96 space-y-4 sm:overflow-y-auto">
            <div
              onClick={() => router.push("/DetailPesanan")}
              className="border-2 sm:mx-2 border-gray-600 py-4 px-2 sm:px-8 rounded-lg shadow-sm space-y-2 hover:cursor-pointer hover:shadow-md hover:rounded-3xl transition-all duration-300"
            >
              <div className="flex justify-between mx-1 sm:mx-0 sm:justify-start items-center gap-4">
                <Typography className="sm:block hidden border-2 tracking-wide text-[#AA5656] border-[#AA5656] text-sm px-2 rounded-full font-bold">
                  Sedang Dibuat
                </Typography>
                <Typography className="sm:hidden font-bold text-gray-600 text-sm">
                  ID: ABC-6457325
                </Typography>
                <Typography className="font-bold text-gray-600 text-sm">
                  31 Januari 2025
                </Typography>
              </div>
              {/* DESKTOP */}
              <div className="sm:flex w-full justify-between items-center gap-4 hidden">
                <Image className="w-32 h-w-32" alt="gambar" src={gambar1} />
                <div className="w-full">
                  <Typography className="text-[#AA5656] font-bold">
                    Order ID: ABC-6457325
                  </Typography>
                  <Typography className="text-gray-600">
                    Nasi Ayam Sambal Matah | Indomie Ayam Geprek | Dancow Coklat
                    | Lemon Tea
                  </Typography>
                  <Typography className="text-gray-600 mt-4 font-bold">
                    Rp 68.000
                  </Typography>
                </div>
                <FaChevronRight className="w-8 h-8 bg-black bg-opacity-15 p-2 rounded-full hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300" />
              </div>
              {/* MOBILE */}
              <div className="overflow-x-auto sm:hidden p-2 scrollbar-none">
                <div className="flex w-max gap-4 items-center">
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gray-400 sm:hidden"></div>
              <div className="flex justify-between items-center sm:hidden">
                <Typography className="font-bold">Rp 68.000</Typography>
                <div className="flex gap-2 items-center">
                  <Typography className="text-center border-2 tracking-wide text-gray-600 border-gray-600 text-sm px-2 rounded-full font-bold">
                    Selesai
                  </Typography>
                  <Button className="bg-[#AA5656] px-6 py-1 capitalize tracking-wider rounded-full">
                    Nilai
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-2 sm:mx-2 border-gray-600 py-4 px-2 sm:px-8 rounded-lg shadow-sm space-y-2 hover:cursor-pointer hover:shadow-md hover:rounded-3xl transition-all duration-300">
              <div className="flex justify-between mx-1 sm:mx-0 sm:justify-start items-center gap-4">
                <Typography className="sm:block hidden border-2 tracking-wide text-[#AA5656] border-[#AA5656] text-sm px-2 rounded-full font-bold">
                  Sedang Dibuat
                </Typography>
                <Typography className="sm:hidden font-bold text-gray-600 text-sm">
                  ID: ABC-6457325
                </Typography>
                <Typography className="font-bold text-gray-600 text-sm">
                  31 Januari 2025
                </Typography>
              </div>
              {/* DESKTOP */}
              <div className="sm:flex w-full justify-between items-center gap-4 hidden">
                <Image className="w-32 h-w-32" alt="gambar" src={gambar1} />
                <div className="w-full">
                  <Typography className="text-[#AA5656] font-bold">
                    Order ID: ABC-6457325
                  </Typography>
                  <Typography className="text-gray-600">
                    Nasi Ayam Sambal Matah | Indomie Ayam Geprek | Dancow Coklat
                    | Lemon Tea
                  </Typography>
                  <Typography className="text-gray-600 mt-4 font-bold">
                    Rp 68.000
                  </Typography>
                </div>
                <FaChevronRight className="w-8 h-8 bg-black bg-opacity-15 p-2 rounded-full hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300" />
              </div>
              {/* MOBILE */}
              <div className="overflow-x-auto sm:hidden p-2 scrollbar-none">
                <div className="flex w-max gap-4 items-center">
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gray-400 sm:hidden"></div>
              <div className="flex justify-between items-center sm:hidden">
                <Typography className="font-bold">Rp 68.000</Typography>
                <div className="flex gap-2 items-center">
                  <Typography className="text-center border-2 tracking-wide text-gray-600 border-gray-600 text-sm px-2 rounded-full font-bold">
                    Selesai
                  </Typography>
                  <Button className="bg-[#AA5656] px-6 py-1 capitalize tracking-wider rounded-full">
                    Nilai
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-2 sm:mx-2 border-gray-600 py-4 px-2 sm:px-8 rounded-lg shadow-sm space-y-2 hover:cursor-pointer hover:shadow-md hover:rounded-3xl transition-all duration-300">
              <div className="flex justify-between mx-1 sm:mx-0 sm:justify-start items-center gap-4">
                <Typography className="sm:block hidden border-2 tracking-wide text-[#AA5656] border-[#AA5656] text-sm px-2 rounded-full font-bold">
                  Sedang Dibuat
                </Typography>
                <Typography className="sm:hidden font-bold text-gray-600 text-sm">
                  ID: ABC-6457325
                </Typography>
                <Typography className="font-bold text-gray-600 text-sm">
                  31 Januari 2025
                </Typography>
              </div>
              {/* DESKTOP */}
              <div className="sm:flex w-full justify-between items-center gap-4 hidden">
                <Image className="w-32 h-w-32" alt="gambar" src={gambar1} />
                <div className="w-full">
                  <Typography className="text-[#AA5656] font-bold">
                    Order ID: ABC-6457325
                  </Typography>
                  <Typography className="text-gray-600">
                    Nasi Ayam Sambal Matah | Indomie Ayam Geprek | Dancow Coklat
                    | Lemon Tea
                  </Typography>
                  <Typography className="text-gray-600 mt-4 font-bold">
                    Rp 68.000
                  </Typography>
                </div>
                <FaChevronRight className="w-8 h-8 bg-black bg-opacity-15 p-2 rounded-full hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300" />
              </div>
              {/* MOBILE */}
              <div className="overflow-x-auto sm:hidden p-2 scrollbar-none">
                <div className="flex w-max gap-4 items-center">
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                  <div className="justify-center items-center">
                    <Image className="w-24 h-24" alt="gambar" src={gambar1} />
                    <Typography className="text-xs text-center">
                      Nasi Ayam Geprek
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gray-400 sm:hidden"></div>
              <div className="flex justify-between items-center sm:hidden">
                <Typography className="font-bold">Rp 68.000</Typography>
                <div className="flex gap-2 items-center">
                  <Typography className="text-center border-2 tracking-wide text-gray-600 border-gray-600 text-sm px-2 rounded-full font-bold">
                    Selesai
                  </Typography>
                  <Button className="bg-[#AA5656] px-6 py-1 capitalize tracking-wider rounded-full">
                    Nilai
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Konten;
