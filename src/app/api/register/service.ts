import { IUser } from "@/@types";

import prisma from "../../../../db";

import { hash } from "bcrypt";
import { RegisterRepository } from "./repository";

const registerRepository = new RegisterRepository();

class RegisterService {
  async create(data: IUser) {
    const { name, email, password } = data;

    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return {
        message: {
          text: "Este e-mail está sendo usado por outro usuário",
        },
      };
    }

    const hashPassword = await hash(password, 8);

    const user = await registerRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export { RegisterService };
