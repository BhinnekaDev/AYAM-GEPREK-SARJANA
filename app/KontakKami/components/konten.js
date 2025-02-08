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
    <div className="flex flex-col items-center justify-center sm:-mt-24 sm:mb-8">
      <Carousel
        className="h-44 lg:h-[440px] overflow-hidden"
        autoplay={true}
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
            className="!absolute top-2/4 left-4 hidden lg:block -translate-y-2/4 bg-black bg-opacity-20 rounded-full"
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
        <div className="relative h-full w-full">
          <motion.div
            key={`animasiKunci-${animasiKunci}`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden sm:block"
          >
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="sm:hidden -mt-6">
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover"
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
                className="hidden sm:block"
              >
                <Typography className="mb-4 sm:text-6xl text-black font-bold">
                  Contact our friendly team
                </Typography>
              </motion.div>
              <motion.div
                key={`animasiKunci3-${animasiKunci}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden sm:block"
              >
                <Typography className="mb-12 opacity-70 text-black sm:text-2xl font-bold">
                  Let us know how we can help.
                </Typography>
              </motion.div>
              {/* MOBILE */}
              <div className="sm:hidden flex flex-col items-center justify-center mt-10">
                <Typography className="text-xl text-black font-bold text-center">
                  Contact our friendly team
                </Typography>
                <Typography className="opacity-70 text-sm text-black font-bold text-center">
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
            className="hidden sm:block"
          >
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover flex self-center"
            />
          </motion.div>
          <div className="sm:hidden -mt-6">
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 grid h-full w-full sm:place-items-start place-items-center justify-center">
            <div className="w-full text-center sm:ml-48 sm:mt-20 ml-20">
              {/* DESKTOP */}
              <motion.div
                key={`animasiKunci2-${animasiKunci + 1}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden sm:block"
              >
                <Typography className="mb-4 sm:text-6xl text-black font-bold">
                  Contact us in below
                </Typography>
              </motion.div>
              <motion.div
                key={`animasiKunci3-${animasiKunci + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="hidden sm:block"
              >
                <Typography className="mb-12 opacity-70 text-black sm:text-2xl font-bold">
                  Let us help you.
                </Typography>
              </motion.div>
              {/* MOBILE */}
              <div className="sm:hidden flex flex-col items-center justify-center space-y-1 mt-4">
                <Typography className="text-xl text-black font-bold text-center">
                  Contact us in below
                </Typography>
                <Typography className="opacity-70 text-sm text-black font-bold text-center">
                  Let us help you.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center pt-12 sm:mt-12 sm:gap-10 px-4 gap-6">
        <div className="bg-[#FFF2C2] flex sm:flex-col sm:w-80 sm:h-72 rounded-xl p-5 shadow-md gap-2 sm:gap-0 w-full">
          <div className="flex justify-start items-start">
            <BiPhoneCall className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div>
            <div className="sm:mt-20 sm:mb-2">
              <Typography className="text-black text-2xl sm:text-3xl font-bold">
                Call Us
              </Typography>
            </div>
            <div className="sm:space-y-2 space-y-1">
              <Typography className="text-gray-700 text-lg sm:text-xl font-bold">
                Mon - Fri from 8am - 5pm.
              </Typography>
              <div className="flex gap-1 items-center">
                <GrRestaurant className="w-5 h-5   sm:w-6 sm:h-6 text-black" />
                <Typography
                  className="w-44 text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:rounded-full after:w-0 after:bg-black 
    after:transition-all after:duration-500 hover:after:w-full"
                >
                  +62-881122334567
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF2C2] flex sm:flex-col sm:w-80 sm:h-72 rounded-xl p-5 shadow-md gap-2 sm:gap-0 w-full">
          <div className="flex justify-start items-start">
            <FiMapPin className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div>
            <div className="sm:mt-20 sm:mb-2">
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
                <Typography
                  className="w-[200px] text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:rounded-full after:w-0 after:bg-black 
    after:transition-all after:duration-500 hover:after:w-full"
                >
                  View on Google Maps
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF2C2] flex sm:flex-col sm:w-80 sm:h-72 rounded-xl gap-2 sm:gap-0 p-5 shadow-md w-full">
          <div className="flex justify-start items-start ">
            <TbMessage className="text-black w-8 h-8 sm:w-12 sm:h-12 border-2" />
          </div>
          <div>
            <div className="sm:mt-20 sm:mb-2">
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
                  className="w-32 text-black cursor-pointer text-lg sm:text-xl font-bold relative transition-all ease-in-out duration-300 underline decoration-2 hover:no-underline
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
