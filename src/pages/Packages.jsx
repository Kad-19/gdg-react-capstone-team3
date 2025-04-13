import React from "react";
import package1 from "../assets/image/packages/package1.png";
import Destinations from "./Destinations";
import Blogs from "./Blogs";
const Packages = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img src={package1} alt="Hero" className="w-full min-h-screen object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">Travel Packages</h1>
          <p className="text-sm font-medium">Home &gt; Packages</p>
        </div>
      </div>
      <Destinations />
      <Blogs />
    </div>
  );
};

export default Packages;
