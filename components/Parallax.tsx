"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  title: string;
  text: string;
}

const Parallax = ({ title, text }: ParallaxProps) => {
  let { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ y }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <motion.div style={{ y }}>
        <h1 className="text-3xl md:text-7xl  max-w-[900px] mx-auto text-sand text-black opacity-100 font-semibold px-4">
          {title}
        </h1>
        <p className="sm:text-xl text-lg text-sand sm:max-w-[900px] max-w-[90%] mx-auto font-semibold mt-8">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
