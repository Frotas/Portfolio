import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "./components/_ui/Navigation";
import { ThemeContext, ThemeProvider } from "./context/Theme.context";
import logo from "../../public/Logo.svg";
import "./app.style.scss";
import { Footer } from "./components/_ui/Footer";

export const metadata: Metadata = {
  title: "GS.DEV | Guilherme Sales Developer",
  description: ``,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-BR" data-theme={"light"}>
        <body
          className={`
        font-Roboto overflow-x-hidden bg-gradient-to-bl from-rockBlue-100 to-rockBlue-500
      dark:from-cyprus-600 dark:to-rockBlue-900 bg-fixed transition-all ease-out
        md:data-[menuOpen=true]:!overflow-y-scroll data-[menuOpen=true]:overflow-y-hidden
      `}
        >
          <Analytics
            mode={
              process.env.ENVIRONMENT === "Production"
                ? "production"
                : "development"
            }
          />
          <Navigation src={logo} alt="" />
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
