import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "/media/Images/Finexa.png";
import "../index.css";
function Navbar() {
  // Navbar links array
  const navLinks = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className=" border-amber-50 shadow-sm px-6 py-3 sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-28 md:w-36" />
        </Link>

        {/* Navbar Links (map version) */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:text-fuchsia-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
