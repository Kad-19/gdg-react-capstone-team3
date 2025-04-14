import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    fetch(`https://67fc07891f8b41c816858fe2.mockapi.io/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch package detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!blogs) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-gray-700">Package not found.</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center pb-0" // Changed items-end to items-center and removed pb-10
      style={{
        backgroundImage: `url(${travel})`,
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 justify-center"></div>

      <header className="w-full px-4 relative z-10 text-white text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-screen-md">
          <div className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
            {blogs && <h1>{blogs.title}</h1>}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center justify-center gap-2">
              <FaUser className="text-xl" />
              <span>{blogs.blogger}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-xl" />
              <span>{blogs.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaFolder className="text-xl" />
              <span>{blogs.tag}</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const Mainblog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  console.log(id);

  useEffect(() => {
    fetch(`https://67fc07891f8b41c816858fe2.mockapi.io/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch package detail:", err));
  }, [id]);

  if (!blogs) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-gray-700">Package not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-16 py-10 bg-white text-black">
      {/* Main Blog Content */}
      <div className="lg:w-2/3 space-y-6">
        <img
          src={vacation}
          className="w-full h-[400px] object-cover rounded-lg"
        />

        {blogs && (
          <>
            <p>{blogs.paragraph1}</p>
            <h2 className="text-[clamp(1rem,2vw,2rem)] font-semibold mb-4">
              {blogs.header}
            </h2>
            <p>{blogs.paragraph2}</p>
          </>
        )}
        <img
          src={couples}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        {blogs && <p>{blogs.paragraph3}</p>}
        <div className="flex justify-between items-center pt-4 text-sm text-black-400 border-t border-gray-700">
          <span>Tags : Destination, Travel</span>

          <span className="flex items-center gap-2">
            Share this:
            <a
              href={`https://www.facebook.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="hover:text-blue-600 transition-colors" />
            </a>
            <a
              href={`https://twitter.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="hover:text-blue-400 transition-colors" />
            </a>
            <a
              href={`https://www.linkedin.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-700 transition-colors" />
            </a>
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
                <Link
                  to={
                    lists.toLowerCase() === "destination"
                      ? "/Destinations"
                      : "/blogs"
                  }
                  className="flex items-center gap-2 py-2 hover:bg-gray-100"
                >
                  <FiArrowRight />
                  {lists}
                </Link>
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
          <p
            className="flex items-center gap-2 text-sm cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("+62 6943 6956");
              alert("Phone number copied!");
            }}
            title="Click to copy"
          >
            <FaPhone />
            +62 6943 6956
          </p>

          <a
            href="mailto:contact@domain.com"
            className="flex items-center gap-2 text-sm mt-2"
            title="Send an email"
          >
            <FaEnvelope />
            contact@domain.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {


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
    <div className="bg-white p-8 rounded shadow-md">
    <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
    <p className="text-sm text-gray-600 mb-4">
      Your email address will not be published. Required fields are marked *
    </p>
    <form onSubmit={handleSubmit} className="w-[65%]  flex flex-col">
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your comment..."
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name *"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email *"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
          Website
        </label>
        <input
          type="url"
          id="website"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="saveInfo"
          className="mr-2 leading-tight"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
        />
        <label htmlFor="saveInfo" className="text-gray-700 text-sm">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>
      <div className="flex justify-start">
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Post Comment" : "Post Comment"}
        </button>
      </div>

      {submitStatus === "successful" && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
          Comment submitted successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
          Error submitting comment. Please try again.
        </div>
      )}
    </form>
  </div>
  );
};

export default BlogDetail;
