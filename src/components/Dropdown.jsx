import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PackagesDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(
          "https://67f9ff65094de2fe6ea2dc4b.mockapi.io/packages"
        );
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <ul
      className={
        dropdown
          ? "hidden relative bg-gray-800/70 shadow-lg rounded-md py-2 w-30"
          : "absolute items-center justify-center w-30 bg-gray-800/70 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {packages.map((item, index) => (
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
      ))}
    </ul>
  );
};

export const BlogsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://67f9ff65094de2fe6ea2dc4b.mockapi.io/blogs"
        );
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <ul
      className={
        dropdown
          ? "hidden absolute bg-gray-800/70 shadow-lg rounded-md py-2 w-30"
          : "items-center justify-center absolute w-30 bg-gray-800/70 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {blogs.map((item, index) => (
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
      ))}
    </ul>
  );
};

export const DestinationsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
         `https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations`,
        );
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <ul
      className={
        dropdown
          ? "hidden absolute bg-gray-800/50 shadow-lg rounded-md py-2 w-35"
          : "items-center justify-center absolute w-35 bg-gray-800/50 shadow-lg"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {destinations.map((item, index) => (
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
      ))}
    </ul>
  );
};
