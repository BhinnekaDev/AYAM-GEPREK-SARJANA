"use client";
import React, { useState } from "react";
import Image from "next/image";
// IMAGE
import logo from "@/assets/img/logo.png";
import { Button } from "@material-tailwind/react";
// ICON
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { GiChickenOven, GiCook } from "react-icons/gi";
import { MdFastfood, MdContacts } from "react-icons/md";
import { TbUserStar } from "react-icons/tb";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 md:px-8 py-2 bg-transparent relative">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Sarjana Geprek Logo"
          width={60}
          height={60}
          className="md:w-50 md:h-50"
        />
        <span className="text-lg md:text-xl font-bold ml-2 md:ml-3 text-black">
          Sarjana Geprek
        </span>
      </div>

      <div className="md:hidden relative flex items-center">
        <Button
          variant="outlined"
          color="black"
          className="flex items-center justify-center border-none px-3 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
        >
          <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
        </Button>

        <Button
          variant="outlined"
          color="black"
          className="flex items-center justify-center border-none px-3 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
          onClick={toggleMenu}
        >
          <FiMenu className="w-6 h-6" />
        </Button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col w-full bg-white rounded-lg md:hidden -mb-10 mt-2 gap-4 p-4 transition-all duration-500 transform ease-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <ul className="flex flex-col gap-4 text-black font-medium transition-all duration-300">
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            <GiChickenOven size={20} />
            <div className="icon-container"></div>
            Beranda
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            <GiCook size={20} />
            <div className="icon-container"></div>
            Tentang kita
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            <MdFastfood size={20} />
            <div className="icon-container"></div>
            Menu
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            <TbUserStar size={20} />
            <div className="icon-container"></div>
            Testimoni
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            <MdContacts size={20} />
            <div className="icon-container"></div>
            Kontak
          </li>
        </ul>
      </div>

      <div className="hidden md:flex md:flex-row md:items-center mx-0 md:mx-14 gap-4 md:gap-12 mt-4 md:mt-0">
        <ul className="flex flex-row gap-4 md:gap-6 text-black font-medium transition-all duration-300">
          <li className="hover:underline cursor-pointer">Beranda</li>
          <li className="hover:underline cursor-pointer">Tentang kita</li>
          <li className="hover:underline cursor-pointer">Menu</li>
          <li className="hover:underline cursor-pointer">Testimoni</li>
          <li className="hover:underline cursor-pointer">Kontak</li>
        </ul>

        <Button
          variant="outlined"
          color="black"
          className="flex items-center justify-center border-none px-3 md:px-4 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
        >
          <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
