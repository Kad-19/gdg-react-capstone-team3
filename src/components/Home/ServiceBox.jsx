import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function ServiceBox({ icon, title, detail }) {
  return (
    <div className=" p-4 bg-white flex flex-col gap-3 w-70 mt-12 rounded-sm shadow-2xl">
      <div className=" bg-black size-16 rounded-sm flex items-center justify-center">
        {icon}
      </div>
      <p className=" text-2xl font-semibold">{title}</p>
      <p>{detail}</p>
      <p className=" flex items-center gap-2">
        <span className=" font-semibold">Learn more</span>
        <span>
          <HiArrowLongRight className=" size-8" />
        </span>
      </p>
    </div>
  );
}

export default ServiceBox;
