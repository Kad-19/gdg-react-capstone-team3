import React, { useState, useEffect } from "react";
import welcome from "../../assets/image/home/welcome.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  const [destinations, setDestinations] = useState([]);
  const [locationClicked, setLocationClicked] = useState(false);

  useEffect(() => {
    fetch("https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Failed to fetch packages:", err));
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${welcome})` }}
      className="bg-cover bg-center w-full flex flex-col min-h-screen justify-center"
    >
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl w-full">
        <p className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          Make in <br /> your journey.
        </p>
        <p className="text-gray-100 pt-4 text-sm sm:text-base md:text-lg max-w-xl">
          Explore the world with what you love — beautiful natural beauty.
        </p>

        <div className="flex justify-start mt-8 sm:mt-10 w-fit">
          <div className="bg-white shadow-md rounded-2xl flex flex-col sm:flex-row sm:items-center px-4 py-4 sm:px-6 sm:py-3 gap-3 w-full max-w-3xl  sm:rounded-full">
            <div
              onClick={() => setLocationClicked(true)}
              className="text-gray-700 font-medium bg-transparent hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer justify-between"
            >
              Location <FaAngleDown />
            </div>
            {locationClicked && (
              <ul className="absolute bottom-15 max-w-30  z-3 rounded bg-gray-200 overflow-y-auto max-h-30">
                {destinations.map((item) => (
                  <Link>
                  <li key={item.id} 
                  onClick={()=>setLocationClicked(false)}
                  className="py-2" >{item.country}</li>
                  </Link>
                  
                ))}
              </ul>
            )}

            <div className="sm:hidden h-px w-full bg-gray-300" />
            <div className="text-gray-700 font-medium bg-transparent hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer justify-between">
              Date <FaAngleDown />
            </div>
            <div className="sm:hidden h-px w-full bg-gray-300" />
            <div className="text-gray-700 font-medium bg-transparent hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer justify-between">
              People <FaAngleDown />
            </div>
            <div className="w-full sm:w-auto">
              <div className="bg-black text-white rounded-2xl w-full sm:w-auto px-6 py-2 sm:rounded-full font-semibold hover:bg-gray-800 transition mt-2 sm:mt-0 ">
                Explore now
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-100 mt-4 text-sm sm:text-base">
          Popular Place: Bali, Istanbul, Rome, Paris.
        </p>
      </div>
    </div>
  );
}

export default Hero;
