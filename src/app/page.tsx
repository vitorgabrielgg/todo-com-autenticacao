"use client";

import { useToken } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { token } = useToken();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!token) {
    router.push("/login");
    return null;
  }

  return (
    <>
      {isClient && (
        <div>
          <p>Todo Page</p>
        </div>
      )}
    </>
  );
}
