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

        {/* Heading (same text, slightly smaller) */}
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-3">
          Welcome to Starbucks Showcase
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Explore our digital menu inspired by real Starbucks experiences. Choose from the sections below.
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/profile"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200"
          >
            ☕ Profile Card (Founder)
          </Link>

          <Link
            to="/products"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200"
          >
            🍰 Starbucks Product List
          </Link>

          <Link
            to="/carousel"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200"
          >
            📸 Product Carousel
          </Link>

          <Link
            to="/counter"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg shadow hover:scale-105 transition duration-200"
          >
            🔢 Coffee Counter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
