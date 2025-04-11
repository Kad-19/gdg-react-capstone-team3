import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Paris from '../assets/image/destinations/Paris.png';
import Swiss from '../assets/image/destinations/Swiss.png';
import Thailand from '../assets/image/destinations/Thailand.png';
import Taiwan from '../assets/image/destinations/Taiwan.png';
import Indonesi from '../assets/image/destinations/Indonesi.png';
import Singapore from '../assets/image/destinations/Singapore.png';

const packages = [
  {
    id: 1,
    title: "Paris",
    image: Paris,
    description: "City of lights with a rich culture and heritage.",
    duration: "3 Days / 2 Nights",
    price: "$299.00",
    rating: 5
  },
  {
    id: 2,
    title: "Swiss",
    image: Swiss,
    description: "A breathtaking alpine escape with snowy peaks.",
    duration: "3 Days / 2 Nights",
    price: "$290.00",
    rating: 5
  },
  {
    id: 3,
    title: "Thailand",
    image: Thailand,
    description: "Tropical beaches, temples, and street food adventures.",
    duration: "3 Days / 2 Nights",
    price: "$299.00",
    rating: 5
  },
  {
    id: 4,
    title: "Taiwan",
    image: Taiwan,
    description: "A vibrant mix of tradition, nature, and modernity.",
    duration: "3 Days / 2 Nights",
    price: "$299.00",
    rating: 5
  },
  {
    id: 5,
    title: "Indonesia",
    image: Indonesi,
    description: "Explore islands, volcanoes, and diverse cultures.",
    duration: "3 Days / 2 Nights",
    price: "$300.00",
    rating: 5
  },
  {
    id: 6,
    title: "Singapore",
    image: Singapore,
    description: "Futuristic skyline with rich multicultural roots.",
    duration: "3 Days / 2 Nights",
    price: "$299.00",
    rating: 5
  }
];

const renderStars = (rating) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
};

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-gray-700">Package not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative min-h-screen">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">{pkg.title}</h1>
          <p className="text-sm font-medium">Home &gt; Packages &gt; {pkg.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">{pkg.title}</h2>
          <p className="text-gray-600 mb-4">{pkg.description}</p>

          <div className="mb-6">
            {renderStars(pkg.rating)}
            <p className="text-gray-700 mb-1"><strong>Duration:</strong> {pkg.duration}</p>
            <p className="text-gray-700"><strong>Price:</strong> {pkg.price}</p>
          </div>

          <Link
            to="#"
            className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all"
          >
            Book Now
          </Link>

          <div className="mt-6">
            <Link
              to="/packages"
              className="text-blue-600 hover:underline text-sm"
            >
              ← Back to Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
