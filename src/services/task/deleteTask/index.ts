export const deleteTask = (taskId: string, userId: string) => {
  try {
    fetch(`api/tasks/${userId}/${taskId}`, {
      method: "DELETE",
    });
  } catch (error) {
    return error;
  }
};
