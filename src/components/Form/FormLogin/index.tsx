"use client";

import { FormAuthType, useFormAuth } from "@/hooks";
import React from "react";
import { Input } from "../Input";
import { LinkForm } from "../LinkForm";
import { ButtonForm } from "../ButtonForm";

export const FormLogin = () => {
  const { errors, handleSubmit, register } = useFormAuth();

  const login = (data: FormAuthType) => {
    console.log(data);
  };
  return (
    <form className="flex flex-col mt-8 gap-6" onSubmit={handleSubmit(login)}>
      <Input
        label="E-mail"
        placeholder="Digite um e-mail"
        name="email"
        type="email"
        register={register}
        error={errors.email}
      />
      <Input
        label="Senha"
        placeholder="Digite uma senha"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />

      <LinkForm text="Registrar-se" href="/register" />

      <ButtonForm text="Entrar" />
    </form>
  );
};
