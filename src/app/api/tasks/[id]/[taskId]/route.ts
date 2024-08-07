import { IParams } from "@/@types";
import { NextRequest } from "next/server";
import { TasksController } from "../../controller";

const tasksController = new TasksController();

export async function DELETE(req: NextRequest, { params }: IParams) {
  return tasksController.deleteTask(req, { params });
}
