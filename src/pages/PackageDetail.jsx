import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import Paris from '../assets/image/destinations/Paris.png';
import Swiss from '../assets/image/destinations/Swiss.png';
import Thailand from '../assets/image/destinations/Thailand.png';
import Taiwan from '../assets/image/destinations/Taiwan.png';
import Indonesi from '../assets/image/destinations/Indonesi.png';
import Singapore from '../assets/image/destinations/Singapore.png';

const renderStars = (rating) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
};

const PackageDetail = () => {
  const images = [Paris , Swiss , Thailand , Taiwan , Indonesi , Singapore]
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    fetch(`https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/${id}`)
      .then(res => res.json())
      .then(data => setPkg(data))
      .catch(err => console.error('Failed to fetch package detail:', err));
  }, [id]);

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
        <img src={images[pkg.id - 1]} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">{pkg.title}</h1>
          <p className="text-sm font-medium">Home &gt; Packages &gt; {pkg.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">{pkg.country}</h2>
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

export default PackageDetail;
