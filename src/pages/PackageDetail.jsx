import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetail = () => {
  const { id } = useParams();
  
  // Sample data - replace with API call in real app
  const packageDetails = {
    id: 1,
    title: "Exotic National Scenery",
    image: "/images/package1-large.jpg",
    description: "Logicare now worlds with exotic national scenery",
    fullDescription: "This package takes you through the most breathtaking landscapes our country has to offer. Experience the beauty of our national parks and scenic routes. This 7-day adventure includes guided tours, comfortable accommodations, and all transportation. Perfect for nature lovers and photography enthusiasts.",
    duration: "7 Days / 6 Nights",
    price: "$1200",
    highlights: [
      "Visit 5 national parks",
      "Professional photography guidance",
      "Luxury camping experience",
      "Local cuisine tasting"
    ],
    itinerary: [
      { day: 1, title: "Arrival Day", description: "Welcome dinner and orientation" },
      { day: 2, title: "Mountain Exploration", description: "Full-day guided mountain tour" },
      { day: 3, title: "National Park Adventure", description: "Wildlife spotting and nature walks" },
    ],
    testimonials: [
      { author: "Sarah J.", quote: "The scenery was absolutely breathtaking!" },
      { author: "Michael T.", quote: "Best organized tour I've ever been on." }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Package Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{packageDetails.title}</h1>
        <img 
          src={packageDetails.image} 
          alt={packageDetails.title} 
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Package Overview</h2>
          <p className="text-gray-700 mb-6">{packageDetails.fullDescription}</p>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {packageDetails.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Itinerary</h3>
            <div className="space-y-4">
              {packageDetails.itinerary.map((day) => (
                <div key={day.day} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold">Day {day.day}: {day.title}</h4>
                  <p className="text-gray-600">{day.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Package Details</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-500">Duration</h4>
                <p>{packageDetails.duration}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-500">Price</h4>
                <p className="text-2xl font-bold">{packageDetails.price}</p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300">
                Book Now
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-2">Need help?</h4>
                <p className="text-sm text-gray-600">Contact our travel experts for any questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packageDetails.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="italic mb-3">"{testimonial.quote}"</p>
              <p className="font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
