export const changeText = (taskId: string, userId: string, text: string) => {
  try {
    fetch(`api/tasks/${userId}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    return error;
  }
};
