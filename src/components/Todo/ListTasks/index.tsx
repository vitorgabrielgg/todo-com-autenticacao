import { TasksProps } from "@/@types";
import { Task } from "../Task";

export const ListTasks = ({ tasks }: { tasks: TasksProps[] }) => {
  return (
    <div className="flex flex-col pt-6 pb-10 gap-5">
      {tasks.map((task, i) => (
        <Task {...task} key={i} />
      ))}
    </div>
  );
};
