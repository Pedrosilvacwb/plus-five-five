import AboutHome from "@/components/Home/AboutHome";
import Features from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import InstagramSlider from "@/components/Home/InstagramSlider";
import Products from "@/components/Home/Products";
import Promos from "@/components/Home/Promos";
import Testimonials from "@/components/Home/Testimonials";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden ">
      <HeroSection />
      <AboutHome />
      <Products />
      <Testimonials />
      <Promos />
      <Features />
      <InstagramSlider />
    </div>
  );
};

export default page;
