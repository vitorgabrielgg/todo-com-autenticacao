import axios from "axios";

export const deleteTask = async (id: string) => {
  try {
    const res = await axios.delete(`api/tasks/${id}`);

    return res.data;
  } catch (error) {
    return error;
  }
};
