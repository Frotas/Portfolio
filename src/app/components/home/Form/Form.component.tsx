"use client";
import { v4 as uuidV4 } from "uuid";
import { HTMLAttributes, HTMLProps, useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CN from "@app/helpers/ClassHelper";
import { Schema, SchemaType } from "@app/app/schema";
import { Button } from "../../_ui/Button";
import { InputWrapper, Input, Label, Textarea } from "./Input";
import { FirestoreContext } from "@app/app/context";

type FormComponentProps = {
  className?: string;
} & HTMLAttributes<HTMLFormElement> &
  HTMLProps<HTMLFormElement>;

export default function FormComponent({
  className,
  ...rest
}: FormComponentProps) {
  const style = {
    root: {
      wrapper: `w-full py-8`,
      form: `w-full flex flex-col`,
    },
    wrapper: `flex flex-col gap-3 py-3`,
    input: ``,
    label: ``,
    button: `m-auto my-6`,
  };
  const { data, save } = useContext(FirestoreContext);
  const [formData, setFormData] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(Schema) });
  const submit = handleSubmit((dataForm: SchemaType) => {
    setFormData(JSON.stringify(dataForm, null, 2));
  });

  return (
    <form
      id="contactForm"
      action={"/api"}
      method="POST"
      className={CN(style.root.form, className)}
    >
      <InputWrapper className={style.wrapper}>
        <Label
          aria-label="InputLabel"
          htmlFor="#clientName"
          id="inputLabelClientName"
          className={style.label}
        >
          Nome:
        </Label>
        <Input
          value="Lorem ipsum"
          err={!!errors.client?.name}
          errMessage={`${errors.client?.name?.message}`}
          type="text"
          aria-labelledby="#inputLabelClientName"
          aria-placeholder=""
          id="clientName"
          className={style.input}
          {...register("client.name")}
        />
      </InputWrapper>
      <InputWrapper className={style.wrapper}>
        <Label
          aria-label="InputLabel"
          htmlFor="#clientEmail"
          id="inputLabelClientEmail"
          className={style.label}
        >
          E-mail:
        </Label>
        <Input
          value="Lorem@ipsum.com"
          err={!!errors.client?.email}
          errMessage={`${errors.client?.email?.message}`}
          type="email"
          aria-labelledby="#inputLabelClientEmail"
          aria-placeholder=""
          id="clientEmail"
          className={style.input}
          {...register("client.email")}
        />
      </InputWrapper>
      <InputWrapper className={style.wrapper}>
        <Label
          aria-label="InputLabel"
          htmlFor="#clientPhone"
          id="inputLabelClientPhone"
          className={style.label}
        >
          Telefone:
        </Label>
        <Input
          err={!!errors.client?.phone}
          errMessage={`${errors.client?.phone?.message}`}
          type="tel"
          aria-labelledby="#inputLabelClientPhone"
          aria-placeholder=""
          id="clientPhone"
          className={style.input}
          {...register("client.phone")}
        />
      </InputWrapper>
      <InputWrapper className={style.wrapper}>
        <Label
          aria-label="InputLabel"
          htmlFor="#messageSubject"
          id="inputLabelMessageSubject"
          className={style.label}
        >
          Assunto:
        </Label>
        <Input
          value="Lorem ipsum"
          err={!!errors.message?.subject}
          errMessage={`${errors.message?.subject?.message}`}
          type="text"
          aria-labelledby="#inputLabelMessageSubject"
          aria-placeholder=""
          id="messageSubject"
          className={style.input}
          {...register("message.subject")}
        />
      </InputWrapper>
      <InputWrapper className={style.wrapper}>
        <Label
          aria-label="InputLabel"
          htmlFor="#messageContent"
          id="inputLabelMessageContent"
          className={style.label}
        >
          Mensagem:
        </Label>
        <Textarea
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi amet et iure nostrum quisquam porro consectetur numquam laborum
            animi, officia praesentium doloremque at eos quam! Sequi ducimus magnam
            voluptatum consectetur."
          err={!!errors.message?.text}
          errMessage={`${errors.message?.text?.message}`}
          aria-labelledby="#inputLabelMessageContente"
          aria-placeholder=""
          id="messageContent"
          className={style.input}
          {...register("message.text")}
        />
      </InputWrapper>
      <Button type="submit" className={style.button}>
        Enviar Solicitação
      </Button>
      <code className="bg-zinc-500 text-center py-8 rounded-2xl">
        {JSON.stringify(formData || "empty", null, 2)}
      </code>
    </form>
  );
}
