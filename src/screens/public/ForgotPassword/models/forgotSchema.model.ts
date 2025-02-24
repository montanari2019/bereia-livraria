import { isValidEmail } from "@/src/utils/validate.utils";
import * as zod from "zod";

export const ForgotSchema = zod.object({
  email: zod.string().refine((value) => isValidEmail(value), {
    message: "Email Inválido",
  }),
});

export type ForgotFormData = zod.infer<typeof ForgotSchema>;
