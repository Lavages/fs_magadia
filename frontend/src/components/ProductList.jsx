import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/api_url";
import Loading from "./Loading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation().pathname;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}products/`);
        setProducts(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <Loading />;

  const displayedProducts = location === "/" ? products.slice(0, 6) : products;

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <h2 className="text-center text-3xl font-bold text-primary mb-12 tracking-wide">
        PRODUCT LIST
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <Link to={`/products/${product.product_id}`} className="block p-6">
              <img
                src={`${BASE_URL}${product.image}`}
                alt={`${BASE_URL}${product.image}`}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.product_name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{product.brand}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-md font-bold text-primary">
                  ₱{product.product_price}
                </span>
                <button className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary-hover transition">
                  Buy
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {location === "/" && (
        <div className="flex justify-center mt-12">
          <Link to="/products">
            <button className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-hover transition">
              View all products
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductList;
