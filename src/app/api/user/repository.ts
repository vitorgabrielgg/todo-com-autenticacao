import { IUser } from "@/@types";
import prisma from "../../../../db";

class UserRepository {
  async createUser(data: IUser) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export { UserRepository };
