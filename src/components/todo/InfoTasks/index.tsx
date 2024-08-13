import { useTasks } from "@/hooks";
import React from "react";

export const InfoTasks = () => {
  const { tasksCompletedLength, tasksLength } = useTasks();

  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-white font-semibold">Tarefas criadas</p>
        <span className="bg-white px-2 rounded font-bold">{tasksLength}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-white font-bold">Concluídas</p>
        <p className="bg-white px-2 rounded">
          <span className="font-bold">{tasksCompletedLength} </span>de
          <span className="font-bold"> {tasksLength}</span>
        </p>
      </div>
    </div>
  );
};
