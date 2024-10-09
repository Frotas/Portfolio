import { MailIcon, MessageSquareMoreIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactElement } from "react";

import { Paragraph } from "@app/components/ui";
import { cn, formatText } from "@app/lib/utils";

type FooterSectionProps = {
  data: {
    author: {
      email?: string;
      phone?: string;
      wa?: {
        show: boolean;
        message: string;
      };
    };
    copy?: {
      text: string;
      license: string;
    };
    socialMedias?: [
      {
        icon: ReactElement;
        anchor: string;
        tag: string;
      },
    ];
  };
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const FooterSection = ({ data, className }: FooterSectionProps) => {
  return (
    <footer
      className={cn(
        "bg-mirage-100 p-8 dark:bg-black/20",
        "grid grid-cols-2 grid-rows-3 [grid-template-areas:'author_socialMedia'_'author_socialMedia'_'copy_copy';]",
        className,
      )}
    >
      <section className="flex flex-col gap-2 [grid-area:author;]">
        <Link
          aria-label="Email Link"
          className="flex items-center gap-2 hover:underline"
          href={`mailto:${data.author.email?.replaceAll("**", "")}`}
          target="_blank"
        >
          <i>
            <MailIcon size={30} />
          </i>
          <span className="text-cobalt-300">{formatText(`${data.author?.email}`)}</span>
        </Link>
        <Link
          className="flex w-max items-center gap-2 hover:underline"
          href={`${
            data.author.wa?.message
              ? `https://wa.me/${data.author.phone?.replace(/[^\d]+/gm, "")}/text=${encodeURI(data.author.wa.message)}`
              : `https://wa.me/${data.author.phone?.replace(/[^\d]+/gm, "")}/`
          }`}
          aria-label="Whatsapp Number Link"
          target="_blank"
        >
          {!data.author.wa!.show ? (
            <>
              <i>
                <MessageSquareMoreIcon size={30} />
              </i>
              <span className=" text-cobalt-300">{formatText(`${data.author?.phone}`)}</span>
            </>
          ) : (
            <>
              <i>
                <MessageSquareMoreIcon size={30} />
              </i>
              <span className=" text-cobalt-300">{formatText(`${data.author?.phone}`)}</span>
            </>
          )}
        </Link>
      </section>
      {data.socialMedias && (
        <section className="flex gap-8 [grid-area:socialMedia;]">
          <ul>
            {data.socialMedias.map((items) => {
              const { icon: Icon, anchor, tag } = items;
              return (
                <Fragment key={tag.replace(" ", "-")}>
                  <Link href={anchor} aria-label={`Social Link - ${tag}`} target="_blank">
                    <i>{Icon && Icon}</i>
                    <Paragraph className="text-cobalt-300">{tag}</Paragraph>
                  </Link>
                </Fragment>
              );
            })}
          </ul>
        </section>
      )}
      <section className="flex items-center justify-center gap-2 [grid-area:copy;]">
        <span>
          Created by <Link href={"https://github.com/frotas"}>{formatText(`${data.copy?.text}`)}</Link>
        </span>
        {"-"}
        <Link
          className="hover:underline"
          href={"https://github.com/Frotas/portfolio/blob/4f60386e54f54381f568167e187c1d0b9dd71742/LICENSE"}
          aria-label={`${data.copy?.license}`}
          target="_blank"
        >
          {formatText(`${data.copy?.license && data.copy?.license}`)}
        </Link>
      </section>
    </footer>
  );
};
