import React, { useState } from "react";
import menu from "../public/menu.svg";
import close from "../public/close.svg";
import { navLinks } from "@/constants/";
import logo from "@/public/logo/ROUND/PNG/_LOGO_ROUND_PLUS_FIFTY_FIVE.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden flex flex-1 justify-between items-center h-full  py-4 px-4">
      <Image alt="Logo da +55" src={logo} width={80} height={80} />
      <Image
        src={!toggle ? menu : close}
        alt="menu"
        width={30}
        height={30}
        className="object-contain cursor-pointer border-2  h-full"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-white absolute top-[100px] right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl border-2 border-solid border-forest`}
      >
        <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
          <li className="text-center  w-full py-4">
            <Link onClick={() => setToggle(false)} href="/products">
              Products
            </Link>
          </li>
          <li className="text-center  w-full py-4">
            <Link onClick={() => setToggle(false)} href="/about">
              About us
            </Link>
          </li>
          <li className="mt-4">
            <Button>Contact us</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
