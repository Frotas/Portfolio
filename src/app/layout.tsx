import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "./components/_ui/Navigation";
import { ThemeProvider } from "./context/Theme.context";
import logo from "../../public/Logo.svg";
import "./app.style.scss";
import { Footer } from "./components/_ui/Footer";

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
          data-menu-open={false}
        >
          <Analytics
            mode={
              process.env.ENVIRONMENT === "Production"
                ? "production"
                : "development"
            }
          />
          <Navigation src={logo} alt="Logo Icon" />
          {children}
          <Footer>
            <p>
              Created by GS.DEV
              <sup>™️</sup>
            </p>
          </Footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
