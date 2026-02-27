import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "Bible Reader",
        description: "Easily follow your daily Bible reading with Bible Reader, an app designed to help you stay on track with your reading goals and grow in faith. This project lets you create bible reading plans from pre built plans or by letting you define your custom ones. You can then manage your plans by following up with what you have to read on the given dates. It also has built in bible books reading tracker which get marked when you follow up with your plans.",
        tags: ["Next.js", "Supabase", "TailwindCSS"],
        link: "https://bible-reader.com/",
        github: "https://github.com/Sukkoth/bible-reader",
        image: "/bible-reader.png",
        featured: true
    },
    {
        title: "Windows OS Portfolio",
        description: "A fully functional personal portfolio featuring a Windows 11-style desktop interface with a taskbar, start menu, terminal,gallery, documents and other features.",
        tags: ["React", "TailwindCSS"],
        link: "https://gadisa.onrender.com",
        github: "https://github.com/Sukkoth/windows-portfolio/tree/Lazy",
        image: "/windows.png",
        featured: false
    },
    {
        title: "SMS Gateway",
        description: "A scalable sms gateway handling millions of traffic each day by using microservices and distributed databases.",
        tags: ["Microservices", "TypeScript", "Express", "..."],
        link: "#",
        github: "#",
        image: undefined,
        featured: false
    },
] as const

export function Projects() {
    return (
        <section id="projects" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-8 mb-16">
                    <span className="text-6xl font-bold text-[var(--primary)]">04</span>
                    <h2 className="text-5xl md:text-6xl">
                        Featured <span className="italic">Work</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`group grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all overflow-hidden ${project.featured ? 'lg:min-h-[500px]' : ''}`}
                        >
                            {/* Image */}
                            {project.image && (
                                <div className={`relative overflow-hidden bg-[var(--surface)] ${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            )}

                            {/* Content */}
                            <div className={`p-8 lg:p-12 flex flex-col justify-between ${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'} ${!project.image ? 'lg:col-span-3' : ''}`}>
                                <div className="space-y-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                                                Project {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-bold group-hover:text-[var(--primary)] transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex gap-3">
                                            {project.github !== "#" && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="p-3 border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                                                    aria-label="View source code"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.link !== "#" && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="p-3 border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                                                    aria-label="View live project"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {project.tags.map(tag => (
                                        <span 
                                            key={tag} 
                                            className="px-4 py-2 text-xs tracking-wider uppercase bg-[var(--highlight)] border border-[var(--border)] font-bold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
