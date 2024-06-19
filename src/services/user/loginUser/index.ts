import { FormAuthType, useLoading } from "@/hooks";
import axios from "axios";

export const loginUser = async (data: FormAuthType) => {
  try {
    const res = await axios.post("api/user/login", {
      ...data,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
