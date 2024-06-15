import { useState } from "react";

export const useToken = () => {
  const localToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [token, setToken] = useState(localToken ? localToken : "");

  return {
    token,
    setToken,
  };
};
