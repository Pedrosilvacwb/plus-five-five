import { getProducts } from "@/lib/actions/product.action";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

const page = async () => {
  const products = await getProducts();
  return (
    <div className="w-full  max-w-[100vw] overflow-x-hidden relative">
      <Hero />
      <Products products={products} />
      <Features />
      <Testimonials />
    </div>
  );
};

export default page;
