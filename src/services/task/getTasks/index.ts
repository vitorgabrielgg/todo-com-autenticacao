import axios from "axios";

export const getTasks = async (id: string) => {
  try {
    const res = await axios.get(`api/tasks/${id}`);

    return res.data;
  } catch (error) {
    return error;
  }
};
