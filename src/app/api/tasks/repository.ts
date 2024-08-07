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
}

export { TasksRepository };
