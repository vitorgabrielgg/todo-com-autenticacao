import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingComponent = ({ className }: { className?: string }) => {
  return (
    <div>
      <AiOutlineLoading3Quarters
        className={`animate-spin mx-auto ${className}`}
      />
    </div>
  );
};
