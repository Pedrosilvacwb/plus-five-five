import React from "react";
import { ButtonProps } from "./Button";

const SecondaryButton = ({ children, style }: ButtonProps) => {
  return (
    <button
      className={`bg-transparent text-black-100 border-2 border-solid border-black-100 py-3 px-8 rounded-3xl font-bold flex items-center justify-center ${style}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
