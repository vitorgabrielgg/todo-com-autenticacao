"use client";

import { useCallback, useState } from "react";
import { useToken } from "../useToken";
import { UserType } from "@/@types";
import { createUser, getUserInfo, loginUser } from "@/services";
import { useRouter } from "next/navigation";
import { FormAuthType } from "../useFormAuth";
import { useLoading } from "../useLoading";

export const useUser = () => {
  const { token, setToken } = useToken();
  const { setLoading } = useLoading();
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

  const login = async (data: FormAuthType) => {
    try {
      setLoading(true);
      const { jwtToken, msg } = await loginUser(data);
      if (jwtToken) {
        setToken(jwtToken);
        localStorage.setItem("token", jwtToken);
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data: FormAuthType) => {
    try {
      setLoading(true);

      const { msg } = await createUser(data);
      if (msg.type === "success") {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    getUser,
    logoutUser,
    login,
    registerUser,
  };
};
