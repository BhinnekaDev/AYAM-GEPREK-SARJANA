"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Navbar,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "@/assets/img/logo.png";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import useKeluarAkun from "@/hooks/Backend/useKeluarAkun";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";

function Nav() {
  const pengguna = useCekPengguna();
  const { keluarAkun } = useKeluarAkun();
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="sticky top-0 left-0 max-w-full z-50 px-4 py-2 bg-[#FFE893] bg-opacity-90 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Sarjana Geprek Logo" className="w-16 h-16" />
          <span className="text-lg md:text-xl font-bold ml-2 text-black">
            Sarjana Geprek
          </span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          {pengguna ? (
            <Button
              variant="text"
              color="black"
              onClick={() => handlenavbarAktif("/Keranjang")}
              className={`flex items-center justify-center px-3 py-2 rounded-full text-black hover:bg-black hover:text-white ${
                navbarAktif === "/Keranjang" ? "bg-black bg-opacity-25" : ""
              }`}
            >
              <FiShoppingCart className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              className="flex gap-1 py-2 px-3 items-center justify-center rounded-full hover:bg-transparent border-black border transition-all"
              onClick={() => handlenavbarAktif("/")}
            >
              <AiOutlineLogin className="w-4 h-4" />
              Masuk
            </Button>
          )}
          <IconButton
            variant="text"
            className="h-6 w-6"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoMdClose className="w-6 h-6 text-black" />
            ) : (
              <FiMenu className="w-6 h-6 text-black" />
            )}
          </IconButton>
        </div>

        {/* Desktop Menu */}
        <div className={`md:flex hidden items-center gap-8`}>
          <ul className="flex gap-6 text-black font-medium">
            <li
              className={`cursor-pointer ${
                navbarAktif === "/Beranda" ? "font-semibold underline" : ""
              }`}
              onClick={() => handlenavbarAktif("/Beranda")}
            >
              Beranda
            </li>
            <li
              className={`cursor-pointer ${
                navbarAktif === "/Menu" ? "font-semibold underline" : ""
              }`}
              onClick={() => handlenavbarAktif("/Menu")}
            >
              Menu
            </li>
            <li
              className={`cursor-pointer ${
                navbarAktif === "/KontakKami" ? "font-semibold underline" : ""
              }`}
              onClick={() => handlenavbarAktif("/KontakKami")}
            >
              Kontak Kami
            </li>
            <li
              className={`cursor-pointer ${
                navbarAktif === "/Tentang" ? "font-semibold underline" : ""
              }`}
              onClick={() => handlenavbarAktif("/Tentang")}
            >
              Tentang
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {openNav && (
        <div className="md:hidden flex flex-col bg-white shadow-md rounded-lg p-4 mt-2">
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlenavbarAktif("/Beranda")}>Beranda</li>
            <li onClick={() => handlenavbarAktif("/Menu")}>Menu</li>
            <li onClick={() => handlenavbarAktif("/KontakKami")}>
              Kontak Kami
            </li>
            <li onClick={() => handlenavbarAktif("/Tentang")}>Tentang</li>
          </ul>
        </div>
      )}
    </Navbar>
  );
}

export default Nav;
