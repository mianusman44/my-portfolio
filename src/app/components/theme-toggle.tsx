"use client";

import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-3 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full shadow hover:scale-105 transition"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 dark:hidden" />
      <Moon className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
