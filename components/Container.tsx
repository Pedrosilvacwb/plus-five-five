import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[960px] my-0 mx-auto">
      {children}
    </div>
  );
};

export default Container;
