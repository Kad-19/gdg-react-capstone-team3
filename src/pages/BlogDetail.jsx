import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaFolder,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import travel from "../assets/image/blogs and blogdetail/glass.png";
import vacation from "../assets/image/blogs and blogdetail/vacation.png";
import couples from "../assets/image/blogs and blogdetail/couples.png";
import postone from "../assets/image/blogs and blogdetail/postone.png";
import posttwo from "../assets/image/blogs and blogdetail/posttwo.png";
import postthree from "../assets/image/blogs and blogdetail/postthree.png";
import { FiArrowRight } from "react-icons/fi";

const BlogDetail = () => {
  return (
    <div>
      <Banner />;
      <Mainblog />
      <Contacts />
    </div>
  );
};

const Banner = () => {
  return (
    <div
      className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-end pb-10"
      style={{
        backgroundImage: `url(${travel})`,
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 justify-center"></div>

      <header className="container mx-auto px-4 relative z-10 text-white text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Travel Stories for now <br />
            and the future
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center justify-center gap-2">
              <FaUser className="text-xl" />
              <span>Hasmar</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-xl" />
              <span>January 18, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaFolder className="text-xl" />
              <span>Stories, Tips</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const Mainblog = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-16 py-10 bg-white text-black">
      {/* Main Blog Content */}
      <div className="lg:w-2/3 space-y-6">
        <img
          src={vacation}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <p className="text-black-300 leading-relaxed text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <h2 className="text-2xl font-semibold text-black">
          Rice Terraces, Tegalialang
        </h2>
        <p className="text-black-300 leading-relaxed text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <img
          src={couples}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <p className="text-black-300 leading-relaxed text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex justify-between items-center pt-4 text-sm text-black-400 border-t border-gray-700">
          <span>Tags : Destination, Travel</span>
          <span className="flex items-center gap-2">
            Share this: <FaFacebook /> <FaTwitter /> <FaLinkedin />
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 space-y-10">
        {/* Recent Posts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Recent Post</h2>
          {[postone, posttwo, postthree].map((img, idx) => {
            const titles = [
              "Travel Stories for Now and the Future",
              "9 Popular Travel Destination on Sale in 2022",
              "How Are We Going to Travel in 2022?",
            ];
            return (
              <div key={idx} className="flex gap-4">
                <img
                  src={img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="text-sm">
                  <p className="font-medium">{titles[idx]}</p>
                  <p className="text-gray-500 mt-1">14 Dec 2022</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Catagories</h2>
          <ul className="text-sm">
            {["Travel", "Tips", "Stories", "Destination"].map((lists, idx) => (
              <li key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 py-2">
                  <FiArrowRight />
                  {lists}
                </div>
                <div className="border-b border-gray-300" />
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Have Any Question?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Do not hesitage to give us a call. We are an expert team and we are
            happy to talk to you.
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaPhone />
            +62 6943 6956
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope />
            contact@domain.com
          </p>
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="bg-white text-black p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-black"> Leave a Reply</h2>
      <p className="text-gray-400 text-sm mb-6">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="space-y-6">
        {/* Comment Field */}
        <div>
          <label htmlFor="comment" className="block text-sm font-semibold mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            rows="5"
            className="w-full p-4 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Write your comment..."
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="you@example.com"
          />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-semibold mb-2">
            Website
          </label>
          <input
            type="text"
            id="website"
            className="w-full p-3 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="save-info"
            className="accent-white w-4 h-4 mt-1"
          />
          <label htmlFor="save-info" className="text-sm text-gray-400">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default BlogDetail;
