import { IUser } from "@/@types";

import prisma from "../../../../db";

import { hash } from "bcrypt";
import { UserRepository } from "./repository";

const userRepository = new UserRepository();

class UserService {
  async createUser(data: IUser) {
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
          status: "error",
        },
      };
    }

    const hashPassword = await hash(password, 8);

    await userRepository.createUser({
      name,
      email,
      password: hashPassword,
    });

    return {
      message: {
        text: "Usuário criado com sucesso",
        status: "success",
      },
    };
  }
}

export { UserService };
