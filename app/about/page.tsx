import React from "react";
import Hero from "./components/Hero";
import MiddleBanner from "./components/MiddleBanner";
import About from "./components/About";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden ">
      <Hero />
      <MiddleBanner />
      <About />
    </div>
  );
};

export default page;
