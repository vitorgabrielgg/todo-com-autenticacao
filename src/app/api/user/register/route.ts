import { registerController } from "@/controllers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return registerController.createUser(req);
}
