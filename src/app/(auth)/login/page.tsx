"use client";

import { Container, FormLogin } from "@/components";
import { useToken } from "@/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const { token } = useToken();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (token) {
    router.push("/");
    return null;
  }

  return (
    <>
      <title>Login</title>;
      {isClient && (
        <div className="w-full">
          <Container className="max-w-lg px-5">
            <h1 className="text-white max-[374px]:text-4xl text-5xl md:text-6xl font-bold text-center">
              Login
            </h1>
            <FormLogin />
          </Container>
        </div>
      )}
    </>
  );
};

export default LoginPage;
