"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  Button,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
// ICON
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
// IMAGES
import C1 from "@/assets/img/carousel/1.png";
import C2 from "@/assets/img/carousel/2.png";
import logoImage from "@/assets/img/logo.png";
//UTILS
import { formatRupiah } from "@/utils/formatRupiah";
// HOOKS
import useTampilkanMakanan from "@/hooks/Backend/useTampilkanMakanan";
import useTampilkanMinuman from "@/hooks/Backend/useTampilkanMinuman";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
// COMPONENT
import Konten from "@/app/DetailMenu/components/konten";
function Beranda() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [maxLengthName, setMaxLengthName] = useState(24);
  const menuRef = useRef(null);
  const { daftarMakanan, sedangMemuatMakanan } = useTampilkanMakanan();
  const { daftarMinuman, sedangMemuatMinuman } = useTampilkanMinuman();
  const { tambahKeKeranjang } = useKeranjangPesanan();

  useEffect(() => {
    if (daftarMakanan.length > 0 || daftarMinuman.length > 0) {
      const makananDenganKategori = daftarMakanan.map((item) => ({
        ...item,
        kategori: "makanan",
      }));

      const minumanDenganKategori = daftarMinuman.map((item) => ({
        ...item,
        kategori: "minuman",
      }));

      setMenuItems([...makananDenganKategori, ...minumanDenganKategori]);
    }
  }, [daftarMakanan, daftarMinuman]);

  useEffect(() => {
    const handleResize = () => {
      setMaxLengthName(window.innerWidth <= 768 ? 33 : 24);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollMenuL = () => {
    if (menuRef.current) {
      menuRef.current.scrollLeft -= 250;
    }
  };

  const scrollMenuR = () => {
    if (menuRef.current) {
      menuRef.current.scrollLeft += 250;
    }
  };

  const handleBeliClick = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {selectedItem ? (
        <Konten item={selectedItem} onBack={handleBack} />
      ) : (
        <>
          <Carousel
            className="h-44 lg:h-96"
            autoplay={true}
            autoplayDelay={5000}
            loop={true}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 hidden lg:block -translate-y-2/4 bg-black bg-opacity-20 rounded-full"
              >
                <FaChevronLeft size={23} />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="black"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 hidden lg:block -translate-y-2/4 bg-black bg-opacity-20 rounded-full"
              >
                <FaChevronRight size={23} />
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-2 lg:bottom-4 left-2/4 z-50 flex -translate-x-2/4">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block cursor-pointer transition-all ${
                      activeIndex === i ? "text-black" : "text-black"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    {activeIndex === i ? <GoDotFill /> : <GoDot />}
                  </span>
                ))}
              </div>
            )}
          >
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover flex justify-center items-center"
            />
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover flex self-center"
            />
          </Carousel>

          <div className="w-full flex justify-center items-center mt-6 px-4 md:px-3 md:mt-12 lg:px-3 lg:mt-12">
            <div className="bg-[#FFF2C2] px-2 py-4 w-full rounded-lg flex flex-col justify-center items-center shadow-lg mb-9 md:p-5 lg:p-10">
              <div className="w-full flex justify-center items-center">
                <Typography className="text-black text-2xl font-bold mb-2 md:text-3xl md:mb-4 lg:mb-8 lg:text-4xl">
                  Menu Terlaris!
                </Typography>
              </div>
              <div className="flex flex-row items-center w-full mb-5 md:gap-2 lg:gap-5">
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 md:flex lg:flex"
                  onClick={scrollMenuL}
                >
                  <FaChevronLeft className="h-5 w-5 text-black" />
                </Button>
                <div
                  ref={menuRef}
                  className="flex flex-col px-2 space-y-4 scroll-smooth scrollbar-none w-full md:overflow-x-auto md:flex-row md:space-x-4 md:space-y-0 md:p-2 lg:flex-row lg:overflow-x-auto lg:space-x-6 lg:space-y-0 lg:p-3"
                >
                  {sedangMemuatMakanan || sedangMemuatMinuman
                    ? [...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 bg-white p-4 w-full animate-pulse h-32 rounded-lg shadow-lg md:h-auto md:flex-col md:w-56 md:gap-0 lg:h-auto lg:flex-col lg:w-56 lg:gap-0"
                        >
                          <div className="flex justify-center items-center bg-gray-300 w-full h-full rounded-lg mb-3 md:h-32 lg:h-32"></div>
                          <div className="bg-gray-300 h-4 w-full mb-2 rounded-full hidden md:block lg:block"></div>
                          <div className="bg-gray-300 h-4 w-3/4  mb-1 rounded-full hidden md:block lg:block"></div>
                          <div className="bg-gray-300 h-4 w-1/2  mb-1 rounded-full hidden md:block lg:block"></div>
                          <div className="bg-gray-300 h-4 w-1/4 rounded-full hidden md:block lg:block"></div>
                          <div className="w-full flex md:hidden lg:hidden flex-col justify-center items-start space-y-2">
                            <div className="bg-gray-300 h-4 w-full rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-3/4 rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-1/2 rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-full rounded-full"></div>
                          </div>
                        </div>
                      ))
                    : menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="w-full flex flex-col items-center shadow-lg border border-gray-300 md:w-44 md:flex-shrink-0 lg:w-56 lg:flex-shrink-0"
                        >
                          <Card className="flex flex-row bg-[#EFF3EA] gap-4 p-4 rounded-lg w-full md:gap-0 md:flex-col md:h-full lg:gap-0 lg:flex-col lg:h-full">
                            <div className="flex justify-center items-center">
                              <Image
                                src={
                                  item.Gambar_Makanan ||
                                  item.Gambar_Minuman ||
                                  logoImage
                                }
                                alt={`menu-${
                                  item.Nama_Makanan ||
                                  item.Nama_Minuman ||
                                  "tidak diketahui"
                                }`}
                                width={200}
                                height={200}
                                className="w-44 h-auto object-cover rounded-lg md:w-full lg:w-full"
                              />
                            </div>
                            <div className="flex flex-col w-full md:flex-1 lg:flex-1">
                              <div className="py-3 space-y-2 md:space-y-1 lg:space-y-1">
                                <Typography className="text-lg font-bold text-black line-clamp-2 md:text-lg lg:text-xl">
                                  {item.Nama_Makanan
                                    ? item.Nama_Makanan.length > maxLengthName
                                      ? item.Nama_Makanan.slice(
                                          0,
                                          maxLengthName
                                        ) + " ..."
                                      : item.Nama_Makanan
                                    : item.Nama_Minuman
                                    ? item.Nama_Minuman.length > maxLengthName
                                      ? item.Nama_Minuman.slice(
                                          0,
                                          maxLengthName
                                        ) + " ..."
                                      : item.Nama_Minuman
                                    : "Menu Tidak Diketahui"}
                                </Typography>
                              </div>
                              <div className="w-full flex-col space-y-1 justify-center items-center mt-auto md:space-y-2 lg:space-y-2">
                                <Typography className="text-md text-gray-600">
                                  {item.Deskripsi_Makanan ||
                                    item.Deskripsi_Minuman ||
                                    "Deskripsi tidak tersedia"}
                                </Typography>
                                <Typography className="text-lg font-bold text-black">
                                  {item.Harga_Makanan || item.Harga_Minuman
                                    ? formatRupiah(
                                        item.Harga_Makanan || item.Harga_Minuman
                                      )
                                    : "Harga tidak tersedia"}
                                </Typography>
                                <Button
                                  className="p-1 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md md:px-2 lg:py-2"
                                  onClick={() => handleBeliClick(item)}
                                >
                                  Beli
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      ))}
                </div>
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 md:flex lg:flex"
                  onClick={scrollMenuR}
                >
                  <FaChevronRight className="h-5 w-5 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Beranda;
