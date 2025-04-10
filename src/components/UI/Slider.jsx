import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider({ onRightClick, onLeftClick, rightDisabled, leftDisabled }) {
  return (
    <div className=" flex justify-between gap-4">
      <div
        onClick={onLeftClick}
        className={`cursor-pointer rounded-2xl shadow-[0px_8px_50px_rgba(0,0,0,0.1)] w-16 h-16 ${
          leftDisabled ? "bg-gray-300" : "bg-[#FFFFFF]"
        } flex justify-center items-center`}
      >
        <FaChevronLeft color="black" />
      </div>
      <div
        onClick={onRightClick}
        className={`cursor-pointer rounded-2xl shadow-[0px_8px_50px_rgba(0,0,0,0.1)] w-16 h-16 ${
          rightDisabled ? "bg-gray-300" : "bg-[#FFFFFF]"
        } flex justify-center items-center`}
      >
        <FaChevronRight color=" black" />
      </div>
    </div>
  );
}

export default Slider;
