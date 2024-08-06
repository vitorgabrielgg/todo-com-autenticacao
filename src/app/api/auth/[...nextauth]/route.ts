import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prisma from "../../../../../db";
import { compare } from "bcrypt";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Digite o seu email",
          type: "email",
        },
        password: {
          label: "Senha",
          placeholder: "Digite a sua senha",
          type: "password",
        },
      },

      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (user && credentials) {
          const validPassword = await compare(
            credentials?.password,
            user.password
          );

          if (validPassword) {
            return user;
          } else {
            throw new Error("Credenciais incorretas");
          }
        } else {
          throw new Error("Credenciais incorretas");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
});

export { handler as GET, handler as POST };
