import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ErrorFieldInput } from "../ErrorFieldInput";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

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
  const [inputType, setInputType] = useState(type);

  const handleInputType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="space-y-1">
      <Label htmlFor={name} className="text-white font-medium text-lg">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={name}
          placeholder={placeholder}
          className="h-12"
          type={inputType}
          {...register(name)}
        />

        {name === "password" && (
          <div
            onClick={handleInputType}
            className="cursor-pointer absolute right-3 top-2/4 -translate-y-2/4"
          >
            {inputType === "password" ? (
              <EyeOffIcon className="h-5" />
            ) : (
              <EyeIcon className="h-5" />
            )}
          </div>
        )}
      </div>
      <ErrorFieldInput error={error?.message} />
    </div>
  );
};
