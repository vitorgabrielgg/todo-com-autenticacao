import { FormAuthType } from "@/hooks";
import axios from "axios";

export const createUser = async (data: FormAuthType) => {
  try {
    const res = await axios.post("api/user/register", {
      ...data,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
