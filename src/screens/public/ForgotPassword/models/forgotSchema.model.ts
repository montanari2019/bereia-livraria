import { isValidEmail } from "@/src/utils/validate.utils";
import * as zod from "zod";

export const ForgotSchema = zod.object({
  email: zod
    .string()
    .nonempty({ message: "Campo não pode ser vazio" })
    .refine((value) => isValidEmail(value), {
      message: "Email Inválido",
    }),
});

export type ForgotFormData = zod.infer<typeof ForgotSchema>;
