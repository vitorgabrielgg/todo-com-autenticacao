"use client";

import { RegisterForm } from "@/components/form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  });

  if (status !== "unauthenticated") {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-5 max-w-lg mx-auto">
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
        Registrar-se
      </h1>
      <RegisterForm />
    </main>
  );
}
