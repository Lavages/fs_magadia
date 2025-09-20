import React from "react";
import Hero from "../components/Hero";
import GuideShop from "../components/GuideShop";
import ProductList from "../components/ProductList";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <div>
      <Hero />
      <GuideShop />
      <ProductList />
      <Partner />
    </div>
  );
};

export default Home;
