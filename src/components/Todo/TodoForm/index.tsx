"use client";

import { LoadingComponent } from "@/components/Loading/LoadingComponent";
import { useLoading, useTasks, useUser } from "@/hooks";
import { FormEvent, useRef } from "react";

export const TodoForm = ({ id }: { id: string }) => {
  const { addTask, tasksTodo } = useTasks();
  const { loading } = useLoading();
  const taskRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (taskRef.current?.value && !loading) {
      addTask(taskRef.current.value, id);
      taskRef.current.value = "";
    }
  };

  return (
    <form
      className="flex max-[374px]:flex-col justify-between items-center gap-5 mt-8"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="max-[374px]:w-full w-[62%] sm:w-3/4 text-black placeholder:text-black py-2 pl-4 rounded outline-none"
        placeholder="Insira uma tarefa"
        name="task"
        ref={taskRef}
      />
      <button
        type="submit"
        className="max-[374px]:w-full w-[38%] sm:w-1/4 bg-green-600 text-white py-2 px-4 rounded"
      >
        {loading ? <LoadingComponent className="text-2xl" /> : "Criar Tarefa"}
      </button>
    </form>
  );
};
