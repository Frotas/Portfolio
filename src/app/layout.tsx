import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "./components/_ui/Navigation";
import { ThemeProvider } from "./context/Theme.context";
import logo from "../../public/Logo.svg";
import "./app.style.scss";
import { Footer } from "./components/_ui/Footer";
import { Paragraph } from "./components/_ui/Typography";

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
}: {
  children: React.ReactNode;
}) {
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
                  lg:!w-full lg:!h-fit lg:gap-8 lg:!flex-row lg:!relative lg:!right-0
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
          <Footer>
            <Paragraph
              className={`
              font-display text-white dark:text-white
              tab:text-[16pt]
            `}
            >
              Created by GS.DEV
              <sup>™️</sup>
            </Paragraph>
          </Footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
