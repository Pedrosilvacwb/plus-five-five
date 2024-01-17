import Container from "@/components/Container";
import { getProducts } from "@/lib/actions/product.action";

import ProductCarousel from "@/components/ProductCarousel";

const OtherProducts = async () => {
  const products = await getProducts();
  return (
    <div className="py-32">
      <Container>
        <h2 className="font-semibold text-3xl text-center mb-8">
          Related products
        </h2>

        <ProductCarousel products={products} />
      </Container>
    </div>
  );
};

export default OtherProducts;
