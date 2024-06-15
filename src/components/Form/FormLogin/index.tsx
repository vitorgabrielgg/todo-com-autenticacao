"use client";

import { FormAuthType, useFormAuth, useToken } from "@/hooks";

import { Input } from "../Input";
import { LinkForm } from "../LinkForm";
import { ButtonForm } from "../ButtonForm";

import { loginUser } from "@/services";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const { errors, handleSubmit, register } = useFormAuth();
  const { setToken } = useToken();
  const router = useRouter();

  const login = async (data: FormAuthType) => {
    const { jwtToken, msg } = await loginUser(data);
    if (jwtToken) {
      setToken(jwtToken);
      localStorage.setItem("token", jwtToken);
      router.push("/");
    }
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
