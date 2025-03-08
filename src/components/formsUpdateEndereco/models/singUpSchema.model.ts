import * as zod from "zod";

export const UpdateEnderecoSchema = zod.object({
  nome: zod.string().nonempty({ message: "Campo não pode ser vazio" }),

  endereco: zod
    .string()
    .nonempty({ message: "Campo não pode ser vazio" })
    .min(10)
    .max(50),
  numero: zod.string().nonempty({ message: "Campo não pode ser vazio" }),
  cep: zod.string().nonempty({ message: "Campo não pode ser vazio" }),
  cidade_uf: zod.string().nonempty({ message: "Campo não pode ser vazio" }),
  complemento: zod.string().optional(),
});

export type UpdateEnderecoFormData = zod.infer<typeof UpdateEnderecoSchema>;
