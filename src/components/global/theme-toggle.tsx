"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"; // Import next-themes

function ToggleTheme() {
  const { theme, setTheme } = useTheme(); // Access the current theme and setTheme function

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle between light and dark mode
  };

  return (
    <div
      className={`transition-colors rounded-lg duration-500 ease-in-out ${
        theme === "dark" ? "bg-zinc-950" : "bg-white"
      }`} // Add smooth transition for background color
    >
      <Toggle
        variant="outline"
        className="group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted"
        pressed={theme === "dark"} // Check if the current theme is dark
        onPressedChange={toggleTheme} // Toggle theme when the toggle is pressed
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <Moon
          size={16}
          strokeWidth={2}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <Sun
          size={16}
          strokeWidth={2}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}

export { ToggleTheme };
