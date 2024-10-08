"use client";

import { formAuthType } from "@/@types";
import { registerUser } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../useToast";

export const formAuthSchema = z.object({
  name: z.string().min(1, "Por favor, insira um nome").optional(),
  email: z
    .string()
    .min(1, "Por favor, insira um email")
    .email("Por favor, insira um email válido"),
  password: z
    .string()
    .min(1, "Por favor, insira uma senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export const useFormAuth = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<formAuthType>({
    resolver: zodResolver(formAuthSchema),
  });

  const { handleToast } = useToast();

  const router = useRouter();

  const registerSubmit = async (data: formAuthType) => {
    const { message } = await registerUser(data);

    handleToast(message.status, message.text);

    if (message.status === "success") {
      router.push("/login");
    }
  };

  const loginSubmit = async (data: formAuthType) => {
    const res = await signIn("credentials", { ...data, redirect: false });

    if (!res?.error) {
      router.push("/");
    } else {
      handleToast("error", res.error);
    }
  };

  return {
    errors,
    handleSubmit,
    loginSubmit,
    register,
    registerSubmit,
  };
};
