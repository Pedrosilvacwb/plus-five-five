import Image from "next/image";
import Link from "next/link";
import React from "react";
import instagram from "../public/instagram-svgrepo-com.svg";
import facebook from "../public/facebook-svgrepo-com.svg";
import twitter from "../public/twitter-svgrepo-com.svg";

const FooterList = () => {
  return (
    <div className="flex-1">
      <div className="flex items-start justify-between mb-[64px]">
        <div className="flex flex-col items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-forest mb-4">Pages</h2>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">All products</Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-forest mb-4">Social</h2>
          <div className="flex items-center justify-between gap-2">
            <Image width={32} height={32} alt="social logo" src={instagram} />
            <Image width={25} height={32} alt="social logo" src={facebook} />
            <Image width={30} height={32} alt="social logo" src={twitter} />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-8 sm:gap-0 mb-[64px]">
        <div>
          <h2 className="text-xl font-semibold text-forest mb-4">Phone</h2>
          <span>0000-000-000</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-forest mb-4">Email</h2>
          <span>Email@mail.com</span>
        </div>
      </div>
    </div>
  );
};

export default FooterList;
