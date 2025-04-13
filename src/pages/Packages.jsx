import React from "react";
import package1 from "../assets/image/packages/package1.png";
import Destinations from "./Destinations";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";
const Packages = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img
          src={package1}
          alt="Hero"
          className="w-full min-h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">Travel Packages</h1>
          <span className="inline-flex items-center text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3">
            <Link to="/" className="text-center">
              Home
            </Link>
            <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
            <Link to="/contact" className="text-center">
              Contact
            </Link>
          </span>
        </div>
      </div>
      <Destinations />
      <Blogs />
    </div>
  );
};

export default Packages;
