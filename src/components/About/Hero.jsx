import React from "react";
import banner from "../../assets/image/about/Banner.png";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="  bg-cover bg-center w-full flex   min-h-dvh items-center justify-center"
    >
      <div className=" pl-12 flex flex-col items-center gap-4">
        <p className=" font-extrabold text-7xl text-white">About Us</p>
        <p className=" text-gray-200 flex font-semibold ">
          <span className="inline-flex items-center text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3">
            <Link to="/" className="text-center">
              Home
            </Link>
            <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
            <Link to="/contact" className="text-center">
              Contact
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
