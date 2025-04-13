import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



import Paris from '../assets/image/destinations/Paris.png';
import Swiss from '../assets/image/destinations/Swiss.png';
import Thailand from '../assets/image/destinations/Thailand.png';
import Taiwan from '../assets/image/destinations/Taiwan.png';
import Indonesi from '../assets/image/destinations/Indonesi.png';
import Singapore from '../assets/image/destinations/Singapore.png';
import package1 from '../assets/image/packages/package1.png';
import package2 from '../assets/image/packages/package2.png';
import package3 from '../assets/image/packages/package3.png';

const Packages = () => {
  const images = [Paris , Swiss , Thailand , Taiwan , Indonesi , Singapore]
 
    const [packages, setPackages] = useState([]);
  
    useEffect(() => {
      fetch('https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations')
        .then(res => res.json())
        .then(data => setPackages(data))
        .catch(err => console.error('Failed to fetch packages:', err));
    }, []);
  
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img src={package1} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">Travel Packages</h1>
          <p className="text-sm font-medium">Home &gt; Packages</p>
        </div>

      </div>

      {/* Travel Packages */}
      <section className="container mx-auto py-20 px-4">
        <div className="mb-14 text-left">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-14">
            <div>
              <h2 className="text-4xl font-bold mb-2">Popular Destination</h2>
              <p className="text-gray-600 max-w-2xl text-base">
                Explore our best-in-class, convenient & affordable trips, across several famous locations as below in vibrant images.
              </p>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all">
              Discover more
            </button>
          </div>

        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {packages.slice(0, 6).map((pkg) => (
            <div key={pkg.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={images[pkg.id - 1]} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-black">{pkg.country}</h3>
                  <span className="text-lg font-bold text-black">{pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  {renderStars(pkg.rating)}
                  <Link to={`/packages/${pkg.id}`} className="text-sm bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-all">
                    Booking now
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full mt-20 mb-20">
        <img
          src={package2}
          alt="Airplane"
          className="w-full h-[542px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>
      {/* Tips & Article Section */}
      <section className="container mx-auto py-20 px-4">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-14">
          <div>
            <h2 className="text-4xl font-bold mb-2">Tips & Article</h2>
            <p className="text-gray-600 max-w-xl text-base">
              Discover travel tips, guides, and the latest stories to inspire your next journey.
            </p>
          </div>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all">
            View More
          </button>
        </div>

        <div className=" gap-10 md:flex md:flex-cols ">
          {/* Left Column: Two stacked articles */}
          <div className=" grid grid-cols-1 md:grid-row-2  md:w-2/5 gap-10 h-[700px]">
            <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Perfect | Tips</span>
                <h3 className="text-xl font-semibold text-black mb-4 leading-snug">
                  9 Popular Travel Destination on Sale in 2022
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Discover trending destinations that are perfect for your next holiday, now with amazing discounts!
                </p>
              </div>
              <Link to="#" className="text-sm bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-all self-start">
                Read More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Tips | Travel</span>
                <h3 className="text-xl font-semibold text-black mb-4 leading-snug">
                  How Are We Going to Travel in 2022?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Take a look at the future of travel in a post-pandemic world and how to prepare for your next trip.
                </p>
              </div>
              <Link to="#" className="text-sm bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-all self-start">
                Read More
              </Link>
            </div>
          </div>

          {/* Right Column: Image article card */}
          <div className="bg-white shadow-lg rounded-2xl     md:w-3/5">
            <div className="h-96 w-full overflow-hidden">
              <img
                src={package3}
                alt="Travel Stories For Now and the Future"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className='pb-16'>
                <span className="text-sm text-gray-500 mb-2 block">Stories | Tips</span>
                <h3 className="text-xl font-semibold text-black mb-4 leading-snug">
                  Travel Stories For Now and the Future
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  From life-changing adventures to small travel joys—explore stories that will fuel your wanderlust.
                </p>
              </div>
              <Link to="#" className="text-sm bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-all self-start justify-end">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Packages;
