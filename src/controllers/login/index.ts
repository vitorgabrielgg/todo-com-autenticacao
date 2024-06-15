import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const loginController = {
  loginUser: async (req: NextRequest) => {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({
        msg: {
          text: "O usuário não foi encontrado, por favor crie uma conta",
          type: "error",
        },
      });
    }

    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
      return NextResponse.json({
        msg: {
          text: "Senha incorreta",
          type: "error",
        },
      });
    }

    try {
      const secret = String(process.env.SECRET);

      const jwtToken = Jwt.sign({ id: user.id }, secret, { expiresIn: "60m" });

      return NextResponse.json({
        jwtToken,
        msg: {
          text: "Login realizado com sucesso",
          type: "success",
        },
      });
    } catch (error) {
      return NextResponse.json({
        msg: {
          text: "Erro no servidor",
          type: "error",
        },
      });
    }
  },
};
