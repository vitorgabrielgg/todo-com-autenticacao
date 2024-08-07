"use client";

import { LayoutAdmin } from "@/components/layout-admin";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  return (
    <LayoutAdmin>
      <main>Olá, {session?.user?.name}</main>
      <button
        onClick={() => {
          signOut();
          router.push("/login");
        }}
      >
        Sair
      </button>
    </LayoutAdmin>
  );
}
