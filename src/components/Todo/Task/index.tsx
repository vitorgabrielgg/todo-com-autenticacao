import { useTasks } from "@/hooks";
import { FormEvent, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { FaCircleCheck, FaTrash } from "react-icons/fa6";

interface TaskProps {
  completed: boolean;
  text: string;
  id: string;
}

export const Task = ({ completed, text, id }: TaskProps) => {
  const [editTask, setEditTask] = useState(false);
  const [textTask, setTextTask] = useState(text);

  const { removeTask, changeCompletedTask, changeTextOfTask } = useTasks();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    changeTextOfTask(id, textTask);

    setEditTask(false);
  };

  return (
    <div
      id={text}
      className={`flex items-center justify-between border border-white rounded h-16 cursor-pointer ${
        completed && "border-white border-opacity-50"
      } transition-all`}
    >
      <div
        className="flex items-center gap-4 flex-1 h-full max-[374px]:px-3 px-5"
        onClick={() => !editTask && changeCompletedTask(id, completed)}
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
            className={`${completed && "line-through opacity-50"} ${
              editTask ? "hidden" : "block"
            } text-lg transition-all`}
          >
            {textTask}
          </p>

          <form
            className={`${
              editTask ? "block" : "hidden"
            } max-w-32 sm:max-w-full`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="text"
              className="border-b border-white bg-transparent outline-none w-full"
              placeholder="Nome da task"
              value={textTask}
              onChange={(e) => setTextTask(e.target.value)}
              ref={function (input) {
                if (input != null) {
                  input.focus();
                }
              }}
            />
          </form>
        </div>
      </div>
      <div className="h-full">
        <button
          className="h-full max-[374px]:px-3 px-5"
          title="Excluir Tarefa"
          onClick={() => removeTask(id)}
        >
          <FaTrash className="text-lg" />
        </button>

        <button
          className="h-full max-[374px]:px-3 px-5 relative"
          title="Editar Tarefa"
          onClick={() => {
            setEditTask(!editTask);
            changeTextOfTask(id, textTask);
          }}
        >
          <FaEdit className="text-lg" />
        </button>
      </div>
    </div>
  );
};
