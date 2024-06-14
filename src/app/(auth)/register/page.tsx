import { Container, FormRegister } from "@/components";
import React from "react";

const RegisterPage = () => {
  return (
    <main className="w-full">
      <Container className="max-w-lg px-5">
        <h1 className="text-white max-[374px]:text-4xl text-5xl md:text-6xl font-bold text-center">
          Registrar-se
        </h1>
        <FormRegister />
      </Container>
    </main>
  );
};

export default RegisterPage;
