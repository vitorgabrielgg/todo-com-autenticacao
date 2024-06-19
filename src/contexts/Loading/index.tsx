"use client";

import { ReactNode, createContext, useState } from "react";

interface ILoadingContext {
  loading: boolean;
  setLoading: (data: boolean) => void;
}

const initialValue = {
  loading: false,
  setLoading: () => {},
};

export const LoadingContext = createContext<ILoadingContext>(initialValue);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(initialValue.loading);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
