import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/logo/ROUND/PNG/_LOGO_ROUND_PLUS_FIFTY_FIVE.png";

import ContactForm from "./ContactForm";
import FooterList from "./FooterList";
import PaymentList from "./PaymentList";

const Footer = () => {
  return (
    <div className="py-16 bg-sand">
      <Container>
        <div className="flex sm:flex-row flex-col items-center pb-8 justify-between border-b-2 border-solid border-tree">
          <Image
            className="border-2 border-solid"
            alt="Logo da +55"
            src={logo}
            width={150}
            height={150}
          />
          <PaymentList />
        </div>
        <div className="py-16 flex sm:flex-row flex-col items-center justify-between gap-16">
          <ContactForm />
          <FooterList />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
