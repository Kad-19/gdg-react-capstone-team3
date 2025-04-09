import React, { useEffect, useState } from "react";

import Slider from "../UI/Slider";

import explore1 from "../../assets/image/home/explore/explore1.png";
import explore2 from "../../assets/image/home/explore/explore2.png";
import explore3 from "../../assets/image/home/explore/explore3.png";

const explore = [
  {
    id: 1,
    title: "Doing something",
    description:
      "This is test discription  Explore the world with what you love beautiful natural beauty.",
    image: explore1,
  },
  {
    id: 2,
    title: "Doing something",
    description:
      "This is test discription  Explore the world with what you love beautiful natural beauty.",
    image: explore2,
  },
  {
    id: 3,
    title: "Doing something",
    description:
      "This is test discription  Explore the world with what you love beautiful natural beauty.",
    image: explore3,
  },
];

function Explore() {
  const [currentPic, setCurrentPic] = useState(2);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  useEffect(() => {
    if (currentPic === explore.length) {
      setRightDisabled(true);
    } else {
      setRightDisabled(false);
    }
    if (currentPic === 1) {
      setLeftDisabled(true);
    } else {
      setLeftDisabled(false);
    }
  }, [currentPic, setRightDisabled, setLeftDisabled]);
  const handleRightClick = () => {
    setCurrentPic((prev) => {
      if (prev < explore.length) {
        return prev + 1;
      }
      return prev;
    });
  };
  const handleLeftClick = () => {
    setCurrentPic((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="px-4 md:px-12 w-full flex flex-col items-center gap-6">
      <div className="w-full lg:w-2/3 text-center">
        <p className="font-semibold text-3xl md:text-5xl lg:text-6xl">
          Explore new worlds with exotic natural scenery
        </p>
        <p className="font-medium text-base md:text-lg mt-2">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      <div className="w-full">
        <Slider
          onLeftClick={handleLeftClick}
          rightDisabled={rightDisabled}
          leftDisabled={leftDisabled}
          onRightClick={handleRightClick}
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl w-full">
          {explore.map((place) => (
            <div
              key={place.id}
              className={`
        p-6 bg-white rounded-2xl transition-all duration-300
        ${place.id === currentPic ? "block" : "hidden"}
        sm:block
        ${place.id === currentPic ? "shadow-lg scale-105" : "opacity-90"}
      `}
            >
              <img
                className="w-full rounded-xl"
                src={place.image}
                alt={place.title}
              />
              {place.id === currentPic && (
                <div className="relative w-full mt-4">
                  <p className="font-semibold mb-1">{place.title}</p>
                  <p>{place.description}</p>
                  <div className="absolute -top-14 right-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                    <p className="font-bold text-4xl">“</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
