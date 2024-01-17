import Hero from "./components/Hero";

import About from "./components/About";
import AboutHome from "./components/AboutHome";
import InstagramSlider from "./components/InstagramSlider";
import Promos from "./components/Promos";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden ">
      <Hero />
      <AboutHome />
      <About />
      <Promos />
      <InstagramSlider />
    </div>
  );
};

export default page;
