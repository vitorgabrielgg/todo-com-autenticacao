import {
  changeCompleted,
  createTask,
  deleteTask,
  listTasks,
} from "@/services/task";
import { useTodoStore } from "@/store";
import { useCallback } from "react";

export const useTasks = () => {
  const {
    userId,
    tasks,
    addTask,
    getAllTasks,
    removeTask,
    changeCompletedStatus,
  } = useTodoStore();

  console.log(tasks);

  const postTask = async (text: string) => {
    const res = await createTask(text, userId);

    addTask(res);
  };

  const getTasks = useCallback(async () => {
    const res = await listTasks(userId);
    getAllTasks(res);
  }, [getAllTasks, userId]);

  const deleteOneTask = (taskId: string, userId: string) => {
    removeTask(taskId);
    deleteTask(taskId, userId);
  };

  const updateCompletedTask = (taskId: string, userId: string) => {
    changeCompletedStatus(taskId);
    changeCompleted(taskId, userId);
  };

  return {
    deleteOneTask,
    getTasks,
    postTask,
    updateCompletedTask
  };
};
