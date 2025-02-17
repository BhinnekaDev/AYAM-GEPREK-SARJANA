"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Typography, Carousel, IconButton } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// ICON
import { FaChevronLeft, FaChevronRight, FaReact } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { GrRestaurant } from "react-icons/gr";
import { IoRestaurantOutline } from "react-icons/io5";
// IMAGES
import C1 from "@/assets/img/kontak/carousel1.png";
import C2 from "@/assets/img/kontak/carousel2.png";

function Beranda() {
  const router = useRouter();
  const [animasiKunci, setanimasiKunci] = useState(0);
  const handleArrowClick = () => {
    setanimasiKunci((prevKey) => prevKey + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel
        className="h-44 overflow-hidden md:h-72 lg:h-[440px]"
        autoplay={false}
        autoplayDelay={5000}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            onClick={() => {
              handlePrev();
              handleArrowClick();
            }}
            className="!absolute top-2/4 left-4 hidden -translate-y-2/4 bg-black bg-opacity-20 rounded-full lg:block"
          >
            <FaChevronLeft size={23} />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            onClick={() => {
              handleNext();
              handleArrowClick();
            }}
            className="!absolute top-2/4 !right-4 hidden -translate-y-2/4 bg-black bg-opacity-20 rounded-full lg:block"
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
        <div className="relative h-full w-full">
          <motion.div
            key={`animasiKunci-${animasiKunci}`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover pt-12"
            />
          </motion.div>
          <div className="lg:hidden">
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover -mt-8 md:-mt-24"
            />
          </div>
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 text-center md:w-2/4">
              {/* DESKTOP */}
              <motion.div
                key={`animasiKunci2-${animasiKunci}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hidden lg:block"
              >
                <Typography className="pt-12 text-5xl mb-1 text-black font-bold">
                  Contact our friendly team
                </Typography>
              </motion.div>
              <motion.div
                key={`animasiKunci3-${animasiKunci}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden lg:block"
              >
                <Typography className="mb-12 opacity-70 text-black sm:text-2xl font-bold">
                  Let us know how we can help.
                </Typography>
              </motion.div>
              {/* MOBILE */}
              <div className="flex flex-col items-center justify-center mt-10 md:mt-36 lg:hidden">
                <Typography className="text-xl text-black font-bold text-center md:text-4xl">
                  Contact our friendly team
                </Typography>
                <Typography className="opacity-70 text-sm text-black font-bold text-center md:text-xl">
                  Let us know how we can help.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <motion.div
            key={`animasiKunci-${animasiKunci + 1}`}
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover flex self-center pt-12"
            />
          </motion.div>
          <div className="lg:hidden">
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover -mt-8 md:-mt-24"
            />
          </div>
          <div className="absolute inset-0 grid h-full w-full place-items-center justify-center lg:place-items-start">
            <div className="w-full text-center ml-20 md:ml-48 md:mt-12">
              {/* DESKTOP */}
              <motion.div
                key={`animasiKunci2-${animasiKunci + 1}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden lg:block"
              >
                <Typography className="pt-20 mb-2 text-5xl text-black font-bold">
                  Contact us in below
                </Typography>
              </motion.div>
              <motion.div
                key={`animasiKunci3-${animasiKunci + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="hidden lg:block"
              >
                <Typography className="opacity-70 text-black sm:text-2xl font-bold">
                  Let us help you.
                </Typography>
              </motion.div>
              {/* MOBILE */}
              <div className="flex flex-col items-center justify-center space-y-1 mt-9 md:mt-24 lg:hidden">
                <Typography className="text-xl text-black font-bold text-center md:text-4xl">
                  Contact us in below
                </Typography>
                <Typography className="opacity-70 text-sm text-black font-bold text-center md:text-xl">
                  Let us help you.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="w-full flex flex-col justify-center items-center pt-12 px-4 gap-6 md:px-32 md:flex-col md:gap-8 lg:gap-10 lg:flex-row lg:mt-12">
        <div className="bg-[#FFF2C2] flex w-full rounded-xl p-5 shadow-md gap-2 md:h-auto lg:gap-0 lg:flex-col lg:w-80 lg:h-auto">
          <div className="flex justify-start items-start md:p-8 lg:p-0">
            <BiPhoneCall className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div className="md:space-y-3 lg:spy-0">
            <div className="lg:mt-20 lg:mb-2">
              <Typography className="text-black text-2xl sm:text-3xl font-bold">
                Call Us
              </Typography>
            </div>
            <div className="sm:space-y-2 space-y-1">
              <Typography className="text-gray-700 text-lg sm:text-xl font-bold">
                Mon - Fri from 8am - 5pm.
              </Typography>
              <div className="flex gap-1 items-center">
                <GrRestaurant className="w-5 h-5  sm:w-6 sm:h-6 text-black" />
                <a
                  href="tel:+6285659558935"
                  className="w-48 text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:rounded-full after:w-0 after:bg-black 
            after:transition-all after:duration-500 hover:after:w-full"
                >
                  +62-85659558935
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF2C2] flex w-full rounded-xl p-5 shadow-md gap-2 md:h-auto lg:gap-0 lg:flex-col lg:w-80 lg:h-auto">
          <div className="flex justify-start items-start md:p-8 lg:p-0">
            <FiMapPin className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div className="md:space-y-3 lg:space-y-0">
            <div className="lg:mt-20 lg:mb-2">
              <Typography className="text-black text-2xl sm:text-3xl font-bold">
                Visit Us
              </Typography>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Typography className="text-gray-700 text-lg sm:text-xl font-bold">
                Visit our residence
              </Typography>
              <div className="flex gap-1 items-center">
                <IoRestaurantOutline className="w-5 h-5  sm:w-6 sm:h-6 text-black" />
                <a
                  href="https://maps.app.goo.gl/2i2fCzCMeXmwSavr5"
                  target="_blank"
                  className="w-[210px] text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:rounded-full after:w-0 after:bg-black 
  after:transition-all after:duration-500 hover:after:w-full"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF2C2] flex w-full rounded-xl p-5 shadow-md gap-2 md:h-auto lg:gap-0 lg:flex-col lg:w-80 lg:h-auto">
          <div className="flex justify-start items-start md:p-8 lg:p-0">
            <TbMessage className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div className="md:space-y-3 lg:space-y-0">
            <div className="lg:mt-14 lg:mb-2">
              <Typography className="text-black text-2xl sm:text-3xl font-bold">
                Developer Chat
              </Typography>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Typography className="text-gray-700 text-lg sm:text-xl font-bold">
                About Developer? Contact at
              </Typography>
              <div className="flex gap-1 items-center">
                <FaReact
                  style={{ animation: "spin 2s linear infinite" }}
                  className="w-5 h-5   sm:w-6 sm:h-6 text-black"
                />
                <Typography
                  onClick={() =>
                    window.open("https://wa.me/6281217044800", "_blank")
                  }
                  className="w-36 text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:rounded-full after:w-0 after:bg-black 
    after:transition-all after:duration-500 hover:after:w-full"
                >
                  Bhinneka Dev.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
