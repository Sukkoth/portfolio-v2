const STATS = [
    { label: "Years Experience", value: "4+" },
    { label: "Specialization", value: "Full-Stack" },
    { label: "Focus", value: "Reliability" },
    { label: "Architecture", value: "High-Scale" }
] as const

export function About() {
    return (
        <section id="about" className="py-32 px-4 bg-[var(--surface)] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[var(--border)]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[var(--border)]" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Title and description */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-6xl font-bold text-[var(--primary)]">01</span>
                                <div className="h-px flex-1 bg-[var(--border)]" />
                            </div>
                            <h2 className="text-5xl md:text-6xl leading-tight">
                                Building the
                                <br />
                                <span className="italic text-[var(--primary)]">Future</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-relaxed text-[var(--text-secondary)]">
                            <p>
                                I'm a full-stack developer with over 4 years of experience building reliable, 
                                high-performance web applications and backend systems that scale.
                            </p>
                            <p>
                                My expertise spans <span className="text-[var(--text)] font-bold border-b-2 border-[var(--primary)]">TypeScript, Express, Next.js, and NestJS</span>. 
                                I specialize in designing microservices architectures and managing complex queues with BullMQ and Redis.
                            </p>
                            <p>
                                I've architected high-volume platforms working with robust databases like 
                                <span className="text-[var(--text)] font-bold"> ScyllaDB</span> and 
                                <span className="text-[var(--text)] font-bold"> CockroachDB</span>. 
                                My focus is on writing clean, maintainable code that stands the test of time.
                            </p>
                        </div>
                    </div>

                    {/* Right: Stats grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {STATS.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="p-8 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 text-8xl font-bold text-[var(--border)] opacity-20 leading-none">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="relative z-10 space-y-3">
                                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                                        {stat.label}
                                    </p>
                                    <p className="text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
