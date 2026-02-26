import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "Bible Reader",
        description: "Easily follow your daily Bible reading with Bible Reader, an app designed to help you stay on track with your reading goals and grow in faith.",
        tags: ["Next.js", "Supabase", "TailwindCSS"],
        link: "https://bible-reader.com/",
        github: "https://github.com/Sukkoth/bible-reader",
        image: "https://elsrnlhaabjjiaujjjva.supabase.co/storage/v1/object/public/project-assets/projects/e07397da-3d22-4977-ada1-f38eaab1d6af/1768285984004-wf4u2.png",
        featured: true
    },
    {
        title: "Windows OS Portfolio",
        description: "A fully functional personal portfolio featuring a Windows 11-style desktop interface with a taskbar, start menu, and draggable windows.",
        tags: ["React", "TailwindCSS"],
        link: "https://gadisa.onrender.com",
        github: "https://github.com/Sukkoth/windows-portfolio/tree/Lazy",
        image: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/d4fccb21b88a152ee35e848c3a8f5362?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCE9JglMUzWXMKJOFOWbIYdm%2FO%2BoDr7GknbN%2FwBX47b9gIgFSgphTT%2F6enn3l6wFNfoZLQGEhc6vwOxCGZmwIJOTbIqkgUIIhAAGgw3Mzk5MzkxNzM4MTkiDGJgGMnQiPfUSzP1PSrvBHlxJ9gwJx9SES5YYmdDutT385Ujv9TrHBXPRSVTSR6uUAKS11ppcTQWaO2K5d7wKzpG%2BF2jaeNVv5Qyi%2BJMNarCsr%2BmPfimhNKcT7GwvtblipoFDgQt11BGKsr5AOAalpXb6G%2FggmlFDqGf6vxfe8MiYs0n4%2FXwRt9G9Drc0DIz2IrXXer%2F2l5hNNgxvBRMnxWYsXnbALNqVXwi8z5lXSce972OPSQJnDlqviOl19ohTZZdTg6iwER%2B98XcdZIAW%2FANmyu7cR1LcuDItBoApClv9he91X9i1FQcZ%2B1YgZHMmkSMAhjYJdDOHfEPo7eRY8xAlzow%2BJG0fwz9O4X1rlRpy%2Bre3a5e5JDJrRVQi%2BOWi%2FIvvqEdCnWiYqVIMB%2BWH2OLDpHXsfkGvAm3SrwSv5JuuWwWs1zoyLkjAgRZ0EBX%2BxUVF4ohPEr23NSLoDA3VLxRvy154Bg48nqbACNGD63fbsm1YKYUAqvNrWr6xacQudq%2Fcawv9UF83Mo90dmnxk3JGxtLPK1FSgDyQvU8RQ7L79P2ddS%2BJ%2FiEyKEMYKQVvNqufPxrwxpgKbgo7YdVWF1sJy0rKrbvnpYS9TYBIQeuJADW%2BuEl26rxdZ4lQXHhF7Qx%2BwbnP%2BNqHoLIFl%2FfHwkRRPcMEviXtI6mWKynsbbO7jaj4500%2FC%2BjGgxJegND16RevkcSM1oaD%2FTuBuJYYtf5OSsCyckPBBTzRjVhlJcVFhp2E%2BeyuKTGXvPgEnK5hQTmyc30LO%2B%2BiAxknuOeQQTRnzruShbrmkhQgqRZnKRM7%2BehlOVGc7%2FszaaXNR61fsIk80%2FwY2SNdvQT2PS%2BMMmQgM0GOpkBrUBATFcSwvD9SQfVSIYbOIAXDLFQ0yHmJ2KFullD8f%2B7xveqTqpwwkxjA0g91x3X7sNgz0ZdZ3W0VysXprqTvq5eFlFuoRuW%2BAZHZqCufl0CABvt3Wjf9TYlbPoyUg%2BVIDPy9jTzkUDxbASluxkpm1WyIx7H5v0WxxvSisRHEVHIuNq4cnDloHcw4DqbO4iP7%2B%2Fi%2FrtlPDlP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260226T090725Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5SFBMX65I%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d8b1c2f6ea2e3463e597c3175acbde39d050140406af50871662d3da9b85a1b4",
        featured: false
    },
    {
        title: "SMS Gateway",
        description: "A scalable sms gateway handling millions of traffic.",
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
                    <span className="text-6xl font-bold text-[var(--primary)]">03</span>
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
