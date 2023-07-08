import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden relative">
      <Hero />
      <Products />
    </div>
  );
};

export default page;
