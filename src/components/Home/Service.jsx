import React, { useState, useEffect } from "react";
import Slider from "../UI/Slider";

import homeBg from "../../assets/image/home/explore/homeBg.png";
import { FaUserGroup } from "react-icons/fa6";
import ServiceBox from "./ServiceBox";
import { TbReportMoney } from "react-icons/tb";
import { IoMdTrophy } from "react-icons/io";

const serviceData = [
  {
    id: 1,
    icon: <FaUserGroup color="white" className="size-10" />,
    title: "Best Service",
    detail:
      "Our service is reliable and convenient, providing high-quality service.",
  },
  {
    id: 2,
    icon: <TbReportMoney color="white" className="size-10" />,
    title: "Price Guarantee",
    detail:
      "Our services offer competitive pricing with a guarantee of great value.",
  },
  {
    id: 3,
    icon: <IoMdTrophy color="white" className="size-10" />,
    title: "Handpicked Hotels",
    detail:
      "We provide handpicked hotels ensuring comfort and high standards of quality.",
  },
];

function Service() {
  const [currentService, setCurrentService] = useState(2);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  useEffect(() => {
    if (currentService === serviceData.length) {
      setRightDisabled(true);
    } else {
      setRightDisabled(false);
    }
    if (currentService === 1) {
      setLeftDisabled(true);
    } else {
      setLeftDisabled(false);
    }
  }, [currentService, setRightDisabled, setLeftDisabled]);

  const handleRightClick = () => {
    setCurrentService((prev) => {
      if (prev < serviceData.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleLeftClick = () => {
    setCurrentService((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-cover bg-center w-full flex flex-col min-h-screen items-center py-16 px-4"
      >
        <div className="text-white text-center">
          <p className="font-bold text-3xl md:text-5xl">Why choose Us?</p>
          <p className="mt-4 text-sm md:text-base">
            Our services have been trusted by world travelers.
          </p>
        </div>

        <div className="w-full mt-8">
          <Slider
            onLeftClick={handleLeftClick}
            onRightClick={handleRightClick}
            rightDisabled={rightDisabled}
            leftDisabled={leftDisabled}
          />
        </div>

        <div className="mt-12 flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl w-full">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className={`p-4 rounded-2xl transition-all duration-300 ${
                  service.id === currentService ? "block" : "hidden"
                } sm:block ${
                  service.id === currentService
                    ? "shadow-lg scale-106"
                    : "opacity-90"
                }`}
              >
                <ServiceBox
                  icon={service.icon}
                  title={service.title}
                  detail={service.detail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
