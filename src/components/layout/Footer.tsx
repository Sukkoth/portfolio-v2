export function Footer() {
    return (
        <footer className="py-16 border-t-2 border-[var(--border)] bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-2xl font-bold mb-2">
                            Gadisa <span className="italic text-[var(--primary)]">Teklu</span>
                        </p>
                        <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                            Full-Stack Developer
                        </p>
                    </div>
                    
                    <div className="text-center md:text-right">
                        <p className="text-sm text-[var(--text-secondary)] mb-1">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
