import { ReactNode } from "react";

export const TitlePage = ({ children }: { children: ReactNode }) => {
  return <title>{children}</title>;
};
