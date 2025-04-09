import React, { useState } from "react";
import { Packages } from "./NavItems";
import { Blogs } from "./NavItems";
import { Destinations } from "./NavItems";
import { Link } from "react-router-dom";

export const PackagesDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={
        dropdown
          ? "hidden absolute bg-gray-800 shadow-lg rounded-md py-2 w-30"
          : "absolute w-30 bg-gray-800 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {Packages.map((item, index) => {
        return (
          <li
            key={index}
            className="px-4 py-2 text-white hover:bg-gray-900 transition-all ease-in-out duration-300 hover:cursor-pointer"
          >
            <Link
              onClick={() => setDropdown(false)}
              to={item.path}
              className="text-white-700 font-medium transition-all ease-in-out duration-300"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const BlogsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={
        dropdown
          ? "hidden absolute bg-gray-800 shadow-lg rounded-md py-2 w-30"
          : "absolute w-30 bg-gray-800 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {Blogs.map((item, index) => {
        return (
          <li
            key={index}
            className="px-4 py-2 text-white hover:bg-gray-900 transition-all ease-in-out duration-300 hover:cursor-pointer"
          >
            <Link
              onClick={() => setDropdown(false)}
              to={item.path}
              className="text-white-700 font-medium transition-all ease-in-out duration-300"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const DestinationsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={
        dropdown
          ? "hidden absolute bg-gray-800 shadow-lg rounded-md py-2 w-35"
          : "absolute w-35 bg-gray-800 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {Destinations.map((item, index) => {
        return (
          <li
            key={index}
            className="px-4 py-2 text-white hover:bg-gray-900 transition-all ease-in-out duration-300 hover:cursor-pointer"
          >
            <Link
              onClick={() => setDropdown(false)}
              to={item.path}
              className="text-white-700 font-medium transition-all ease-in-out duration-300"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};