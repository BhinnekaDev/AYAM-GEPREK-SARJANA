"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Button,
  Carousel,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// ICON
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
//UTILS
import { formatRupiah } from "@/utils/formatRupiah";
// IMAGES
import C1 from "@/assets/img/carousel/1.png";
import C2 from "@/assets/img/carousel/2.png";
const fotoMakanan = require("@/assets/img/menu/menu1.png");
const fotoMinuman = require("@/assets/img/menu/menu2.png");
// HOOKS
import useTampilkanMakanan from "@/hooks/Backend/useTampilkanMakanan";
import useTampilkanMinuman from "@/hooks/Backend/useTampilkanMinuman";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
// COMPONENT
import Konten from "@/app/DetailMenu/components/konten";

function Beranda() {
  const router = useRouter();
  const { daftarMakanan, sedangMemuatMakanan } = useTampilkanMakanan();
  const { daftarMinuman, sedangMemuatMinuman } = useTampilkanMinuman();
  const { tambahKeKeranjang } = useKeranjangPesanan();
  const makananRef = useRef(null);
  const minumanRef = useRef(null);
  const [maxLengthName, setMaxLengthName] = useState(24);
  const [selectedItem, setSelectedItem] = useState(null);

  const makananDenganKategori = daftarMakanan.map((makanan) => ({
    ...makanan,
    kategori: "makanan",
  }));

  const minumanDenganKategori = daftarMinuman.map((minuman) => ({
    ...minuman,
    kategori: "minuman",
  }));

  useEffect(() => {
    const handleResize = () => {
      setMaxLengthName(window.innerWidth <= 768 ? 33 : 24);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollMakananL = () => {
    if (makananRef.current) makananRef.current.scrollLeft -= 250;
  };

  const scrollMakananR = () => {
    if (makananRef.current) makananRef.current.scrollLeft += 250;
  };

  const scrollMinumanL = () => {
    if (minumanRef.current) minumanRef.current.scrollLeft -= 250;
  };

  const scrollMinumanR = () => {
    if (minumanRef.current) minumanRef.current.scrollLeft += 250;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBeliClick = (item) => {
    tambahKeKeranjang({ ...item, jumlah: 1 });
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
              <div className="flex justify-center items-center gap-4 mt-2 mb-4 md:my-2 lg:mt-0 lg:mb-6">
                <Button
                  onClick={() => scrollToSection("makananSection")}
                  className="bg-[#AA5656]/90 text-white py-1 px-4 text-sm capitalize tracking-wider rounded-full border-2 border-gray-400 shadow-md hover:shadow-md hover:bg-[#AA5656]/80 md:text-md md:py-2 md:px-6 lg:text-md lg:py-2 lg:px-8"
                >
                  Makanan
                </Button>
                <Button
                  onClick={() => scrollToSection("minumanSection")}
                  className="bg-[#AA5656]/90 text-white py-1 px-4 text-sm capitalize tracking-wider rounded-full border-2 border-gray-400 shadow-md hover:shadow-md hover:bg-[#AA5656]/80 md:text-md md:py-2 md:px-6 lg:text-md lg:py-2 lg:px-8"
                >
                  Minuman
                </Button>
              </div>
              {/* MAKANAN */}
              <div id="makananSection" className="w-full">
                <Typography className="text-black text-start text-xl font-semibold mb-2 md:text-2xl md:mb-0 lg:mb-8 ml-5 lg:ml-10 lg:text-[36px]">
                  Makanan
                </Typography>
              </div>
              <div className="flex flex-row items-center w-full mb-5 md:gap-2 lg:gap-5">
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 md:flex lg:flex"
                  onClick={scrollMakananL}
                >
                  <FaChevronLeft className="h-5 w-5 text-black" />
                </Button>
                <div
                  ref={makananRef}
                  className="flex flex-col px-2 space-y-4 scroll-smooth scrollbar-none w-full md:overflow-x-auto md:flex-row md:space-x-4 md:space-y-0 md:p-2 lg:flex-row lg:overflow-x-auto lg:space-x-6 lg:space-y-0 lg:p-3"
                >
                  {sedangMemuatMakanan
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
                    : makananDenganKategori.map((makanan) => (
                        <div
                          key={makanan.id}
                          className="w-full flex flex-col items-center shadow-lg border border-gray-300 md:w-44 md:flex-shrink-0 lg:w-56 lg:flex-shrink-0"
                        >
                          <Card className="flex flex-row bg-[#EFF3EA] gap-4 p-4 rounded-lg w-full md:gap-0 md:flex-col md:h-full lg:gap-0 lg:flex-col lg:h-full">
                            <div className="flex justify-center items-center">
                              <Image
                                src={makanan.Gambar_Makanan || fotoMakanan}
                                alt={`menu-${makanan.id + 1}`}
                                width={200}
                                height={200}
                                className="w-44 h-auto object-cover rounded-lg md:w-full lg:w-full"
                              />
                            </div>
                            <div className="flex flex-col w-full md:flex-1 lg:flex-1">
                              <div className="py-3 space-y-2 md:space-y-1 lg:space-y-1">
                                <Typography className="text-lg font-bold text-black line-clamp-2 md:text-lg lg:text-xl">
                                  {makanan.Nama_Makanan.length > maxLengthName
                                    ? makanan.Nama_Makanan.slice(
                                        0,
                                        maxLengthName
                                      ) + " ..."
                                    : makanan.Nama_Makanan}
                                </Typography>
                              </div>
                              <div className="w-full flex-col space-y-1 justify-center items-center mt-auto md:space-y-2 lg:space-y-2">
                                <Typography className="text-md text-gray-600">
                                  {makanan.Deskripsi_Makanan}
                                </Typography>
                                <Typography className="text-lg font-bold text-black">
                                  {formatRupiah(makanan.Harga_Makanan)}
                                </Typography>
                                <Button
                                  className="p-1 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md md:px-2 lg:py-2"
                                  onClick={() => handleBeliClick(makanan)}
                                >
                                  beli
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
                  onClick={scrollMakananR}
                >
                  <FaChevronRight className="h-5 w-5 text-black" />
                </Button>
              </div>
              {/* MINUMAN */}
              <div className="w-full">
                <Typography className="text-black text-start text-xl font-semibold mb-2 md:text-2xl md:mb-0 lg:mb-8 ml-5 lg:ml-10 lg:text-[36px]">
                  Minuman
                </Typography>
              </div>
              <div
                id="minumanSection"
                className="flex flex-row items-center w-full mb-5 md:gap-2 lg:gap-5"
              >
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden justify-center items-center rounded-full 
                      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 md:flex lg:flex"
                  onClick={scrollMinumanL}
                >
                  <FaChevronLeft className="h-5 w-5 text-black" />
                </Button>
                <div
                  ref={minumanRef}
                  className="flex flex-col px-2 space-y-4 scroll-smooth scrollbar-none w-full md:overflow-x-auto md:flex-row md:space-x-4 md:space-y-0 md:p-2 lg:flex-row lg:overflow-x-auto lg:space-x-6 lg:space-y-0 lg:p-3"
                >
                  {sedangMemuatMinuman
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
                    : minumanDenganKategori.map((minuman) => (
                        <div
                          key={minuman.id}
                          className="w-full flex flex-col items-center shadow-lg border border-gray-300 md:w-44 md:flex-shrink-0 lg:w-56 lg:flex-shrink-0"
                        >
                          <Card className="flex flex-row bg-[#EFF3EA] gap-4 p-4 rounded-lg w-full md:gap-0 md:flex-col md:h-full lg:gap-0 lg:flex-col lg:h-full">
                            <div className="flex justify-center items-center">
                              <Image
                                src={minuman.Gambar_Minuman || fotoMinuman}
                                alt={`menu-${minuman.Nama_Minuman}`}
                                width={200}
                                height={200}
                                className="w-44 h-auto object-cover rounded-lg md:w-full lg:w-full"
                              />
                            </div>
                            <div className="flex flex-col w-full md:flex-1 lg:flex-1">
                              <div className="py-3 space-y-2 md:space-y-1 lg:space-y-1">
                                <Typography className="text-lg font-bold text-black line-clamp-2 md:text-lg lg:text-xl">
                                  {minuman.Nama_Minuman.length > maxLengthName
                                    ? minuman.Nama_Minuman.slice(
                                        0,
                                        maxLengthName
                                      ) + "..."
                                    : minuman.Nama_Minuman}
                                </Typography>
                              </div>
                              <div className="w-full flex-col space-y-1 justify-center items-center mt-auto md:space-y-2 lg:space-y-2">
                                <Typography className="text-md text-gray-600">
                                  {minuman.Deskripsi_Minuman}
                                </Typography>
                                <Typography className="text-lg font-bold text-black">
                                  {formatRupiah(minuman.Harga_Minuman)}
                                </Typography>
                                <Button
                                  className="p-1 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md md:px-2 lg:py-2"
                                  onClick={() => handleBeliClick(minuman)}
                                >
                                  beli
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
                  onClick={scrollMinumanR}
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
