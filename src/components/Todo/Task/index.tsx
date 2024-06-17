import { useTasks } from "@/hooks";
import React, { FormEvent } from "react";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck, FaTrash } from "react-icons/fa6";

interface TaskProps {
  completed: boolean;
  text: string;
  id: string;
}

export const Task = ({ completed, text, id }: TaskProps) => {
  const { removeTask, changeCompletedTask } = useTasks();

  return (
    <div
      id={text}
      className={`flex items-center justify-between border border-white rounded h-16 cursor-pointer ${
        completed && "border-white border-opacity-50"
      } transition-all`}
    >
      <div
        className="flex items-center gap-4 flex-1 h-full max-[374px]:px-3 px-5"
        onClick={() => changeCompletedTask(id, completed)}
      >
        <button
          className={`w-7 h-7 ${
            !completed && "border border-white"
          } rounded-full`}
        >
          <FaCircleCheck
            className={`w-full h-full ${completed ? "block" : "hidden"}`}
          />
        </button>
        <div className="">
          <p
            className={`${
              completed && "line-through opacity-50"
            } text-lg transition-all`}
          >
            {text}
          </p>
        </div>
      </div>
      <div className="h-full" onClick={() => removeTask(id)}>
        <button className="h-full max-[374px]:px-3 px-5" title="Excluir Tarefa">
          <FaTrash className="text-lg" />
        </button>

        <button
          className="h-full max-[374px]:px-3 px-5 relative"
          title="Editar Tarefa"
        >
          <FaEdit className="text-lg" />
        </button>
      </div>
    </div>
  );
};
