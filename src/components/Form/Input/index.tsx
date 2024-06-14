import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  name: "email" | "name" | "password";
  type: string;
  placeholder: string;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<{
    email: string;
    password: string;
    name?: string | null | undefined;
  }>;
}

export const Input = ({
  name,
  type,
  placeholder,
  label,
  error,
  register,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-lg text-white font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="py-4 pl-2 rounded-md"
        {...register(name)}
      />
      {error && <span className="text-red-600">{error.message}</span>}
    </div>
  );
};
