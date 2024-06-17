"use client";

import { TodoContainer } from "@/components";

import { useToken, useUser } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { token } = useToken();
  const router = useRouter();

  const { user, getUser } = useUser();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!token) {
    router.push("/login");
    return null;
  }

  return <>{isClient && <TodoContainer />}</>;
}
