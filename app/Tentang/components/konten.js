"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
// IMAGES
import bgGeprek from "@/assets/img/beranda/bgutils.png";

function Beranda() {
  return (
    <div className="flex flex-col items-center px-10 lg:px-20 py-14 lg:py-5 gap-16">
      <div className="flex justify-end px-6 items-end w-full">
        <Image src={bgGeprek} alt="Ayam Geprek" width={500} height={500} />
      </div>

      <div className="self-start justify-center text-center w-full lg:w-1/2 transform lg:-translate-y-20 transition-none">
        <Typography
          variant="h1"
          className="text-3xl lg:text-5xl font-bold text-black mb-6"
        >
          About Us
        </Typography>
        <Typography
          variant="paragraph"
          className="text-base lg:text-lg text-black leading-relaxed"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </div>
    </div>
  );
}

export default Beranda;
