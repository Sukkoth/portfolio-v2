import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle("light", storedTheme === "light")
        } else {
            // Default to dark theme
            setTheme("dark")
            document.documentElement.classList.remove("light")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("light", newTheme === "light")
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-3 border-2 border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
    )
}
