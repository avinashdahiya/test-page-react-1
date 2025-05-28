import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6 sm:p-8 text-center">
        {/* Logo */}
        <img
          src="https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=100&dpr=2"
          alt="Starbucks Logo"
          className="mx-auto mb-4 w-20 h-20 object-contain"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-3">
          Welcome to Starbucks Showcase
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Explore our digital menu inspired by real Starbucks experiences. Choose from the sections below.
        </p>

        {/* Added Starbucks Info */}
        <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
          Founded in Seattle in 1971, Starbucks has become a global coffeehouse brand, celebrated for quality coffee, sustainable sourcing, and creating a warm, inviting atmosphere.
        </p>

        {/* Quote */}
        <blockquote className="text-green-800 italic text-base sm:text-lg font-semibold mb-6 border-l-4 border-green-600 pl-4 max-w-xl mx-auto">
          “To inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time.”
        </blockquote>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/profile"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">☕</span> Profile Card (Founder)
          </Link>

          <Link
            to="/products"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">🍰</span> Starbucks Product List
          </Link>

          <Link
            to="/carousel"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">📸</span> Product Carousel
          </Link>

          <Link
            to="/counter"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">🔢</span> Coffee Counter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
