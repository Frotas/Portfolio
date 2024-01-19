import { z } from "zod";

export const Schema = z.object({
  name: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório!",
      invalid_type_error: "Aviso: Este Campo é Inválido!",
    })
    .min(1, { message: "Aviso: Este Campo é Obrigatório!" })
    .regex(
      /^[a-záàâãéèêíïóôõöúçñ ]+$/,
      "Aviso: Este Campo não Aceita Caracteres Especiais!"
    ),
  email: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .min(5, { message: "Erro: e-Mail Inválido." })
    .email({ message: "Erro: e-Mail Inválido." }),
  phone: z
    .string({
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .min(11, { message: "Aviso: Este Campo é Obrigatório." })
    .regex(/^[0-9-.()+ ]+$/, "Aviso: Este campo só aceita números.")
    .optional(),
  subject: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido.",
    })
    .min(1, { message: "Aviso: Este Campo é Obrigatório." })
    .regex(
      /^[a-z0-9?-@.:|/ ]+$/,
      "Erro (0x190): Ocorreu um ERRO Inesperado."
    ),
  message: z
    .string({
      required_error: "Aviso: Este Campo é Obrigatório.",
      invalid_type_error: "Aviso: Este Campo é Inválido!",
    })
    .min(100, { message: "Aviso: Este Campo é Obrigatório!" })
    .regex(
      /^[a-z0-9?-@.:|/"'`´ ]+$/,
      "Erro (0x190): Ocorreu um ERRO Inesperado!"
    ),
});
export type tSchema = z.infer<typeof Schema>;
