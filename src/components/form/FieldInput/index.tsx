import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ErrorFieldInput } from "../ErrorFieldInput";

interface FieldInputProps {
  label: string;
  name: "name" | "email" | "password";
  type: string;
  placeholder: string;
  register: UseFormRegister<{
    email: string;
    password: string;
    name?: string | undefined;
  }>;
  error: FieldError | undefined;
}

export const FieldInput = ({
  error,
  label,
  name,
  placeholder,
  type,
  register,
}: FieldInputProps) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={name} className="text-white font-medium text-lg">
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        className="h-12"
        type={type}
        {...register(name)}
      />
      <ErrorFieldInput error={error?.message} />
    </div>
  );
};
