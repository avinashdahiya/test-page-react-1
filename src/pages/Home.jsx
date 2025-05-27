import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10 text-center">
        {/* Logo */}
        <img
          src="https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=100&dpr=2"
          alt="Starbucks Logo"
          className="mx-auto mb-6 w-24 h-24 object-contain"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Welcome to Starbucks Showcase
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore our digital menu inspired by real Starbucks experiences. Choose from the sections below.
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/profile"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-4 px-6 rounded-lg shadow hover:scale-105 transition transform duration-200"
          >
            ☕ Profile Card (Founder)
          </Link>

          <Link
            to="/products"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-4 px-6 rounded-lg shadow hover:scale-105 transition transform duration-200"
          >
            🍰 Starbucks Product List
          </Link>

          <Link
            to="/carousel"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-4 px-6 rounded-lg shadow hover:scale-105 transition transform duration-200"
          >
            📸 Product Carousel
          </Link>

          <Link
            to="/counter"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-4 px-6 rounded-lg shadow hover:scale-105 transition transform duration-200"
          >
            🔢 Coffee Counter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
