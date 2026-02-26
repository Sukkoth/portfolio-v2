import { ArrowRight, Github, Linkedin, Send } from "lucide-react"

const SOCIAL_LINKS = [
    { Icon: Github, href: "https://github.com/sukkoth", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/sukkoth/", label: "LinkedIn" },
    { Icon: Send, href: "https://t.me/sukkoth", label: "Telegram" }
] as const

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center px-4 relative overflow-hidden grain">
            {/* Dramatic diagonal accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[var(--primary)]/10 to-transparent -skew-x-12 transform translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 blur-3xl" />
            
            <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Main content */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 animate-fade-in-up stagger-1">
                                <div className="h-px w-12 bg-[var(--primary)]" />
                                <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)]">
                                    Full-Stack Developer
                                </p>
                            </div>
                            
                            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-in-up stagger-2">
                                Gadisa
                                <br />
                                <span className="italic text-[var(--primary)]">Teklu</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed animate-fade-in-up stagger-3">
                                Architecting scalable systems and crafting exceptional user experiences. 
                                Specialized in React, TypeScript, and high-performance backend infrastructure.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-4">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-[var(--primary)] text-white relative overflow-hidden transition-all hover:shadow-lg"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-[var(--primary-dark)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border-2 border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Sidebar with social links */}
                    <div className="lg:col-span-4 flex lg:flex-col gap-6 lg:gap-8 animate-fade-in-up stagger-5">
                        {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--primary)] transition-all hover:-translate-y-1"
                                aria-label={label}
                            >
                                <Icon size={24} className="text-[var(--primary)]" />
                                <span className="text-sm font-bold tracking-wider hidden lg:block">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-12 left-4 text-xs text-[var(--text-secondary)] tracking-[0.2em] uppercase rotate-90 origin-left animate-fade-in-up stagger-6">
                    Scroll to explore
                </div>
            </div>
        </section>
    )
}
