import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@app/components/ui";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          role="button"
          variant="outline"
          size="icon"
          className="text-black transition-colors duration-300 ease-linear dark:text-white"
        >
          <Sun aria-hidden className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-transform dark:scale-0" />
          <Moon
            aria-hidden
            className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent role="list" align="center" className="text-black dark:text-white">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          role="listitem"
          className="font-semibold transition-colors duration-300 ease-linear"
        >
          Tema Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          role="listitem"
          className="font-semibold transition-colors duration-300 ease-linear"
        >
          Tema Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          role="listitem"
          className="font-semibold transition-colors duration-300 ease-linear"
        >
          Tema do Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
