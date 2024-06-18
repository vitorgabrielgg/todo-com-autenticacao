import axios from "axios";

export const changeTextTask = async (id: string, text: string) => {
  try {
    const res = await axios.put(`api/tasks/${id}`, {
      text,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
