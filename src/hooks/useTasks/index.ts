import { createTask, listTasks } from "@/services/task";
import { useTodoStore } from "@/store";
import { useCallback } from "react";

export const useTasks = () => {
  const [userId, tasks, addTask, getAllTasks] = useTodoStore((state) => [
    state.userId,
    state.tasks,
    state.addTask,
    state.getAllTasks,
  ]);

  const postTask = async (text: string) => {
    const res = await createTask(text, userId);

    addTask(res);
  };

  const getTasks = useCallback(async () => {
    const res = await listTasks(userId);
    getAllTasks(res);
  }, [getAllTasks, userId]);

  return {
    postTask,
    getTasks,
  };
};
