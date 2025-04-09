import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  // Sample package data - replace with your actual data source
  const packages = [
    {
      id: 1,
      title: "Exotic National Scenery",
      image: "/images/package1.jpg",
      description: "Logicare now worlds with exotic national scenery. Explore breathtaking national landscapes.",
      duration: "7 Days",
      price: "$1200"
    },
    {
      id: 2,
      title: "Unforgettable Moments",
      image: "/images/package2.jpg",
      description: "Create memories that last a lifetime with our curated experiences.",
      duration: "5 Days",
      price: "$950"
    },
    {
      id: 3,
      title: "Aquila Special Package",
      image: "/images/package3.jpg",
      description: "Aquila is a get special piece of our travel collection.",
      duration: "3 Days",
      price: "$750"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Travel Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={pkg.image} 
              alt={pkg.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">{pkg.duration}</span>
                <span className="font-bold text-lg">{pkg.price}</span>
              </div>
              
              <Link 
                to={`/packages/${pkg.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;