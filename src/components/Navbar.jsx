import React, { useState, useEffect } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import Logo from "../assets/image/logo/logo1_1.svg";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

import {
  PackagesDropdown,
  BlogsDropdown,
  DestinationsDropdown,
  // SearchDropdown,
} from "./Dropdown";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch("https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations")
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((err) => console.error("Failed to fetch packages:", err));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  function searchEngine() {
    return setIsSearchVisible(true);
  }

  return (
    <div>
      <nav className="flex w-full fixed z-50 text-black bg-[rgba(0,0,0,0.5)] text-teal-50 items-center justify-between px-8 py-4 border-b border-white-300">
        {!isSearchVisible && (
          <>
            <Link
              to="/"
              className="text-2xl font-bold text-white-700"
              onClick={scrollToTop}
            >
              <img className="w-50" src={Logo} alt="logo" />
            </Link>

            {/* Hamburger button - only shows on mobile (sm screens) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <GiCrossMark className="text-2xl" />
              ) : (
                <GiHamburgerMenu className="text-2xl" />
              )}
            </button>

            {/* Navigation container - shows row on tablet (sm) and desktop, vertical on mobile when open */}
            <div
              className={`${isMobileMenuOpen ? "block" : "hidden"} sm:block`}
            >
              <ul
                className={`${
                  isMobileMenuOpen
                    ? "flex flex-col absolute top-full right-0 bg-[rgba(0,0,0,0.9)] w-48 py-4 space-y-4"
                    : "flex items-center space-x-6"
                } sm:flex sm:items-center sm:flex-row sm:relative sm:bg-transparent sm:space-y-0 sm:ml-10`}
              >
                {NavItems.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  if (item.title === "Packages") {
                    return (
                      <li
                        key={index}
                        className={`${
                          isMobileMenuOpen
                            ? "block w-full text-center"
                            : "inline-block"
                        } mx-4`}
                        onMouseEnter={() => {
                          setDropdown(true);
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setDropdown(false);
                          setHoveredIndex(null);
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={scrollToTop}
                          className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                        >
                          {item.title}
                          {(item.title === "Packages" ||
                            item.title === "Destinations" ||
                            item.title === "Blogs") && (
                            <IoMdArrowDropdown className="inline" />
                          )}
                        </Link>
                        {dropdown && isHovered && <PackagesDropdown />}
                      </li>
                    );
                  }

                  if (item.title === "Blogs") {
                    return (
                      <li
                        key={index}
                        className={`${
                          isMobileMenuOpen
                            ? "block w-full text-center"
                            : "inline-block"
                        } mx-4`}
                        onMouseEnter={() => {
                          setDropdown(true);
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setDropdown(false);
                          setHoveredIndex(null);
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={scrollToTop}
                          className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                        >
                          {item.title}
                          {(item.title === "Packages" ||
                            item.title === "Destinations" ||
                            item.title === "Blogs") && (
                            <IoMdArrowDropdown className="inline" />
                          )}
                        </Link>
                        {isHovered && <BlogsDropdown />}
                      </li>
                    );
                  }
                  if (item.title === "Destinations") {
                    return (
                      <li
                        key={index}
                        className={`${
                          isMobileMenuOpen
                            ? "block w-full text-center"
                            : "inline-block"
                        } mx-4`}
                        onMouseEnter={() => {
                          setDropdown(true);
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setDropdown(false);
                          setHoveredIndex(null);
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={scrollToTop}
                          className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                        >
                          {item.title}
                          {(item.title === "Packages" ||
                            item.title === "Destinations" ||
                            item.title === "Blogs") && (
                            <IoMdArrowDropdown className="inline" />
                          )}
                        </Link>
                        {isHovered && <DestinationsDropdown />}
                      </li>
                    );
                  }

                  return (
                    <li
                      key={index}
                      className={`${
                        isMobileMenuOpen
                          ? "block w-full text-center"
                          : "inline-block"
                      } mx-4`}
                    >
                      <Link
                        to={item.path}
                        onClick={scrollToTop}
                        className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                      >
                        {item.title}
                        {(item.title === "Packages" ||
                          item.title === "Destinations" ||
                          item.title === "Blogs") && (
                          <IoMdArrowDropdown className="inline" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="flex items-center cursor-pointer"
              onClick={searchEngine}
            >
              <PiMagnifyingGlassBold className="mr-0" />
            </button>
          </>
        )}

        {isSearchVisible && (
          <div className="relative h-8 top-0 flex justify-center items-center w-full">
            <input
              type="search"
              className="absolute w-[80%] sm:w-[40%]  bg-white text-black py-2 px-4 rounded-md focus:outline-none"
              placeholder="search for"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex mt-4 border flex-col max-h-[150px] overflow-y-auto mt-24 w-[80%] sm:w-[40%] bg-gray-300 rounded-md shadow-md">
              {destination
                .filter((item) =>
                  search.toLowerCase() === ""
                    ? item
                    : item.country.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <Link
                  to={`/packages/${item.id}`}
                  onClick={()=>setIsSearchVisible(!isSearchVisible)}
                    key={item.id}
                    className="text-black p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {item.country}
                  </Link>
                ))}
            </div>

            <button
              onClick={() => setIsSearchVisible(false)}
              className="absolute right-4 md:right-8 text-white focus:outline-none"
            >
              <GiCrossMark className="text-2xl" />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
