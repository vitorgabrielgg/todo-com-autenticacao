import axios from "axios";

export const createTask = async (text: string, id: string) => {
  try {
    const res = await axios.post(`api/tasks/${id}`, {
      text,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
