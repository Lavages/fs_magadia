import React from "react";
import Hero_img from "../assets/hero/hero_image.png";

const Hero = () => {
  return (
    <section className="flex flex-wrap flex-col md:flex-row items-center justify-evenly py-10">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Sit and shop, we got you!
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover text-sm">
          SHOP NOW
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 flex justify-center">
        <img
          src={Hero_img} // Replace with your actual image path
          alt="Shopping Woman"
          className="w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
