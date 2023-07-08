import React from "react";
import ProductParallax from "./components/ProductParallax";
import OtherProducts from "./components/OtherProducts";
import Shipping from "./components/Shipping";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden relative">
      <ProductParallax />
      <OtherProducts />
      <Shipping />
    </div>
  );
};

export default page;
