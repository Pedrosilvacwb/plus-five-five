import OtherProducts from "./components/OtherProducts";
import ProductParallax from "./components/ProductParallax";
import Shipping from "./components/Shipping";

const page = ({ params }: any) => {
  const { id } = params;

  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden relative">
      <ProductParallax id={id as string} />
      <OtherProducts />
      <Shipping />
    </div>
  );
};

export default page;
