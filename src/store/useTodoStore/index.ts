import { create } from "zustand";

interface StoreType {
  userId: string;
  setUserId: (id: string) => void;
}

export const useTodoStore = create<StoreType>()((set) => ({
  userId: "",
  setUserId: (id) => set(() => ({ userId: id })),
}));
