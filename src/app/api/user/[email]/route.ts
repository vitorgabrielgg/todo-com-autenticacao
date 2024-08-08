import { IParams } from "@/@types";
import { NextRequest } from "next/server";
import { UserController } from "../controller";

const userController = new UserController();

export async function GET(req: NextRequest, { params }: IParams) {
  return userController.getUser(req, { params });
}
