import { getUserId } from "@/services/auth";
import { useTodoStore } from "@/store";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useAccount = () => {
  const [setUserId, userId] = useTodoStore((state) => [
    state.setUserId,
    state.userId,
  ]);

  const router = useRouter();

  const { data: session } = useSession();

  const fetchUserId = useCallback(async () => {
    const res = await getUserId(session?.user?.email);
    if (res) {
      setUserId(res);
    }
  }, [session?.user?.email, setUserId]);

  const logoutAccount = () => {
    signOut();
    router.push("/login");
  };

  return {
    session,
    fetchUserId,
    logoutAccount,
  };
};
