import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "./components/_ui/Navigation";
import { ThemeProvider } from "./context/Theme.context";
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from "../../public/Logo.svg";
import Link from "next/link";

import "./app.style.scss";
import { Footer } from "./components/_ui/Footer";
import { Paragraph } from "./components/_ui/Typography";
import { Contact } from "./components/home/Contact";
import { RxExternalLink } from "react-icons/rx";
export const metadata: Metadata = {
  title: {
    template: "%s | GS.DEV",
    default: "Portfólio | GS.DEV",
  },
  description: ``,
  creator: "GS.DEV",
  authors: [
    {
      name: "Guilherme Augusto Frotas Sales",
      url: "https://github.com/frotas/Portfolio",
    },
  ],
  keywords: [
    "Software Developer",
    "FrontEnd Developer",
    "BackEnd Developer",
    "FullStack Developer",
    "Web Developer",
    "CyberSecurity",
    "Freelancer",
    "ReactJS Developer",
    "NextJS Developer",
    "NodeJS Developer",
    "Java Developer",
    "JavaSpring Developer",
    "Python Developer",

    "Desenvolvedor de Software",
    "Desenvolvedor FrontEnd",
    "Desenvolvedor BackEnd",
    "Desenvolvedor FullStack",
    "Desenvolvedor Web",
    "CyberSecurity",
    "Freelancer",
    "Desenvolvedor ReactJS",
    "Desenvolvedor NextJS",
    "Desenvolvedor NodeJS",
    "Desenvolvedor Java",
    "Desenvolvedor JavaSpring",
    "Desenvolvedor Python",
  ],
  other: {
    "x-content-type-options": "nosniff",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="pt" data-theme={"light"} data-menu-open={false}>
        <body
          className={`
            font-Roboto bg-gradient-to-bl from-rockBlue-100 to-rockBlue-500
          dark:from-cyprus-600 dark:to-rockBlue-900 bg-fixed transition-all ease-out
          `}
        >
          <Navigation
            src={logo}
            alt="Logo Icon"
            className={`
              lg:!px-16 lg:!py-4
            `}
            options={{
              style: {
                nav: `
                  lg:!w-full lg:!h-fit lg:!gap-10 lg:!flex-row lg:!relative lg:!right-0
                  lg:!translate-x-0 lg:!bg-transparent
                `,
                navList: `
                  lg:!h-fit lg:!flex-row lg:!justify-evenly lg:m-auto 
                  lg:!divide-y-0 lg:!divide-x-2 lg:!border-2
                  lg:!border-darkSlateGray/35 lg:!rounded-full
                `,
                navItem: `
                  lg:w-full lg:!p-0 
                  lg:last:!rounded-r-full lg:first:!rounded-l-full
                  lg:hover:!last:rounded-r-full lg:hover:!first:rounded-l-full
                  lg:data-[selected=true]:!text-white lg:[selected=true]:last:!rounded-r-full
                  lg:data-[selected=true]:first:!rounded-l-full
                `,
                navLink: `
                  lg:!text-black lg:hover:!text-white
                  lg:dark:!text-white lg:dark:hover:!text-black
                `,
                btnMenu: `lg:sr-only`,
              },
            }}
          />
          {children}
          <Analytics
            mode={
              process.env.ENVIRONMENT === "Production"
                ? "production"
                : "development"
            }
          />
        <Footer className="">
          <Contact id="contact" className="px-4">
                <Link className="link w-fit text-center flex flex-row items-center" href="https://wa.me/5511981028442?text=Ol%C3%A1%21%0AGostaria%20de%20contratar%20o%20seus%20servi%C3%A7os." target="_blank">
                  <FaWhatsappSquare className="max-w-[32px] max-h-[32px] w-[26px] h-[26px]" />
                  <Paragraph className="pl-2 font-display text-white text-[10pt] md:text-[12pt]"> +55 (11) 98102-8442</Paragraph>
                </Link>
                <Link className="link w-fit text-center flex flex-row items-center" href="mailto:gs.dev.oficial@gmail.com" target="_blank">
                  <MdOutlineAlternateEmail className="max-w-[32px] max-h-[32px] w-[26px] h-[26px]" />
                  <Paragraph className="pl-2 font-display text-white text-[10pt] md:text-[12pt]"> gs.dev.oficial@gmail.com</Paragraph>
                </Link>
                <Link className="link w-fit text-center flex flex-row items-center" href="https://linkedin.com/in/guilherme-af-sales/" target="_blank">
                  <FaLinkedin className="max-w-[32px] max-h-[32px] w-[26px] h-[26px]" />
                  <Paragraph className="pl-2 font-display text-white text-[10pt] md:text-[12pt]"> /guilherme-af-sales</Paragraph>
                </Link>
                <Link className="link w-fit text-center flex flex-row items-center" href="https://github.com/frotas/" target="_blank">
                  <FaGithubSquare className="max-w-[32px] max-h-[32px] w-[26px] h-[26px]" />
                  <Paragraph className="pl-2 font-display text-white text-[10pt] md:text-[12pt]"> /frotas</Paragraph>
                </Link>
            </Contact>
            <Paragraph className={`w-full text-center font-display text-white dark:text-white tab:text-[16pt] tracking-[.12rem]`}>
              Created by GS.DEV<sup>™️</sup>
            </Paragraph>
          </Footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
