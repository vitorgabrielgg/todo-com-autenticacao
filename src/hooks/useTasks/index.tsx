import { TaskContext } from "@/contexts";
import {
  changeTextTask,
  completedTask,
  createTask,
  deleteTask,
  getTasks,
} from "@/services";
import { useCallback, useContext } from "react";

export const useTasks = () => {
  const { tasksTodo, setTasksTodo } = useContext(TaskContext);

  const tasksCompletedLength = tasksTodo.filter(
    (task) => task.completed
  ).length;

  const listTasks = useCallback(
    async (id: string) => {
      const { tasks } = await getTasks(id);
      setTasksTodo(tasks);
    },
    [setTasksTodo]
  );

  const addTask = async (text: string, id: string) => {
    const { task } = await createTask(text, id);

    if (task) {
      setTasksTodo([...tasksTodo, task]);
    }
  };

  const removeTask = async (id: string) => {
    const { msg } = await deleteTask(id);

    setTasksTodo(tasksTodo.filter((task) => task.id !== id));
  };

  const changeCompletedTask = async (id: string, completed: boolean) => {
    const { msg } = await completedTask(id, completed);

    const newTasksArray = tasksTodo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasksTodo(newTasksArray);
  };

  const changeTextOfTask = async (id: string, text: string) => {
    const { msg } = await changeTextTask(id, text);
  };

  return {
    tasksTodo,
    tasksCompletedLength,
    addTask,
    listTasks,
    removeTask,
    changeCompletedTask,
    changeTextOfTask,
  };
};
