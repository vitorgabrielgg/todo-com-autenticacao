export const getUserId = async (email: string | undefined | null) => {
  try {
    const res = await fetch(`api/user/${email}`);

    const json = await res.json();

    return json;
  } catch (error) {
    return error;
  }
};
