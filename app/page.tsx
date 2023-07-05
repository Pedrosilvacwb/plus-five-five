import AboutHome from "@/components/AboutHome";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import InstagramSlider from "@/components/InstagramSlider";
import Products from "@/components/Products";
import Promos from "@/components/Promos";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden">
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
