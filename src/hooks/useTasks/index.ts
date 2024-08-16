import { YourFormElement } from "@/@types";
import {
  changeCompleted,
  createTask,
  deleteTask,
  listTasks,
} from "@/services/task";
import { changeText } from "@/services/task/changeText";
import { useTodoStore } from "@/store";
import { FormEvent, useCallback } from "react";

export const useTasks = () => {
  const {
    userId,
    tasks,
    addTask,
    changeCompletedStatus,
    changeTextTask,
    getAllTasks,
    removeTask,
  } = useTodoStore();

  const tasksLength = tasks.length;
  const tasksCompletedLength =
    tasks.length > 0 && tasks.filter((task) => task.completed).length;

  const postTask = async (text: string) => {
    const res = await createTask(text, userId);

    addTask(res);
  };

  const getTasks = useCallback(async () => {
    if (userId) {
      const res = await listTasks(userId);
      getAllTasks(res);
    }
  }, [getAllTasks, userId]);

  const deleteOneTask = (taskId: string) => {
    removeTask(taskId);
    deleteTask(taskId, userId);
  };

  const updateCompletedTask = (taskId: string) => {
    changeCompletedStatus(taskId);
    changeCompleted(taskId, userId);
  };

  const updateTextTask = (taskId: string, text: string) => {
    changeTextTask(taskId, text);
    changeText(taskId, userId, text);
  };

  const handleSubmitTask = (e: FormEvent<YourFormElement>, taskId?: string) => {
    e.preventDefault();
    const text = e.currentTarget.elements.task?.value;

    if (taskId) {
      if (text !== "") {
        updateTextTask(taskId, text);
        e.currentTarget.elements.task.value = "";
      }

      return;
    }

    if (text !== "") {
      postTask(text);
      e.currentTarget.elements.task.value = "";
    }
  };

  return {
    tasksCompletedLength,
    tasksLength,
    deleteOneTask,
    getTasks,
    handleSubmitTask,
    postTask,
    updateCompletedTask,
    updateTextTask,
  };
};
