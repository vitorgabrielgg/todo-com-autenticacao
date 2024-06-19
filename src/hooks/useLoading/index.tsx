import { LoadingContext } from "@/contexts";
import { useContext, useState } from "react";

export const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  return {
    loading,
    setLoading,
  };
};
