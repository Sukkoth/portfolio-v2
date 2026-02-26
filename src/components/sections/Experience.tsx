import { Briefcase, GraduationCap } from "lucide-react"

const experience = [
    {
        company: "2F Capital",
        location: "Addis Ababa",
        role: "Fullstack Developer",
        period: "Aug 2022 - Present",
        type: "work",
        description: "Developing robust full-stack solutions with modern technologies."
    },
     {
        company: "Ablaze Labs",
        location: "Addis Ababa",
        role: "Senior Frontend Developer",
        period: "2022",
        type: "work",
        description: "Worked on various project as a senior frontend developer"
    },
    {
        company: "Commercial Bank of Ethiopia",
        location: "Addis Ababa",
        role: "System Development and Customization",
        period: "Dec 2022 - Aug 2024",
        type: "work",
        description: "Worked on system customization and internal banking software."
    },
    {
        company: "Tau Technology",
        location: "Addis Ababa",
        role: "Fullstack Developer",
        period: "Sept - Dec 2022",
        type: "work",
        description: "Fullstack development on key technology projects."
    },
    {
        school: "Adama Science and Technology University",
        degree: "Computer Science and Engineering",
        period: "2018 - 2022",
        type: "education",
        description: ""
    }
] as const

export function Experience() {
    return (
        <section id="experience" className="py-32 px-4 bg-[var(--surface)]">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-8 mb-16">
                    <span className="text-6xl font-bold text-[var(--primary)]">03</span>
                    <h2 className="text-5xl md:text-6xl">
                        My <span className="italic">Journey</span>
                    </h2>
                </div>

                <div className="space-y-0">
                    {experience.map((item, index) => (
                        <div 
                            key={index} 
                            className="group relative border-l-4 border-[var(--border)] hover:border-[var(--primary)] pl-12 pb-16 last:pb-0 transition-all"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[13px] top-0 w-6 h-6 bg-[var(--primary)] border-4 border-[var(--bg)] group-hover:scale-125 transition-transform" />
                            
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 border-2 border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                                            {item.type === 'work' ? 
                                                <Briefcase size={24} className="text-[var(--primary)]" /> : 
                                                <GraduationCap size={24} className="text-[var(--primary)]" />
                                            }
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-1">
                                                {item.type === 'work' ? item.company : item.school}
                                            </h3>
                                            <p className="text-lg text-[var(--text-secondary)] font-bold">
                                                {item.type === 'work' ? item.role : item.degree}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold tracking-wider uppercase text-[var(--text-secondary)] bg-[var(--highlight)] px-4 py-2 border border-[var(--border)]">
                                        {item.period}
                                    </span>
                                </div>

                                {item.description && (
                                    <p className="text-[var(--text-secondary)] leading-relaxed pl-16">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
