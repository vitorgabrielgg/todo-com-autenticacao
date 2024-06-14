import { Container, FormLogin } from "@/components";
import React from "react";

const LoginPage = () => {
  return (
    <main className="w-full">
      <Container className="max-w-lg px-5">
        <h1 className="text-white max-[374px]:text-4xl text-5xl md:text-6xl font-bold text-center">
          Login
        </h1>
        <FormLogin />
      </Container>
    </main>
  );
};

export default LoginPage;
