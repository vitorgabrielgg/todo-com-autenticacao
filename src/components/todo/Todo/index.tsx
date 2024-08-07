"use client";

import React from "react";
import { OptionsUser } from "../OptionsUser";
import { FormTodo } from "../FormTodo";
import { InfoTasks } from "../InfoTasks";

export const Todo = () => {
  return (
    <main className="max-w-4xl mx-auto px-5 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-4xl">Todo</h1>
        <OptionsUser />
      </div>

      <FormTodo />
      <InfoTasks />
    </main>
  );
};
