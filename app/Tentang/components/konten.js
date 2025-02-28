"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
// IMAGES
import bgGeprek from "@/assets/img/menu/menu1.png";
import bgGeprek2 from "@/assets/img/menu/menu2.png";
import bgGeprek3 from "@/assets/img/menu/menu3.png";

const images = [bgGeprek, bgGeprek2, bgGeprek3];

function Beranda() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-10 md:px-0 lg:px-20 lg:py-1 gap-16">
      <div className="relative flex px-12 md:px-0 justify-end items-end w-full h-[300px] sm:h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, y: -500, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            exit={{ x: -300, y: -500, scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute md:px-0 lg:px-12"
          >
            <Image
              src={images[index]}
              alt="Ayam Geprek"
              className="w-56 h-56 sm:w-[400px] sm:h-[400px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="self-start justify-center text-center w-full lg:w-1/2 transform lg:-translate-y-20 transition-none">
        <Typography
          variant="h1"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
        >
          Tentang Kami
        </Typography>
        <Typography
          variant="paragraph"
          className="md:text-2xl lg:text-lg text-black leading-tight"
        >
          Ayam Geprek Sarjana adalah restoran yang menyajikan ayam geprek dengan
          cita rasa khas yang sudah terkenal di kawasan Cimahi. Terletak di Jl.
          Ibu Ganirah No.115, Cibeber, Kec. Cimahi Sel., Kota Cimahi, Jawa
          Barat, kami menyajikan hidangan ayam geprek yang lezat dan pedas, siap
          memanjakan lidah Anda. Nikmati pengalaman makan yang tak terlupakan
          hanya di Ayam Geprek Sarjana!
        </Typography>
      </div>
    </div>
  );
}

export default Beranda;
