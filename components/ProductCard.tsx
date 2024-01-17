import productPicture from "@/public/pictures/product/Product.jpg";
import Image from "next/image";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  style: string;
}

const ProductCard = ({ product, style }: ProductCardProps) => {
  return (
    <div
      className={`rounded-[32px] p-5 flex flex-col justify-between gap-2 ${style}`}
    >
      <h3 className="font-semibold text-xl">{product.name}</h3>
      <p className="font-bold text-lg text-tree">AUS{product.price}</p>
      <div className="h-[160px] rounded-[16px]">
        <Image
          className="max-w-[100%] h-full rounded-[8px] object-cover"
          src={productPicture}
          alt={product.name}
          width={250}
          height={25}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button style="py-1 px-1 text-sm">Buy now</Button>
        <SecondaryButton
          link={`/products/${product._id}`}
          style="py-1 px-[6px] text-sm"
        >
          Learn More
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ProductCard;
