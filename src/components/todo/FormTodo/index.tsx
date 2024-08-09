import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTasks } from "@/hooks";
import React, { FormEvent } from "react";

interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const FormTodo = () => {
  const { postTask } = useTasks();

  const handleSubmit = (e: FormEvent<YourFormElement>) => {
    e.preventDefault();
    const text = e.currentTarget.elements.task.value;

    if (text !== "") {
      postTask(text);
    }

    e.currentTarget.elements.task.value = "";
  };

  return (
    <form
      className="mt-8 w-2/ flex flex-col min-[450px]:flex-row gap-4 min-[450px]:gap-6"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Insira uma tarefa"
        className="min-[450px]:flex-1 text-black placeholder:text-black h-11"
        name="task"
      />
      <Button className="bg-green-600 hover:bg-green-700 w-full min-[450px]:max-w-[140px] sm:min-[450px]:max-w-[180px] h-11">
        Criar Tarefa
      </Button>
    </form>
  );
};
