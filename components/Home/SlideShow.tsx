"use client";
import { motion, AnimatePresence } from "framer-motion";
import { instagramPictures } from "@/public/pictures/instagram";
import Image from "next/image";

const SlideShow = () => {
  return (
    <>
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
    </>
  );
};

export default SlideShow;
