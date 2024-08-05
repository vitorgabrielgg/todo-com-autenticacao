import { formAuthType } from "@/@types";
import { useFormAuth } from "@/hooks";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  formSubmit: (data: formAuthType) => void;
}

export const Form = ({ children, formSubmit }: FormProps) => {
  const { handleSubmit } = useFormAuth();

  return <form onSubmit={handleSubmit(formSubmit)}>{children}</form>;
};
