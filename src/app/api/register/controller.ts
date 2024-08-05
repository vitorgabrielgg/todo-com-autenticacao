import { NextRequest, NextResponse } from "next/server";
import { RegisterService } from "./service";

const registerService = new RegisterService();

class RegisterController {
  async create(req: NextRequest) {
    const data = await req.json();

    const response = await registerService.create(data);

    return NextResponse.json({ response });
  }
}

export { RegisterController };
