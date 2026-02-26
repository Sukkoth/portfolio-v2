const skills = [
    "TypeScript", "Next.js", "NestJS", "Express",
    "BullMQ", "Redis", "ScyllaDB", "CockroachDB",
    "React", "Microservices", "Docker", "System Design"
] as const

export function TechStack() {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Large decorative text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-[var(--border)] opacity-30 pointer-events-none whitespace-nowrap">
                TECH STACK
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-8 mb-16">
                    <span className="text-6xl font-bold text-[var(--primary)]">02</span>
                    <h2 className="text-5xl md:text-6xl">
                        Tech <span className="italic">Catalog</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={skill}
                            className="group relative p-6 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="absolute top-2 right-2 text-xs text-[var(--text-secondary)] opacity-50">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <p className="text-sm font-bold group-hover:text-[var(--primary)] transition-colors">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
