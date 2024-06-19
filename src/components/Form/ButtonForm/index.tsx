import { LoadingComponent } from "@/components/Loading/LoadingComponent";
import { useLoading } from "@/hooks";
import { ReactNode } from "react";

export const ButtonForm = ({ children }: { children: ReactNode }) => {
  return (
    <button className="py-4 w-full bg-blue_btn font-bold text-white rounded-md">
      {children}
    </button>
  );
};
