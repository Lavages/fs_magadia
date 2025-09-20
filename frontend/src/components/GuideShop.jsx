import React from "react";
import { FaListUl, FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineHourglassEmpty } from "react-icons/md";

const GuideShop = () => {
  const steps = [
    { icon: <FaListUl size={40} />, label: "BROWSE" },
    { icon: <FaShoppingCart size={40} />, label: "ADD TO CART" },
    { icon: <AiOutlineShoppingCart size={40} />, label: "CHECKOUT" },
    { icon: <MdOutlinePayment size={40} />, label: "PAYMENT" },
    { icon: <MdOutlineHourglassEmpty size={40} />, label: "THEN WAIT" },
  ];

  return (
    <div className="flex flex-col bg-primary text-white py-20 px-6 md:px-16 lg:px-40">
      <div className="w-full max-w-3xl md:ml-[10%] mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ONE STOP ONE SHOP
        </h2>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-18">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white text-[#0a1d3a] rounded-lg shadow-md w-32 h-32 sm:w-50 sm:h-36 flex flex-col items-center justify-center gap-2 hover:scale-105 transition"
          >
            {step.icon}
            <p className="text-xs font-semibold">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideShop;
