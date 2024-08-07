import { TasksRepository } from "./repository";

const tasksRepository = new TasksRepository();

class TasksService {
  async createTask(id: string, text: string) {
    return tasksRepository.createTask(id, text);
  }

  async listTasks(id: string) {
    return tasksRepository.listTasks(id);
  }

  async deleteTask(id: string, taskId: string | undefined) {
    return tasksRepository.deleteTask(id, taskId);
  }

  async deleteAllTasks(id: string) {
    return tasksRepository.deleteAllTasks(id);
  }
}

export { TasksService };
