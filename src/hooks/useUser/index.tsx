"use client";

import { useCallback, useState } from "react";
import { useToken } from "../useToken";
import { UserType } from "@/@types";
import { getUserInfo } from "@/services";
import { useRouter } from "next/navigation";

export const useUser = () => {
  const { token, setToken } = useToken();
  const [user, setUser] = useState<UserType>();

  const router = useRouter();

  const getUser = useCallback(async () => {
    const { userWithoutPassword } = await getUserInfo(token);
    setUser(userWithoutPassword);
  }, [token]);

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return {
    user,
    getUser,
    logoutUser,
  };
};
