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
import { FaCog, FaRegUserCircle, FaPowerOff } from "react-icons/fa";
import { TbShoppingCartCog } from "react-icons/tb";
//HOOKS
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import useKeluarAkun from "@/hooks/Backend/useKeluarAkun";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { keluarAkun } = useKeluarAkun();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif();
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 md:px-8 py-2 bg-transparent">
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

      <div className="md:hidden flex items-center">
        <Button
          variant="outlined"
          color="black"
          onClick={() => handlenavbarAktif("/Keranjang")}
          className={`flex items-center justify-center border-none px-3 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 ${
            navbarAktif === "/Keranjang"
              ? "bg-black bg-opacity-25 rounded-full"
              : ""
          }`}
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
              navbarAktif === "/Beranda" ? "underline font-semibold" : ""
            }`}
            onClick={() => handlenavbarAktif("/Beranda")}
          >
            <GiChickenOven size={20} />
            Beranda
          </li>
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Menu" ? "underline font-semibold" : ""
            }`}
            onClick={() => handlenavbarAktif("/Menu")}
          >
            <MdFastfood size={20} />
            Menu
          </li>
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Kontak" ? "underline font-semibold" : ""
            }`}
            onClick={() => handlenavbarAktif("/Kontak")}
          >
            <MdContacts size={20} />
            Kontak Kami
          </li>
          <li
            className={`flex items-center gap-2 hover:underline cursor-pointer ${
              navbarAktif === "/Tentang" ? "underline font-semibold" : ""
            }`}
            onClick={() => handlenavbarAktif("/Tentang")}
          >
            <GiCook size={20} />
            Tentang kita
          </li>
          <div className="flex-col justify-center items-center space-y-2">
            <div className="flex justify-center items-center gap-3">
              <div
                className={`flex gap-2 bg-green-100 text-black w-full p-1 items-center justify-center rounded-full hover:underline cursor-pointer ${
                  navbarAktif === "/Profil" ? "underline" : ""
                }`}
                onClick={() => handlenavbarAktif("/Profil")}
              >
                <FaRegUserCircle size={18} />
                <Typography>Profile Saya</Typography>
              </div>
              <div
                className={`flex gap-2 bg-green-100 text-black w-full p-1 items-center justify-center rounded-full hover:underline cursor-pointer ${
                  navbarAktif === "/Pesanan" ? "underline" : ""
                }`}
                onClick={() => handlenavbarAktif("/Pesanan")}
              >
                <TbShoppingCartCog size={18} />
                <Typography>Pesanan Saya</Typography>
              </div>
            </div>
            <div
              className="flex gap-2 p-1 items-center justify-center rounded-full text-red-900 hover:underline cursor-pointer
            "
              onClick={keluarAkun}
            >
              <FaPowerOff size={18} />
              <Typography className="font-semibold">Keluar</Typography>
            </div>
          </div>
        </ul>
      </div>

      <div className="md:flex hidden flex-row items-center gap-12">
        <ul className="flex flex-row gap-8 text-black font-medium transition-all duration-300">
          <li
            className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${
        navbarAktif === "/Beranda"
          ? "after:w-full after:left-0 after:!transition-none font-semibold"
          : "after:w-0 hover:after:w-full hover:after:left-0"
      } 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
            onClick={() => handlenavbarAktif("/Beranda")}
          >
            Beranda
          </li>
          <li
            className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${
        navbarAktif === "/Menu"
          ? "after:w-full after:left-0 after:!transition-none font-semibold"
          : "after:w-0 hover:after:w-full hover:after:left-0"
      } 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
            onClick={() => handlenavbarAktif("/Menu")}
          >
            Menu
          </li>
          <li
            className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${
        navbarAktif === "/Kontak"
          ? "after:w-full after:left-0 after:!transition-none font-semibold"
          : "after:w-0 hover:after:w-full hover:after:left-0"
      } 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
            onClick={() => handlenavbarAktif("/Kontak")}
          >
            Kontak Kami
          </li>
          <li
            className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${
        navbarAktif === "/Tentang"
          ? "after:w-full after:left-0 after:!transition-none font-semibold"
          : "after:w-0 hover:after:w-full hover:after:left-0"
      } 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
            onClick={() => handlenavbarAktif("/Tentang")}
          >
            Tentang kita
          </li>
        </ul>
        <div className="flex gap-1">
          <Button
            className={`flex items-center justify-center p-2 bg-transparent shadow-none border-none text-black hover:bg-black hover:bg-opacity-15 hover:shadow-md transition-all duration-300 ${
              navbarAktif == "/Keranjang"
                ? " bg-black bg-opacity-25 rounded-full"
                : ""
            }`}
            onClick={() => handlenavbarAktif("/Keranjang")}
          >
            <FiShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Menu>
            <MenuHandler
              className={`bg-transparent hover:bg-black hover:bg-opacity-15 hover:shadow-md shadow-none transition-all duration-300 ${
                navbarAktif === "/Profil"
                  ? "bg-black bg-opacity-25 rounded-full"
                  : ""
              }`}
            >
              <IconButton>
                <FaCog className="w-5 h-5 text-black" />
              </IconButton>
            </MenuHandler>
            <MenuList className="p-2 rounded-lg -ml-12">
              <MenuItem
                className={`flex items-center px-3 py-2 gap-2  ${
                  navbarAktif === "/Profil"
                    ? "bg-blue-200 border border-gray-300 text-black"
                    : ""
                }`}
                onClick={() => handlenavbarAktif("/Profil")}
              >
                <FaRegUserCircle size={18} />
                <Typography>Profile Saya</Typography>
              </MenuItem>
              <MenuItem
                className={`flex items-center px-3 py-2 gap-2 ${
                  navbarAktif === "/Pesanan"
                    ? "bg-blue-200 border border-gray-300 text-black"
                    : ""
                }`}
                onClick={() => handlenavbarAktif("/Profil")}
              >
                <TbShoppingCartCog size={18} />
                <Typography>Pesanan Saya</Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center px-3 py-2 gap-2"
                onClick={keluarAkun}
              >
                <FaPowerOff size={15} />
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
