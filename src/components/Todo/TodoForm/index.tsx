export const TodoForm = () => {
  return (
    <form className="flex max-[374px]:flex-col justify-between items-center gap-5 mt-8">
      <input
        type="text"
        className="max-[374px]:w-full w-[62%] sm:w-3/4 text-black placeholder:text-black py-2 pl-4 rounded"
        placeholder="Insira uma tarefa"
        name="task"
      />
      <button className="max-[374px]:w-full w-[38%] sm:w-1/4 bg-green-600 text-white py-2 px-4 rounded">
        Criar Tarefa
      </button>
    </form>
  );
};
