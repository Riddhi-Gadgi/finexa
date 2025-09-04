import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    const token = localStorage.getItem("token");
    navigate("/login");
  };

  return (
    <section className="container mx-auto px-6 py-12 text-center">
      {/* Hero Image */}
      <img
        src="media/Images/homeHero.png"
        alt="Hero"
        className="mx-auto w-3/4 max-w-md mb-8"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Invest in everything
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>

      {/* CTA Button */}
      <button
        onClick={handleExplore}
        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition duration-300"
      >
        Explore Project
      </button>
    </section>
  );
}

export default Hero;
