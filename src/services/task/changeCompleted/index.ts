export const changeCompleted = (taskId: string, userId: string) => {
  try {
    fetch(`api/tasks/${userId}/${taskId}`, {
      method: "PATCH",
    });
  } catch (error) {
    return error;
  }
};
