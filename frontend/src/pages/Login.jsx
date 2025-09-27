import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { handleLogin } from "../api/AuthApi";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await handleLogin(formData.username, formData.password, setMessage);
  };

  if (localStorage.getItem("access_token")){
    nav("/profile", {replace:true})
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Sign In</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your username"
          />

          {errors.username && <p className="text-red-600">{errors.username}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
          />

          {errors.password && <p className="text-red-600">{errors.password}</p>}

          {message && <p className="text-green-600">{message}</p>}
        </div>

        {/* Login Button */}
        <button
          type="submit"
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
