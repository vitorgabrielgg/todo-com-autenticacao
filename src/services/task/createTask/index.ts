export const createTask = async (text: string, id: string) => {
  try {
    const res = await fetch(`api/tasks/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const json = await res.json();

    return json;
  } catch (error) {
    return error;
  }
};
