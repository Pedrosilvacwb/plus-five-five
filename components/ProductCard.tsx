import React from "react";
import { coffeeProducts } from "../constants";
import Image, { StaticImageData } from "next/image";
import cafe1 from "../public/pictures/cafe1.jpg";
import SecondaryButton from "./SecondaryButton";
import Button from "./Button";

interface ProductCardProps {
  name: string;
  price: number;
  src: StaticImageData;
}

const ProductCard = ({ name, price, src }: ProductCardProps) => {
  return (
    <div className="sm:min-w-[300px] min-w-[320px]  h-[400px] bg-white rounded-[32px] p-5 flex flex-col justify-between gap-2">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="font-bold text-lg text-tree">AUS{price}</p>
      <div className="h-[160px] rounded-[16px]">
        <Image
          className="max-w-[100%] h-full rounded-[8px] object-cover"
          src={src}
          alt={name}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button style="py-1 px-1 text-sm">Buy now</Button>
        <SecondaryButton style="py-1 px-[6px] text-sm">
          Learn More
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ProductCard;
