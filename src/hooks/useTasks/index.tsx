import { TaskContext } from "@/contexts";
import { createTask, getTasks } from "@/services";
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

  return {
    tasksTodo,
    addTask,
    listTasks,
  };
};
