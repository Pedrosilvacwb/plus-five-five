import Container from "@/components/Container";

import ProductCarousel from "@/components/ProductCarousel";
import React from "react";

const OtherProducts = () => {
  return (
    <div className="py-32">
      <Container>
        <h2 className="font-semibold text-3xl text-center mb-8">
          Related products
        </h2>
        <ProductCarousel cardStyles="sm:min-w-[300px] min-w-[320px]  h-[400px] bg-sand " />
      </Container>
    </div>
  );
};

export default OtherProducts;
