"use client";
import React, { useState } from "react";
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
import { FaMinus, FaPlus, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import GambarMenu1 from "@/assets/img/menu/menu1.png";
import GambarMenu2 from "@/assets/img/menu/menu2.png";
import GambarMenu3 from "@/assets/img/menu/menu3.png";
import { formatRupiah } from "@/utils/formatRupiah";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
import { useRouter } from "next/navigation";

const Konten = ({ item, onBack }) => {
  const [jumlah, setJumlah] = useState(1);
  const [level, setLevel] = useState(0);
  const [sambalTerpilih, setSambalTerpilih] = useState("");
  const [tipeMinuman, setTipeMinuman] = useState("");
  const [bukaSambal, setBukaSambal] = React.useState(false);
  const [bukaTipeMinuman, setBukaTipeMinuman] = React.useState(false);
  const { tambahKeKeranjang } = useKeranjangPesanan();
  const router = useRouter();
  const images = [GambarMenu1, GambarMenu2, GambarMenu3];

  const tambahLevel = () => level < 5 && setLevel(level + 1);
  const kurangLevel = () => level > 0 && setLevel(level - 1);

  const handleTambahKeKeranjang = () => {
    const itemUntukKeranjang = {
      id: item?.ID_Makanan || item?.ID_Minuman || item?.id,
      nama: item?.Nama_Makanan || item?.Nama_Minuman || item?.nama,
      harga: item?.Harga_Makanan || item?.Harga_Minuman || item?.harga,
      jumlah: jumlah,
      levelPedas: level,
      rasaSambal: sambalTerpilih,
      tipeMinuman: tipeMinuman,
      kategori: item?.kategori,
      gambar: item?.Gambar_Makanan || item?.Gambar_Minuman || images[0],
    };

    tambahKeKeranjang(itemUntukKeranjang);
    router.push("/Keranjang");
  };

  const daftarSambal = [
    "Sambal Matah",
    "Sambal Bawang",
    "Sambal Rica Manis",
    "Sambal Rica Pedas",
    "Sambal Kacang",
    "Sambal Apalagi",
  ];

  const daftarTipeMinuman = ["Dingin", "Original", "Panas"];

  const isMakanan = item?.kategori === "makanan";
  const isMinuman = item?.kategori === "minuman";

  return (
    <div className="flex items-center justify-center px-5 md:pt-12">
      <Card className="bg-[#FFF2C2] bg-opacity-60 border border-gray-400 md:border-none flex w-full max-w-3xl md:max-w-4xl shadow-md md:shadow-lg p-6">
        <div className="flex w-full items-center justify-start mb-3">
          <MdArrowBack
            className="mr-2 text-black cursor-pointer"
            onClick={onBack}
          />
          <Typography className="font-bold text-black text-sm md:text-md uppercase">
            Detail Menu
          </Typography>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-start items-center sm:p-4 sm:gap-6">
          <div className="sm:bg-[#EFF3EA] sm:border-2 sm:border-gray-400 sm:-ml-28 rounded-xl sm:shadow-md sm:py-8 sm:px-4 overflow-hidden w-full h-40 sm:w-96 sm:h-96 flex items-center justify-center relative">
            <Image
              src={item?.Gambar_Makanan || item?.Gambar_Minuman || GambarMenu1}
              alt={item?.Nama_Makanan || item?.Nama_Minuman || "Menu"}
              className="w-32 h-32 sm:w-72 sm:h-72 object-cover"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Typography className="text-xl sm:text-2xl font-bold text-black">
              {item?.Nama_Makanan || item?.Nama_Minuman || "Nama Menu"}
            </Typography>
            <div className="flex items-center gap-1">
              <Typography className="text-black ml-2 text-sm sm:text-md">
                (123 reviewers)
              </Typography>
            </div>
            <div className="my-3 sm:my-8 space-y-3">
              <Typography className="text-md sm:text-lg text-black">
                {item?.Deskripsi_Makanan ||
                  item?.Deskripsi_Minuman ||
                  "Deskripsi Menu"}
              </Typography>
              <Typography className="hidden sm:block text-md text-end sm:text-start mr-3 sm:text-lg text-[#AA5656] font-bold tracking-wider">
                {formatRupiah(item?.Harga_Makanan || item?.Harga_Minuman || 0)}
              </Typography>
            </div>
            <div className="space-y-5">
              {isMakanan && (
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
              )}

              {isMakanan && (
                <div className="flex justify-between sm:justify-normal sm:gap-36 items-center">
                  <Typography className="text-md sm:text-lg text-black font-bold tracking-wide">
                    Rasa Sambal
                  </Typography>
                  <Menu
                    placement="bottom-start"
                    open={bukaSambal}
                    handler={setBukaSambal}
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="flex items-center bg-[#AA5656] gap-2 sm:gap-4 capitalize px-4 sm:px-5 py-2 rounded-full text-white tracking-wide border-gray-300 border-2 hover:shadow-md hover:bg-opacity-80 hover:bg-[#AA5656]"
                      >
                        {sambalTerpilih || "Pilih Sambal"}
                        <FaChevronDown
                          strokeWidth={2.5}
                          className="h-3.5 w-3.5 transition-transform"
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-72 text-black">
                      {daftarSambal.map((sambal) => (
                        <MenuItem
                          key={sambal}
                          onClick={() => {
                            setSambalTerpilih(sambal);
                            setBukaSambal(false);
                          }}
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
              )}

              {isMinuman && (
                <div className="flex justify-between sm:justify-normal sm:gap-36 items-center">
                  <Typography className="text-md sm:text-lg text-black font-bold tracking-wide">
                    Tipe Minuman
                  </Typography>
                  <Menu
                    placement="bottom-start"
                    open={bukaTipeMinuman}
                    handler={setBukaTipeMinuman}
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="flex items-center bg-[#AA5656] gap-2 sm:gap-4 capitalize px-4 sm:px-5 py-2 rounded-full text-white tracking-wide border-gray-300 border-2 hover:shadow-md hover:bg-opacity-80 hover:bg-[#AA5656]"
                      >
                        {tipeMinuman || "Pilih Tipe"}
                        <FaChevronDown
                          strokeWidth={2.5}
                          className="h-3.5 w-3.5 transition-transform"
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-72 text-black">
                      {daftarTipeMinuman.map((tipe) => (
                        <MenuItem
                          key={tipe}
                          onClick={() => {
                            setTipeMinuman(tipe);
                            setBukaTipeMinuman(false);
                          }}
                          className={`hover:!bg-[#AA5656] hover:!bg-opacity-30 transition-all ${
                            tipeMinuman === tipe
                              ? "!bg-[#AA5656] !bg-opacity-90 hover:!bg-opacity-90 !text-white font-bold"
                              : ""
                          }`}
                        >
                          {tipe}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </div>
              )}
            </div>
            <div className="w-full flex justify-center items-center mt-8">
              <Button
                className="sm:flex hidden justify-center text-sm items-center w-full py-2 gap-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-wider hover:bg-opacity-90 hover:shadow-md border-2 border-gray-300 rounded-lg transition-all duration-500"
                onClick={handleTambahKeKeranjang}
              >
                <FaPlus className=" w-4 h-4" />
                Tambahkan
              </Button>
              <Button
                className="flex sm:hidden justify-center text-sm items-center w-full py-1 gap-2 bg-[#AA5656] text-white hover:bg-[#AA5656] tracking-wider hover:bg-opacity-90 hover:shadow-md border-2 border-gray-300 rounded-full transition-all duration-500"
                onClick={handleTambahKeKeranjang}
              >
                <FaShoppingCart className="sm:hidden w-4 h-4" />
                {formatRupiah(item?.Harga_Makanan || item?.Harga_Minuman || 0)}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Konten;
