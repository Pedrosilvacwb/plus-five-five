import Image from "next/image";
import React from "react";
import hero from "../../../public/pictures/hero-about.jpg";
import Parallax from "../../../components/Parallax";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={hero}
        alt="Picture Hero About us"
        className="w-full h-[90vh] object-cover brightness-[50%]"
      />
      <Parallax
        text=" Our mission is to provide you with high-quality, flavorful coffee
          products that enhance your natural vitality and help you feel
          invigorated from the inside out."
        title="Welcome to +55, where we believe that true energy comes from within."
      />
    </div>
  );
};

export default Hero;
