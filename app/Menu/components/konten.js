"use client";
import React, { useState } from "react";
import {
  Typography,
  Button,
  Carousel,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";
import { motion } from "framer-motion";
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

function Beranda() {
  const { daftarMakanan } = useTampilkanMakanan();
  const { daftarMinuman } = useTampilkanMinuman();
  const [startIndexMakanan, setStartIndexMakanan] = useState(0);
  const [directionMakanan, setDirectionMakanan] = useState(1);
  const [startIndexMinuman, setStartIndexMinuman] = useState(0);
  const [directionMinuman, setDirectionMinuman] = useState(1);
  const makananTampil = daftarMakanan.slice(
    startIndexMakanan,
    startIndexMakanan + 5
  );
  const minumanTampil = daftarMinuman.slice(
    startIndexMinuman,
    startIndexMinuman + 5
  );
  const scrollMakananR = () => {
    if (startIndexMakanan + 5 < daftarMakanan.length) {
      setDirectionMakanan(1);
      setStartIndexMakanan(startIndexMakanan + 1);
    }
  };
  const scrollMakananL = () => {
    if (startIndexMakanan > 0) {
      setDirectionMakanan(-1);
      setStartIndexMakanan(startIndexMakanan - 1);
    }
  };
  const scrollMinumanR = () => {
    if (startIndexMinuman + 5 < daftarMinuman.length) {
      setDirectionMinuman(1);
      setStartIndexMinuman(startIndexMinuman + 1);
    }
  };
  const scrollMinumanL = () => {
    if (startIndexMinuman > 0) {
      setDirectionMinuman(-1);
      setStartIndexMinuman(startIndexMinuman - 1);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
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
          <div className="flex justify-center items-center gap-4 mt-2 mb-4 lg:mt-0 lg:mb-6">
            <Button
              onClick={() => scrollToSection("makananSection")}
              className="bg-[#AA5656] text-white py-1 px-4 text-sm sm:py-2 sm:px-8 capitalize tracking-wider sm:text-md rounded-full border-2 border-gray-400 shadow-md hover:shadow-md hover:bg-[#AA5656]/80"
            >
              Makanan
            </Button>
            <Button
              onClick={() => scrollToSection("minumanSection")}
              className="bg-[#AA5656] text-white py-1 px-4 text-sm sm:py-2 sm:px-8 capitalize tracking-wider sm:text-md rounded-full border-2 border-gray-400 shadow-md hover:shadow-md hover:bg-[#AA5656]/80"
            >
              Minuman
            </Button>
          </div>
          {/* MAKANAN */}
          <div id="makananSection" className="w-full">
            <Typography className="text-black text-start text-xl lg:text-[36px] font-semibold mb-2 lg:mb-8 ml-5 lg:ml-10">
              Makanan
            </Typography>
          </div>
          <div className="flex flex-row sm:gap-5 items-center w-full mb-5">
            <Button
              className={`bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 
      ${startIndexMakanan === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={scrollMakananL}
              disabled={startIndexMakanan === 0}
            >
              <FaChevronLeft className="h-5 w-5 text-black" />
            </Button>
            {/* MOBILE */}
            <div className="sm:hidden justify-center w-full px-2 space-y-4">
              {daftarMakanan.map((makanan) => (
                <div
                  key={makanan.id}
                  className="w-full bg-[#EFF3EA] flex flex-col items-center shadow-lg border border-gray-300"
                >
                  <Card className="flex flex-row gap-4 p-4 rounded-lg w-full">
                    <div className="flex justify-center items-center">
                      <Image
                        src={makanan.Gambar_Makanan || fotoMakanan}
                        alt={`menu-${makanan.Nama_Makanan}`}
                        width={200}
                        height={200}
                        className="w-44 h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="py-3 space-y-2">
                        <Typography className="text-lg lg:text-xl font-bold text-black">
                          <span className="line-clamp-2">
                            {makanan.Nama_Makanan}
                          </span>
                        </Typography>
                      </div>
                      <div className="w-full flex-col space-y-1 justify-center items-center mt-auto">
                        <Typography className="text-md text-gray-600">
                          {makanan.Deskripsi_Makanan}
                        </Typography>
                        <Typography className="text-lg text-black">
                          {formatRupiah(makanan.Harga_Makanan)}
                        </Typography>
                        <Button className="p-1 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                          beli
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* DESKTOP */}
            <div className="hidden sm:flex justify-start gap-8 w-full">
              {makananTampil.map((makanan) => (
                <motion.div
                  key={makanan.id}
                  animate={{ x: -directionMakanan * (startIndexMakanan * 15) }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full max-w-xs lg:max-w-56 flex flex-col items-center mb-6 lg:mb-9 shadow-lg border border-gray-300"
                >
                  <Card className="bg-[#EFF3EA] p-4 rounded-lg w-full h-full">
                    <Image
                      src={makanan.Gambar_Makanan || fotoMakanan}
                      alt={`menu-${makanan.id + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="flex flex-col w-full flex-1">
                      <div className="py-3 space-y-2 lg:space-y-1">
                        <Typography className="text-lg lg:text-xl font-bold text-black flex flex-col">
                          <span className="whitespace-normal overflow-wrap break-word">
                            {makanan.Nama_Makanan}
                          </span>
                        </Typography>
                      </div>
                      <div className="w-full flex-col space-y-1 justify-center items-center mt-auto">
                        <Typography className="text-md text-gray-600">
                          {makanan.Deskripsi_Makanan}
                        </Typography>
                        <Typography className="text-lg text-black">
                          {formatRupiah(makanan.Harga_Makanan)}
                        </Typography>
                        <Button className="p-1 lg:py-2 w-full lg:rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                          beli
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <Button
              className={`bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
      hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 
      ${
        startIndexMakanan + 5 >= daftarMakanan.length
          ? "opacity-50 cursor-not-allowed"
          : ""
      }`}
              onClick={scrollMakananR}
              disabled={startIndexMakanan + 5 >= daftarMakanan.length}
            >
              <FaChevronRight className="h-5 w-5 text-black" />
            </Button>
          </div>
          {/* MINUMAN */}
          <div className="w-full">
            <Typography className="text-black text-start text-xl lg:text-[36px] font-semibold mb-2 lg:mb-8 ml-5 lg:ml-10">
              Minuman
            </Typography>
          </div>
          <div
            id="minumanSection"
            className="flex flex-row sm:gap-5 items-center w-full"
          >
            <Button
              className={`bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
    hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 
    ${startIndexMinuman === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={scrollMinumanL}
              disabled={startIndexMinuman === 0}
            >
              <FaChevronLeft className="h-5 w-5 text-black" />
            </Button>
            {/* MOBILE */}
            <div className="sm:hidden justify-center w-full px-2 space-y-4">
              {daftarMinuman.map((minuman) => (
                <div
                  key={minuman.id}
                  className="w-full bg-[#EFF3EA] flex flex-col items-center shadow-lg border border-gray-300"
                >
                  <Card className="flex flex-row gap-4 p-4 rounded-lg w-full">
                    <div className="flex justify-center items-center">
                      <Image
                        src={minuman.Gambar_Minuman || fotoMinuman}
                        alt={`menu-${minuman.Nama_Minuman}`}
                        width={200}
                        height={200}
                        className="w-44 h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="py-3 space-y-2">
                        <Typography className="text-lg lg:text-xl font-bold text-black">
                          <span className="line-clamp-2">
                            {minuman.Nama_Minuman}
                          </span>
                        </Typography>
                      </div>
                      <div className="w-full flex-col space-y-1 justify-center items-center mt-auto">
                        <Typography className="text-md text-gray-600">
                          {minuman.Deskripsi_Minuman}
                        </Typography>
                        <Typography className="text-lg text-black">
                          {formatRupiah(minuman.Harga_Minuman)}
                        </Typography>
                        <Button className="p-1 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                          beli
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* DESKTOP */}
            <div className="hidden sm:flex justify-start gap-8 w-full">
              {minumanTampil.map((minuman) => (
                <motion.div
                  key={minuman.id}
                  animate={{ x: -directionMinuman * (startIndexMinuman * 15) }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full max-w-56 flex flex-col items-center mb-9 shadow-lg border border-gray-300"
                >
                  <Card className="bg-[#EFF3EA] p-4 rounded-lg w-full h-full">
                    <Image
                      src={minuman.Gambar_Minuman || fotoMinuman}
                      alt={`menu-${minuman.id + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="flex flex-col w-full flex-1">
                      <div className="py-3 space-y-2 lg:space-y-1">
                        <Typography className="text-xl font-bold text-black">
                          <span className="line-clamp-2">
                            {minuman.Nama_Minuman}
                          </span>
                        </Typography>
                      </div>
                      <div className="w-full flex-col space-y-1 justify-center items-center mt-auto">
                        <Typography className="text-md text-gray-600">
                          {minuman.Deskripsi_Minuman}
                        </Typography>
                        <Typography className="text-lg text-black">
                          {formatRupiah(minuman.Harga_Minuman)}
                        </Typography>
                        <Button className="py-2 w-full lg:rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                          beli
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <Button
              className={`bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full 
    hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300 
    ${
      startIndexMinuman + 5 >= daftarMinuman.length
        ? "opacity-50 cursor-not-allowed"
        : ""
    }`}
              onClick={scrollMinumanR}
              disabled={startIndexMinuman + 5 >= daftarMinuman.length}
            >
              <FaChevronRight className="h-5 w-5 text-black" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
