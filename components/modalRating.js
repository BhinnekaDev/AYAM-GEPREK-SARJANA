import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Typography,
} from "@material-tailwind/react";
// ICONS
import { FaStar } from "react-icons/fa";

const ModalRating = ({ open, handleOpen }) => {
  const [rating, setRating] = useState(1);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <Dialog open={open}>
      <DialogHeader className="text-xl sm:text-2xl">
        Rating Pesanan
      </DialogHeader>
      <DialogBody className="space-y-4 sm:space-y-6">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3">
          <div className="text-center text-black">
            <Typography className="text-md sm:text-lg font-bold">
              Beri tahu seberapa puas makanan nya?
            </Typography>
          </div>
          <div className="flex gap-2 sm:gap-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-10 h-10 ${
                  index < rating ? "text-yellow-800" : "text-gray-400"
                }`}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
          <div className="text-center text-black">
            <Typography className="text-lg font-bold tracking-wider">
              {rating === 5 && "Sangat Puas! 🤩🌟"}
              {rating === 4 && "Puas! 😊✨"}
              {rating === 3 && "Cukup Puas! 🙂"}
              {rating === 2 && "Kurang Puas! 😕"}
              {rating === 1 && "Tidak Puas! 😞"}
            </Typography>
          </div>
        </div>
        <div className="space-y-2">
          <Textarea
            color="orange"
            rows={8}
            label="Kesan Pesan Kamu Tentang Pelayanan Kami! 😃"
          />
        </div>
      </DialogBody>
      <DialogFooter className="gap-2 flex justify-between sm:justify-end">
        <Button
          onClick={handleOpen}
          className="bg-gray-500 text-white border-white sm:text-sm shadow-md py-2 px-14 sm:px-10 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300"
        >
          Batal
        </Button>
        <Button
          className="text-center border tracking-wider bg-[#AA5656] sm:text-sm text-white border-white shadow-md px-14 sm:px-10 py-2 rounded-full capitalize hover:bg-opacity-70 hover:shadow-md transition-all duration-300"
          onClick={handleOpen}
        >
          Kirim
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalRating;
