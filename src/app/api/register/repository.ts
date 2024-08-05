import { IUser } from "@/@types";
import prisma from "../../../../db";

class RegisterRepository {
  async create(data: IUser) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export { RegisterRepository };
