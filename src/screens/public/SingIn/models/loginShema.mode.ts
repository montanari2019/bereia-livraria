import { isValidEmail, isValidPassword } from "@/src/utils/validate.utils";
import * as zod from "zod";

export const CreateLoginSchema = zod.object({
  email: zod
    .string()
    .nonempty({ message: "Campo não pode ser vazio" })
    .refine((value) => isValidEmail(value), {
      message: "Email Inválido",
    }),

  password: zod
    .string()
    .nonempty({ message: "Campo não pode ser vazio" })
    .refine((value) => isValidPassword(value), {
      message:
        "Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras minúsculas, letras maiúsculas, números, e caracteres especiais.",
    }),
});

export type LoginFormData = zod.infer<typeof CreateLoginSchema>;
