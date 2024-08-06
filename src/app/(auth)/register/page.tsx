import { RegisterForm } from "@/components/form";

export default function Register() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-5 max-w-lg mx-auto">
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
        Registrar-se
      </h1>
      <RegisterForm />
    </main>
  );
}
