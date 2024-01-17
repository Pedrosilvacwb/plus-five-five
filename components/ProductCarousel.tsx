"use client";
import useMedia from "@/hooks/useMedia";
import { Product } from "@/types/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const isBig = useMedia("(min-width: 680px)");
  return (
    <div className="flex flex-col">
      <div>
        <Swiper
          spaceBetween={25}
          slidesPerView={isBig ? 2.7 : 1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard
                style="bg-sand w-[300px] h-[400px]"
                product={product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
