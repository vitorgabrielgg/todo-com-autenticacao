"use client";

import { useCallback, useState } from "react";
import { useToken } from "../useToken";
import { UserType } from "@/@types";
import { getUserInfo } from "@/services";

export const useUser = () => {
  const { token, setToken } = useToken();
  const [user, setUser] = useState<UserType>();

  const getUser = useCallback(async () => {
    const { userWithoutPassword } = await getUserInfo(token);
    setUser(userWithoutPassword);
  }, [token]);

  return {
    user,
    getUser,
  };
};
