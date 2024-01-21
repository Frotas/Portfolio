import { z } from "zod";

export const Schema = z.object({
  name: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório!",
      invalid_type_error: "Aviso: Este Campo é Inválido!",
    })
    .refine((data) => !!data.search(RegExp(/^[a-záàâãéèêíïóôõöúçñ ]+$/)), {
      message: "Aviso: Este Campo não Aceita Caracteres Especiais!",
    }),
  email: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .email({ message: "Erro: e-Mail Inválido." }),
  phone: z
    .string({
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .refine((data) => !!data.search(RegExp(/^[0-9]$/)), {
      message: "Aviso: Esse campo só aceita números.",
    })
    .optional(),
  subject: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .refine((data) => !!data.search(RegExp(/^[a-z0-9?-@.:|/"'`´ ]+$/)), {
      message: "Erro (0x190): Ocorreu um ERRO Inesperado.",
    }),
  message: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido!",
    })
    .min(100)
    .refine((data) => !!data.search(RegExp(/^[a-z0-9?-@.:|/"'`´ ]+$/)), {
      message: "Erro (0x190): Ocorreu um ERRO Inesperado.",
    }),
});
export type tSchema = z.infer<typeof Schema>;
