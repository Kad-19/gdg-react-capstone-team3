import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import newsletterImage from "../assets/image/footer/Newsletter.jpg";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* Newsletter Section */}
      <div
        className=" bg-cover bg-center text-white py-16 px-4"
        style={{
          backgroundImage: `url(${newsletterImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to get special prices
          </h2>
          <p className="mb-6">
            Don't wanna miss anything? Subscribe right now and get special
            promotions and monthly newsletters.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Type your email here"
              className="px-4 py-2 rounded-l-md text-black bg-white focus:outline-none"
            />
            <button className="bg-black/75 hover:bg-black hover:cursor-pointer text-white px-6 py-2 rounded-r-md transition-all ease-in-out duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white justify-between items-center py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h1 className="font-bold text-2xl mt-0 mb-2">COMPANY NAME</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold mb-4">Contact Information</h3>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt"></i> 732 Despard St, Atlanta
            </p>
            <p className="mb-2">
              <i className="fas fa-phone"></i> +97 888 8888
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@traveller.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">
                <Link to="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/tours" className="hover:underline">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex text-2xl space-x-4">
              <a href="#">
                <FaFacebookF className="hover:text-black mr-1 transition-all ease-in-out duration-300" />
              </a>
              <a href="#">
                <FaXTwitter className="hover:text-black mr-1 transition-all ease-in-out duration-300" />
              </a>
              <a href="#">
                <FaYoutube className="hover:text-black mr-1 transition-all ease-in-out duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-black mr-1 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
      </footer>
      <div className="text-center bg-black m-10 text-sm  text-gray-100 items-center">
        Copyright © All rights reserved (Website Developed & Managed by COMPANY
        NAME)
      </div>
    </div>
  );
};

export default Footer;
