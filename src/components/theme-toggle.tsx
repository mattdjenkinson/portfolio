"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { motion } from "motion/react";

const themes = ["light", "dark"] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const cycleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentIndex = themes.indexOf(theme as (typeof themes)[number]);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    // Check if the browser supports View Transitions API
    if (!document.startViewTransition || !buttonRef.current) {
      setTheme(nextTheme);
      return;
    }

    // Get the click position
    const { clientX: x, clientY: y } = event;

    // Calculate the radius needed to cover the entire viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Start the view transition
    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    // Animate the transition with a circular reveal
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      // Animate the new view with circular reveal, no slide
      document.documentElement.animate(
        {
          clipPath: clipPath,
          transform: ["none", "none"], // Override slide animation
          opacity: [1, 1], // Stay fully visible
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );

      // Fade out the old view without sliding
      document.documentElement.animate(
        {
          opacity: [1, 0],
          transform: ["none", "none"], // Override slide animation
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-old(root)",
        },
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn("z-30", className)}
    >
      <Button
        data-umami-event="Theme Toggle Button"
        ref={buttonRef}
        variant="default"
        size="icon-lg"
        onClick={cycleTheme}
        className={cn(
          "transition-150ms rounded-full p-6 shadow ease-out active:scale-98",
        )}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
