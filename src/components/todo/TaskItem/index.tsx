import { ITask, YourFormElement } from "@/@types";
import { Input } from "@/components/ui/input";
import { FormEvent, MouseEvent, useRef, useState } from "react";
import { ActionIcon } from "../ActionIcon";
import { Check, SquarePen, Trash2 } from "lucide-react";
import { useTasks } from "@/hooks";

export const TaskItem = ({ completed, id, text }: ITask) => {
  const [openEditInput, setOpenEditInput] = useState(false);
  const [textTask, setTextTask] = useState(text);

  const { deleteOneTask, handleSubmitTask, updateCompletedTask } = useTasks();

  const taskRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const formSubmit = (e: FormEvent<YourFormElement>) => {
    handleSubmitTask(e, id);
    setOpenEditInput(false);
    setTextTask(e.currentTarget.elements.task.value);
  };

  const handleClickOutTaskItem = () => {
    window.addEventListener("click", (e) => {
      const target: any = e.target;

      if (!taskRef.current?.contains(target)) {
        setOpenEditInput(false);
        setTextTask(text);
        formRef.current?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    });
  };

  return (
    <div
      ref={taskRef}
      className={`h-14 border border-white ${
        completed && "border-opacity-50"
      } rounded flex items-center justify-between transition-colors`}
      onClick={handleClickOutTaskItem}
    >
      <div
        className="flex items-center gap-4 pl-5 flex-1 h-full cursor-pointer"
        onClick={() => !openEditInput && updateCompletedTask(id)}
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
          <form
            className={`w-32 ${openEditInput ? "block" : "hidden"}`}
            ref={formRef}
            onSubmit={(e: FormEvent<YourFormElement>) => {
              e.preventDefault();
              formSubmit(e);
            }}
          >
            <Input
              className="bg-transparent border-b rounded-none h-6 text-white px-0"
              name="task"
              value={textTask}
              autoFocus
              onChange={(e) => setTextTask(e.target.value)}
            />
          </form>
        ) : (
          <p
            className={`text-white ${openEditInput ? "hidden" : "block"} ${
              completed && "line-through opacity-50"
            } transition-opacity`}
          >
            {text}
          </p>
        )}
      </div>

      <div className="h-full">
        <ActionIcon
          title="Excluir Tarefa"
          icon={Trash2}
          onClick={() => {
            deleteOneTask(id);
            setOpenEditInput(false);
            setTextTask("");
          }}
        />
        <ActionIcon
          title="Editar Tarefa"
          icon={SquarePen}
          onClick={() => {
            formRef.current?.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
            setOpenEditInput(!openEditInput);
            setTextTask(text);
          }}
        />
      </div>
    </div>
  );
};
