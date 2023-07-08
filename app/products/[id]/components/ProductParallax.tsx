"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PaymentList from "@/components/PaymentList";
import { coffeeProducts } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import arrow from "../../../../public/arrow-right-svgrepo-com.svg";

interface ProuctProps {
  id: number;
  name: string;
  price: number;
  description: string;
  src: StaticImageData;
}

const ProductParallax = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProuctProps[]>(coffeeProducts);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      setSelectedProduct((prev) => prev.filter((prod) => prod.id === +id));
    }
  }, []);

  return (
    <div className="bg-sand sm:py-48 py-32">
      <Container>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-[80px]">
          <div className="max-w-[480px]">
            <Image
              className="w-full h-[520px] object-cover rounded-[32px]"
              alt={selectedProduct[0].name}
              src={selectedProduct[0].src}
            />
          </div>
          <div className="h-[520px] flex flex-col justify-between">
            <h2 className="text-4xl font-semibold text-forest">
              {selectedProduct[0].name}
            </h2>
            <p className="text-lg max-w-[400px]">
              {selectedProduct[0].description}
            </p>
            <span className="text-3xl font-semibold text-brick">
              AUD {selectedProduct[0].price}
            </span>
            <Button style="max-w-[200px]">
              Buy now{" "}
              <Image
                className="ml-4"
                alt="arrow"
                width={30}
                height={30}
                src={arrow}
              />
            </Button>
            <PaymentList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductParallax;
