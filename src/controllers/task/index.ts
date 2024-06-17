import { ParamsTask } from "@/@types";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";

export const taskServices = {
  createTask: async (req: NextRequest, { params }: ParamsTask) => {
    const { text } = await req.json();
    const { id } = params;

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        tasks: {
          create: {
            text,
            completed: false,
          },
        },
      },
      include: {
        tasks: true,
      },
    });

    const task = user.tasks[user.tasks.length - 1];

    return NextResponse.json({ task });
  },
};
