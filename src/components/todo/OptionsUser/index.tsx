"use client";

import { useTodo } from "@/hooks";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const OptionsUser = () => {
  const router = useRouter();
  const { session } = useTodo();

  return (
    <div
      onClick={() => {
        signOut();
        router.push("/login");
      }}
      className="max-w-28 overflow-ellipsis truncate"
    >
      {session?.user?.name}
    </div>
  );
};
