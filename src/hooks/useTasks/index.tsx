import { TaskContext } from "@/contexts";
import { createTask, deleteTask, getTasks } from "@/services";
import { useCallback, useContext } from "react";

export const useTasks = () => {
  const { tasksTodo, setTasksTodo } = useContext(TaskContext);

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

  return {
    tasksTodo,
    addTask,
    listTasks,
    removeTask,
  };
};
