"use client";
import useMedia from "@/hooks/useMedia";
import arrow from "@/public/arrow-right-svgrepo-com.svg";
import logo from "@/public/logo/ROUND/PNG/_LOGO_ROUND_PLUS_FIFTY_FIVE.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import SecondaryButton from "../SecondaryButton";
const Overlay = () => {
  const isMobile = useMedia("(max-width: 400px)");
  const { push } = useRouter();

  const handleProductsRedirect = () => push("/products");
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col`}
    >
      <Image
        className="ml-2"
        width={isMobile ? 150 : 250}
        height={isMobile ? 150 : 250}
        src={logo}
        alt="Right arrow"
      />
      <h1 className="text-4xl md:text-6xl text-center max-w-[750px] text-forest text-black opacity-100 font-semibold px-4">
        Discover Brazil's rich flavors with our imported coffee.
      </h1>
      <div className="mt-9 flex sm:flex-row flex-col items-center justify-center gap-4">
        <Button onClick={handleProductsRedirect}>
          Shop now{" "}
          <Image
            className="ml-2"
            width={25}
            height={25}
            src={arrow}
            alt="Right arrow"
          />
        </Button>
        <SecondaryButton link="about-us">Learn more</SecondaryButton>
      </div>
    </div>
  );
};

export default Overlay;
