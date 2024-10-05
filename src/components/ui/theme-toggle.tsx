import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tooltip,
} from "@app/components/ui";
import { cn } from "@app/lib/utils";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

type classList = {
  button?: string;
  dropdown?: string;
  dropdownItem?: string;
};

export function ThemeToggle({ className, classList }: { className?: string; classList: classList }) {
  const { setTheme } = useTheme();

  const { button = "", dropdown = "", dropdownItem = "" } = classList;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          role="button"
          variant="outline"
          size="icon"
          className={cn("text-black transition-colors duration-300 ease-linear dark:text-white", button)}
        >
          <Sun aria-hidden className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-transform dark:scale-0" />
          <Moon
            aria-hidden
            className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent role="list" align="center" className={cn("text-black dark:text-white", dropdown)}>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          role="listitem"
          className={cn("font-semibold transition-colors duration-300 ease-linear", dropdownItem)}
        >
          Tema Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          role="listitem"
          className={cn("font-semibold transition-colors duration-300 ease-linear", dropdownItem)}
        >
          Tema Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          role="listitem"
          className={cn("font-semibold transition-colors duration-300 ease-linear", dropdownItem)}
        >
          Tema do Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
