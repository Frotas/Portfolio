import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export * from "@app/lib/utils/formatText";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
