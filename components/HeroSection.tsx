"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import arrow from "../public/arrow-right-svgrepo-com.svg";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import { useScroll, useTransform, motion } from "framer-motion";

const HeroSection = () => {
  let { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrollY = window.scrollY;

      const percentage = (scrollY / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        moving: { scale: 1.2 },
      }}
      initial="initial"
      animate={scrollPercentage > 0 ? "moving" : ""}
      transition={{ duration: 0.3, delay: 0 }}
      className="mt-[120px] w-[90%] md:max-h-[70vh] h-[70vh] rounded-[64px] mx-auto relative overflow-hidden"
    >
      <video
        style={{
          objectFit: "cover",
          opacity: 0.5,
          height: "100%",
          width: "100%",
        }}
        autoPlay
        muted
        loop
      >
        <source
          src="/video/mm003942-coffee-beans-032-1080p-a057-c033-0331oq-001_iEBWvpb1.mp4"
          type="video/mp4"
        />
      </video>
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        <motion.div style={{ y }}>
          <h1 className="text-3xl md:text-6xl text-center max-w-[750px] text-forest text-black opacity-100 font-semibold px-4">
            Discover Brazil's rich flavors with our imported coffee.
          </h1>
          <div className="mt-9 flex sm:flex-row flex-col items-center justify-center gap-4">
            <Button>
              Shop now{" "}
              <Image
                className="ml-2"
                width={25}
                height={25}
                src={arrow}
                alt="Right arrow"
              />
            </Button>
            <SecondaryButton>Learn more</SecondaryButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
