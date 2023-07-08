import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { coffeeProducts } from "@/constants";
import React from "react";
import Search from "./Search";

const Products = () => {
  return (
    <div className="my-16">
      <Container>
        <div className="my-16 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-forest">Best Sellers</h2>
          <Search />
        </div>
        <div className="flex items-center justify-start gap-6 w-full h-full flex-wrap mx-auto">
          {coffeeProducts.map(({ name, price, src, id }) => (
            <ProductCard
              id={id}
              style="bg-sand max-w-[300px] h-[400px] mx-auto"
              name={name}
              price={price}
              src={src}
              key={id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
