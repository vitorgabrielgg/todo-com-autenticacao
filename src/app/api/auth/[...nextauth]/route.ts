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
            throw new Error("O e-mail e/ou senha estão incorretos.");
          }
        } else {
          throw new Error("O e-mail e/ou senha estão incorretos.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
