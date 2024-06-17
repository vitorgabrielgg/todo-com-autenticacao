import { TaskProvider } from "@/contexts";
import { ReactNode } from "react";

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  return <TaskProvider>{children}</TaskProvider>;
};
