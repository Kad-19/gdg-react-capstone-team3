import React, { useState } from "react";

import heroImage from "../assets/unsplash_JFFvPHkGTyQ.svg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitStatus("successful");
        setTimeout(() => setSubmitStatus(null), 2000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 2000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full contact flex flex-col">
      <div className="relative flex">
        <img

          className="relative z-0 w-full top-0 left-0 h-100 object-cover sm:h-120 md:h-170 md:top-0 sm:top-0"

          

          src={heroImage}
          alt="hero image"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
          <div>
            <h1 className="text-center text-[clamp(1rem,5vw,3rem)]">Contact</h1>
            <span className="inline-flex items-center text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3">

              <p className="text-center">Home</p>
              <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
              <p className="text-center">Contact</p>

              <Link
              to = '/'
               className="text-center">Home</Link>
              <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
              <Link 
              to='/contact'
              className="text-center">Contact</Link>

            </span>
          </div>
        </div>
      </div>
      <div className="w-full my-10 px-10 flex flex-col justify-between sm:flex-row">

        <form


          onSubmit={handleSubmit}
          className="w-full flex flex-col h-100 sm:h-120 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        >
          <div className="w-full flex flex-col items-center sm:h-100 sm:mt-10">
            <input
              className="h-10 w-[80%] border rounded pl-3 my-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="your name"
              required
            />
            <input
              className="h-10 w-[80%] border rounded pl-3 my-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your email"
              required
            />
            <input
              className="h-10 w-[80%] border rounded pl-3 my-2"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="your subject"
              required
            />
            <textarea
              className="w-[80%] h-30 border rounded pl-3 sm:h-40 my-2 mb-7"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="your message"
              required
            ></textarea>

            {submitStatus === "successful" && (
              <div className="w-[80%] mb-4 p-2 bg-green-100 text-green-800 rounded">
                Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="w-[80%] mb-4 p-2 bg-red-100 text-red-800 rounded">
                Error sending message please try again
              </div>
            )}

            <div className="w-full flex justify-center">
              <button
                className="w-[80%] h-10 cursor-pointer rounded-full bg-black text-white mb-10 disabled:bg-gray-400"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "sending" : "send message"}
              </button>
            </div>
          </div>
        </form>

        <div className="w-full flex flex-col h-80 mt-15 md:ml-10 sm:h-130 sm:mx-10">
          <h1 className="text-[clamp(1rem,5vw,3rem)]">Get In Touch</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaPhoneAlt />
            <p className="m-0">+251 912 34 56 78</p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaEnvelope />
            <p className="m-0">birdsfalkdl@afoid.c0m</p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
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

