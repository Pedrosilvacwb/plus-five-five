"use client";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";

import React, { useEffect, useState } from "react";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch("http://localhost:3000/products");
      const json = await request.json();
      setProducts(json);
    };

    getProducts();
  }, []);
  return (
    <div className="my-16">
      <Container>
        <div className="my-16 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-forest">Best Sellers</h2>
          <Search />
        </div>
        <div className="flex items-center justify-start gap-6 w-full h-full flex-wrap">
          {products.map(({ name, price, imagePath, id }) => (
            <ProductCard
              id={id}
              style="bg-sand max-w-[300px] h-[400px]"
              name={name}
              price={price}
              src={imagePath}
              key={id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
