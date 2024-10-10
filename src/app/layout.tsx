import { FileTextIcon, LayersIcon, SquareStackIcon, UserIcon } from "lucide-react";
import type { Metadata } from "next";
import { Fira_Code, Inter, Lato, Merriweather } from "next/font/google";

import "./globals.css";
import { FooterSection, LinkTree, Navigation } from "@app/components/home";
import { ThemeProvider } from "@app/providers/theme-provider";

const interFont = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});
const firaFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-monospace",
  preload: true,
  display: "swap",
});
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL || "gs-dev-oficial.vercel.app"}`),
  title: "GS.DEV - Desenvolvedor Full Stack e Freelancer",
  description:
    "Portfólio de Desenvolvedor Full Stack especializado em React, Next.js e TypeScript. Veja meus projetos e entre em contato.",
  keywords: "Desenvolvedor, Freelancer, React, Next.js, TypeScript, Portfólio, Full-Stack, e-Commerce, CyberSec",
  openGraph: {
    title: "GS.DEV - Desenvolvedor Full Stack e Freelancer",
    description: "Portfólio de Desenvolvedor Full Stack com foco em React e Next.js. Confira meus projetos!",
    url: `https://${process.env.VERCEL_URL || "gs-dev-oficial.vercel.app"}`,
    siteName: "Portfólio de GS.DEV",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem do Portfólio de GS.DEV",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GS.DEV - Desenvolvedor Full Stack e Freelancer",
    description: "Veja meu portfólio e entre em contato.",
    images: ["/images/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const linkTree: LinkTree[] = [
  {
    anchor: "#about",
    icon: <FileTextIcon size={20} aria-hidden />,
    text: "Sobre mim",
    tooltip: {
      show: true,
      text: "Sobre mim",
    },
  },
  {
    anchor: "#services",
    icon: <LayersIcon size={20} aria-hidden />,
    text: "Serviços",
    tooltip: {
      show: true,
      text: "Serviços",
    },
  },
  {
    anchor: "#skills",
    icon: <SquareStackIcon size={20} aria-hidden />,
    text: "Habilidades Técnicas",
    tooltip: {
      show: true,
      text: "Habilidades Técnicas",
    },
  },
  {
    anchor: "#projects",
    icon: <UserIcon size={20} aria-hidden />,
    text: "Projetos",
    tooltip: {
      show: true,
      text: "Projetos",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`relative grid grid-cols-3 [grid-template-areas:"header_header_header"_"main_main_main"_"footer_footer_footer";] md:grid-cols-[7rem_1fr] md:[grid-template-areas:"sidebar_main_main"_"sidebar_main_main"_"sidebar_main_main"_"footer_footer_footer";] ${interFont.variable || merriweatherFont.variable || firaFont.variable || latoFont.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation
            id="navigationSection"
            className="w-full [grid-area:header] md:h-fit md:[grid-area:sidebar]"
            linkTree={linkTree}
          />
          {children}
          <FooterSection
            id="footerSection"
            className="[grid-area:footer]"
            data={{
              author: {
                email: "**gs.dev.oficial@gmail.com**",
                phone: "**+55 (11) 98102-8442**",
                wa: {
                  show: false,
                  message: "Olá! Gostaria de contratar os seus serviços.",
                },
              },
              copy: {
                text: "**GS.DEV**",
                license: "**MIT License**",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
