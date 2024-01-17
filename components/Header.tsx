"use client";

import logo from "@/public/logo/ROUND/PNG/_LOGO_ROUND_PLUS_FIFTY_FIVE.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="fixed top-0 w-full  z-10 bg-white ">
      <div className="hidden md:flex items-center justify-between max-w-[80%] mx-auto">
        <Link href="/">
          <Image
            className="border-2 border-solid"
            alt="Logo da +55"
            src={logo}
            width={90}
            height={90}
          />
        </Link>
        <nav className="flex items-center gap-x-8 text-md">
          <Link href="/products">Products</Link>
          <Link href="/about-us">About us</Link>
        </nav>
        <Button>Contact us</Button>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
