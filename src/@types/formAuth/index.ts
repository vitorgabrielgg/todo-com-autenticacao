import { formAuthSchema } from "@/hooks";
import { z } from "zod";

export type formAuthType = z.infer<typeof formAuthSchema>;
