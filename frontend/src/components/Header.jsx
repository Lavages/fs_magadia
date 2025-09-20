import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Icons
import rivan_logo from "../assets/rivan_logo.png";

const Header = () => {
  return (
    <header className="flex justify-around items-center px-8 py-4 shadow-md">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center space-x-2">
          <img src={rivan_logo} alt="Logo" className="w-15 h-15" />
          <span className="font-bold text-xl">RIVANSHOP</span>
        </div>
      </Link>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-primary-hover">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary-hover">
            Products
          </Link>
          <Link to="#" className="hover:text-primary-hover">
            Team
          </Link>
        </nav>

        {/* Icons */}
        <>
          <Link
            to="/cart"
            className="text-xl text-primary hover:text-primary-hover"
          >
            <FaShoppingCart />
          </Link>
          <Link
            to="/profile"
            className="text-xl text-primary hover:text-primary-hover"
          >
            <FaUserCircle />
          </Link>
        </>
        <>
          {/* Auth Buttons */}
          <Link
            to="/register"
            className="border border-primary text-primary px-4 py-1 rounded-full hover:bg-blue-50 text-sm"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-primary text-white px-4 py-1 rounded-full hover:bg-primary-hover text-sm"
          >
            Sign In
          </Link>
        </>
      </div>
    </header>
  );
};

export default Header;
