import prisma from "../../../../db";

class TasksRepository {
  async createTask(id: string, text: string) {
    const task = await prisma.task.create({
      data: {
        text,
        completed: false,
        userId: id,
      },
    });

    return task;
  }

  async listTasks(id: string) {
    const tasks = await prisma.task.findMany({
      where: {
        userId: id,
      },
    });

    return tasks;
  }

  async deleteTask(id: string, taskId: string | undefined) {
    const task = await prisma.task.delete({
      where: {
        userId: id,
        id: taskId,
      },
    });

    return task;
  }

  async deleteAllTasks(id: string) {
    const tasks = await prisma.task.deleteMany({
      where: {
        userId: id,
      },
    });

    return tasks;
  }

  async changeCompletedTask(
    id: string,
    taskId: string | undefined,
    completed: boolean
  ) {
    const task = await prisma.task.update({
      where: {
        userId: id,
        id: taskId,
      },
      data: {
        completed,
      },
    });

    return task;
  }

  async changeTextTask(id: string, taskId: string | undefined, text: string) {
    const task = await prisma.task.update({
      where: {
        userId: id,
        id: taskId,
      },
      data: {
        text,
      },
    });

    return task;
  }
}

export { TasksRepository };
