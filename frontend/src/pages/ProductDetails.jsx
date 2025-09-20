// src/pages/ProductDetails.jsx
import React from "react";
import { products } from "../api/products";

const ProductDetails = () => {
  const product = products[0];

  return (
    <div className="max-w-6xl h-screen pt-50 mx-auto p-6 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-2">{product.price}</p>

        <p className="text-sm text-gray-600 mb-4">
          Brand: <span className="font-semibold">{product.brand}</span>
        </p>

        <p className="text-sm text-gray-600 mb-4">
          Category: <span className="font-semibold">{product.category}</span>
        </p>

        {/* Quantity Selector (static, no logic) */}
        <div className="flex items-center gap-2 mb-4">
          <button className="w-8 h-8 bg-blue-900 text-white text-lg font-semibold rounded">
            -
          </button>
          <span className="w-10 text-center">1</span>
          <button className="w-8 h-8 bg-blue-900 text-white text-lg font-semibold rounded">
            +
          </button>
        </div>

        {/* Add to Cart Button (static) */}
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
          Add to cart
        </button>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-sm font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-600">
            This is a static description for {product.name}. You can customize
            this text or pull in a description field from your product data if
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
