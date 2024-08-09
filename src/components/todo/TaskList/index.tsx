import { useTasks } from "@/hooks";
import { useTodoStore } from "@/store";
import { useEffect } from "react";
import { TaskItem } from "../TaskItem";

export const TaskList = () => {
  const { getTasks } = useTasks();
  const tasks = useTodoStore((state) => state.tasks);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      {tasks.length > 0 && (
        <section className="mt-6 flex flex-col gap-5">
          {tasks.map((task, i) => (
            <TaskItem key={i} {...task} />
          ))}
        </section>
      )}
    </>
  );
};
