"use client";

import { useEffect } from "react";
import { UserOptions } from "../UserOptions";
import { FormTodo } from "../FormTodo";
import { InfoTasks } from "../InfoTasks";
import { useAccount } from "@/hooks";

export const Todo = () => {
  const { fetchUserId } = useAccount();

  useEffect(() => {
    fetchUserId();
  }, [fetchUserId]);

  return (
    <main className="max-w-4xl mx-auto px-5 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-4xl">Todo</h1>
        <UserOptions />
      </div>

      <FormTodo />
      <InfoTasks />
    </main>
  );
};
