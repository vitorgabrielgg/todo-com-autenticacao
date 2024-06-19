"use client";

import { useLoading, useTasks, useUser } from "@/hooks";
import { useEffect } from "react";

import { InfoTasks } from "../InfoTasks";
import { TodoForm } from "../TodoForm";
import { ListTasks } from "../ListTasks";

export const TodoContainer = () => {
  const { tasksTodo, listTasks } = useTasks();
  const { user, getUser, logoutUser } = useUser();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (user) {
      listTasks(user?.id);
    }
  }, [user, listTasks]);

  return (
    <>
      {user && (
        <div className="bg-bg_login_and_register min-h-screen w-full text-white flex items-center flex-col">
          <div className="max-w-4xl w-full px-5 mt-10">
            <div className="flex justify-between">
              <h1 className="font-bold text-4xl">Todo</h1>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded"
                onClick={logoutUser}
              >
                Sair
              </button>
            </div>
            <TodoForm id={user?.id} />

            <InfoTasks />

            <ListTasks tasks={tasksTodo} />
          </div>
        </div>
      )}
    </>
  );
};
