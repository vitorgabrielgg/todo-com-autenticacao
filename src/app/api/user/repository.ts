import { IUser } from "@/@types";
import prisma from "../../../../db";

class UserRepository {
  async createUser(data: IUser) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async getUser(email: string | undefined) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user?.id;
  }
}

export { UserRepository };
