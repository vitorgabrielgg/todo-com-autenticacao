import { IParams } from "@/@types";
import { NextRequest, NextResponse } from "next/server";
import { TasksService } from "./service";

const tasksService = new TasksService();

class TasksController {
  async createTask(req: NextRequest, { params }: IParams) {
    const { id } = params;
    const { text } = await req.json();

    const task = await tasksService.createTask(id, text);

    return NextResponse.json(task);
  }

  async listTasks(req: NextRequest, { params }: IParams) {
    const { id } = params;

    const tasks = await tasksService.listTasks(id);

    return NextResponse.json(tasks);
  }

  async deleteTask(req: NextRequest, { params }: IParams) {
    const { id, taskId } = params;

    const task = await tasksService.deleteTask(id, taskId);

    return NextResponse.json(task);
  }

  async deleteAllTasks(req: NextRequest, { params }: IParams) {
    const { id } = params;

    const tasks = await tasksService.deleteAllTasks(id);

    return NextResponse.json(tasks);
  }
}

export { TasksController };
