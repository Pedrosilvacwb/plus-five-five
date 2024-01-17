import HeroCanvas from "@/components/Home/HeroSection";
import Overlay from "@/components/Home/Overlay";

const page = () => {
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden ">
      <HeroCanvas />
      <Overlay />
    </div>
  );
};

export default page;
