"use client";

import { useFormAuth, useLoading, useUser } from "@/hooks";

import { Input } from "../Input";
import { LinkForm } from "../LinkForm";
import { ButtonForm } from "../ButtonForm";
import { LoadingComponent } from "@/components/Loading/LoadingComponent";

export const FormLogin = () => {
  const { errors, handleSubmit, register } = useFormAuth();
  const { loading } = useLoading();
  const { login } = useUser();

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

      <ButtonForm>
        {loading ? <LoadingComponent className="text-2xl" /> : "Entrar"}
      </ButtonForm>
    </form>
  );
};
