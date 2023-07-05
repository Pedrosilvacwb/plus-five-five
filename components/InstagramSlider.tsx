"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { instagramPictures } from "@/public/pictures/instagram";
import Image from "next/image";
import Button from "./Button";

const InstagramSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="py-16">
      <h2 className="text-3xl text-forest text-center mb-16 font-semibold">
        Our Instagram
      </h2>
      <div className="overflow-x-hidden">
        <div className="flex items-center justify-between gap-4 relative overflow-x-hidden slider">
          {instagramPictures.map((image, index) => (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: -375 * 10 }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              key={index}
              className="min-w-[360px] h-[300px] flex-1"
            >
              <Image
                className="rounded-[32px] w-full h-full object-cover"
                src={image}
                alt="Ticker Image"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button>
          <span className="text-sm text-white font-semibold">
            Follow us @instagram
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InstagramSlider;
