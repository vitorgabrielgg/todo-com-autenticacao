import { ITask } from "@/@types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ActionIcon } from "../ActionIcon";
import { Check, SquarePen, Trash2 } from "lucide-react";
import { useTasks } from "@/hooks";

export const TaskItem = ({ completed, id, text, userId }: ITask) => {
  const [openEditInput, setOpenEditInput] = useState(false);
  const { deleteOneTask, updateCompletedTask } = useTasks();

  return (
    <div
      className={`h-14 border border-white ${
        completed && "border-opacity-50"
      } rounded flex items-center justify-between transition-colors`}
    >
      <div
        className="flex items-center gap-4 pl-5 flex-1 h-full cursor-pointer"
        onClick={() => updateCompletedTask(id, userId)}
      >
        <div
          className={`h-6 w-6 border border-white rounded-full flex justify-center items-center ${
            completed && "bg-white"
          } transition-colors`}
        >
          <Check
            className={`w-4 ${
              completed ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          />
        </div>
        {openEditInput ? (
          <form className="w-32">
            <Input className="bg-transparent border-b rounded-none" />
          </form>
        ) : (
          <p
            className={`text-white ${
              completed && "line-through opacity-50"
            } transition-opacity`}
          >
            {text}
          </p>
        )}
      </div>

      <div className="h-full">
        <ActionIcon icon={Trash2} onClick={() => deleteOneTask(id, userId)} />
        <ActionIcon icon={SquarePen} />
      </div>
    </div>
  );
};
