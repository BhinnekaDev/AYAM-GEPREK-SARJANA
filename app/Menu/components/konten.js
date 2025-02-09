"use client";
import React from "react";
import Image from "next/image";
import {
  Typography,
  CardBody,
  Button,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
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
  const scrollRef1 = React.useRef(null);
  const scrollRef2 = React.useRef(null);
  const scrollRef3 = React.useRef(null);

  const { daftarMakanan } = useTampilkanMakanan();
  const { daftarMinuman } = useTampilkanMinuman();

  const scrollLeft1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft3 = () => {
    if (scrollRef3.current) {
      scrollRef3.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight3 = () => {
    if (scrollRef3.current) {
      scrollRef3.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
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

      <div className="w-full flex justify-center items-center mt-6 lg:mt-12">
        <div className=" bg-[#FFF2C2] mx-5 lg:mx-0 px-2 py-8 lg:px-7 lg:py-10 rounded-lg flex flex-col justify-center items-center shadow-lg mb-9">
          <div className="lg:flex hidden justify-center items-center gap-4 lg:gap-6 lg:mb-6">
            <Typography className="lg:px-7 lg:py-1 text-sm p-1 bg-[#AA5656] text-white border border-gray-500 tracking-wider cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              Makanan
            </Typography>
            <Typography className="lg:px-7 lg:py-1 text-sm p-1 bg-black bg-opacity-10 text-black border border-black tracking-wider shadow-none cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              Minuman (Coffe)
            </Typography>
            <Typography className="lg:px-7 lg:py-1 text-sm p-1 bg-black bg-opacity-10 text-black border border-black tracking-wider shadow-none cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              Minuman (non-Coffe)
            </Typography>
          </div>
          <div className="flex lg:hidden justify-center items-center gap-2 mb-7 lg:gap-6 lg:mb-6">
            <Typography className="lg:px-7 lg:py-1 text-sm py-2 px-4 rounded-full lg:rounded-none bg-[#AA5656] text-white border border-gray-500 tracking-wider cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              Makanan
            </Typography>
            <Typography className="lg:px-7 lg:py-1 text-sm py-2 px-4 rounded-full lg:rounded-none bg-black bg-opacity-10 text-black border border-black tracking-wider shadow-none cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              Coffe
            </Typography>
            <Typography className="lg:px-7 lg:py-1 text-sm py-2 px-4 rounded-full lg:rounded-none bg-black bg-opacity-10 text-black border border-black tracking-wider shadow-none cursor-pointer hover:rounded-3xl hover:scale-95 transform transition-all ease-in-out duration-300">
              non-Coffe
            </Typography>
          </div>
          <div className="w-full">
            <Typography className="text-black text-start text-2xl lg:text-[36px] font-semibold mb-0 lg:mb-5 ml-5 lg:ml-10">
              Makanan
            </Typography>
          </div>
          <div className="flex items-center w-full max-w-full lg:max-w-[90rem] lg:mb-12">
            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollLeft1}
            >
              <FaChevronLeft className="h-5 w-5 text-black" />
            </Button>

            <div
              ref={scrollRef1}
              className="grid grid-cols-1 mb-6 lg:mb-0 lg:flex lg:flex-row gap-5 lg:gap-12 py-4 lg:overflow-x-scroll lg:scrollbar-none lg:scroll-smooth mx-4 max-w-full lg:max-w-[90%]"
            >
              {daftarMakanan.map((makanan) => (
                <CardBody
                  key={makanan.id}
                  className="bg-[#EFF3EA] flex lg:flex-col gap-2 p-2 lg:gap-5 rounded-xl shadow-md lg:shadow-lg w-full lg:w-[250px] lg:flex-shrink-0"
                >
                  <Image
                    src={makanan.Gambar_Makanan || fotoMakanan}
                    alt={`menu-${makanan.id + 1}`}
                    width={200}
                    height={200}
                    className="w-1/2 lg:w-full lg:h-auto rounded-lg self-center"
                  />
                  <div className="flex-col ">
                    <div className="py-3 space-y-1 lg:space-y-1">
                      <Typography className="text-md lg:text-xl text-black">
                        {makanan.Nama_Makanan}
                      </Typography>
                      <Typography className="text-xs text-gray-600">
                        {makanan.Deskripsi_Makanan}
                      </Typography>
                      <Typography className="text-md text-black">
                        {formatRupiah(makanan.Harga_Makanan)}
                      </Typography>
                    </div>
                    <div className="w-full lg:mt-2 flex justify-center items-center">
                      <Button className="p-1 lg:py-2 w-full lg:rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                        beli
                      </Button>
                    </div>
                  </div>
                </CardBody>
              ))}
            </div>

            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollRight1}
            >
              <FaChevronRight className="h-5 w-5 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <Typography className="text-black text-start text-2xl lg:text-[36px] font-semibold mb-0 ml-3 lg:mb-5 lg:ml-10">
              Minuman (Coffe)
            </Typography>
          </div>
          <div className="flex items-center w-full max-w-full lg:max-w-[90rem] lg:mb-9">
            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollLeft2}
            >
              <FaChevronLeft className="h-5 w-5 text-black" />
            </Button>

            <div
              ref={scrollRef2}
              className="grid grid-cols-2 lg:flex lg:flex-row gap-3 mb-4 lg:mb-0 lg:gap-12 py-4 lg:overflow-x-scroll lg:scrollbar-none lg:scroll-smooth mx-4 max-w-full lg:max-w-[90%]"
            >
              {daftarMinuman.map((minuman) => (
                <CardBody
                  key={minuman.id}
                  className="bg-[#EFF3EA] rounded-xl p-3 shadow-md lg:shadow-lg w-full lg:w-[250px] lg:flex-shrink-0"
                >
                  <Image
                    src={minuman.Gambar_Minuman || fotoMinuman}
                    alt={`menu-${minuman.id + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="py-3 space-y-2 lg:space-y-1">
                    <Typography className="text-lg lg:text-xl text-black">
                      {minuman.Nama_Minuman}
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      {minuman.Deskripsi_Minuman}
                    </Typography>
                    <Typography className="text-md text-black">
                      {formatRupiah(minuman.Harga_Minuman)}
                    </Typography>
                  </div>
                  <div className="w-full lg:mt-2 flex justify-center items-center">
                    <Button className="p-1 lg:py-2 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                      beli
                    </Button>
                  </div>
                </CardBody>
              ))}
            </div>

            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollRight2}
            >
              <FaChevronRight className="h-5 w-5 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <Typography className="text-black text-start text-2xl lg:text-[36px] font-semibold ml-3 lg:mb-5 lg:ml-10">
              Minuman (non Coffe)
            </Typography>
          </div>
          <div className="flex items-center w-full max-w-full lg:max-w-[90rem]">
            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollLeft3}
            >
              <FaChevronLeft className="h-5 w-5 text-black" />
            </Button>

            <div
              ref={scrollRef3}
              className="grid grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-12 py-4 lg:overflow-x-scroll lg:scrollbar-none lg:scroll-smooth mx-4 max-w-full lg:max-w-[90%]"
            >
              {daftarMinuman.map((minuman) => (
                <CardBody
                  key={minuman.id}
                  className="bg-[#EFF3EA] rounded-xl p-3 shadow-md lg:shadow-lg w-full lg:w-[250px] lg:flex-shrink-0"
                >
                  <Image
                    src={minuman.Gambar_Minuman || fotoMinuman}
                    alt={`menu-${minuman.id + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="py-3 space-y-2 lg:space-y-1">
                    <Typography className="text-lg lg:text-xl text-black">
                      {minuman.Nama_Minuman}
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      {minuman.Deskripsi_Minuman}
                    </Typography>
                    <Typography className="text-md text-black">
                      {formatRupiah(minuman.Harga_Minuman)}
                    </Typography>
                  </div>
                  <div className="w-full lg:mt-2 flex justify-center items-center">
                    <Button className="p-1 lg:py-2 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md">
                      beli
                    </Button>
                  </div>
                </CardBody>
              ))}
            </div>

            <Button
              className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
              onClick={scrollRight3}
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
