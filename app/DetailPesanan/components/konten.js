import React, { useState, useEffect, useCallback } from "react";
import { Card, Typography, CardBody, Button } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// IMAGES
import MMakanan from "@/assets/img/menu/menu1.png";
import MMinuman1 from "@/assets/img/menu/menu2.png";
import MMinuman2 from "@/assets/img/menu/menu3.png";

// ICONS
import { MdArrowBack } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";

// MODAL
import ModalRating from "@/components/modalRating";

// Hook
import useTampilkanPesanan from "@/hooks/Backend/useTampilkanPesanan";
import { formatRupiah } from "@/utils/formatRupiah";

const DetailPesanan = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    const newOpen = !open;
    setOpen(newOpen);
    localStorage.setItem("modalOpen", JSON.stringify(newOpen));
  };

  useEffect(() => {
    // Memeriksa apakah ada status open modal yang tersimpan di localStorage saat komponen di-mount
    const storedModalOpen = localStorage.getItem("modalOpen");
    if (storedModalOpen) {
      setOpen(JSON.parse(storedModalOpen));
    }
  }, []);

  const [isOrderIdLoaded, setIsOrderIdLoaded] = useState(false);
  const [isPesananDibatalkan, setIsPesananDibatalkan] = useState(false);
  const [isPesananSelesai, setIsPesananSelesai] = useState(false);

  const { pesanan, loading, batalkanPesanan, tandaiSelesai } =
    useTampilkanPesanan(orderId);

  useEffect(() => {
    if (pesanan) {
      setIsPesananDibatalkan(pesanan.status === "Dibatalkan");
      setIsPesananSelesai(pesanan.status === "Selesai");
    }
  }, [pesanan]);

  useEffect(() => {
    let progressInterval;

    if (!isHidden && !isPesananDibatalkan && pesanan?.status !== "Selesai") {
      let counter = 0;
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 20, 100);
          return newProgress;
        });

        counter++;
        if (counter >= 5) clearInterval(progressInterval);
      }, 1000);
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [isHidden, isPesananDibatalkan, pesanan?.status]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsHidden(true);
        setShowButtons(true);
      }, 800);
    }
  }, [progress]);

  useEffect(() => {
    // Memeriksa apakah orderId sudah ada di localStorage
    const storedOrderId = localStorage.getItem("orderId");
    if (storedOrderId) {
      setOrderId(storedOrderId);
      setIsOrderIdLoaded(true);
    } else {
      setIsOrderIdLoaded(true);
    }
  }, []);

  if (!isOrderIdLoaded) {
    return <Typography>Memeriksa Order ID...</Typography>;
  }

  if (loading) {
    return <Typography>Sedang memuat pesanan...</Typography>;
  }

  if (!pesanan) {
    return <Typography>Pesanan tidak ditemukan.</Typography>;
  }

  const {
    userId,
    Nama_Depan,
    Nama_Belakang,
    Email,
    No_Telepon,
    Alamat,
    items,
    metodePembayaran,
    metodePengiriman,
    totalAmount,
    status,
    createdAt,
    id,
  } = pesanan;

  const handleLihatRiwayatPesanan = () => {
    localStorage.removeItem("orderId");
    router.push("/PesananSaya");
  };

  const handleBatalkanPesanan = async () => {
    try {
      await batalkanPesanan(orderId);
      setIsPesananDibatalkan(true);
      toast.success("Pesanan Berhasil di batalkan");
      // router.push("/PesananSaya");
    } catch (error) {
      toast.error("Gagal membatalkan pesanan");
    }
  };

  const handleTandaiSelesai = async () => {
    try {
      await tandaiSelesai(orderId);
      setIsPesananSelesai(true);
      toast.success("Pesanan Selesai");
    } catch (error) {
      toast.error("Gagal menandai pesanan sebagai selesai");
    }
  };

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-6xl shadow-md md:shadow-lg p-4 sm:p-6 ">
        <div className="flex w-full items-center justify-start mb-5 sm:mb-3">
          <MdArrowBack
            className="mr-2 text-black cursor-pointer"
            onClick={() => {
              localStorage.removeItem("orderId");
              router.back();
            }}
          />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Tracking Pesanan
          </Typography>
        </div>
        <CardBody className="rounded-lg p-0">
          <div className="flex justify-center items-center">
            <div className="flex flex-col md:space-y-1">
              <div className="flex justify-center items-center m-auto p-3 rounded-full bg-[#F48888] border-black border-2">
                <RiFileList3Line className="text-black w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-center">
                <Typography className="font-bold text-sm md:text-[16px] lg:text-lg">
                  Pesanan Dibuat
                </Typography>
                <Typography className="text-sm md:text-[16px] lg:text-lg">
                  09.00 - 10.00
                </Typography>
              </div>
            </div>
            <div className="relative w-20 md:w-52 lg:w-64 h-1 bg-gray-400 overflow-hidden rounded-lg md:-mt-12 md:-mx-6 lg:-mt-14 lg:-mx-8 -mt-16 -mx-5">
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
            <div className="flex flex-col md:space-y-1">
              <div className="flex justify-center items-center m-auto p-3 rounded-full bg-gray-400">
                <FaShippingFast className="text-black w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-center">
                <Typography className="font-bold text-sm md:text-[16px] lg:text-lg">
                  Pesanan Diantar
                </Typography>
                <Typography className="text-sm md:text-[16px] lg:text-lg">
                  09.00 - 10.00
                </Typography>
              </div>
            </div>
            <div className="flex justify-center w-20 md:w-52 lg:w-64 h-1 bg-gray-400 overflow-hidden rounded-lg md:-mt-12 md:-mx-6 lg:-mt-14 lg:-mx-8 -mt-16 -mx-5"></div>
            <div className="flex flex-col md:space-y-1">
              <div className="flex justify-center items-center m-auto p-3 rounded-full bg-gray-400">
                <LuPackageCheck className="text-black w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-center">
                <Typography className="font-bold text-sm md:text-[16px] lg:text-lg">
                  Pesanan Selesai
                </Typography>
                <Typography className="text-sm md:text-[16px] lg:text-lg">
                  09.00 - 10.00
                </Typography>
              </div>
            </div>
          </div>
          <div className="bg-[#EFF3EA] rounded-lg shadow-md p-2 sm:p-5 mt-7 sm:mt-10">
            <div className="flex justify-between">
              <Typography className="sm:text-lg text-md uppercase font-bold text-black">
                Detail Pesanan
              </Typography>
              <div className="flex flex-row items-center gap-1">
                <Typography className="hidden sm:block text-lg uppercase font-bold text-black">
                  Order ID : {id}
                </Typography>
                <Typography className="sm:hidden text-md uppercase font-bold text-black">
                  {id}
                </Typography>
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
                      {Nama_Depan} {Nama_Belakang}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Typography className="font-bold text-sm sm:text-lg text-black">
                      No Telepon :
                    </Typography>
                    <Typography className="text-sm sm:text-lg text-black">
                      {No_Telepon}
                    </Typography>
                  </div>
                  <div className="py-2">
                    <Typography className="font-bold text-sm sm:text-lg text-black">
                      Alamat:
                    </Typography>
                    {/* Render address */}
                    {Alamat && (
                      <>
                        <Typography className="text-sm sm:text-lg text-black">
                          {Alamat.Alamat_Jalan}, RT {Alamat.RT} RW {Alamat.RW}
                        </Typography>
                        <Typography className="text-sm sm:text-lg text-black">
                          {Alamat.Alamat_Detail}, {Alamat.Kecamatan}
                        </Typography>
                        <Typography className="text-sm sm:text-lg text-black">
                          {Alamat.Kota}, {Alamat.Provinsi} {Alamat.Kode_Pos}
                        </Typography>
                      </>
                    )}
                    {!Alamat && (
                      <Typography className="text-sm sm:text-lg text-black">
                        Alamat tidak tersedia
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-full flex flex-col">
                <Typography className="font-bold p-1 text-sm sm:text-lg text-black">
                  Informasi Pesanan
                </Typography>
                <div className="bg-white h-full mx-1 space-y-1 sm:space-y-0 sm:mx-0 rounded-lg border-gray-700 border-2 flex flex-col">
                  <div className="h-32 overflow-y-auto p-3 space-y-3">
                  {items &&
                      items.map((item) => (
                        <div
                          className="flex gap-2 sm:gap-5 justify-between"
                          key={item.id}
                        >
                          <div className="flex items-center justify-start gap-3">
                            <div className="bg-gray-300 hidden sm:block border border-gray-400 rounded-lg">
                              {item.kategori === "makanan" && (
                                <Image
                                  className="w-full h-24 p-1"
                                  src={MMakanan}
                                  alt="gambarMakanan"
                                />
                              )}
                              {item.kategori === "minuman" && (
                                <Image
                                  className="w-full h-24 p-1"
                                  src={MMinuman1}
                                  alt="gambarMinuman"
                                />
                              )}
                            </div>
                            <div className="flex flex-col justify-center">
                              <Typography className="text-sm lg:text-md font-bold text-gray-600">
                                {item.kategori === "makanan"
                                  ? "Makanan"
                                  : "Minuman"}
                              </Typography>
                              <Typography className="font-bold text-black text-md md:text-sm lg:text-lg">
                                {item.nama}
                              </Typography>
                              <Typography className="text-sm md:text-xs lg:text-md ">
                                {item.kategori === "makanan" && (
                                  <span>
                                    {item.rasaSambal &&
                                      `Sambal ${item.rasaSambal} - `}
                                    {item.levelPedas &&
                                      `Pedas ${item.levelPedas}`}
                                  </span>
                                )}
                                {item.kategori === "minuman" && (
                                  <span>{item.tipeMinuman}</span>
                                )}
                              </Typography>
                            </div>
                          </div>
                          <div className="flex justify-center items-center gap-3">
                            <Typography className="font-bold text-gray-600 text-md md:text-sm lg:text-md">
                              x{item.jumlah}
                            </Typography>
                            <Typography className="font-bold text-black text-md md:text-sm lg:text-md">
                              {formatRupiah(item.harga)}
                            </Typography>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="flex w-full p-2 flex-grow items-end justify-between mt-auto">
                    <Typography className="text-md font-bold sm:text-lg text-black">
                      Total Pesanan:
                    </Typography>
                    <Typography className="font-bold text-md sm:text-lg text-black">
                      {formatRupiah(totalAmount)}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex ${
              !isHidden
                ? "justify-end"
                : "justify-between sm:justify-end sm:gap-5"
            } items-center mt-3 sm:mt-4 px-2 sm:px-4`}
          >
            {/* Button Batalkan Pesanan */}
            {!isHidden &&
              !isPesananDibatalkan &&
              pesanan?.status !== "Selesai" && (
                <button
                  onClick={handleBatalkanPesanan}
                  className="flex items-center justify-center gap-1 sm:gap-3 text-center border tracking-wider bg-red-400 text-xs sm:text-sm text-white border-white shadow-md px-3 py-2 sm:px-6 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300"
                >
                  <svg className="h-4 w-4 sm:w-6 sm:h-6" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="white"
                      strokeWidth="8"
                      fill="transparent"
                      opacity="0.2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="white"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset={`${251.2 - (progress / 100) * 251.2}`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      style={{ transition: "stroke-dashoffset 1s linear" }}
                    />
                  </svg>
                  Batalkan Pesanan
                </button>
              )}

            {/* Button Beri Penilaian dan Pesanan Selesai */}
            {showButtons &&
              !isPesananDibatalkan &&
              pesanan?.status !== "Dibatalkan" && (
                <>
                  {!isPesananSelesai && (
                    <Button
                      onClick={handleTandaiSelesai}
                      className="text-center border tracking-wider bg-[#AA5656] sm:text-sm text-white border-white shadow-md px-4 py-2 sm:px-9 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300"
                    >
                      Pesanan Selesai
                    </Button>
                  )}
                  <Button
                    onClick={handleOpen}
                    className="text-center border tracking-wider bg-orange-600 sm:text-sm text-white border-white shadow-md px-4 py-2 sm:px-9 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300"
                  >
                    Beri Penilaian
                  </Button>
                </>
              )}

            {/* ModalRating hanya ditampilkan jika status pesanan adalah "Selesai" atau "Sedang Dikirim" */}
            {(isPesananSelesai || pesanan?.status === "Sedang Dikirim") && (
              <ModalRating open={open} handleOpen={handleOpen} />
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailPesanan;
