import { NextRequest, NextResponse } from "next/server";
import { UserService } from "./service";
import { IParams } from "@/@types";

const userService = new UserService();

class UserController {
  async createUser(req: NextRequest) {
    const data = await req.json();

    const response = await userService.createUser(data);

    return NextResponse.json(response);
  }

  async getUser(req: NextRequest, { params }: IParams) {
    const { email } = params;

    const id = await userService.getUser(email);

    return NextResponse.json(id);
  }
}

export { UserController };
