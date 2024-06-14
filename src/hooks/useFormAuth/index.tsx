"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formAuthSchema = z.object({
  name: z.string().min(1, "Nome obrigatório").nullish(),
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(1, "Senha obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export type FormAuthType = z.infer<typeof formAuthSchema>;

export const useFormAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAuthType>({
    resolver: zodResolver(formAuthSchema),
  });

  return {
    errors,
    register,
    handleSubmit,
  };
};
