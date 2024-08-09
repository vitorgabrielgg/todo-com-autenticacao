import { useTasks } from "@/hooks";
import { useTodoStore } from "@/store";
import React, { useEffect } from "react";

export const ListTasks = () => {
  const { getTasks } = useTasks();
  const tasks = useTodoStore((state) => state.tasks);
  console.log(tasks);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return <div>ListTasks</div>;
};
