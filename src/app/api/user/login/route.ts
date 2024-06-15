import { loginController } from "@/controllers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return loginController.loginUser(req);
}
