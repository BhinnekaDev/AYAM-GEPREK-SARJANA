"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Collapse, Button, Menu, MenuHandler, MenuList, MenuItem, IconButton, Typography } from "@material-tailwind/react";
// IMAGE
import logo from "@/assets/img/logo.png";
// ICON
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { GiChickenOven, GiCook } from "react-icons/gi";
import { MdFastfood, MdContacts } from "react-icons/md";
import { FaCog, FaRegUserCircle, FaPowerOff } from "react-icons/fa";
import { TbShoppingCartCog } from "react-icons/tb";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
//HOOKS
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import useKeluarAkun from "@/hooks/Backend/useKeluarAkun";
import useCekPengguna from "@/hooks/Backend/useVerifikasiLogin";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";

function Nav() {
  const pengguna = useCekPengguna();
  const { keluarAkun } = useKeluarAkun();
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif();
  const [openNav, setOpenNav] = React.useState(false);
  const { keranjang } = useKeranjangPesanan();

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="sticky top-0 left-0 max-w-full z-50 px-4 py-2 bg-[#FFE893] bg-opacity-90 backdrop-blur-sm md:mb-2 lg:mb-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-1 lg:gap-2">
          <Image src={logo} alt="Sarjana Geprek Logo" className="w-14 h-14 md:w-50 md:h-50 lg:w-50 lg:h-50 " />
          <span className="text-md md:text-lg lg:text-xl font-bold text-black">Ayam Sarjana Geprek</span>
        </div>
        {/* MOBILE */}
        <div className="md:hidden lg:hidden flex items-center gap-1">
          {pengguna ? (
            <Button
              variant="text"
              color="black"
              onClick={() => handlenavbarAktif("/Keranjang")}
              className={`flex items-center justify-center border-none px-3 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 ${
                navbarAktif === "/Keranjang" ? "bg-black bg-opacity-25 rounded-full" : ""
              }`}
            >
              <FiShoppingCart className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              className="flex gap-1 py-2 px-3 text-xs items-center justify-center rounded-full hover:bg-transparent hover:border-black hover:border border transition-all duration-500 capitalize hover:text-black hover:shadow-md "
              onClick={() => handlenavbarAktif("/")}
            >
              <AiOutlineLogin className="w-3 h-3" />
              Masuk
            </Button>
          )}
          <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
            {openNav ? <IoMdClose className="w-6 h-6 text-black" /> : <FiMenu className="w-6 h-6 text-black" />}
          </IconButton>
        </div>
        {/* WEBSITE */}
        <div className="hidden flex-row items-center md:flex md:gap-3 lg:gap-12">
          <ul className="flex flex-row text-black font-medium transition-all duration-300 md:gap-5 lg:gap-8">
            <li
              className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${navbarAktif === "/Beranda" ? "after:w-full after:left-0 after:!transition-none font-semibold" : "after:w-0 hover:after:w-full hover:after:left-0"} 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
              onClick={() => handlenavbarAktif("/Beranda")}
            >
              Beranda
            </li>
            <li
              className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${navbarAktif === "/Menu" ? "after:w-full after:left-0 after:!transition-none font-semibold" : "after:w-0 hover:after:w-full hover:after:left-0"} 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
              onClick={() => handlenavbarAktif("/Menu")}
            >
              Menu
            </li>
            <li
              className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${navbarAktif === "/KontakKami" ? "after:w-full after:left-0 after:!transition-none font-semibold" : "after:w-0 hover:after:w-full hover:after:left-0"} 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
              onClick={() => handlenavbarAktif("/KontakKami")}
            >
              Kontak Kami
            </li>
            <li
              className={`relative cursor-pointer transition-all ease-in-out duration-700 
      ${navbarAktif === "/Tentang" ? "after:w-full after:left-0 after:!transition-none font-semibold" : "after:w-0 hover:after:w-full hover:after:left-0"} 
      after:content-[''] after:absolute after:-bottom-0 after:right-0 after:h-[2px] after:bg-black after:transition-all after:duration-500`}
              onClick={() => handlenavbarAktif("/Tentang")}
            >
              Tentang Kami
            </li>
          </ul>
          <div className="flex md:gap-1 lg:gap-3">
            {pengguna ? (
              <>
                <Button
                  className={`relative flex items-center justify-center p-2 bg-transparent shadow-none border-none text-black hover:bg-black hover:bg-opacity-15 hover:shadow-md transition-all duration-300 ${
                    navbarAktif == "/Keranjang" ? " bg-black bg-opacity-25 rounded-full" : ""
                  }`}
                  onClick={() => handlenavbarAktif("/Keranjang")}
                >
                  <FiShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
                  {keranjang.length > 0 && <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{keranjang.length}</span>}
                </Button>
                <Menu>
                  <MenuHandler
                    className={`bg-transparent hover:bg-black hover:bg-opacity-15 hover:shadow-md shadow-none transition-all duration-300 ${["/Profil", "/PesananSaya"].includes(navbarAktif) ? "bg-black bg-opacity-25 rounded-full" : ""}`}
                  >
                    <IconButton>
                      <FaCog className="w-5 h-5 text-black" />
                    </IconButton>
                  </MenuHandler>

                  <MenuList className="p-2 rounded-lg bg-[#FFF2C2] border-2 border-black/15 shadow-md md:-ml-2 lg:-ml-4">
                    <MenuItem
                      className={`flex items-center px-3 py-2 gap-2 text-black  ${navbarAktif === "/Profil" ? "bg-[#AA5656]/55 border border-gray-300 text-black hover:!bg-[#AA5656]/50" : "hover:!bg-black/20"}`}
                      onClick={() => handlenavbarAktif("/Profil")}
                    >
                      <FaRegUserCircle size={18} />
                      <Typography>Profile Saya</Typography>
                    </MenuItem>
                    <MenuItem
                      className={`flex items-center px-3 py-2 gap-2 text-black ${navbarAktif === "/PesananSaya" ? "bg-[#AA5656]/55 border border-gray-300 text-black hover:!bg-[#AA5656]/50" : "hover:!bg-black/20"}`}
                      onClick={() => handlenavbarAktif("/PesananSaya")}
                    >
                      <TbShoppingCartCog size={18} />
                      <Typography>Pesanan Saya</Typography>
                    </MenuItem>
                    <MenuItem className="flex items-center px-3 py-2 gap-2 text-red-500 hover:text-white hover:!bg-red-500/50" onClick={keluarAkun}>
                      <FaPowerOff size={15} />
                      <Typography>Keluar</Typography>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <Button className="flex gap-1 py-1 px-4 items-center justify-center rounded-full hover:bg-transparent hover:border-black hover:border border transition-all duration-500 tracking-wider hover:text-black hover:shadow-md ">
                <AiOutlineLogin className="w-7 h-7" onClick={() => handlenavbarAktif("/")} />
                Masuk
              </Button>
            )}
          </div>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="flex-col w-full p-2 bg-white/35 rounded-lg md:hidden mt-1">
          <ul className="flex flex-col gap-4 text-black font-medium transition-all duration-300">
            <li className={`flex items-center gap-2 hover:underline cursor-pointer ${navbarAktif === "/Beranda" ? "underline font-semibold" : ""}`} onClick={() => handlenavbarAktif("/Beranda")}>
              <GiChickenOven size={20} />
              Beranda
            </li>
            <li className={`flex items-center gap-2 hover:underline cursor-pointer ${navbarAktif === "/Menu" ? "underline font-semibold" : ""}`} onClick={() => handlenavbarAktif("/Menu")}>
              <MdFastfood size={20} />
              Menu
            </li>
            <li className={`flex items-center gap-2 hover:underline cursor-pointer ${navbarAktif === "/KontakKami" ? "underline font-semibold" : ""}`} onClick={() => handlenavbarAktif("/KontakKami")}>
              <MdContacts size={20} />
              Kontak Kami
            </li>
            <li className={`flex items-center gap-2 hover:underline cursor-pointer ${navbarAktif === "/Tentang" ? "underline font-semibold" : ""}`} onClick={() => handlenavbarAktif("/Tentang")}>
              <GiCook size={20} />
              Tentang kita
            </li>
            {pengguna ? (
              <div className="flex-col justify-center items-center space-y-2">
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`flex gap-2 w-full p-1 items-center justify-center rounded-full hover:underline cursor-pointer ${
                      navbarAktif === "/Profil" ? "bg-[#AA5656] text-white border-[#AA5656]/30" : "bg-[#AA5656]/15 border-2 border-[#AA5656]/30 text-[#AA5656]"
                    }`}
                    onClick={() => handlenavbarAktif("/Profil")}
                  >
                    <FaRegUserCircle size={18} />
                    <Typography>Profile Saya</Typography>
                  </div>
                  <div
                    className={`flex gap-2 w-full p-1 items-center justify-center rounded-full hover:underline cursor-pointer ${
                      navbarAktif === "/PesananSaya" ? "bg-[#AA5656] text-white border-[#AA5656]/30" : "bg-[#AA5656]/15 border-2 border-[#AA5656]/30 text-[#AA5656]"
                    }`}
                    onClick={() => handlenavbarAktif("/PesananSaya")}
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
            ) : (
              <></>
            )}
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Nav;
