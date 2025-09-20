// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white shadow-md rounded-md p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">Sign Up</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Re-enter your password"
          />
        </div>

        {/* Register Button */}
        <button
          type="button"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-hover transition"
        >
          Register
        </button>

        {/* Bottom Text */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-gray-600 hover:underline">
            I already have an account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
