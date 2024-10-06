import { MailIcon, MessageSquareMoreIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactElement } from "react";

import { Paragraph } from "@app/components/ui";
import { cn } from "@app/lib/utils";

type FooterSectionProps = {
  data: {
    author: {
      name: string;
      email?: string;
      phone?: string;
      wa?: {
        show: boolean;
        message: string;
      };
    };
    copy?: {
      text: string;
      license: string | ReactElement;
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
        "bg-black/30 px-10 py-8 backdrop-blur-md",
        "grid grid-cols-2 grid-rows-3 [grid-template-areas:'author_socialMedia'_'author_socialMedia'_'copy_copy';]",
        className,
      )}
    >
      <section id="footer__author" className="flex flex-col gap-2 [grid-area:author;]">
        <Link className="flex items-center gap-2" href={`mailto:${data.author.email}`}>
          <i>
            <MailIcon size={30} />
          </i>
          {data.author.email}
        </Link>
        {!data.author.wa!.show ? (
          <Link
            className="flex items-center gap-2"
            href={`${
              data.author.wa?.message
                ? `https://wa.me/${data.author.phone?.replace(/[^\d]+/gm, "")}/text=${encodeURI(data.author.wa.message)}`
                : `https://wa.me/${data.author.phone?.replace(/[^\d]+/gm, "")}/`
            }`}
          >
            <i>
              <MessageSquareMoreIcon size={30} />
            </i>
            {data.author?.phone}
          </Link>
        ) : (
          <Paragraph className="flex">
            <i>
              <MessageSquareMoreIcon size={30} />
            </i>
            {data.author?.phone}
          </Paragraph>
        )}
      </section>
      {data.socialMedias && (
        <section id="footer__socialMedia" className="flex gap-8 [grid-area:socialMedia;]">
          <ul>
            {data.socialMedias.map((items) => {
              const { icon: Icon, anchor, tag } = items;
              return (
                <Fragment key={anchor.concat(data.author.name)}>
                  <Link href={anchor}>
                    {Icon && Icon}
                    <Paragraph>{tag}</Paragraph>
                  </Link>
                </Fragment>
              );
            })}
          </ul>
        </section>
      )}
      <section id="footer__copy" className="flex items-center justify-center gap-2 [grid-area:copy;]">
        <span>{data.copy?.text}</span>
        {"-"}
        <Link href={"https://github.com/Frotas/portfolio/blob/4f60386e54f54381f568167e187c1d0b9dd71742/LICENSE"}>
          {data.copy?.license && data.copy?.license}
        </Link>
      </section>
    </footer>
  );
};
