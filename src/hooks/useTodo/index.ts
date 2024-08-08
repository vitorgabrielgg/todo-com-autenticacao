import { getUserId } from "@/services/auth";
import { useTodoStore } from "@/store";
import { useSession } from "next-auth/react";
import { useCallback } from "react";

export const useTodo = () => {
  const [setUserId, userId] = useTodoStore((state) => [
    state.setUserId,
    state.userId,
  ]);

  const { data: session } = useSession();

  const fetchUserId = useCallback(async () => {
    const res = await getUserId(session?.user?.email);
    if (res) {
      setUserId(res);
    }
  }, [session?.user?.email, setUserId]);

  return {
    session,
    fetchUserId,
  };
};
