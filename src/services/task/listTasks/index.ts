export const listTasks = async (id: string) => {
  try {
    const res = await fetch(`api/tasks/${id}`);
    const json = await res.json();

    return json;
  } catch (error) {
    return error;
  }
};
