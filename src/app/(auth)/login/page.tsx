import { LoginForm } from "@/components/form";
import React from "react";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-5 max-w-lg mx-auto">
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">Login</h1>
      <LoginForm />
    </main>
  );
}
