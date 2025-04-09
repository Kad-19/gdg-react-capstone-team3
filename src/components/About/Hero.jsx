import React from "react";
import banner from "../../assets/image/about/banner.png";
import { MdOutlineNavigateNext } from "react-icons/md";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="  bg-cover bg-center w-full flex   min-h-dvh items-center justify-center"
    >
      <div className=" pl-12 flex flex-col items-center gap-4">
        <p className=" font-extrabold text-7xl text-white">About Us</p>
        <p className=" text-gray-200 flex font-semibold ">
          Home <MdOutlineNavigateNext size={30} />
          About
        </p>
      </div>
    </div>
  );
}

export default Hero;
