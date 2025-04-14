import React, { useState, useEffect } from "react";
import plane from "../assets/image/blogs and blogdetail/plane.png";
import family from "../assets/image/blogs and blogdetail/family.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayCount, setDisplayCount] = useState(3); // Start with 3 blogs (2 left + 1 right)
  const [isLoading, setIsLoading] = useState(false);

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

  const handleViewMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 3); // Load 3 more blogs at a time
      setIsLoading(false);
    }, 500);
  };

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
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left Column - Shows 2/3 of displayed blogs */}
          <div className="flex gap-6 flex-col w-full sm:w-1/2">
            {blogs
              .slice(0, Math.floor((displayCount * 2) / 3))
              .map((blog, index) => (
                <div
                  key={blog.id}
                  className="flex-grow bg-white rounded-lg shadow-lg pt-4 pr-4 pb-8 pl-6"
                >
                  <p className="font-normal text-lg">{blog.tag}</p>
                  <h4 className="text-2xl font-medium leading-tight">
                    {blog.title}
                    <br />-
                  </h4>
                  <p className="leading-6 text-faded-color text-base mb-6">
                    {blog.description}
                  </p>
                  <Link to={`/blogs/${blog.id}`} onClick={scrollToTop}>
                    <button className="bg-black cursor-pointer text-white py-2 px-4 rounded-full text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
          </div>

          {/* Right Column - Shows 1/3 of displayed blogs */}
          <div className="flex flex-col w-full sm:w-1/2 gap-6">
            {blogs
              .slice(Math.floor((displayCount * 2) / 3), displayCount)
              .map((blog, index) => (
                <div
                  key={blog.id}
                  className={`bg-white rounded-lg shadow-lg ${
                    index === 0 ? "pt-0" : "pt-4"
                  } pr-4 pb-8 pl-6`}
                >
                  {/* Show image only for the first blog in the right column */}
                  {index === 0 && (
                    <img
                      src={family}
                      alt="Family"
                      className="w-full h-[400px] object-cover rounded-t-lg mb-6"
                    />
                  )}
                  <p className="font-normal text-lg">{blog.tag}</p>
                  <h4 className="text-2xl font-medium leading-tight">
                    {blog.title}
                  </h4>
                  <p className="leading-6 text-faded-color text-base mb-6 mt-4">
                    {blog.description}
                  </p>
                  <Link to={`/blogs/${blog.id}`} onClick={scrollToTop}>
                    <button className="bg-black cursor-pointer text-white py-2 px-4 rounded-full text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Hide button when all blogs are shown */}
        {displayCount < blogs.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-black text-white py-2 px-6 rounded-full text-sm"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View More Articles"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
