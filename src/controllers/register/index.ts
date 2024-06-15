import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";
import bcrypt from "bcrypt";

export const registerController = {
  createUser: async (req: NextRequest) => {
    const { name, email, password } = await req.json();

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json({
        msg: {
          text: "Este e-mail pertence à outro usuário",
          type: "error",
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user,
      msg: {
        text: "Usuário criado com sucesso",
        type: "success",
      },
    });
  },
};
