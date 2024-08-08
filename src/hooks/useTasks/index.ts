import { createTask } from "@/services/task";
import { useTodoStore } from "@/store";

export const useTasks = () => {
  const [userId, addTask, tasks] = useTodoStore((state) => [
    state.userId,
    state.addTask,
    state.tasks,
  ]);
  console.log(tasks);

  const postTask = async (text: string) => {
    const res = await createTask(text, userId);

    addTask(res);
  };

  return {
    postTask,
  };
};
