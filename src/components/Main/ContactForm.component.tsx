"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, tSchema } from "@app/components/Form/Schema";

import CN from "@app/helpers/ClassHelper";

import Button from "../Button";
import Form from "../Form";

type ContactFormProps = {
  id?: string;
  className?: string;
};

export default function ContactForm(props: ContactFormProps) {
  const { id, className } = props;
  const { Root: FormRoot, Input, Textarea } = Form;
  const style = {
    section: `w-full flex flex-col gap-4 item-center justify-center`,
    title: `text-center text-White`,
    form: {
      root: `w-[260px] md:w-[618px] m-auto`,
      input: `placeholder:text-wrap w-full h-[55px]`,
      textarea: `h-[180px]`,
      button: `dark:bg-blue-600 bg-blue-600 w-[calc(100vw/2)] m-auto`,
    },
    div: `flex flex-col gap-2`,
    output: {
      err: ``,
      warn: ``,
      info: ``,
    },
  };

  const [output, setOutput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tSchema>({ resolver: zodResolver(Schema) });

  const onSubmitHandler = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <section className={CN(style.section, className)}>
      <FormRoot
        id={id}
        className={style.form.root}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div
          className={`
          flex flex-col gap-8
        `}
        >
          <div className={style.div}>
            <Input
              id="name"
              type="text"
              className={style.form.input}
              label="Nome"
              placeholder="Primeiro e Ultimo Nome"
              aria-invalid={errors?.name ? "true" : "false"}
              autoComplete="name"
              {...register("name")}
            />
            {errors?.name && (
              <span className={style.output.err}>{errors?.name?.message}</span>
            )}
          </div>
          <div className={style.div}>
            <Input
              id="email"
              className={style.form.input}
              type="email"
              label="E-Mail"
              placeholder="Insira seu melhor e-Mail"
              aria-invalid={errors?.email ? "true" : "false"}
              autoComplete="email"
              {...register("email")}
            />
            {errors?.email && (
              <span className={style.output.err}>{errors?.email?.message}</span>
            )}
          </div>
          <div className={style.div}>
            <Input
              id="phone"
              className={style.form.input}
              type="tel"
              label="Telefone"
              placeholder="Número para Contato"
              aria-invalid={errors?.phone ? "true" : "false"}
              autoComplete="tel"
              {...register("phone")}
            />
            {errors?.phone && (
              <span className={style.output.err}>{errors?.phone?.message}</span>
            )}
          </div>
          <div className={style.div}>
            <Input
              id="subject"
              className={style.form.input}
              label="Assunto"
              placeholder={`Insira o Assunto`}
              aria-invalid={errors?.subject ? "true" : "false"}
              autoComplete="off"
              spellCheck
              {...register("subject")}
            />
            {errors?.subject && (
              <span className={style.output.err}>
                {errors?.subject?.message}
              </span>
            )}
          </div>
          <div className={style.div}>
            <Textarea
              id="message"
              className={style.form.textarea}
              label="Mensagem"
              placeholder="Insira o motivo da sua Solicitação em 
              Detalhes"
              aria-invalid={errors?.message ? "true" : "false"}
              autoComplete="off"
              spellCheck
              {...register("message")}
            />
            {errors?.message && (
              <span className={style.output.err}>
                {errors?.message?.message}
              </span>
            )}
          </div>
        </div>
        <Button.Root className={style.form.button}>
          Enviar Solicitação
        </Button.Root>
      </FormRoot>
      <pre className="text-white text-[12pt] text-center">
        {output}
        {/* {JSON.stringify(inputRegisterData, null, 2)} */}
      </pre>
    </section>
  );
}
