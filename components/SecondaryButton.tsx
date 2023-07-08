"use client";
import React from "react";
import { ButtonProps } from "./Button";
import { useRouter } from "next/navigation";

const SecondaryButton = ({ children, style, link }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        link && router.push(link as string);
      }}
      className={`bg-transparent text-black-100 hover:bg-black-100 transition-all hover:text-white border-2 border-solid border-black-100 py-3 px-8 rounded-3xl font-bold flex items-center justify-center ${style}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
