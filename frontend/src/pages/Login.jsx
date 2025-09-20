// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white shadow-md rounded-md p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">Sign In</h2>

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

        {/* Login Button */}
        <button
          type="button"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-hover transition"
        >
          Login
        </button>

        {/* Link */}
        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-sm text-gray-600 hover:underline"
          >
            Don’t have an account yet?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
