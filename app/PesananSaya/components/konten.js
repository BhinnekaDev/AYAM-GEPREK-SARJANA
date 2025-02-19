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
import usePesananSaya from "@/hooks/Backend/usePesananSaya";

const Konten = () => {
  const router = useRouter();
  const {
    pesanan,
    loading,
    handleFilterChange,
    handleOrderDetailClick,
    filterStatus,
  } = usePesananSaya();

  const filterOptions = [
    "Semua",
    "Sedang Dibuat",
    "Sedang Dikirim",
    "Selesai",
    "Dibatalkan",
  ];

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-6xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <CgProfile
            size={20}
            className="mr-2 hidden md:block text-black cursor-pointer"
          />
          <MdArrowBack
            onClick={() => router.back()}
            className="mr-2 text-black md:hidden cursor-pointer"
          />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Pesanan Saya
          </Typography>
        </div>
        <CardBody className="bg-[#EFF3EA] shadow-md rounded-lg sm:p-6 p-3">
          <div className="flex overflow-x-auto scrollbar-none gap-2 items-center sm:flex-wrap sm:justify-start p-2">
            {filterOptions.map((status) => (
              <Button
                key={status}
                variant="outlined"
                className={`py-1 px-4 capitalize text-sm ${
                  filterStatus === status
                    ? "text-[#AA5656] border-[#AA5656]"
                    : "text-gray-600 border-gray-600"
                } rounded-full whitespace-nowrap min-w-[100px]`}
                onClick={() => handleFilterChange(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          <div className="mt-4 sm:mx-8 sm:max-h-96 space-y-4 sm:overflow-y-auto">
            {loading ? (
              <Typography>Sedang memuat pesanan...</Typography>
            ) : (
              pesanan.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOrderDetailClick(item.id)}
                  className="border-2 sm:mx-2 border-gray-600 py-4 px-2 sm:px-8 rounded-lg shadow-sm space-y-2 hover:cursor-pointer hover:shadow-md hover:rounded-3xl transition-all duration-300"
                >
                  <div className="flex justify-between mx-1 sm:mx-0 sm:justify-start items-center gap-4">
                    <Typography className="sm:block hidden border-2 tracking-wide text-[#AA5656] border-[#AA5656] text-sm px-2 rounded-full font-bold">
                      {item.status}
                    </Typography>
                    <Typography className="sm:hidden font-bold text-gray-600 text-sm">
                      ID: {item.id}
                    </Typography>
                    <Typography className="font-bold text-gray-600 text-sm">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </Typography>
                  </div>
                  {/* DESKTOP */}
                  <div className="sm:flex w-full justify-between items-center gap-4 hidden">
                    <Image className="w-32 h-w-32" alt="gambar" src={gambar1} />
                    <div className="w-full">
                      <Typography className="text-[#AA5656] font-bold">
                        Order ID: {item.id}
                      </Typography>
                      <Typography className="text-gray-600">
                        {item.items
                          .map((menuItem) => menuItem.nama)
                          .join(" | ")}
                      </Typography>
                      <Typography className="text-gray-600 mt-4 font-bold">
                        Rp {item.totalAmount}
                      </Typography>
                    </div>
                    <FaChevronRight
                      onClick={() => handleOrderDetailClick(item.id)}
                      className="w-8 h-8 bg-black bg-opacity-15 p-2 rounded-full hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
                    />
                  </div>
                  {/* MOBILE */}
                  <div className="overflow-x-auto sm:hidden p-2 scrollbar-none">
                    <div className="flex w-max gap-4 items-center">
                      {item.items.map((menuItem) => (
                        <div
                          key={menuItem.id}
                          className="justify-center items-center"
                        >
                          <Image
                            className="w-24 h-24"
                            alt="gambar"
                            src={gambar1}
                          />
                          <Typography className="text-xs text-center">
                            {menuItem.nama}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gray-400 sm:hidden"></div>
                  <div className="flex justify-between items-center sm:hidden">
                    <Typography className="font-bold">
                      Rp {item.totalAmount}
                    </Typography>
                    <Typography className="text-center border tracking-wider border-[#AA5656] text-[#AA5656] text-sm  py-1 px-4 rounded-full font-bold">
                      {item.status}
                    </Typography>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Konten;
