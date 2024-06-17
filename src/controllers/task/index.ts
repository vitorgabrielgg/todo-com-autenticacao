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

  getTasks: async (req: NextRequest, { params }: ParamsTask) => {
    const { id } = params;

    const tasks = await prisma.task.findMany({
      where: {
        userId: id,
      },
    });

    return NextResponse.json({ tasks });
  },

  deleteTask: async (req: NextRequest, { params }: ParamsTask) => {
    const { id } = params;

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ msg: "A task foi removida" });
  },

  completeTask: async (req: NextRequest, { params }: ParamsTask) => {
    const { id } = params;
    const { completed } = await req.json();

    await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed: !completed,
      },
    });

    return NextResponse.json({ msg: "A task foi atualizada" });
  },
};
