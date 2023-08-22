"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PaymentList from "@/components/PaymentList";

import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import arrow from "../../../../public/arrow-right-svgrepo-com.svg";

const ProductParallax = () => {
  const [product, setProduct] = useState<any>([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch(`http://localhost:3000/products/${id}`);

      const json = await request.json();
      setProduct(json);
    };

    getProducts();
  }, []);
  return (
    <div className="bg-sand sm:py-48 py-32">
      <Container>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-[80px]">
          <div className="max-w-[480px]">
            <Image
              className="w-full h-[520px] object-cover rounded-[32px]"
              alt={product.name}
              src={product.imagePath}
              width={500}
              height={600}
            />
          </div>
          <div className="h-[520px] flex flex-col justify-between">
            <h2 className="text-4xl font-semibold text-forest">
              {product.name}
            </h2>
            <p className="text-lg max-w-[400px]">{product.description}</p>
            <span className="text-3xl font-semibold text-brick">
              AUD {product.price}
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
