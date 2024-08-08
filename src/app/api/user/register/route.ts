import { NextRequest } from "next/server";
import { UserController } from "../controller";

const userController = new UserController();

export async function POST(req: NextRequest) {
  return userController.createUser(req);
}
