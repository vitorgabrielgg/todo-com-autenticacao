interface ErrorFieldInputProps {
  error: string | undefined;
}

export const ErrorFieldInput = ({ error }: ErrorFieldInputProps) => {
  return <span className="text-red-500 block">{error}</span>;
};
