import { LoadingProvider } from "@/contexts";
import React, { ReactNode } from "react";

export const LoadingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};
