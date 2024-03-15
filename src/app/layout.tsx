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
        font-Roboto overflow-x-hidden bg-gradient-to-tl from-[hsl(210,22%,81%)] 
        via-[hsl(210,29%,73%)] to-[hsl(210,41%,63%)] dark:from-[hsl(216,65%,11%)]
        dark:via-[hsl(216,64%,23%)] dark:to-[hsl(216,65%,35%)] bg-fixed transition-all
        ease-out [&_*>.typeAnimation]:data-[menuOpen=true]:invisible
        [&_*>.typeAnimation]:data-[menuOpen=false]:visible 
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
