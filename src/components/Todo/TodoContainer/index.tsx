import { InfoTasks } from "../InfoTasks";
import { TodoForm } from "../TodoForm";

export const TodoContainer = () => {
  return (
    <div className="bg-bg_login_and_register min-h-screen w-full text-white flex items-center flex-col">
      <div className="max-w-4xl w-full px-5 mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Todo</h1>
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            Sair
          </button>
        </div>
        <TodoForm />

        <InfoTasks />
      </div>
    </div>
  );
};
