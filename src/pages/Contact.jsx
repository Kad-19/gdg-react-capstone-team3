import React from "react";
import heroImage from "../assets/unsplash_JFFvPHkGTyQ.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="w-full contact flex flex-col">
      <div className="relative flex">
        <img
          className="relative z-0 w-full top-0 left-0 h-60 object-cover sm:h-170 sm:top-0 md:h-170"
          src={heroImage}
          alt=" hero image"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center  text-white">
          <div>
            <h1 className="text-center text-[clamp(1rem,5vw,3rem)]  ">
              Contact
            </h1>
            <span className="inline-flex text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3  ">
              <p className="text-center">Home</p>
              <p className="text-center">Contact</p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full my-10 px-10 flex flex-col justify-between sm:flex-row ">
        <form className="w-full flex flex-col h-100 sm:h-120 shadow-lg">
          <div className="w-full flex flex-col items-center sm:h-100 sm:mt-10">
            <input
              className="h-10 w-[80%] border rounded pl-3 my-2"
              type="text"
              placeholder="your name "
            />
            <input
              className="h-10 w-[80%] border rounded pl-3  my-2"
              type="email"
              placeholder="your email"
            />
            <input
              className="h-10 w-[80%] border rounded pl-3  my-2"
              type="text"
              placeholder="your subject"
            />
            <textarea
              className="w-[80%] h-30 border rounded pl-3 sm:h-40  my-2 mb-7 "
              name=""
              placeholder="your message"
              id=""
            ></textarea>
            <div className="w-full flex justify-center">
              <button className="w-[80%] h-10 rounded-full bg-black text-white mb-10 ">
                send message
              </button>
            </div>
          </div>
        </form>

        <div className="w-full flex flex-col h-80 mt-15 md:ml-10  sm:h-130 sm:mx-10">
          <h1 className="text-[clamp(1rem,5vw,3rem)]">Get In Touch</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <span className="inline-flex items-center space-x-2   my-2">
            <FaPhoneAlt />
            <p className="m-0">+251 912 34 56 78</p>
          </span>
          <span className="inline-flex items-center space-x-2  my-2">
            <FaEnvelope />
            <p className="m-0">birdsfalkdl@afoid.c0m</p>
          </span>
          <span className="inline-flex items-center space-x-2  my-2">
            <IoLocation />
            <p className="m-0">
              8465 Beahan Roads, Kaydencester, Louisiana - 59129, Indonesia
            </p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaPhoneAlt />
            <p className="m-0">Get In Touch</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

