import { getUserParams } from "@/@types";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import prisma from "../../../lib/db";
import { excludeFieldsApiResponse } from "@/utils";

interface JwtPayload {
  id: string;
}

export const userController = {
  getUserData: async (req: NextRequest, { params }: getUserParams) => {
    const { token } = params;

    if (!token) {
      return NextResponse.json({
        msg: {
          text: "Acesso negado",
          type: "error",
        },
      });
    }

    const secret = String(process.env.SECRET);

    const verify = Jwt.verify(token, secret) as JwtPayload;

    if (!verify) {
      return NextResponse.json({
        msg: {
          text: "Token inválido",
          type: "error",
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: verify.id,
      },
    });

    const userWithoutPassword = excludeFieldsApiResponse(user, ["password"]);

    return NextResponse.json({ userWithoutPassword });
  },
};
