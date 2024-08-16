"use client";

import { LoginForm } from "@/components/form";
import { TitlePage } from "@/components/title-page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status !== "unauthenticated") {
    return null;
  }

  return (
    <>
      <TitlePage>Todo | Login</TitlePage>
      <main className="min-h-screen flex flex-col justify-center items-center px-5 max-w-lg mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Login
        </h1>
        <LoginForm />
      </main>
    </>
  );
}
