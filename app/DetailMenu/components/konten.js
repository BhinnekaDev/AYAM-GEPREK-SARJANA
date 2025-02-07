import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
// ICONS
import { MdArrowBack } from "react-icons/md";
import { FaStar, FaMinus, FaPlus, FaChevronDown } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
// IMAGE
import GambarMenu1 from "@/assets/img/menu/menu1.png";
import GambarMenu2 from "@/assets/img/menu/menu2.png";
import GambarMenu3 from "@/assets/img/menu/menu3.png";

const Konten = () => {
  const images = [GambarMenu1, GambarMenu2, GambarMenu3];
  const [index, setIndex] = useState(0);
  const [posisi, setPosisi] = useState("top");
  const [bukaSambal, setBukaSambal] = React.useState(false);
  const [level, setLevel] = useState(0);
  const [sambalTerpilih, setSambalTerpilih] = useState("");

  const tambahLevel = () => {
    if (level < 5) setLevel(level + 1);
  };

  const kurangLevel = () => {
    if (level > 0) setLevel(level - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPosisi("bottom");
      } else {
        setPosisi("top");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const daftarSambal = [
    "Sambal Matah",
    "Sambal Bawang",
    "Sambal Rica Manis",
    "Sambal Rica Pedas",
    "Sambal Kacang",
    "Sambal Apalagi",
  ];

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-4xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <MdArrowBack className="mr-2 text-black cursor-pointer" />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Profile Saya
          </Typography>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-start items-center sm:p-4 sm:gap-6">
          <div className="sm:bg-[#EFF3EA] sm:border-2 sm:border-gray-400 sm:-ml-28 rounded-xl sm:shadow-md sm:py-8 sm:px-4 overflow-hidden w-full h-40 sm:w-96 sm:h-96 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <Image
                  src={images[index]}
                  alt="Gambar Menu"
                  className="w-32 h-32 sm:w-72 sm:h-72 object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <Typography className="text-xl sm:text-2xl font-bold text-black">
              Nasi Ayam Geprek
            </Typography>
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-yellow-800" />
              <FaStar className="w-4 h-4 text-yellow-800" />
              <FaStar className="w-4 h-4 text-yellow-800" />
              <FaStar className="w-4 h-4 text-yellow-800" />
              <FaStar className="w-4 h-4 text-gray-400" />
              <Typography className="text-black ml-2 text-sm sm:text-md">
                (123 reviewers)
              </Typography>
            </div>
            <div className="my-3 sm:my-8 space-y-3">
              <Typography className="text-md sm:text-lg text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Typography className="hidden sm:block text-md text-end sm:text-start mr-3 sm:text-lg text-[#AA5656] font-bold tracking-wider">
                Rp 15.000
              </Typography>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between sm:justify-normal sm:gap-[151px]">
                <Typography className="text-md sm:text-lg text-black font-bold sm:tracking-wide">
                  Level Pedas
                </Typography>
                <div className="flex items-center gap-6 sm:gap-8 bg-[#AA5656] text-white py-0 px-2 sm:px-6 rounded-full shadow-md border-2 border-gray-300">
                  <FaMinus
                    className={`sm:w-4 sm:h-4 h-3 w-3 ${
                      level === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-110 cursor-pointer"
                    }`}
                    onClick={kurangLevel}
                  />
                  <Typography>{level}</Typography>
                  <FaPlus
                    className={`sm:w-4 sm:h-4 h-3 w-3 ${
                      level === 5
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-110 cursor-pointer"
                    }`}
                    onClick={tambahLevel}
                  />
                </div>
              </div>
              <div className="flex justify-between sm:justify-normal sm:gap-36 items-center">
                <Typography className="text-md sm:text-lg text-black font-bold tracking-wide">
                  Rasa Sambal
                </Typography>
                <Menu
                  placement={posisi}
                  open={bukaSambal}
                  handler={setBukaSambal}
                >
                  <MenuHandler className="flex items-center bg-[#AA5656] gap-2 sm:gap-4 capitalize px-4 sm:px-5 py-2 rounded-full text-white tracking-wide border-gray-300 border-2 hover:shadow-md hover:bg-opacity-80 hover:bg-[#AA5656]">
                    <Button variant="text" className="flex items-center">
                      {sambalTerpilih || "Pilih Sambal"}{" "}
                      <FaChevronDown
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          bukaSambal ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-72 text-black">
                    {daftarSambal.map((sambal) => (
                      <MenuItem
                        key={sambal}
                        onClick={() => setSambalTerpilih(sambal)}
                        className={`hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all ${
                          sambalTerpilih === sambal
                            ? "!bg-[#AA5656] !bg-opacity-90 hover:!bg-opacity-90 !text-white font-bold"
                            : ""
                        }`}
                      >
                        {sambal}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-8">
              <Button className="sm:flex hidden justify-center text-sm items-center w-full py-2 gap-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-wider hover:bg-opacity-90 hover:shadow-md border-2 border-gray-300 rounded-lg transition-all duration-500">
                <FaPlus className=" w-4 h-4" />
                Tambahkan
              </Button>
              <Button className="flex sm:hidden justify-center text-sm items-center w-full py-1 gap-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-wider hover:bg-opacity-90 hover:shadow-md border-2 border-gray-300 rounded-full transition-all duration-500">
                <FiPlusCircle className="sm:hidden w-4 h-4" />
                Rp 15.000
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
