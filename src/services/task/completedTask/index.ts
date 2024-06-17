import axios from "axios";

export const completedTask = async (id: string, completed: boolean) => {
  try {
    const res = await axios.patch(`api/tasks/${id}`, {
      completed,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
