import axios from "axios";

export const getUserInfo = async (token: string) => {
  try {
    const res = await axios.get(`api/user/${token}`);

    return res.data;
  } catch (error) {
    return error;
  }
};
