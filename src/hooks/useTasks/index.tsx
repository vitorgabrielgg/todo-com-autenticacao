import { TaskContext } from "@/contexts";
import { createTask } from "@/services";
import { useContext } from "react";

export const useTasks = () => {
  const { tasksTodo, setTasksTodo } = useContext(TaskContext);

  const addTask = async (text: string, id: string) => {
    const { task } = await createTask(text, id);

    if (task) {
      setTasksTodo([...tasksTodo, task]);
    }
  };

  return {
    tasksTodo,
    addTask,
  };
};
