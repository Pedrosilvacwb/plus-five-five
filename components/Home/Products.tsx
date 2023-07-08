import React from "react";
import Container from "../Container";
import SecondaryButton from "../SecondaryButton";
import ProductCarousel from "../ProductCarousel";

const Products = () => {
  return (
    <div className="w-full bg-sand py-16">
      <Container>
        <h2 className="font-semibold text-3xl text-center mb-8">
          Our Products
        </h2>

        <ProductCarousel cardStyles="sm:min-w-[300px] min-w-[320px]  h-[400px] bg-white " />
      </Container>
    </div>
  );
};

export default Products;
