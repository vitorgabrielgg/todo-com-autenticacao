import React from "react";

export const InfoTasks = () => {
  return (
    <div className="flex max-[420px]:flex-col justify-between items-center max-[420px]:items-start mt-10 max-[420px]:gap-4">
      <div className="flex items-center gap-3">
        <span className="font-bold">Tarefas criadas</span>
        <p className="bg-white text-black px-2 rounded font-bold">0</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">Concluidas</span>
        <p className="bg-white text-black px-2 rounded">
          <strong>0</strong> de <strong>0</strong>
        </p>
      </div>
    </div>
  );
};
