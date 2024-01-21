import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

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
    <html lang="pt-BR" className="dark" data-theme="dark">
      <body className={lato.className}>
        <Analytics
          mode={
            process.env.ENVIRONMENT === "Production"
              ? "production"
              : "development"
          }
        />
        {children}
      </body>
    </html>
  );
}
