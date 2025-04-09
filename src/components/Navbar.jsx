import React, { useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import Logo from "../assets/image/logo/logo1 1.svg";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import {
  PackagesDropdown,
  BlogsDropdown,
  DestinationsDropdown,
} from "./Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <div>
      <nav className="flex w-full fixed z-50 text-black bg-[rgba(0,0,0,0.5)] text-teal-50 items-center justify-between px-8 py-4 border-b border-white-300">
        <Link to="/" className="text-2xl font-bold text-white-700"
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
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
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
        <div className="flex items-center">
          <PiMagnifyingGlassBold className="mr-0" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
