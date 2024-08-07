"use client";

import { FieldInput } from "../FieldInput";
import { LinkForm } from "../LinkForm";
import { Button } from "@/components/ui/button";
import { useFormAuth } from "@/hooks";

export const RegisterForm = () => {
  const { errors, register, registerSubmit, handleSubmit } = useFormAuth();

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit(registerSubmit)}>
      <FieldInput
        label="Nome"
        name="name"
        placeholder="Digite o seu nome"
        type="text"
        register={register}
        error={errors.name}
      />
      <FieldInput
        label="Email"
        name="email"
        placeholder="Digite o seu email"
        type="email"
        register={register}
        error={errors.email}
      />
      <FieldInput
        label="Senha"
        name="password"
        placeholder="Digite a sua senha"
        type="password"
        register={register}
        error={errors.password}
      />

      <LinkForm text="Login" href="/login" />
      <Button
        type="submit"
        className="w-full bg-blue-900 h-14 font-semibold text-lg hover:bg-blue-900/80 transition-all"
      >
        Registrar
      </Button>
    </form>
  );
};