import { getUserParams } from "@/@types";
import { userController } from "@/controllers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: getUserParams) {
  return userController.getUserData(req, { params });
}
