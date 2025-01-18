"use client";
import React, { useState } from "react";
import Image from "next/image";
// IMAGE
import logo from "@/assets/img/logo.png";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
} from "@material-tailwind/react";
// ICON
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { GiChickenOven, GiCook } from "react-icons/gi";
import { MdFastfood, MdContacts } from "react-icons/md";
import { TbUserStar } from "react-icons/tb";
import { FaCog, FaRegUserCircle, FaPowerOff } from "react-icons/fa";
//HOOKS
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif();
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
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Beranda" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Beranda")}
          >
            <GiChickenOven size={20} />
            Beranda
          </li>
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Menu" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Menu")}
          >
            <MdFastfood size={20} />
            Menu
          </li>
          <li className="flex items-center gap-2 hover:underline cursor-pointer">
            <MdContacts size={20} />
            Kontak Kami
          </li>
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Tentang" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Tentang")}
          >
            <GiCook size={20} />
            Tentang kita
          </li>
          <hr className="border-t-2 border-gray-400 mx-12" />
          <div className="flex items-center justify-evenly">
            <div
              className={`flex gap-2 bg-orange-100 text-orange-900 py-1 px-3 items-center justify-center rounded-lg hover:underline cursor-pointer ${
                navbarAktif === "/Profil" ? "underline" : ""
              }`}
              onClick={() => handlenavbarAktif("/Profil")}
            >
              <FaRegUserCircle size={20} />
              <Typography>Profile Saya</Typography>
            </div>
            <div
              className="flex gap-2 bg-red-100 py-1 px-3 items-center justify-center rounded-lg text-red-900 hover:underline cursor-pointer
            "
            >
              <FaPowerOff size={20} />
              <Typography>Keluar</Typography>
            </div>
          </div>
        </ul>
      </div>

      <div className="hidden md:flex md:flex-row md:items-center mx-0 md:mx-6 gap-8 md:gap-12 mt-4 md:mt-0">
        <ul className="flex flex-row gap-4 md:gap-8 text-black font-medium transition-all duration-300">
          <li
            className={`hover:underline cursor-pointer ${
              navbarAktif === "/Beranda" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Beranda")}
          >
            Beranda
          </li>
          <li
            className={`hover:underline cursor-pointer ${
              navbarAktif === "/Menu" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Menu")}
          >
            Menu
          </li>
          <li className="hover:underline cursor-pointer">Kontak Kami</li>
          <li
            className={`hover:underline cursor-pointer ${
              navbarAktif === "/Tentang" ? "underline" : ""
            }`}
            onClick={() => handlenavbarAktif("/Tentang")}
          >
            Tentang kita
          </li>
        </ul>
        <div className="flex gap-1">
          <Button
            variant="outlined"
            color="black"
            className="flex items-center justify-center border-none md:px-4 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
          <Menu>
            <MenuHandler className="bg-transparent shadow-none hover:bg-black">
              <IconButton>
                <FaCog className="w-5 h-5 text-black hover:text-white" />
              </IconButton>
            </MenuHandler>
            <MenuList className="p-1 rounded-lg -ml-12">
              <MenuItem
                className={`flex items-center px-3 py-2 gap-2 ${
                  navbarAktif === "/Profil" ? "bg-blue-100" : ""
                }`}
                onClick={() => handlenavbarAktif("/Profil")}
              >
                <FaRegUserCircle size={18} />
                <Typography>Profile Saya</Typography>
              </MenuItem>
              <MenuItem className="flex items-center px-3 py-2 gap-2">
                <FaPowerOff size={17} />
                <Typography>Keluar</Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
