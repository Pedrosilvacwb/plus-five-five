"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import SecondaryButton from "./SecondaryButton";
import { coffeeProducts } from "@/constants";
import Button from "./Button";
import left from "../public/arrow-left-335-svgrepo-com.svg";
import right from "../public/arrow-right-336-svgrepo-com.svg";
import Image from "next/image";
import SlideShow from "./SlideShow";
import ProductCarrousel from "./ProductCarrousel";
import useMedia from "@/hooks/useMedia";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const Products = () => {
  const [distance, setDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);
  const [moving, setMoving] = useState(332);
  const mobile = useMedia("(max-width: 40rem)");

  const carousel = useRef(null);
  useEffect(() => {
    setMaxDistance(
      carousel?.current?.scrollWidth - carousel?.current?.offsetWidth * 1.2
    );
    if (mobile) {
      setMoving(325);
    } else {
      setMoving(332);
    }
  }, []);

  const handleIncrease = () => {
    if (distance < 0) {
      setDistance((prev) => prev + moving);
    }
  };
  const handleDecrease = () => {
    if (distance >= -maxDistance) {
      setDistance((prev) => prev - moving);
    }
  };
  return (
    <div className="w-full bg-sand py-16">
      <Container>
        <h2 className="font-semibold text-3xl text-center mb-8">
          Our Products
        </h2>
        <div className="flex items-center justify-between mb-16">
          <SecondaryButton style="bg-white border-none text-sm">
            Viewl All
          </SecondaryButton>
          <div className="flex items-center gap-4">
            <Button onClick={handleIncrease}>
              <Image width={15} height={15} src={left} alt="Arrow left" />
            </Button>
            <Button onClick={handleDecrease}>
              {" "}
              <Image width={15} height={15} src={right} alt="Arrow right" />
            </Button>
          </div>
        </div>

        <motion.div ref={carousel} className="overflow-x-hidden">
          <motion.div
            animate={{ x: distance }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between gap-8 "
          >
            {coffeeProducts.map(({ id, name, price, src }) => (
              <ProductCard key={id} name={name} price={price} src={src} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Products;
