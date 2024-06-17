"use client";

import { TasksProps } from "@/@types";
import { ReactNode, createContext, useState } from "react";

interface ITaskContext {
  tasksTodo: TasksProps[] | [];
  setTasksTodo: (data: TasksProps[]) => void;
}

const initialValue = {
  tasksTodo: [],
  setTasksTodo: () => [],
};

export const TaskContext = createContext<ITaskContext>(initialValue);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasksTodo, setTasksTodo] = useState<TasksProps[]>(
    initialValue.tasksTodo
  );

  return (
    <TaskContext.Provider value={{ tasksTodo, setTasksTodo }}>
      {children}
    </TaskContext.Provider>
  );
};
