import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function TestimonyBox({ image, rating, name, category, idea }) {
  return (
    <div className="mt-8 relative  shadow-lg rounded-2xl p-4 text-center max-w-70 mx-0">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="User" />
      </div>

      <div className=" pt-4">
        <p className="font-semibold text-lg mt-4">{name}</p>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <div className="py-2">
        <div className="flex justify-center my-2">
          {[...Array(5)].map((_, i) => {
            return i < rating ? (
              <FaStar key={i} color="#F4BC61" />
            ) : (
              <FaRegStar key={i} color="#F4BC61" />
            );
          })}
        </div>

        <p className="text-sm text-gray-600 text-left mt-4">{idea}</p>
      </div>
    </div>
  );
}

export default TestimonyBox;
