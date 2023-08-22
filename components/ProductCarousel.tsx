"use client";

import left from "../public/arrow-left-335-svgrepo-com.svg";
import right from "../public/arrow-right-336-svgrepo-com.svg";

import useMedia from "@/hooks/useMedia";
import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Button from "./Button";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import { useRouter } from "next/navigation";

interface ProductCarouselProps {
  cardStyles: string;
}

const ProductCarousel = ({ cardStyles }: ProductCarouselProps) => {
  const [products, setProducts] = useState([]);
  const [distance, setDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);
  const [moving, setMoving] = useState(332);
  const mobile = useMedia("(max-width: 400px)");

  const router = useRouter();
  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch("http://localhost:3000/products");
      const json = await request.json();
      setProducts(json);
    };

    getProducts();
  }, []);

  useEffect(() => {
    setMaxDistance(
      carousel?.current?.scrollWidth! - carousel?.current?.offsetWidth! * 1.2
    );
    if (mobile) {
      setMoving(332);
    } else {
      setMoving(332);
    }
  }, []);

  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setMaxDistance(
      carousel?.current?.scrollWidth! - carousel?.current?.offsetWidth! * 1.2
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
    if (distance > -maxDistance) {
      setDistance((prev) => prev - moving);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-16">
        <SecondaryButton link="/products" style="bg-white border-none text-sm">
          View All
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
          {products.map(({ id, name, price, imagePath }) => (
            <ProductCard
              id={id}
              style={cardStyles}
              key={id}
              name={name}
              price={price}
              src={imagePath}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProductCarousel;
