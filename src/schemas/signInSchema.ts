import { z } from "zod";
import { usernameValidation } from "./signUpSchema";

export const singInSchema = z.object({
  identifier: usernameValidation,
  password: z.string().min(6, { message: "Password is required" }),
});
