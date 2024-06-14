import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className} mx-auto w-full`}>{children}</div>;
};
