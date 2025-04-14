import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Paris from "../assets/image/destination/Paris.png";
import Swiss from "../assets/image/destination/Swiss.png";
import Thailand from "../assets/image/destination/Thailand.png";
import Taiwan from "../assets/image/destination/Taiwan.png";
import Indonesi from "../assets/image/destination/Indonesi.png";
import Singapore from "../assets/image/destination/Singapore.png";
import defaultImage from "../assets/image/destination/default.jpg";

const renderStars = (rating) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};
function PasangerForm() {
  const [formData, setFormData] = useState({
    From: "",
    Destination: "",
    Name: "",
    Date: "",
    People: "",
  });
  const [destinations, setDestinations] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetch("https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations")
      .then((res) => res.json())

      .then((data) => setDestinations(data))
      .catch((err) => console.error("Failed to fetch packages:", err));
  }, []);
  console.log(destinations);

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
          From: "",
          Destination: "",
          Name: "",
          Date: "",
          People: "",
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
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-center h-100 sm:h-120 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
    >
      <div className="w-[50%] flex flex-col items-center sm:h-100 sm:mt-10">
        <select
          className="h-10 w-[80%] border rounded pl-3 my-2"
          name="From"
          value={formData.From}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select departure country
          </option>
          {destinations.map((dest) => (
            <div className="w-[20%] h-5">
              <option key={dest.id} value={dest.country}>
                {dest.country}
              </option>
            </div>
          ))}
        </select>

        <select
          className="h-10 w-[80%] border rounded pl-3 my-2"
          name="Destination"
          value={formData.Destination}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select destination
          </option>
          {destinations.map((dest) => (
            <div>
              <option key={dest.id} value={dest.country}>
                {dest.country}
              </option>
            </div>
          ))}
        </select>
        <input
          className="h-10 w-[80%] border rounded pl-3 my-2"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          type="text"
          placeholder="passanger name"
          required
        />
        <input
          className="h-10 w-[80%] border rounded pl-3 my-2"
          name="People"
          value={formData.People}
          onChange={handleChange}
          type="number"
          placeholder="number of passanger"
          required
        ></input>
        <input
          className="h-10 w-[80%] border rounded pl-3 my-2"
          name="Date"
          value={formData.Date}
          onChange={handleChange}
          type="date"
          placeholder="Enter date"
        ></input>

        {submitStatus === "successful" && (
          <div className="w-[80%] mb-4 p-2 bg-green-100 text-green-800 rounded">
            Book sent successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="w-[80%] mb-4 p-2 bg-red-100 text-red-800 rounded">
            Error sending message please try again
          </div>
        )}

        <div className="w-full flex justify-center">
          <button
            className="w-[50%] h-10 cursor-pointer rounded-full bg-black text-white mb-10 disabled:bg-gray-400"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "sending" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

const PackageDetail = () => {
  const images = [Paris, Swiss, Thailand, Taiwan, Indonesi, Singapore];
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPkg(data);
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

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-gray-700">Package not found.</p>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative min-h-screen">
        <img
          src={images[pkg.id - 1] || defaultImage}
          alt={pkg.title}
          className="w-full min-h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2">{pkg.title}</h1>
          <span className="inline-flex items-center text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3">
            <Link to="/" className="text-center" onClick={scrollToTop}>
              Home
            </Link>
            <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
            <Link to="/contact" className="text-center" onClick={scrollToTop}>
              Contact
            </Link>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">{pkg.country}</h2>
          <p className="text-gray-600 mb-4">{pkg.description}</p>

          <div className="mb-6">
            {renderStars(pkg.rating)}
            <p className="text-gray-700 mb-1">
              <strong>Duration:</strong> {pkg.duration}
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> ${pkg.price}
            </p>
          </div>

          <Link
            to="#"
            className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all"
            onClick={() => {
              setBook(true);
            }}
          >
            Book Now
          </Link>

          <div className="mt-6">
            <Link
              to="/packages"
              className="text-blue-600 hover:underline text-sm"
              onClick={scrollToTop}
            >
              ← Back to Packages
            </Link>
          </div>
        </div>
      </div>
      {book && <PasangerForm />}
    </div>
  );
};

export default PackageDetail;
