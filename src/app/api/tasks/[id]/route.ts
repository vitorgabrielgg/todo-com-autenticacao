import { ParamsTask } from "@/@types";
import { taskServices } from "@/controllers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, { params }: ParamsTask) {
  return taskServices.createTask(req, { params });
}
