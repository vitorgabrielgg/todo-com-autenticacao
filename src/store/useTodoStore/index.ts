import { ITask } from "@/@types";
import { create } from "zustand";

interface StoreType {
  userId: string;
  tasks: ITask[];
  addTask: (task: ITask) => void;
  changeCompletedStatus: (id: string) => void;
  changeTextTask: (id: string, text: string) => void;
  getAllTasks: (tasks: ITask[]) => void;
  removeTask: (id: string) => void;
  setUserId: (id: string) => void;
}

export const useTodoStore = create<StoreType>()((set) => ({
  userId: "",
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  changeCompletedStatus: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    })),
  changeTextTask: (id, text) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            text,
          };
        }
        return task;
      }),
    })),
  getAllTasks: (tasks) => set(() => ({ tasks })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  setUserId: (id) => set(() => ({ userId: id })),
}));
