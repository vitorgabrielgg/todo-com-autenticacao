import { NextRequest } from "next/server";
import { RegisterController } from "./controller";

const registerController = new RegisterController();

export async function POST(req: NextRequest) {
  return registerController.create(req);
}
