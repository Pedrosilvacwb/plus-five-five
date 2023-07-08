import Image from "next/image";
import React from "react";
import hero from "../../../public/pictures/instagram/nathan-dumlao-ikU3J1nr52w-unsplash.jpg";
import Parallax from "../../../components/Parallax";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={hero}
        alt="Picture Hero About us"
        className="w-full h-[70vh] object-cover brightness-[50%]"
      />
      <Parallax
        text="Experience the perfect balance of taste, quality, and passion with Plus Five Five, because life is too short for mediocre coffee."
        title="Our products catalogue"
      />
    </div>
  );
};

export default Hero;
