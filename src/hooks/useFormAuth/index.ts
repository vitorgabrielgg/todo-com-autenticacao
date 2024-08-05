import { formAuthType } from "@/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  return {
    errors,
    handleSubmit,
    register,
  };
};
