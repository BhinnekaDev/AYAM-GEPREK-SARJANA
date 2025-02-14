"use client";
import React from "react";
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
import Menu from "@/assets/img/menu/menu1.png";
import C1 from "@/assets/img/carousel/1.png";
import C2 from "@/assets/img/carousel/2.png";

function Beranda() {
  const scrollRef = React.useRef(null);
  const router = useRouter();

  const menuItems = [
    {
      name: "Nasi Ayam Geprek",
      description: "Sambal Matah",
      price: "Rp 15.000",
      image: Menu,
    },
    {
      name: "Nasi Ayam Geprek",
      description: "Sambal Bawang",
      price: "Rp 20.000",
      image: Menu,
    },
    {
      name: "Nasi Ayam Geprek",
      description: "Sambal Rica Manis",
      price: "Rp 18.000",
      image: Menu,
    },
    {
      name: "Nasi Ayam Geprek",
      description: "Sambal Rica Pedas",
      price: "Rp 25.000",
      image: Menu,
    },
    {
      name: "Nasi Ayam Geprek",
      description: "Sambal Kemangi",
      price: "Rp 22.000",
      image: Menu,
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
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
          <div className="absolute bottom-2 lg:bottom-4 left-2/4 flex -translate-x-2/4">
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
        <div className=" bg-[#FFF2C2] mx-5 lg:mx-0 px-2 py-8 lg:px-20 lg:py-10 rounded-lg flex flex-col justify-center items-center shadow-lg mb-9">
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
                  className="bg-[#EFF3EA] rounded-xl border-2 border-white shadow-md lg:shadow-lg w-full lg:w-[250px] lg:flex-shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={`menu-${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="py-3 space-y-2 lg:space-y-1">
                    <Typography className="text-lg lg:text-xl text-black">
                      {item.name}
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      {item.description}
                    </Typography>
                    <Typography className="text-md text-black">
                      {item.price}
                    </Typography>
                  </div>
                  <div className="w-full mt-2 flex justify-center items-center">
                    <Button
                      onClick={() => router.push("/DetailMenu")}
                      className="py-2 border-2 border-gray-400 w-full rounded-full tracking-widest bg-[#AA5656] shadow-md hover:shadow-md hover:bg-[#AA5656]/80 hover:border-2 hover:border-gray-300 transition-all duration-300"
                    >
                      beli
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
    </div>
  );
}

export default Beranda;
