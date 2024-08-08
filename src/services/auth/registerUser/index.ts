import { formAuthType } from "@/@types";

export const registerUser = async (data: formAuthType) => {
  try {
    const res = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  } catch (error) {
    return error;
  }
};
