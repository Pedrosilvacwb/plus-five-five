import React from "react";
import Container from "../Container";
import pic from "../../public/pictures/nathan-dumlao-XOhI_kW_TaM-unsplash.jpg";
import pic2 from "../../public/pictures/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";
import pic3 from "../../public/pictures/mike-kenneally-TD4DBagg2wE-unsplash.jpg";
import Image from "next/image";

const Promos = () => {
  return (
    <div className="my-16">
      <Container>
        <div className="flex sm:flex-row flex-col rounded-[32px]">
          <div className="flex-1 relative">
            <Image
              className="sm:h-[480px] h-[250px] object-cover sm:rounded-s-[32px] rounded-t-[32px] sm:rounded-r-none"
              src={pic}
              alt="promo 1"
            />
            <span className="absolute text-2xl  sm:text-sand text-tree bottom-16 left-8 max-w-[300px] font-semibold">
              Wake up with coffee's aromatic bliss
            </span>
          </div>
          <div className="flex-1 relative">
            <Image
              className="sm:h-[480px] h-[250px] object-cover"
              src={pic2}
              alt="promo 2"
            />
            <span className="absolute text-2xl text-sand sm:text-forest top-12 left-8 max-w-[250px] font-semibold">
              Coffee: a flavorful journey in every cup.
            </span>
          </div>
          <div className="flex-1 relative">
            <Image
              className="sm:h-[480px] h-[250px] object-cover sm:rounded-e-[32px] rounded-b-[32px] sm:rounded-l-none"
              src={pic3}
              alt="promo 3"
            />
            <span className="absolute text-2xl text-sand bottom-16 left-8 max-w-[300px] font-semibold">
              Savor the boldness of coffee's essence.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promos;
