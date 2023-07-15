"use client";

import left from "../public/arrow-left-335-svgrepo-com.svg";
import right from "../public/arrow-right-336-svgrepo-com.svg";

import useMedia from "@/hooks/useMedia";
import React, { useEffect, useRef, useState } from "react";
import { coffeeProducts } from "@/constants";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Button from "./Button";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

interface ProductCarouselProps {
  cardStyles: string;
}

const ProductCarousel = ({ cardStyles }: ProductCarouselProps) => {
  const [distance, setDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);
  const [moving, setMoving] = useState(332);
  const mobile = useMedia("(max-width: 400px)");

  const carousel = useRef(null);
  useEffect(() => {
    setMaxDistance(
      carousel?.current?.scrollWidth - carousel?.current?.offsetWidth * 1.2
    );
    if (mobile) {
      setMoving(332);
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
    <>
      <div className="flex items-center justify-between mb-16">
        <SecondaryButton style="bg-white border-none text-sm">
          Viewl All
        </SecondaryButton>
        <div className="flex items-center gap-4 ">
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
            <ProductCard
              id={id}
              style={cardStyles}
              key={id}
              name={name}
              price={price}
              src={src}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProductCarousel;
