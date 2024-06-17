import { useTasks } from "@/hooks";
import React from "react";

export const InfoTasks = () => {
  const { tasksCompletedLength, tasksTodo } = useTasks();

  return (
    <div className="flex max-[420px]:flex-col justify-between items-center max-[420px]:items-start mt-10 max-[420px]:gap-4">
      <div className="flex items-center gap-3">
        <span className="font-bold">Tarefas criadas</span>
        <p className="bg-white text-black px-2 rounded font-bold">
          {tasksTodo.length}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">Concluidas</span>
        <p className="bg-white text-black px-2 rounded">
          <strong>{tasksCompletedLength}</strong> de{" "}
          <strong>{tasksTodo.length}</strong>
        </p>
      </div>
    </div>
  );
};
