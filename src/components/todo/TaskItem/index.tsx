import { ITask } from "@/@types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ActionIcon } from "../ActionIcon";
import { SquarePen, Trash2 } from "lucide-react";
import { useTasks } from "@/hooks";

export const TaskItem = ({ completed, id, text, userId }: ITask) => {
  const [openEditInput, setOpenEditInput] = useState(false);
  const { deleteOneTask } = useTasks();

  return (
    <div className="h-14 border border-white rounded flex items-center justify-between pl-5">
      <div className="flex items-center gap-4">
        <div className="h-6 w-6 border border-white rounded-full"></div>
        {openEditInput ? (
          <form className="w-32">
            <Input className="bg-transparent border-b rounded-none" />
          </form>
        ) : (
          <p className="text-white">{text}</p>
        )}
      </div>

      <div className="h-full">
        <ActionIcon icon={Trash2} onClick={() => deleteOneTask(id, userId)} />
        <ActionIcon icon={SquarePen} />
      </div>
    </div>
  );
};
