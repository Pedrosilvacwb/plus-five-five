import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  style?: string;
  onClick?: () => void;
  link?: string;
}

const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-forest hover:bg-land transition-all  text-white py-3 px-8 rounded-3xl font-bold flex items-center justify-center ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
