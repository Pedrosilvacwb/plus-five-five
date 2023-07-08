import Container from "@/components/Container";
import React from "react";

const MiddleBanner = () => {
  return (
    <div className="py-16 bg-sand">
      <Container>
        <p className="sm:max-w-[700px] max-w-[90%] mx-auto text-md leading-8 text-black">
          At AromaBean, we understand the importance of starting your day on the
          right note. That's why we meticulously source the finest coffee beans
          from around the world, ensuring each sip is a journey to awaken your
          senses and ignite your spirit.
        </p>
      </Container>
    </div>
  );
};

export default MiddleBanner;
