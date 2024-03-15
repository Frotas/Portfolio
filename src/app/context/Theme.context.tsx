"use client";
import { ReactNode, createContext, useState } from "react";
const Theme = {
  dark: "dark",
  light: "light",
};

type Theme = keyof typeof Theme;

type ThemeContextType = {
  theme?: Theme;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    const elAttr = window.document.querySelector("html") as HTMLElement;
    if (theme === "light") {
      elAttr.setAttribute("data-theme", "dark");
    } else {
      elAttr.setAttribute("data-theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
}
