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
  // Hooks State
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

          <div className="w-full flex justify-center items-center mt-6 lg:mt-12 px-4 sm:px-3">
            <div className="bg-[#FFF2C2] px-2 py-4 sm:px-10 w-full lg:py-10 rounded-lg flex flex-col justify-center items-center shadow-lg mb-9">
              <div className="w-full flex justify-center items-center">
                <Typography className="text-black text-2xl lg:text-4xl font-bold mb-2 lg:mb-8">
                  Menu Terlaris!
                </Typography>
              </div>
              <div className="flex flex-row sm:gap-5 items-center w-full mb-5">
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
                  onClick={scrollMenuL}
                >
                  <FaChevronLeft className="h-5 w-5 text-black" />
                </Button>
                <div
                  ref={menuRef}
                  className="sm:overflow-x-auto flex flex-col sm:flex-row sm:space-x-6 px-2 space-y-4 sm:space-y-0 sm:p-3 scroll-smooth scrollbar-none w-full"
                >
                  {sedangMemuatMakanan || sedangMemuatMinuman
                    ? [...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-row sm:flex-col gap-4 sm:gap-0 bg-white p-4 w-full sm:w-56 animate-pulse h-32 sm:h-auto rounded-lg shadow-lg"
                        >
                          <div className="flex justify-center items-center bg-gray-300 w-full h-full sm:h-32 rounded-lg mb-3"></div>
                          <div className="bg-gray-300 h-4 w-full mb-2 rounded-full hidden sm:block"></div>
                          <div className="bg-gray-300 h-4 w-3/4  mb-1 rounded-full hidden sm:block"></div>
                          <div className="bg-gray-300 h-4 w-1/2  mb-1 rounded-full hidden sm:block"></div>
                          <div className="bg-gray-300 h-4 w-1/4 rounded-full hidden sm:block"></div>
                          <div className="w-full flex sm:hidden flex-col justify-center items-start space-y-2">
                            <div className="bg-gray-300 h-4 w-full sm:w-3/4 rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-3/4 rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-1/2 rounded-full"></div>
                            <div className="bg-gray-300 h-4 w-full rounded-full"></div>
                          </div>
                        </div>
                      ))
                    : menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="w-full sm:w-56 flex flex-col items-center shadow-lg border border-gray-300 sm:flex-shrink-0"
                        >
                          <Card className="flex flex-row sm:flex-col bg-[#EFF3EA] gap-4 sm:gap-0 p-4 rounded-lg w-full sm:h-full">
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
                                className="w-44 sm:w-full h-auto object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex flex-col w-full sm:flex-1">
                              <div className="py-3 space-y-2 sm:space-y-1">
                                <Typography className="text-lg sm:text-xl font-bold text-black line-clamp-2">
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
                              <div className="w-full flex-col space-y-1 sm:space-y-2 justify-center items-center mt-auto">
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
                                  className="p-1 sm:py-2 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md"
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
                  className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
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
