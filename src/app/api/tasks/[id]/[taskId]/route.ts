import { IParams } from "@/@types";
import { NextRequest } from "next/server";
import { TasksController } from "../../controller";

const tasksController = new TasksController();

export async function DELETE(req: NextRequest, { params }: IParams) {
  return tasksController.deleteTask(req, { params });
}

export async function PATCH(req: NextRequest, { params }: IParams) {
  return tasksController.changeCompletedTask(req, { params });
}

export async function PUT(req: NextRequest, { params }: IParams) {
  return tasksController.changeTextTask(req, { params });
}
