import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

 const images = [
    {
      "id": "AW101",
      "imageURL": "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "TT205",
      "imageURL": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "MP312",
      "imageURL": "https://images.unsplash.com/photo-1465513527097-544020a68b06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnV8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "SA408",
      "imageURL": "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "KC515",
      "imageURL": "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "PW621",
      "imageURL": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJnZW50aW5hfGVufDB8fDB8fHww"
    },
    {
      "id": "SAE703",
      "imageURL": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "CRA811",
      "imageURL": "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhfGVufDB8fDB8fHww"
    },
    {
      "id": "MDC909",
      "imageURL": "https://plus.unsplash.com/premium_photo-1699535659313-c95cf8111235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9yb2NvfGVufDB8fDB8fHww"
    },
    {
      "id": "INL101",
      "imageURL": "https://images.unsplash.com/photo-1513883524931-aaab83bcb19b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "BBG112",
      "imageURL": "https://images.unsplash.com/photo-1559912730-ce669f0e2d9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJlbmNoUG9seW5lc2lhfGVufDB8fDB8fHww"
    },
    {
      "id": "NZS125",
      "imageURL": "https://images.unsplash.com/photo-1622421463401-88a0fb3fff8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV3WmVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "VHT139",
      "imageURL": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "GIC144",
      "imageURL": "https://images.unsplash.com/photo-1566352081904-cfa7024f5d6a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWN1YWRvcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "SHA157",
      "imageURL": "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNjb3RsYW5kfGVufDB8fDB8fHww"
    },
    {
      "id": "RCE163",
      "imageURL": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnJhemlsfGVufDB8fDB8fHww"
    },
    {
      "id": "JDW171",
      "imageURL": "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Sm9yZGFufGVufDB8fDB8fHww"
    },
    {
      "id": "SAH188",
      "imageURL": "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "AOA192",
      "imageURL": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVzdHJhbGlhfGVufDB8fDB8fHww"
    },
    {
      "id": "KBC206",
      "imageURL": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D"
    }
  ];
const Destinations = () => {
 

  const [packages, setPackages] = useState([]);
  const [discovermore, setDiscovermore] = useState(false);

  useEffect(() => {
    fetch('https://681ef58cc1c291fa663591ff.mockapi.io/api/v1/Destinations')
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


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="min-h-screen bg-white">


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
            <button 
            className="bg-black text-white py-2 px-6 rounded-full cursor-pointer hover:bg-gray-800 transition-all"
            onClick={() => setDiscovermore(true)}
            >
              Discover more
            </button>
          </div>

        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {packages.slice(0, 6).map((pkg) => {
            // Find the corresponding image URL from the images array
            const packageImage = images.find(img => img.id === pkg.id);
            const imageSrc = packageImage ? packageImage.imageURL : 'placeholder-image-url.jpg'; // Add a placeholder in case of no match

            return (
              <div key={pkg.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={imageSrc} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-black">{pkg.country}</h3>
                    <span className="text-lg font-bold text-black">$ {pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    {renderStars(pkg.rating)}
                    <Link to={`/packages/${pkg.id}`} className="text-sm bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-all"
                      onClick={scrollToTop}
                    >
                      Booking now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {discovermore && (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {packages.slice(7, 20).map((pkg) => {
            // Find the corresponding image URL from the images array
            const packageImage = images.find(img => img.id === pkg.id);
            const imageSrc = packageImage ? packageImage.imageURL : 'placeholder-image-url.jpg'; // Add a placeholder in case of no match

            return (
              <div key={pkg.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={imageSrc} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-black">{pkg.country}</h3>
                    <span className="text-lg font-bold text-black">$ {pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    {renderStars(pkg.rating)}
                    <Link to={`/packages/${pkg.id}`} className="text-sm bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-all"
                      onClick={scrollToTop}
                    >
                      Booking now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
        
      </section>

    </div>
  );
};

export default Destinations;