import React, { useState, useEffect } from "react";
//import plane from "../assets/image/blogs and blogdetail/plane";
import plane from "../assets/image/blogs and blogdetail/plane.png";
import family from "../assets/image/blogs and blogdetail/family.png";
import { Link } from "react-router-dom";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    fetch("https://67fc07891f8b41c816858fe2.mockapi.io/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch packages:", err));
  }, []);

  return (
    <div className="mb-[178px]">
      <img
        src={plane}
        alt="Airplane"
        className="w-full min-h-screen object-cover"
      />
      <div className="mx-4 sm:mx-16">
        <h2 className="text-2xl sm:text-4xl font-semibold">Tips & Article</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 pb-16">
          <p className="leading-6 sm:leading-8 text-faded-color text-base sm:text-lg w-full sm:w-1/2 mb-4 sm:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full text-sm">
            View more
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex gap-6 flex-col w-full sm:w-1/2">
            {blogs.slice(0,2).map((blog, index) => (
              <div key={index} className="flex-grow bg-white rounded-lg shadow-lg pt-4 pr-4 pb-8 pl-6">
                <p className="font-normal text-lg">{blog.tag}</p>
                <h4 className="text-2xl font-medium leading-tight">
                 {blog.title}
                  <br />-
                </h4>
                <p className="leading-6 text-faded-color text-base mb-6">
                 {blog.description}
                </p>
                <Link to={`/blogs/${blog.id}`}
                onClick={scrollToTop}
                 >
                  <button className="bg-black cursor-pointer  text-white py-2 px-4 rounded-full text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            ))}

          
          </div>

          <div className="flex flex-col w-full sm:w-1/2 shadow-lg rounded-lg overflow-hidden">
            <img
              src={family}
              alt="Family"
              className="w-full h-[400px] object-cover"
            />
            {blogs.slice(2,3).map((blog, index)=>(
               <div key={index} className="flex-grow pt-4 pr-4 pb-8 pl-6">
               <p className="font-normal text-lg">{blog.tag}</p>
               <h4 className="text-2xl font-medium leading-tight">
                {blog.title}
               </h4>
               <p className="leading-6 text-faded-color text-base mb-6 mt-4">
                {blog.description}
               </p>
               <Link to={`/blogs/${blog.id}`}
                onClick={scrollToTop}
                >
                 <button className="bg-black cursor-pointer  text-white py-2 px-4 rounded-full text-sm">
                   Read More
                 </button>
               </Link>
             </div>

            ))

            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;
