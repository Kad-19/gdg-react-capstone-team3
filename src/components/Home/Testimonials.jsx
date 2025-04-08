import React, { useState, useEffect } from "react";
import Slider from "../UI/Slider";
import TestimonyBox from "./Testimony";

import userImage1 from "../../assets/image/home/testimony/profile1.png";
import userImage2 from "../../assets/image/home/testimony/profile2.png";
import userImage3 from "../../assets/image/home/testimony/profile3.png";
import userImage4 from "../../assets/image/home/testimony/profile4.png";

const Tesimonial = [
  {
    id: 1,
    name: "Sara",
    image: userImage1,
    category: "Traveler",
    idea: "Before we define any approach, we need to delineate the brand's overall goal. We then need to dive.",
    rating: 4,
  },
  {
    id: 2,
    name: "Chris",
    image: userImage2,
    category: "Traveler",
    idea: "Before we define any approach, we need to delineate the brand's overall goal. We then need to dive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike",
    image: userImage3,
    category: "Traveler",
    idea: "Before we define any approach, we need to delineate the brand's overall goal. We then need to dive.",
    rating: 3,
  },
  {
    id: 4,
    name: "Smg",
    image: userImage4,
    category: "Traveler",
    idea: "Before we define any approach, we need to delineate the brand's overall goal. We then need to dive.",
    rating: 3,
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  useEffect(() => {
    if (currentTestimonial === Tesimonial.length) {
      setRightDisabled(true);
    } else {
      setRightDisabled(false);
    }
    if (currentTestimonial === 1) {
      setLeftDisabled(true);
    } else {
      setLeftDisabled(false);
    }
  }, [currentTestimonial, setRightDisabled, setLeftDisabled]);

  const handleRightClick = () => {
    setCurrentTestimonial((prev) => {
      if (prev < Tesimonial.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleLeftClick = () => {
    setCurrentTestimonial((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="w-full px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-center mb-6 w-full">
        <div className="text-center lg:text-left">
          <p className="text-sm">TESTIMONIAL</p>
          <p className="font-semibold text-3xl md:text-5xl">
            What our clients say
          </p>
          <p className="font-medium text-sm mt-2">
            Create a visual identity for your company and an overall brand
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Slider
            onLeftClick={handleLeftClick}
            onRightClick={handleRightClick}
            rightDisabled={rightDisabled}
            leftDisabled={leftDisabled}
          />
        </div>
      </div>

      <div className="flex justify-center items-center pt-16  gap-6 overflow-hidden ">
        {Tesimonial.map((testimonial) => (
          <div
            key={testimonial.name}
            className={` rounded-2xl transition-all duration-300 w-70 ${
              testimonial.id === currentTestimonial ? "block" : "hidden"
            } sm:block ${
              testimonial.id === currentTestimonial
                ? "shadow-lg scale-106 "
                : "opacity-90"
            }`}
          >
            <TestimonyBox {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
