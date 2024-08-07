import { IParams } from "@/@types";
import { NextRequest } from "next/server";
import { TasksController } from "../controller";

const tasksController = new TasksController();

export async function POST(req: NextRequest, { params }: IParams) {
  return tasksController.createTask(req, { params });
}

export async function GET(req: NextRequest, { params }: IParams) {
  return tasksController.listTasks(req, { params });
}
