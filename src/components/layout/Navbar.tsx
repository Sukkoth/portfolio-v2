import { ThemeToggle } from "./ThemeToggle"

const NAV_ITEMS = [
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
] as const

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold tracking-tight hover:text-[var(--primary)] transition-colors">
                    GT<span className="text-[var(--primary)]">.</span>
                </a>

                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
