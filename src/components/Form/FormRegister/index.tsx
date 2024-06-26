"use client";

import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { LinkForm } from "../LinkForm";
import { useFormAuth, useLoading, useUser } from "@/hooks";
import { LoadingComponent } from "@/components/Loading/LoadingComponent";

export const FormRegister = () => {
  const { errors, register, handleSubmit } = useFormAuth();
  const { loading } = useLoading();
  const { registerUser } = useUser();

  return (
    <form
      className="flex flex-col mt-8 gap-6"
      onSubmit={handleSubmit(registerUser)}
    >
      <Input
        label="Nome"
        placeholder="Digite um nome"
        name="name"
        type="text"
        register={register}
        error={errors.name}
      />
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

      <LinkForm text="Login" href="/login" />

      <ButtonForm>
        {loading ? <LoadingComponent className="text-2xl" /> : "Registrar"}
      </ButtonForm>
    </form>
  );
};
