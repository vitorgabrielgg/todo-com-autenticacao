import { TasksRepository } from "./repository";

const tasksRepository = new TasksRepository();

class TasksService {
  async createTask(id: string | undefined, text: string) {
    return tasksRepository.createTask(id, text);
  }

  async listTasks(id: string | undefined) {
    return tasksRepository.listTasks(id);
  }

  async deleteTask(id: string | undefined, taskId: string | undefined) {
    return tasksRepository.deleteTask(id, taskId);
  }

  async deleteAllTasks(id: string | undefined) {
    return tasksRepository.deleteAllTasks(id);
  }

  async changeCompletedTask(
    id: string | undefined,
    taskId: string | undefined,
    completed: boolean
  ) {
    return tasksRepository.changeCompletedTask(id, taskId, completed);
  }

  async changeTextTask(
    id: string | undefined,
    taskId: string | undefined,
    text: string
  ) {
    return tasksRepository.changeTextTask(id, taskId, text);
  }
}

export { TasksService };
