import { useTheme } from "@/context/ThemeContext";
import { Button } from "@ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <MoonIcon size={18} className="transition-all" />
      ) : (
        <SunIcon size={18} className="text-yellow-400 transition-all" />
      )}
    </Button>
  )
}
