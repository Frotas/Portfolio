"use client";
import { useState, useRef } from "react";
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
const FormInputsControl: tSchema = {
  message: "",
  name: "",
  email: "",
  subject: "",
  phone: "",
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

  const registerInput = {
    name: register("name"),
    email: register("email"),
    phone: register("phone"),
    subject: register("subject"),
    message: register("message"),
  };
  const inputRegisterData = {
    name: {
      name: registerInput.name.name,
      isRequired: registerInput.name.required,
      pattern: registerInput.name.pattern,
      ref: registerInput.name.ref,
    },
    email: {
      name: registerInput.email.name,
      isRequired: registerInput.email.required,
      pattern: registerInput.email.pattern,
      ref: registerInput.email.ref,
    },
    phone: {
      name: registerInput.phone.name,
      isRequired: registerInput.phone.required,
      pattern: registerInput.phone.pattern,
      ref: registerInput.phone.ref,
    },
    subject: {
      name: registerInput.subject.name,
      isRequired: registerInput.subject.required,
      pattern: registerInput.subject.pattern,
      ref: registerInput.subject.ref,
    },
    message: {
      name: registerInput.message.name,
      isRequired: registerInput.message.required,
      pattern: registerInput.message.pattern,
      ref: registerInput.message.ref,
    },
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
