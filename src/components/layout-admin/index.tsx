import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    setTimeout(() => {
      router.push("/login");
    }, 100);

    return null;
  }

  return <div>{children}</div>;
};
