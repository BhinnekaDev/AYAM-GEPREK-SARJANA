"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFE893]">
      <div className="flex space-x-2">
        <span
          className="w-4 h-4 bg-black rounded-full"
          style={{
            animation: "bounceSequence 1.5s infinite",
          }}
        ></span>
        <span
          className="w-4 h-4 bg-black rounded-full"
          style={{
            animation: "bounceSequence 1.5s 0.3s infinite",
          }}
        ></span>
        <span
          className="w-4 h-4 bg-black rounded-full"
          style={{
            animation: "bounceSequence 1.5s 0.6s infinite",
          }}
        ></span>
      </div>
      <style>
        {`
          @keyframes bounceSequence {
            0% { transform: translateY(0); }
            25% { transform: translateY(-10px); } /* Naik */
            50% { transform: translateY(-10px); } /* Diam di atas */
            75% { transform: translateY(0); } /* Turun */
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
