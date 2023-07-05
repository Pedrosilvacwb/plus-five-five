import Image from "next/image";
import React from "react";
import visa from "../public/visa-classic-svgrepo-com.svg";
import pay from "../public/paypal-140-svgrepo-com.svg";
import google from "../public/googlepay-svgrepo-com.svg";
import apple from "../public/applepay-svgrepo-com.svg";
import amex from "../public/american-express-svgrepo-com.svg";
import master from "../public/mastercard-svgrepo-com.svg";

const PaymentList = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Image width={20} height={24} src={pay} alt="payment method" />
      <Image width={28} height={24} src={master} alt="payment method" />
      <Image width={28} height={24} src={apple} alt="payment method" />
      <Image width={28} height={24} src={amex} alt="payment method" />
      <Image width={28} height={24} src={visa} alt="payment method" />
      <Image width={28} height={24} src={google} alt="payment method" />
    </div>
  );
};

export default PaymentList;
