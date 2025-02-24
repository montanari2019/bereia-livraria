import {
  isValidEmail,
  isValidPassword,
  validarCPF,
  validarTelefone,
} from "@/src/utils/validate.utils";
import * as zod from "zod";

export const CreateAcountSchema = zod
  .object({
    email: zod.string().refine((value) => isValidEmail(value), {
      message: "Email Inválido",
    }),
    name: zod.string().min(3).max(50),
    cpf: zod.string().refine((value) => validarCPF(value), {
      message: "CPF Inválido",
    }),
    telefone: zod.string().refine((value) => validarTelefone(value), {
      message: "telefone Inválido",
    }),

    password: zod.string().refine((value) => isValidPassword(value), {
      message:
        "Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras minúsculas, letras maiúsculas, números, e caracteres especiais.",
    }),
    confirm_password: zod.string().refine((value) => isValidPassword(value), {
      message:
        "Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras minúsculas, letras maiúsculas, números, e caracteres especiais.",
    }),
  })
  .superRefine((value, ctx) => {
    if (value.password !== value.confirm_password) {
      ctx.addIssue({
        code: zod.ZodIssueCode.custom,
        message: "As senhas não são iguais",
        path: ["confirm_password"],
      });
      ctx.addIssue({
        code: zod.ZodIssueCode.custom,
        message: "As senhas não são iguais",
        path: ["password"],
      });
    }
  });

export type CreateAcountFormData = zod.infer<typeof CreateAcountSchema>;
