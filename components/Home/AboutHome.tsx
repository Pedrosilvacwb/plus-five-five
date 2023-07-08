import React from "react";
import Container from "../Container";
import Image from "next/image";
import coffe from "../../public/pictures/dan-smedley-RkicYaoaa-E-unsplash.jpg";
import Button from "../Button";
import arrow from "../../public/arrow-right-svgrepo-com.svg";

const AboutHome = () => {
  return (
    <Container>
      <div className="py-[180px] w-full flex flex-col md:flex-row items-center justify-center gap-16 h-full overflow-hidden">
        <div>
          <Image
            src={coffe}
            alt="Foto de pacote de café"
            className="rounded-3xl w-full min-w-[300px] h-[400px]"
          />
        </div>
        <div className="max-w-[600px] flex flex-col items-start justify-stretch  h-full gap-8">
          <h2 className="md:text-3xl text-2xl font-semibold md:mb-8">
            Unlocking the Craft of Coffee Roasting: Nurturing Green Beans into
            Perfectly Brewed Delights
          </h2>
          <p className="md:text-xl text-lg leading-7">
            At our Brazilian Imported Coffees website, we take immense pride in
            bringing you the finest coffees from the captivating landscapes of
            Brazil. With a long-standing tradition of coffee cultivation and a
            commitment to exceptional quality, Brazil has earned its reputation
            as one of the world's premier coffee producers.
          </p>
          <Button>
            Read More{" "}
            <Image
              className="ml-2"
              width={25}
              height={25}
              src={arrow}
              alt="Right arrow"
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutHome;
