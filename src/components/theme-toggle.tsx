"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themes = ["light", "dark"] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme as (typeof themes)[number]);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setTheme(nextTheme);

    const themeLabels = {
      light: "Light",
      dark: "Dark",
    };

    toast.success(`Theme changed to ${themeLabels[nextTheme]}`);
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={cycleTheme}
      className={cn(
        "transition-150ms rounded-full shadow-lg ease-out active:scale-98",
        className,
      )}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
