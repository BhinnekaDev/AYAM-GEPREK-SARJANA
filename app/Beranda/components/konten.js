"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Typography,
  CardBody,
  Button,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
// ICON
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
// IMAGES
import C1 from "@/assets/img/carousel/1.png";
import C2 from "@/assets/img/carousel/2.png";
import logoImage from "@/assets/img/logo.png";
//UTILS
import { formatRupiah } from "@/utils/formatRupiah";
// HOOKS
import useTampilkanMakanan from "@/hooks/Backend/useTampilkanMakanan";
import useTampilkanMinuman from "@/hooks/Backend/useTampilkanMinuman";
import useKeranjangPesanan from "@/hooks/Backend/useKeranjangPesanan";
// COMPONENT
import Konten from "@/app/DetailMenu/components/konten";
function Beranda() {
  const router = useRouter();
  const scrollRef = useRef(null);

  const { daftarMakanan, sedangMemuatMakanan } = useTampilkanMakanan();
  const { daftarMinuman, sedangMemuatMinuman } = useTampilkanMinuman();
  const { tambahKeKeranjang } = useKeranjangPesanan();

  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (daftarMakanan.length > 0 || daftarMinuman.length > 0) {
      const makananDenganKategori = daftarMakanan.map((item) => ({
        ...item,
        kategori: "makanan",
      }));

      const minumanDenganKategori = daftarMinuman.map((item) => ({
        ...item,
        kategori: "minuman",
      }));

      setMenuItems([...makananDenganKategori, ...minumanDenganKategori]);
    }
  }, [daftarMakanan, daftarMinuman]);

  if (sedangMemuatMakanan || sedangMemuatMinuman) {
    return <div>Loading...</div>;
  }

  if (menuItems.length === 0) {
    return <div>Tidak ada menu yang tersedia.</div>;
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Fungsi untuk menangani klik tombol "Beli"
  const handleBeliClick = (item) => {
    setSelectedItem(item); // Set item yang dipilih ke state
  };

  const handleBack = () => {
    setSelectedItem(null); // Reset item yang dipilih
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {selectedItem ? (
        <Konten item={selectedItem} onBack={handleBack} />
      ) : (
        <>
          <Carousel
            className="h-44 lg:h-96"
            autoplay={true}
            autoplayDelay={5000}
            loop={true}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 hidden lg:block -translate-y-2/4 bg-black bg-opacity-20 rounded-full"
              >
                <FaChevronLeft size={23} />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="black"
                onClick={handleNext}
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
            <Image
              src={C1}
              alt="image 1"
              className="h-full w-full object-cover flex justify-center items-center"
            />
            <Image
              src={C2}
              alt="image 2"
              className="h-full w-full object-cover flex self-center"
            />
          </Carousel>

          <div className="w-full flex justify-center items-center mt-6 lg:mt-12">
            <div className="bg-[#FFF2C2] mx-5 lg:mx-0 px-2 py-8 lg:px-20 lg:py-10 rounded-lg flex flex-col justify-center items-center shadow-lg mb-9">
              <Typography className="text-black text-2xl lg:text-[36px] font-semibold mb-3">
                Menu Terlaris!
              </Typography>
              <div className="flex items-center w-full max-w-full lg:max-w-7xl">
                <Button
                  className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
                  onClick={scrollLeft}
                >
                  <FaChevronLeft className="h-5 w-5 text-black" />
                </Button>

                <div
                  ref={scrollRef}
                  className="grid grid-cols-2 lg:flex lg:flex-row gap-5 lg:gap-10 py-4 lg:overflow-x-scroll lg:scrollbar-none lg:scroll-smooth mx-4 max-w-full lg:max-w-[90%]"
                >
                  {menuItems.map((item, index) => (
                    <CardBody
                      key={index}
                      className="bg-[#EFF3EA] rounded-xl border-2 border-white shadow-md lg:shadow-lg w-full lg:w-[250px] lg:flex-shrink-0 hover:cursor-pointer hover:border-2 hover:border-[#AA5656] transition-all duration-300 hover:scale-95"
                    >
                      <Image
                        src={
                          item.Gambar_Makanan ||
                          item.Gambar_Minuman ||
                          logoImage
                        }
                        alt={`menu-${
                          item.Nama_Makanan ||
                          item.Nama_Minuman ||
                          "tidak diketahui"
                        }`}
                        className="w-full h-auto rounded-lg"
                        width={250}
                        height={200}
                      />
                      <div className="py-3 space-y-2 lg:space-y-1">
                        <Typography className="text-lg lg:text-xl text-black">
                          {item.Nama_Makanan ||
                            item.Nama_Minuman ||
                            "Menu Tidak Diketahui"}
                        </Typography>
                        <Typography className="text-sm text-gray-600">
                          {item.Deskripsi_Makanan ||
                            item.Deskripsi_Minuman ||
                            "Deskripsi tidak tersedia"}
                        </Typography>
                        <Typography className="text-md text-black">
                          {item.Harga_Makanan || item.Harga_Minuman
                            ? formatRupiah(
                                item.Harga_Makanan || item.Harga_Minuman
                              )
                            : "Harga tidak tersedia"}
                        </Typography>
                      </div>
                      <div className="w-full mt-2 flex justify-center items-center">
                        <Button
                          className="py-2 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md"
                          onClick={() => handleBeliClick(item)}
                        >
                          Beli
                        </Button>
                      </div>
                    </CardBody>
                  ))}
                </div>

                <Button
                  className="bg-black bg-opacity-25 p-2 hidden lg:flex justify-center items-center rounded-full hover:bg-opacity-15 hover:shadow-md hover:scale-105 transform transition-all ease-in-out duration-300"
                  onClick={scrollRight}
                >
                  <FaChevronRight className="h-5 w-5 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Beranda;
