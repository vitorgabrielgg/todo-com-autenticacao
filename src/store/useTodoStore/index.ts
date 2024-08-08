import { ITask } from "@/@types";
import { create } from "zustand";

interface StoreType {
  userId: string;
  tasks: ITask[];
  addTask: (task: ITask) => void;
  setUserId: (id: string) => void;
}

export const useTodoStore = create<StoreType>()((set) => ({
  userId: "",
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  setUserId: (id) => set(() => ({ userId: id })),
}));
