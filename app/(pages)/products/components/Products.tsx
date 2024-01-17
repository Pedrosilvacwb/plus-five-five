import Container from "@/components/Container";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";
import Search from "./Search";

interface ProductsProps {
  products: Product[];
}
const Products = async ({ products }: ProductsProps) => {
  return (
    <div className="my-16">
      <Container>
        <div className="my-16 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-forest">Best Sellers</h2>
          <Search products={products} />
        </div>
        <div className="flex items-center justify-start gap-6 w-full h-full flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              style="bg-sand w-[300px] h-[400px]"
              product={product}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
