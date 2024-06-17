import { UserType } from "@/@types";

export function excludeFieldsApiResponse(
  user: UserType | null,
  keys: string[]
) {
  if (user) {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key))
    );
  }
}
