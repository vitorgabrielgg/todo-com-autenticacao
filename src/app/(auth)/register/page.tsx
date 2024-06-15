"use client";

import { Container, FormRegister } from "@/components";
import { useToken } from "@/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegisterPage = () => {
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
      {isClient && (
        <div className="w-full">
          <Container className="max-w-lg px-5">
            <h1 className="text-white max-[374px]:text-4xl text-5xl md:text-6xl font-bold text-center">
              Registrar-se
            </h1>
            <FormRegister />
          </Container>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
